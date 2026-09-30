# Despliegue en Hostinger (hosting compartido)

Guía para publicar un proyecto hecho con este starter en un plan compartido de **Hostinger** (LiteSpeed, hPanel, SSH, MySQL; sin Node, sin colas, sin websockets). Cada push a `main` sale a producción solo, en un par de minutos, con su número de versión. Es el esquema que usan `wablar` y `ritmo`.

En los ejemplos, `<app>` es el nombre corto del proyecto (p. ej. `ritmo`), `<dominio>` el dominio o subdominio donde vive, `<owner>/<repo>` el repo en GitHub, `<usuario>` el usuario SSH de Hostinger (p. ej. `u104257531`) y `<puerto>` su puerto SSH (suele ser `65002`).

## Cómo funciona

Hostinger bloquea las IPs de los runners de GitHub Actions (SSH y HTTPS), así que **GitHub no puede entrar al servidor**. El servidor es el que va a GitHub:

```text
push a main
  └─ deploy (GitHub Actions)
       ├─ ¿hay feat / fix / perf desde la última versión? → changelogen: sube la versión, CHANGELOG.md y tag
       ├─ compila los assets y publica código + public/build + version.json en la rama `production`
       └─ sube el commit de versión y el tag a `main` y crea el release en GitHub

scheduler del servidor (schedule:run cada minuto) → deploy:pull → scripts/deploy-pull.sh
  └─ ¿cambió `production`? → reset --hard + composer install + migrate + ProductionSeeder + optimize
```

- **Se trabaja solo en `main`, y `main` es producción.** Cada push es una versión: todos los commits de ese push quedan juntos en el mismo `chore(release): vX.Y.Z`. Sin `feat`, `fix` ni `perf` no hay versión nueva, pero igual se despliega.
- `production` es la copia compilada de `main` (en Hostinger no hay Bun). La reescribe Actions en cada despliegue: no se toca a mano.
- Después de cada versión, `main` tiene un commit del bot. **Haz `git pull` antes del siguiente commit**; si no, aparece un `Merge branch 'main'` en el historial.
- Las versiones se crean solo desde Actions. No hay `bun run release`: un `chore(release)` subido a mano hace que el workflow se salte y `production` no se reconstruya.

Archivos:

- [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml): con cada push a `main`, o a mano (**Actions → deploy → Run workflow**).
- [`deploy:pull`](../app/Console/Commands/DeployPull.php), en [`routes/console.php`](../routes/console.php): cada minuto lanza el script en segundo plano ([`DeployRunner`](../app/Support/DeployRunner.php)).
- [`scripts/deploy-pull.sh`](../scripts/deploy-pull.sh): no hace nada si `production` no se movió, y no se solapa consigo mismo. Deja su registro en `storage/logs/deploy.log`.
- [`ProductionSeeder`](../database/seeders/ProductionSeeder.php): permisos, roles y la cuenta del super admin (`AUTH_SUPER_ADMIN_EMAIL`). Corre en cada despliegue, así que todo lo que llame debe poder repetirse. **Nada de datos de prueba.**
- `version.json`: lo escribe el workflow en `production` (`{"version":"…","date":"…"}`) para mostrar la versión en la app. En local no existe; lee la de `package.json`.

## Montaje inicial (una sola vez)

Los valores `<usuario>` y `<puerto>` salen de hPanel → **Avanzado → Acceso SSH**.

### 1. Dominio, PHP y SSL

1. hPanel → **Dominios**: crea el dominio o subdominio. Hostinger le da su propia carpeta, `~/domains/<dominio>/`, con la web en `public_html/`.
2. hPanel → **Avanzado → Configuración de PHP**: **PHP 8.4** para ese dominio. Es independiente del PHP de la terminal: si la web da 500 sin nada en el log de Laravel, casi siempre es esto.
3. hPanel → **Seguridad → SSL**: confirma que tiene certificado.

### 2. Base de datos

hPanel → **Bases de datos → MySQL**: crea base, usuario y contraseña. Anótalos.

### 3. SSH con PHP 8.4 y Composer

Autoriza tu clave pública en hPanel → **Acceso SSH → Claves SSH** y entra con `ssh -p <puerto> <usuario>@<host>`.

El script de despliegue usa `/opt/alt/php84/usr/bin/php` y `~/composer.phar`. Instala Composer ahí (una vez por cuenta; si otra app ya lo hizo, sáltalo):

