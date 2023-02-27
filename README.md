

# Búscador de cócteles

## objetivo y funcionalidades 

Se trata de una aplicación web que contiene con un buscador de cócteles conectado a una API que contiene un listado de las bebidas y cócteles de todo el mundo. La web nos permite realizar una búsqueda a dicha API con la palabra que nos interese, renderizar el resultado en pantalla y guardar, mediante un click, los cócteles que interesen al usuario/a en una lista de favoritos, también permite desmarcarlos y resetar la lista de favoritos, así como resetear la búsqueda.. El búscador da por defecto al cargar la página el listado de margaritas y tiene un botón que permite resetear la búsqueda contiene también la función de resetear la búsqueda con un botón, borrando el campo del Inpt y devolviendo a la búsqueda por defectos de margaritas. La lista de cócteles favoritos se guarda en el LocalStorage para que al recargar la página no se peirda la información, ésta lista se puede eliminar borrando cócktel a cocktel con el botón X o bien usando el botónd de Resetear todos los favoritos que se encuentra bajo la lista de favoritos.

## tecnologías aplicadas

Este proyecto se ha programado con JavaScript, y maquetado usando CSS y HTML. 

Se ha desarrollado con la aydua del Adalaber Web Starter Kit (instruccioens de uso y para arrancar el proyecto más abajo), que lleva incorporado la herramienta para la compilación de transmissión Gulp y el lenguaje de hoja de esilos en cascada Sass. 


## Pasos para arrancar el proyecto:

### Desde gitHub Pages:

Si quieres visitar la web desde el navegdor puedes abrir el enlace de GitHUb pages que hay en el repositiorio del proyecto. Esto abirirá la web normalmente en el navegador y podrás probar sus funcionalidades.

### Si has clonado o descargado el proeycto:

Si has clonado el repositorio, abr ela temrinal y ecribe el comando 

npm i

Para arrancar el proyecto y que se abra en el navegador ejecuta el comando:

npm start


Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.
