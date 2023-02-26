

# Búscador de cócteles

## objetivo y funcionalidades 

Se trata de una aplicación web que contiene con un buscador de cócteles conectado a una API que contiene un listado de las bebidas y cócteles de todo el mundo. La web nos permite realizar una búsqueda a dicha API con la palabra que nos interese, renderizar el resultado en pantalla y guardar, mediante un click, los cócteles que interesen al usuario/a en una lista de favoritos, también permite desmarcarlos o resetear la lista de favoritos cuando nos interese. El búscador da por defecto al cargar la página el listado de margaritas y contiene también la función de resetear la búsqueda con un botón. La lista de cócteles favoritos se guarda en el LocalStorage para que al recargar la página no se peirda la información. 


## tecnologías aplicadas

Este proyecto se ha programado con JavaScript, y maquetado usando CSS y HTML. 

Se ha desarrollado con la aydua del Adalaber Web Starter Kit (instruccioens de uso y para arrancar el proyecto más abajo), que lleva incorporado la herramienta para la compilación de transmissión Gulp y el lenguaje de hoja de esilos en cascada Sass. 


## Guía de uso de Adalab Starter Kit

Ahoy! Este es nuestro Starter Kit creado en **node y gulp**. ¿Y qué es un Starter kit? Pues es una **plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas**.

Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. El Kit nos ayuda a trabajar más cómodamente, nos automatiza tareas.

En el Kit hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos.
- La carpeta `src/`: son los ficheros de nuestra página web, como HTML, CSS, JS...
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de `src/`, los procesa y los genera dentro de `public/` y `docs/`.

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

### Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:

1. **Crea tu propio repositorio.**
1. Descarga este **Starter kit desde GitHub**.
   - No recomendamos que clones este repo ya que no podrás añadir commits.
1. **Copia todos los ficheros** de este Starter kit en la carpeta raíz de tu repositorio.
   - Recuerda que debes copiar **también los ficheros ocultos**.
   - Si has decidido clonar este repo, no debes copiar la carpeta `.git`. Si lo haces estarás machacando tu propio repositorio.
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Pasos para arrancar el proyecto:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez que te pongas a programar.** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.