```bash
[ -f ~/composer.phar ] || curl -sS https://getcomposer.org/installer | /opt/alt/php84/usr/bin/php -- --install-dir="$HOME"
/opt/alt/php84/usr/bin/php ~/composer.phar -V
```

El PHP de la terminal es independiente del de la web. Si `php -v` no dice 8.4, apunta `php` y `composer` a la 8.4 (el SSH lee `~/.profile`, no `~/.bashrc`):

```bash
echo 'alias php=/opt/alt/php84/usr/bin/php' >> ~/.bashrc
echo 'alias composer="/opt/alt/php84/usr/bin/php ~/composer.phar"' >> ~/.bashrc
grep -q bashrc ~/.profile || echo '[ -f ~/.bashrc ] && . ~/.bashrc' >> ~/.profile
source ~/.bashrc
php -v   # 8.4.x
```

### 4. Clave de despliegue para leer el repo

Si el repo es privado, el servidor necesita su propia clave, **solo lectura**. GitHub no acepta la misma clave en dos repos, así que cada app de la cuenta lleva la suya, con un alias de host:

```bash
ssh-keygen -t ed25519 -C "hostinger-<app>" -f ~/.ssh/github_<app> -N ""
cat ~/.ssh/github_<app>.pub
```

Pégala en GitHub → repo → **Settings → Deploy keys → Add deploy key** (sin permiso de escritura). Luego:

```bash
cat >> ~/.ssh/config <<'EOF'
Host github-<app>
  HostName github.com
  IdentityFile ~/.ssh/github_<app>
  IdentitiesOnly yes
EOF
chmod 600 ~/.ssh/config
ssh -T git@github-<app>   # "Hi <owner>/<repo>! You've successfully authenticated…"
```

### 5. Clonar y publicar `public/`

La app vive en `app/`, junto a `public_html` y fuera de la web. `public_html` pasa a ser un enlace a `app/public`, así que solo `public/` queda expuesto.

La rama `production` existe desde el primer despliegue de Actions: haz antes un push a `main` o lánzalo a mano (**Actions → deploy → Run workflow**).

```bash
cd ~/domains/<dominio>
git clone -b production git@github-<app>:<owner>/<repo>.git app
mv public_html public_html.old       # lo que hubiera antes; bórralo cuando la app funcione
ln -s ~/domains/<dominio>/app/public public_html
ls -la                               # public_html -> /home/<usuario>/domains/<dominio>/app/public
```

### 6. `.env`

```bash
cd ~/domains/<dominio>/app
cp .env.example .env
nano .env   # Ctrl+X → Y → Enter para guardar
```

Cambia estos valores sobre los de `.env.example`:

```bash
APP_ENV=production
APP_DEBUG=false
APP_URL=https://<dominio>

AUTH_SUPER_ADMIN_EMAIL=          # tu correo: la cuenta del super admin

LOG_STACK=daily
LOG_LEVEL=warning

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=          # paso 2
DB_USERNAME=          # paso 2
DB_PASSWORD=          # paso 2

SESSION_SECURE_COOKIE=true

# Sin colas en hosting compartido: todo se envía al momento.
QUEUE_CONNECTION=sync

# Verificación de correo y recuperar contraseña. Un buzón de Hostinger basta.
MAIL_MAILER=smtp
MAIL_SCHEME=smtps
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_USERNAME=no-reply@<dominio>
MAIL_PASSWORD=
MAIL_FROM_ADDRESS=no-reply@<dominio>

# Google Cloud → Credentials. El mismo cliente de local sirve; registra allí
# la URI de redirección: https://<dominio>/auth/google/callback
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Luego `chmod 600 .env`.

### 7. Instalar y preparar la base

```bash
composer install --no-dev --optimize-autoloader --no-interaction
php artisan key:generate
php artisan migrate --force
php artisan db:seed --class=Database\\Seeders\\ProductionSeeder --force
php artisan storage:link
chmod -R 775 storage bootstrap/cache
php artisan optimize
```

> **No corras `php artisan db:seed` a secas:** arrastra `UserSeeder`, que crea cuentas de desarrollo con una contraseña fija. `ProductionSeeder` crea al super admin con una contraseña aleatoria. La primera vez se entra con Google, y la app ofrece crear una contraseña; también se puede pedir una nueva por correo.

Abre `https://<dominio>` y entra.

### 8. Cron del scheduler

hPanel → **Avanzado → Cron Jobs** → **Personalizado** (no **PHP**, que usa otra versión). Comando:

