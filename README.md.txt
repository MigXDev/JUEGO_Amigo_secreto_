# Amigo Secreto - Sorteo de Nombres

## Descripción

Este proyecto es una aplicación web simple que permite a los usuarios agregar nombres de amigos a una lista y luego sortear aleatoriamente a uno de ellos.

## Características

- Agregar nombres de amigos a un listado.
- Mostrar la lista actualizada en la página.
- Sortear un amigo al azar de la lista.
- Mostrar el nombre del amigo seleccionado en la pantalla.

## Tecnologías utilizadas

- **HTML**: Para la estructura de la página.
- **CSS**: Para la presentación básica del contenido.
- **JavaScript**: Para la lógica del programa.

## Instrucciones de uso

1. Ingresar un nombre en el campo de entrada y hacer clic en "Agregar Amigo".
2. La lista de amigos se actualizará en la página a una cantidad ilimitada.
3. Hacer clic en "Sortear Amigo" para elegir un nombre al azar.
4. El nombre seleccionado se mostrará en pantalla.

## Estructura del proyecto

```
/ amigo-secreto
│── index.html     # Archivo principal con la estructura HTML
│── styles.css     # Estilos de la página
│── script.js      # Lógica del programa
│── README.md      # Documentación del proyecto
```

## Funcionalidad de JavaScript

### 1. **Agregar amigos**

- Captura el valor del campo de entrada.
- Valida que el campo no esté vacío.
- Agrega el nombre al array de amigos.
- Actualiza la lista en la interfaz.

### 2. **Mostrar la lista de amigos**

- Recorre el array y genera elementos `<li>`.
- Usa `innerHTML` para actualizar la lista visualmente.

### 3. **Sortear un amigo**

- Verifica que la lista no esté vacía.
- Usa `Math.random()` y `Math.floor()` para elegir un nombre al azar.
- Muestra el nombre sorteado en la interfaz.

## Autor

| [<img src="https://avatars.githubusercontent.com/u/196855177?s=96&v=4" width=115><br><sub>Miguel Angel Ajhuacho</sub>](https://github.com/MigXDev) |