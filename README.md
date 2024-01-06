# Laravel 10 + Vue 3 + Vue Router 4 + Pinia 2 + Vuetify 3

Este es un proyecto base para iniciar un proyecto con Laravel 10, Vue 3, Vue Router 4, Pinia 2 y Vuetify 3.

## Requisitos

-   PHP 8.1.0 o superior
-   Composer 2.2.0 o superior
-   Node 18.0 o superior

## Instalación

1. Clonar el repositorio `git clone git@github.com:fermelli/laravel10-vue3-app-template.git`
2. Ejecutar `composer install`
3. Ejecutar `npm install`
4. Crear el archivo `.env` y copiar el contenido del archivo `.env.example`
5. Generar la clave de la aplicación con el comando `php artisan key:generate`
6. Crear la base de datos y configurar el archivo `.env` con los datos de conexión

## Ejecución en modo desarrollo

1. Ejecutar `php artisan serve`
2. Ejecutar `npm run dev`
3. Abrir el navegador en la dirección `http://localhost:8000`

## Compilación para producción

1. Ejecutar `npm run build`

## Linting y Formateo

1. Ejecutar `npm run lint` para ejecutar el linting con `eslint`
2. Ejecutar `npm run format` para ejecutar el formateo con `prettier`

## Apuntes de desarrollo

1. Utilizacion de `vue` con `vite` instalar complemento con `npm install --save-dev @vitejs/plugin-vue`
