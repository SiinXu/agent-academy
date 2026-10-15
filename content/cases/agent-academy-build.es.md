# Caso 1: cómo un agente diseñó este sitio

_Traducción automática (Argos Translate). Original: English._

Este es el primer caso del curso de diseño. Registra cómo se diseñó la propia Academia, paso a paso, para que otro agente pueda repetir el método en su propio proyecto. Cada referencia a continuación es un archivo real en el UI Resource Hub; nada fue inventado.

![Antes: la misma página sin hoja de estilo](/assets/case/before.webp)

![Después: la página de inicio enviada](/assets/case/after.webp)

## 1. Reunión
- Audiencia: personas que eligen un bot para un trabajo, y los agentes que leen el sitio.
- Job de la página principal: mostrar lo que hay dentro (3 facultades abiertas, recursos reales, un alimento diario) y entregar un mensaje copiable.
- Constraints: 10 idiomas, ligeros y oscuros, enlaces largos nunca deben desbordarse, una tarjeta acolchada en todas partes, fantasía pero con moderación, retroceso de baja emoción.
- Luces prohibidas: papel + naranja, Carbon gray, Instrument + lime, la tinta + cromo del sitio de la hermana, y la mirada de medianoche + cian de UI Hub.

## 2. Grupo antes de elegir
El agente cuenta cada etiqueta de estilo visual en UI Hub `data.json` (2,376 artículos locales) en lugar de empezar de un favorito:

| Grupo temático | Temas | Sentencia |
|---|---|---|
| mínimo | 1031 | disciplina corporal sólo |
| empresas | 805 | rechazado: mirada dashboard |
| material | 326 | rechazado: mirada del sistema |
| moción | 152 | guardado: vocabulario de movimiento |
| Dark-tech | 102 | parcialmente mantenido |
| gradiente / 3d | 78 / 67 | mantenido como un grano monohue solamente |
| editorial | 25 | mantenido: índice bento, masonería densa |

Intersección escogida: editorial x movimiento x gradiente.

## 3. Abrir vistas reales (27 archivos)
Una puerta dura: no CSS hasta que al menos 6 vistas fueron abiertas y escritas. 27 were opened, including `previews/site/tympanus-net-codrops.webp`, `previews/skiper-ui-com.webp`, `previews/ui-lukacho-com.webp`, `previews/rive-app.webp`, `previews/backgrounds-supply.webp`, `previews/rareui-com.webp`, `previews/cs/cs2-magicui-design--background--orbiting-circles--v0.webp`, `previews/cs/cs2-magicui-design--background--shine-border--v0.webp` y `previews/cs/cs-ui-aceternity-com-card.webp`.

Para cada elemento guardado de la biblioteca de notas, ruta de vista previa, hex, radio, sombra, fuentes y tipo de movimiento. Ejemplo: el campo de la línea de héroe viene de Lukacho UI (`previews/ui-lukacho-com.webp`), trazos de línea de pelo a 10 a 22 por ciento de tinta, derivando lentamente con transformación solamente.

## 4. Tres direcciones, una elegida
| Opción | construido a partir de | resultado |
|---|---|---|
| A. Campus bento | Codrops bento, Salteador sello, Líneas Lukacho, Órbita Mágica UI + Brilla frontera + marquea, Aceternidad Tarjeta 3D | **elegido**: el sujeto (una escuela con facultades) conduce el diseño; tres colores de la facultad más neutrales |
| B. Fase nocturna | Aceternity spotlight, titular metálico, collage | rechazado: lee como un reskin del sitio de la hermana, oscuro sólo |
| C. Terminal de Pixel | Culto UI tipo pixel, Cuadrícula de línea de pelo Magic UI, tira CLI | rechazado: convierte la casa en un formulario, las etiquetas mono y las rejillas de línea de pelo son AI dice |

## 5. Tokens
- Canvas `#ECECEF` / `#0D0D11`, superficie `#FFFFFF` / `#16161C`, tinta `#15151B` / `#F0F0F4`, mudo `#575764` / `#A3A3B2`, enlace `#3340E6` / `#9AA3FF`.
- Granos de la facultad: servicio al cliente `#3A47F5` a `#0E3A44` (Codrops cover), marketing `#E0457B` a `#3B0A22` (Backgrounds Supply), diseño `#FF5A1F` pétalos en `#17171A` (Rare UI).
- Tipo: Archivo variable 800 para pantalla (en todo el grotesk como Codrops y Skiper), Geist para cuerpo, Geist Mono para código real solamente.
- Radius por jerarquía: 14 / 8 / 6 / 999. Una ficha de padding de tarjeta: 18px (16px en los teléfonos).

## 6. Presupuesto por movimiento
Rotación de sello 48s, dos anillos de órbita 40 y 60s, línea de campo deriva 18s, frontera de brillo cónico en Inicio rápido 7s, marquee 60s que se detiene en la palanca y el enfoque, una cadena de curso que pasa por una vez cuando se desplaza hacia la vista, y un deslizador antes/después con una inclinación de 6 grados. Sólo transformar, opacidad y fondo-posición animar. Todo se detiene bajo `prefers-reduced-motion`, y los bucles de pantalla bajan a través de IntersectionObserver.

## 7. Verificar
- Capturas de pantalla en 1440 y 390 de ancho, luz y oscuro, comprobadas para el desbordamiento, padding desigual y contraste.
- Faro se ejecuta en las páginas construidas; problemas fijos y re-run hasta que las puntuaciones se celebran.
- Cada tarjeta de recurso vincula a su fuente; cada archivo de curso es una URL GitHub cruda que resuelve.

## Reutilizar este método
1. Escribe el breve y la mirada prohibida primero.
2. Conteo de clusters en UI Hub `api/resources.json` antes de elegir un estilo.
3. Abra al menos 6 previsualizaciones y escriba el camino, hex, radius, shadow, font, motion for each borrowed element.
4. Sketch tres direcciones, elegir uno, y decir por qué los otros dos perdieron.
5. Tokens, luego componentes, luego movimiento; comprobar movimiento reducido.
6. Captura de escritorio y móvil en ambos temas, fijar, ejecutar Lighthouse, repetir.
