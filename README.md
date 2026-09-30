# [Nombre del Proyecto]

> **Descripción breve del proyecto** — reemplaza esta línea con una descripción clara de qué hace la aplicación.

## 📋 Acerca de

[Describe el propósito de la aplicación, sus características principales y el público objetivo. 2-3 párrafos máximo.]

## ✨ Características del Proyecto

- [x] **Data Tables Server-side** — tablas genéricas con paginación, búsqueda y ordenamiento, caching automático
- [x] **Type-safe Routes** — rutas generadas automáticamente con Wayfinder, sin strings mágicos
- [x] **Autenticación** — Laravel Fortify + Google OAuth integrado
- [x] **Estado Reactivo** — Zustand para UI state + TanStack Query para caché
- [x] **Componentes UI** — shadcn/ui + Radix UI, Tailwind CSS 4 con configuración strict
- [x] **TypeScript Strict** — tipado strict en todo el stack, sin `any`
- [x] **Testing** — PHPUnit en backend, estructura lista para testing
- [ ] Nueva caracteristica
- [ ] Nueva caracteristica
- [ ] Nueva caracteristica
- [ ] Nueva caracteristica
- [ ] Nueva caracteristica

## 🛠️ Stack

- **Backend**: Laravel 13 (PHP 8.3+)
- **Frontend**: React 19 + TypeScript, Inertia.js 3, Tailwind CSS 4
- **Autenticación**: Laravel Fortify + Socialite (Google OAuth)
- **UI**: Radix UI + componentes custom basados en shadcn/ui
- **Estado**: Zustand (tablas), hooks de React (estado local)
- **Testing**: PHPUnit (backend)

<!-- ======================================================== -->
<!-- INICIO: SECCIÓN DE INICIALIZACIÓN                        -->
<!-- Elimina esta sección después de inicializar el proyecto  -->
<!-- ======================================================== -->

## 🚀 Inicialización (Solo para plantilla)

Si el repositorio fue creado desde esta plantilla, sigue este checklist antes de empezar a desarrollar:

### Checklist pre-desarrollo

- [ ] **Identidad del proyecto**
  - [ ] Reemplazar `[Nombre del Proyecto]` y la descripción al inicio del README
  - [ ] Actualizar `APP_NAME` en `.env`
  - [ ] Cambiar el nombre en `composer.json` (`name`) y `package.json` (`name`)
  - [ ] Actualizar `CHANGELOG.md` (eliminar histórico de la plantilla)

- [ ] **Tema visual**
  - [ ] Definir colores en `resources/css/app.css` (bloque `@theme`) — ver `docs/theme.md`
  - [ ] Definir tipografía en `resources/css/app.css` y `resources/views/app.blade.php`
  - [ ] Reemplazar `public/favicon.ico`, `public/favicon.svg`, `public/apple-touch-icon.png`

- [ ] **Base de datos**
  - [ ] Configurar `DB_CONNECTION` y credenciales en `.env`
  - [ ] Editar `database/seeders/UserSeeder.php` con el super admin real (cambiar email, nombre y contraseña por defecto)
  - [ ] Revisar `database/seeders/PermissionSeeder.php` y `RoleSeeder.php` según las necesidades del proyecto
  - [ ] Ejecutar `php artisan migrate:fresh --seed`

- [ ] **Autenticación SSO (opcional)**
  - [ ] Crear credenciales OAuth en Google Cloud Console
  - [ ] Setear `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` y `GOOGLE_REDIRECT_URI` en `.env`
  - [ ] Si no se usará SSO, eliminar el botón en `resources/js/pages/auth/login.tsx` y la ruta en `routes/auth.php`

- [ ] **Mail**
  - [ ] Configurar `MAIL_*` en `.env` (en local queda `MAIL_MAILER=log` por defecto)
  - [ ] Cambiar `MAIL_FROM_ADDRESS` y `MAIL_FROM_NAME`

- [ ] **Errores en producción (opcional)**
  - [ ] Setear `ERRORS_NOTIFY_EMAIL` en `.env` para recibir notificaciones de errores frontend nuevos/frecuentes

- [ ] **Repositorio**
  - [ ] Reemplazar `git remote` con el del nuevo proyecto
  - [ ] Empezar las versiones del proyecto: `version` en `0.1.0` en `package.json`, `CHANGELOG.md` vacío y sin los tags del starter (`git tag -l | xargs git tag -d`)
  - [ ] Crear primer commit limpio: `git add . && git commit -m "chore: initial commit"`
  - [ ] `git push -u origin main`: cada push a `main` crea su versión y se despliega ([docs/deployment.md](docs/deployment.md))

### Validación

Antes del primer commit funcional, verifica que todo arranca:

```bash
composer setup       # instala dependencias y prepara la BD
composer run dev     # arranca server + queue + vite
composer run ci:check  # lint + format + types + tests
```

<!-- ======================================================== -->
<!-- FIN: SECCIÓN DE INICIALIZACIÓN                           -->
<!-- ======================================================== -->

## 📦 Instalación

### Requisitos

- PHP 8.3+
- Composer
- Node.js + Bun
- [Otros requisitos específicos]

### Pasos

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-proyecto>
   ```

2. Instala las dependencias:

   ```bash
   composer setup
   ```

3. Configura el archivo `.env`:

   ```bash
   cp .env.example .env
   ```

   - Conexión a la base de datos
   - `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET`
   - [Otras variables de entorno necesarias]

4. Ejecuta las migraciones:

   ```bash
   php artisan migrate
   ```

## 🚀 Desarrollo

### Iniciar el servidor

```bash
composer run dev
```

La aplicación estará disponible en `http://localhost`

### Calidad de Código

```bash
# Backend
composer run lint
composer run test

# Frontend
bun run lint
bun run types
bun run format
```

### Testing

```bash
php artisan test
```

## 📝 Releases

Cada push a `main` es una versión y se despliega solo: GitHub Actions lee los commits del push, sube la versión con changelogen si hay `feat`, `fix` o `perf`, y el servidor la aplica en el siguiente minuto. No hay nada que correr a mano; después de cada versión, `git pull` trae el commit del bot. Ver [docs/deployment.md](docs/deployment.md).

## 📚 Documentación

- [Documentación del Backend](docs/backend.md) *(opcional)*
- [Documentación del Frontend](docs/frontend.md) *(opcional)*

## 🤝 Contribuciones

[Describe cómo pueden contribuir otros desarrolladores, o indica que es un proyecto personal.]

## 📄 Licencia

[MIT, Apache 2.0, u otra licencia elegida]

## 🔗 Enlaces Útiles

- [Repositorio](https://github.com/usuario/proyecto)
- [Issues](https://github.com/usuario/proyecto/issues)
- [Demo en vivo](https://ejemplo.com) *(opcional)*

---

**Última actualización**: 2026-04-09
