<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="shortcut icon" href="{{ asset('vue.svg') }}">

        @vite('resources/js/src/main.js')

        <style>
            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            body {
                margin: 0;
            }

            .app-container-spinner {
                position: absolute;
                z-index: 9999;
                width: 100vw;
                height: 100vh;
                display: grid;
                place-items: center;
                background-color: #ffffff;
            }

            .app-spinner {
                border: 4px solid rgba(0, 0, 0, 0.1);
                width: 24px;
                height: 24px;
                border-radius: 50%;
                border-left-color: #1867c0;

                animation: spin 1s ease-in-out infinite;
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
        </style>

    </head>
    
    <body>
        <noscript>
            <strong>Lo sentimos, pero para que la aplicación funcione correctamente, es necesario que habilites JavaScript en tu navegador.</strong>
        </noscript>

        <div
            id="app-loading"
            class="app-container-spinner"
        >
            <div class="app-spinner"></div>
        </div>


        <div id="app"></div>
    </body>
</html>
