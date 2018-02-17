# Proyecto: API - WEATHER
¿Has visto que los sistemas operativos móviles vienen con una APP de predicción del clima? ¡Vamos a hacer la nuestra! Para ello, usaremos la API de Dark Sky?

En este proyecto crearemos una aplicación que a partir de la latitud y la longitud obtendremos los datos del clima, a partir de ```HTML 5``` usando la API de geolocalización lo obtiene por nosotros y hace una petición a nuestro servidor ```express```  de  ```node.js```.  Esto es posible gracias al servicio de ***Dark Sky API***.

## Pasos de instalación que debemos seguir en nuestro proyecto (carpeta)
1. iniciamos nuestro proyecto,con la cual creamos nuestro package json,  archivo de configuración, que son los metadatos del proyecto. 
```js
npm init --yes
```
2. Instalando dependecias para crear nuestro servidor
```js
npm install express --save
```

3. Instalando nuestro motor de plantillas, el cual me permite escribir ```HTML``` más algunas funcionalinalidades añadidas ie HTML con bucles, etc
```js
ejs
```
4.  Para ver algunas peticiones que me llegan a mi servidor y mostrarlos por consola
```js
morgan
```

5. Me permite conectarme a un API de clima como ***Dark Sky*** 
```js
forecastio
```
6. Utilizamos el archivo ```.gitignore```  para evitar subir al repositorio la carpeta de ```node_modules```

#### Nota:
> Recuerda seguir siempre esta [guía de estilos](https://github.com/Laboratoria/js-style-guide/)




