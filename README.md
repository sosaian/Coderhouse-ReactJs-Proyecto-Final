# Acerca del proyecto 👀

> Este es el proyecto final que hice para el curso de React JS en Coderhouse. Se trata de un ecommerce inspirado en la tienda online de Havanna ( https://tienda.havanna.com.ar/ )

## Instalación usando git clone 🔧

### Para acceder al proyecto clonándolo, deberás ejecutar en consola: 
```sh
git clone URL # URL= LINK DEL PROYECTO
npm install 
npm run dev
```

## Instalación descargando comprimido ZIP 🔧
```sh
# Ir a “code” > download ZIP
# Descomprimir el archivo
# En la carpeta donde se encuentra “package.json” ejecutar en terminal:
npm install
npm run dev
```

## Tecnologías principales:

⚙ Vite

⚙ React JS

⚙ JavaScript

⚙ HTML

⚙ CSS

## Algunas librerias:

Para que el proyecto se logre realizar de una manera esperada utilicé las siguientes herramientas:

📚 React-router-dom: routing de la web

📚 React-Firebase: base de datos 

## Firebase / Firestore

- Colección: ```products```. Cada item tiene las siguientes características:

|    Campo      |   Tipo        |   Valor       |
| ------------- | ------------- | ------------- |
| name          |   String      |   Nombre      |
| category      |   String      |   Categoría   |
| imgDetail     |   String      |   img 300x400 |
| imgThumbnail  |   String      |   img 70x100  |
| price         |   number      |   Precio      |
| stock         |   number      |   stock       |