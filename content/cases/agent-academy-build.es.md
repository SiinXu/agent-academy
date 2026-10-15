## El encargo
Agent Academy es una escuela que leen los agentes: skills, prompts, servidores MCP y plantillas de bots reales, ordenados por profesión, cada uno con su enlace de origen y su licencia. La portada tiene un solo trabajo: mostrar qué hay dentro y entregar un prompt para copiar. Restricciones: 10 idiomas, claro y oscuro, los enlaces largos nunca se desbordan, el mismo relleno de tarjeta en todas partes.

## Reglas que se mantuvieron
- **Neutro más un acento.** Cada estilo usa una escala neutra y un único acento; el contraste del texto se queda en 4,5:1 o más.
- **Cada módulo viene de UI Hub.** Cada bloque nombra el elemento de Hub del que se portó: id, vista previa y código original. Cuando el port se desvía, se anota el motivo.
- **Deciden las capturas.** Nada se publica antes de revisar capturas de escritorio y móvil en ambos temas en busca de desbordes, recortes y rellenos desiguales.

## Qué cambió entre rondas
Las primeras rondas eligieron primero un aspecto y buscaron componentes después. El resultado fue decoración sin función, y se rechazó. Desde la ronda cuatro se invirtió el orden: elegir el componente de Hub para cada módulo, portarlo desde su código y luego tematizarlo con tokens. Por eso tres estilos pueden compartir la misma estructura de página: solo cambian los tokens, las fuentes y los módulos característicos.

## Cómo funciona el cambio de estilo
Un script pequeño fija `<html data-skin>` antes del primer pintado, a partir de `?skin=`, luego de la elección guardada y, si no, A. Claro y oscuro son un interruptor aparte. El CSS de cada estilo está acotado a su skin, así que cambiar no carga nada nuevo y nunca parpadea.
