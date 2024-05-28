# Proyecto Grupo 7 - Codo a Codo - Comisión 24142
Este proyecto corresponde al Grupo 7 de la comisión 24142 del curso de Desarrollo Web Full Stack Node.js de Codo a Codo 2024.

## Integrantes
<!-- Link a Github de integrantes y su email -->
| Apellido y Nombre  | GitHub                                     | Email                                                      |
|--------------------|--------------------------------------------|------------------------------------------------------------|
| **Coronado, Almey**| [almeyamada](https://github.com/almeyamada)| [almeyamada@gmail.com](mailto:almeyamada@gmail.com)        |
| **Dornell, Tomás** | [tdornell](https://github.com/tdornell)    | [tomasdornell99@gmail.com](mailto:tomasdornell99@gmail.com)|
| **Moran, Andres**  | [andressmm](https://github.com/andressmm)  | [ed.andresmoran@gmail.com](mailto:ed.andresmoran@gmail.com)|
| **Salva, Rosana**  | [rogonra](https://github.com/rogonra)      | [rosanasalva@yahoo.com.ar](mailto:rosanasalva@yahoo.com.ar)|


## Descripción
El proyecto consiste en la creación de un sitio web de e-commerce para una tienda de bebidas alcohólicas. El sitio deberá contar con una vista de usuario y una vista de administrador.

En la vista de usuario, los visitantes podrán ver los productos disponibles, ver los detalles de cada producto, agregar productos al carrito y finalizar la compra. Además, podrán enviar mensajes a la tienda a través de un formulario de contacto.

En la vista de administrador, los usuarios autorizados podrán agregar, modificar y eliminar productos. Y también podrán ver las compras realizadas por los clientes y marcarlas como entregadas o eliminarlas.

## Requerimientos
### Evaluación del proyecto
| Requisitos  | Puntaje                                     | Estado                                                    |
|--------------------|--------------------------------------------|------------------------------------------------------------|
|El sitio deberá contar con al menos 4 páginas HTML.|10|0|
|El sitio deberá contar con un formulario de contacto, con al menos 5 campos (Incluir Checkbox o RadioButton, Select e Imagen). Los campos deberán ser validados con JavaScript.|15|0|
|El sitio deberá ser responsive con al menos 3 puntos de quiebre con media queries para dispositivos móviles, tablets y desktops.|15|0|
|El sitio deberá utilizar al menos una animación, transformacion o transición de CSS.|10|0|
|El sitio deberá poseer una estructura HTML maquetada con Flexbox y/o Grid.|10|0|
|El sitio deberá contar con favicon, ser legible, no deberá tener puntos de no retorno y debera tener imagenes optimizadas.|10|0|
|El proyecto debera ser subido a un repositorio de Git.|10|0|
|El sitio deberá ser subido a un servidor de hosting gratuito (GitHub Pages, Netlify, Vercel, etc).|10|0|
|El sitio deberá pasar la validación de W3C.|5|0|
|El sitio deberá utilizar un iframe y/o iconos de FontAwesome y/o fuentes (locales o de Google Fonts). Utilizar Bootstrap es optativo.|5|0|
|**Total**|**100**|**0**|

### Vistas/Páginas

#### Navbar
Deberá contener:
- El logo de la tienda.
- Links a las páginas del sitio.
- Un link al carrito de compras.
- Un link para iniciar sesión.

#### Footer
Deberá contener:
- Información de contacto.
- Links a las redes sociales **(?)**.
- Información de la tienda (¿iframe?).
- Links a las páginas del sitio.

#### Página principal

- **Una página principal**, donde:
    - Se muestren los productos destacados.
    - Se pueda visualizar un carrusel de imágenes **(?)**.
    - Se tenga una breve descripción de la tienda.

#### Vista del usuario

- **Una pagina para registrarse/iniciar sesión** **(?)**.

- **Una página de productos**, donde:
    - Se listen todos los productos disponibles.
    - Se tenga la posibilidad de filtrar por categoría **(?)**.

- **Una página de detalles de producto**, donde:
    - Se muestre la información detallada del producto.
    - Se pueda agregar el producto al carrito.

- **Una página de carrito de compras**, donde:
    - Se muestren los productos agregados al carrito.
    - Se pueda modificar la cantidad de productos.
    - Se pueda eliminar productos del carrito.
    - Se pueda finalizar la compra.

- **Una página de contacto-ubicación**, donde:
    - Se muestre la ubicación de la tienda (iframe).
    - Se pueda enviar un mensaje a la tienda (formulario).

#### Vista del administrador
- **Una página de inicio de sesión para administradores**.
- **Una página de administración de productos**, donde:
    - Se puedan agregar productos.
    - Se puedan modificar productos.
    - Se puedan eliminar productos.
- **Una página de administración de compras**, donde:
    - Se puedan ver las compras realizadas por los clientes.
    - Se puedan marcar las compras como entregadas.
    - Se puedan eliminar las compras.

## Tecnologías
- HTML
- CSS
- JavaScript
- Bootstrap
- FontAwesome
- Google Fonts
- Node.js

## Copia del Repositorio
Para copiar el repositorio a tu computadora, deberás seguir los siguientes pasos:
1. Abrir la terminal.
2. Ubicarte en la carpeta donde quieras guardar el repositorio.
3. Clonar el repositorio con el siguiente comando:
    ```bash
    git clone https://github.com/tdornell/proyecto_grupo7.git
    ```
4. Ingresar al directorio del repositorio:
    ```bash
    cd proyecto_grupo7
    ```
5. Ver historial de commits y cambios:
    ```bash
    git log --oneline
    ```
6. Subir cambios al repo github:
    ```bash
    git push origin main
    ```