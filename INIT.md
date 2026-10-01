# Inicialización del Proyecto

> Instrucciones para el agente de IA. Este archivo existe porque el proyecto fue creado
> desde una plantilla de GitHub. Ejecuta cada paso en orden.

## Pasos

1. **Reiniciar el versionado**: la app nueva empieza su propia historia, sin la del kit.
   - En `package.json`, cambiar `"version"` a `"0.1.0"`.
   - Dejar `CHANGELOG.md` solo con la línea `# Changelog`.
   - Borrar los tags del kit, si el repo se clonó en vez de crearse desde la plantilla:
     `git tag -l | xargs -r git tag -d`. Sin esto, el primer push calcularía la versión
     a partir del último tag del kit.
   - Ejecutar `git config pull.ff false`. Así cada pull que baje el `chore(release)` del bot
     crea un merge, y el gráfico de Git separa las versiones por colores. Vive en
     `.git/config`, por eso no viene con la plantilla.

2. **Limpiar `README.md`**: eliminar el bloque completo entre los comentarios HTML
   `<!-- INICIO: SECCIÓN DE INICIALIZACIÓN -->` y `<!-- FIN: SECCIÓN DE INICIALIZACIÓN -->`,
   incluyendo los propios comentarios y la línea en blanco que los rodea.

3. **Eliminar este archivo** (`INIT.md`).

4. Informar al usuario que la inicialización está completa y que debe:
   - Actualizar `README.md` con el nombre y descripción de su proyecto
   - Hacer el primer commit: `git add . && git commit -m "chore: initial commit"`
   - Revisar el checklist de inicialización del `README.md` (tema, base de datos, SSO, mail)
   - Hacer push: `git push -u origin main` (cada push a `main` crea su versión y se despliega, ver `docs/deployment.md`)
