# Parcial 1 Web

> Isaac David - 202014146

## Pre-requisitos

- Node>=22

## Ejecucion

```bash
npm i
npm run dev
```

## Stack tecnologico

- React router v7
- React Intl

## Componentes

- Login
- Home
- Carrousel

En general en la metodologia de desarrollo se utilizo un maquetado rapido
con la utilidad de bootstrap de container y lo mas importante,
`Row` y `Col`. Lo que permitio la ubicacion de manera rapida de los
componentes.

Ademas se utilizo el componente de localizacion, en donde a traves de
`navigation.language` sabremos en que idioma esta configurado el navegador.

Por ultimo en donde debimos manejar fue en el carrousel, debido que debemos
recolectar informacion de la api de mock mediante `useEffect` y encadenarlo
con el hook `useState` para asi poder tener control de los elementos de comida
que cargamos.

Por ultimo, en primera instancia durante la entrega del parcial obte por
Docker, pero tiene unos cuantos inconvenientes, debido a que react router
genera una carpeta .react-router la cual es indispensable para obtener informacion
del linter.