```bash
/opt/alt/php84/usr/bin/php /home/<usuario>/domains/<dominio>/app/artisan schedule:run >> /dev/null 2>&1
```

En **Opciones Comunes** no hay "cada minuto": déjalo sin elegir y pon los cinco selectores de abajo en la opción que termina en **(\*)**. La del día de la semana dice "Todos los días laborables (\*)", pero el `*` incluye sábados y domingos. Al guardar, la lista muestra `* * * * *`. Usa rutas absolutas: el cron no expande `~`.

Es el único cron de la app: `deploy:pull` va dentro del scheduler, y lo que la app programe en el futuro también. Verifica que el `exec` de PHP no esté deshabilitado (`php -r 'var_dump(function_exists("exec"));'`): `DeployRunner` lo usa para lanzar el script.

En menos de un minuto, `storage/logs/deploy.log` debe decir `deploying <sha> -> <sha>` … `done` si `production` avanzó desde el clon.

## Día a día

1. Commits en `main` y push. `deploy` publica `production` y, en el siguiente minuto, el scheduler lo aplica.
2. Si hubo `feat`, `fix` o `perf` desde la última versión, `main` recibe `chore(release): vX.Y.Z` con el `CHANGELOG.md` y el tag. En el siguiente push, VS Code trae esa versión y la combina con tus commits nuevos (pull con merge, nunca rebase): en el graph, cada versión queda como su propia rama de color.
3. Revisa el resultado:

   ```bash
   tail ~/domains/<dominio>/app/storage/logs/deploy.log   # "deploying <sha> -> <sha>" … "done"
   ```

**Forzar sin esperar:** `bash ~/domains/<dominio>/app/scripts/deploy-pull.sh` desde el servidor.

**Volver atrás:** revierte el commit en `main` y deja que se despliegue. Un `git reset` a mano en el servidor dura un minuto: el scheduler vuelve a `production`.

**Migraciones:** una vez en producción, las que ya corrieron no se editan; cada cambio de tabla va en una migración nueva. En local se prueban con SQLite, pero producción es MySQL:

- Los nombres de índices y claves foráneas no pueden pasar de **64 caracteres**; SQLite no lo revisa. Los que Laravel genera son `{tabla}_{columna}_foreign`: en tablas pivote largas, nómbralos a mano (`->constrained(indexName: '…')`).
- MySQL no deshace el DDL de una migración que falla a medias. Tampoco sirve `migrate:fresh`: la app bloquea los comandos destructivos en producción. No cambies `APP_ENV` para saltarte el bloqueo. Borra con `php artisan tinker` las tablas que dejó a medias (`Schema::dropIfExists('…')`), corrige la migración y vuelve a correr `migrate --force`.

**Seeders:** cada despliegue corre `ProductionSeeder`. Lo que se le añada debe poder correr dos veces sin duplicar ni fallar (`updateOrCreate`, `firstOrCreate`), y nunca datos de prueba.

## Si algo falla

- **`deploy` en rojo al publicar:** el workflow necesita `permissions: contents: write`. Revisa también que el repo deje escribir al `GITHUB_TOKEN` (**Settings → Actions → General → Workflow permissions**).
- **Falla "Push version bump":** `main` avanzó mientras corría el workflow. Vuelve a lanzarlo.
- **`production` se movió pero el sitio no:** mira `storage/logs/deploy.log`.
  - No existe: el scheduler no corre (revisa el cron) o `exec` está deshabilitado.
  - `Permission denied (publickey)`: la clave de despliegue (`ssh -T git@github-<app>`).
  - `No such file`: `/opt/alt/php84/usr/bin/php` o `~/composer.phar`.
- **Error 500 tras desplegar:** `tail -50 ~/domains/<dominio>/app/storage/logs/laravel-*.log`. Si falló una migración, el log de despliegue lo dice; ver **Migraciones** arriba. Si el log de Laravel no dice nada, revisa la versión de PHP de la web (paso 1).
- **Enlaces en `http://` o sesión que no se guarda:** confirma `APP_URL` con `https` y `SESSION_SECURE_COOKIE=true`. Luego corre `php artisan optimize`.
- **Cambié el `.env`:** `php artisan optimize` para que la configuración en caché lo lea.
- **Google dice "Ir a <dominio>" en vez del nombre de la app:** Google solo muestra el nombre tras verificar la marca (Google Auth Platform → **Branding**: dominio autorizado, página principal, privacidad y términos). En `localhost` siempre sale el nombre. El login funciona igual.
