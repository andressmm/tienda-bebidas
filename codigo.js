/**********************************  datos de bebidas ******************** */


let productType = ["ron", "vinos", "vodka", "whisky"]; //tipos de bebidas

const bebidas={ //creo objeto "bebidas" y asigno los valores de c/u. la descripcion debe coincidir con el nombre de la img
    0:{tipo: "ron",
    descripcion: "BACARDI CARTA NEGRA 1,00 LITRO",
    extension: "png",
    precio: 10,
    cantidad_stock: 3,
    code:"ron001"},

    1:{tipo: "ron",
    descripcion: "BAYOU SELECT RESERVE 0,70 LITROS",
    extension: "jpg",
    precio: 9,
    cantidad_stock:0,
    code:"ron002"},

    2:{tipo: "ron",
    descripcion: "BOTRAN COBRE SPICED 0,70 ESTUCHE",
    extension: "jpg",
    precio: 20,
    cantidad_stock: 8,
    code:"ron003"},
    
    3:{tipo: "ron",
    descripcion: "RON ANGOSTURA 1919 0,70 LITROS ESTUCHE",
    extension: "jpg",
    precio: 18,
    cantidad_stock: 15,
    code:"ron022"},

    4:{tipo: "vinos",
    descripcion: "CLOS MOGADOR 2020 0,75 LITROS",
    extension: "jpg",
    precio: 8,
    cantidad_stock: 8,
    code:"vin223"},

    5:{tipo: "vinos",
    descripcion: "CUNE CRIANZA 2020 0,75 LITROS",
    extension: "jpg",
    precio: 9,
    cantidad_stock: 7,
    code:"vin228"},

    6:{tipo: "vinos",
    descripcion: "EMILIO MORO MALLEOLLUS 2020 0,75 LITROS",
    extension: "jpg",
    precio: 12,
    cantidad_stock: 7,
    code:"vin213"},

    7:{tipo: "vinos",
    descripcion: "vino tinto estola reserva 0.75 L",
    extension: "jpg",
    precio: 7.5,
    cantidad_stock: 5,
    code:"vin393"},

    8:{tipo: "vodka",
    descripcion: "ABSOLUT BLUE 0,70 LITROS",
    extension: "jpg",
    precio: 7.5,
    cantidad_stock: 0,
    code:"vod223"},
    
    9:{tipo: "vodka",
    descripcion: "CIROC RED BERRY 0,70 LITROS",
    extension: "jpg",
    precio: 6,
    cantidad_stock: 7,
    code:"vod023"},
    
    
    10:{tipo: "vodka",
    descripcion: "REYTHOR 1,00 LITRO",
    extension: "jpg",
    precio: 5,
    cantidad_stock: 12,
    code:"vod293"},   
    
    11:{tipo: "vodka",
    descripcion: "SMIRNOFF RED 1,00 LITRO",
    extension: "jpg",
    precio: 9,
    cantidad_stock: 10,
    code:"vod296"},    

    12:{tipo: "whisky",
    descripcion: "BALLANTINES 1,00 LITRO",
    extension: "jpg",
    precio: 12,
    cantidad_stock: 10,
    code:"whi253"},

    13:{tipo: "whisky",
    descripcion: "BOWMORE 10 AÑOS DARK & INTENSE 1,00 LITRO",
    extension: "jpg",
    precio: 9,
    cantidad_stock: 10,
    code:"whi063"},

    14:{tipo: "whisky",
    descripcion: "CHIVAS REGAL 12 AÑOS 0,70 LITROS",
    extension: "jpg",
    precio: 8,
    cantidad_stock: 10,
    code:"whi331"},    

    15:{tipo: "whisky",
    descripcion: "DEWARS 12 AÑOS 1,00 LITRO",
    extension: "jpg",
    precio: 8,
    cantidad_stock: 18,
    code:"whi480"},  
}


// verifico si hay algo en el LS, caso afirmativo muestro un puntito verde de notificacion a la altura de "carrito"


const notificacionCarrito = document.querySelectorAll('.barra_nav__opt')[3];
const dot = document.createElement('div');
dot.classList.add('dot');
notificacionCarrito.appendChild(dot);
const notificacion= document.querySelector('.dot');
notificacion.style.display = 'none';


if (localStorage.length===0){
  notificacion.style.display = 'none';
} else {
  notificacion.style.display = 'block';

}




// *******************       desde aqui el menu desplegable en la version movil 
// al cliquear sobre el signo "+" en la version movil se despliega el menu, con transicion de entrada y salida 

const boton_menu=document.querySelector(".boton_mobile_plus"); // selecciono el boton "+" de la version movil y lo guardo en vble
const barra_pc=document.querySelector(".navegacion_pc"); //selecciono la barra de nav pc y la guardo en variable
const barra_mobile=document.querySelector(".navegacion_mobile"); //selecciono la barra de nav movil y la guardo en variable

let menuAbierto = false; // pongo a falso la visibilidad del menu movil

boton_menu.addEventListener('click', () => { // escucho si se hizo clic en "+"
 
  if (!menuAbierto) { // si se hizo click y menuAbierto falso, seteo los estilos para mostrarlos
  
    barra_mobile.style.position = "absolute"; // pongo el menu en absolute
    barra_mobile.style.display = "block"; // lo pongo como bloque para que aparezca un item debano de otro
    barra_mobile.style.width = "100vw"; // le doy 100% de ancho

    boton_menu.style.transform = "rotate(45deg)"; // giro 45 grados el boton "+" para que quede como "x"
    boton_menu.style.color = "var(--color-detalles)"; // le cambio de color
    boton_menu.style.textShadow = "2px 2px 15px var(--color-sombras)"; // le aplico sombra 
    menuAbierto = true; //cambio la variable a true para saber que el menu quedo abierto
    setTimeout(() => {
      barra_mobile.classList.add('visible'); //agrego con delay la clase "visible" al menu que tiene opacidad 1, para que haga una transicion
    }, 10);
  } else {     // Si el menú está abierto, cerrarlo y aplicar la animación de desvanecimiento
    
    barra_mobile.classList.remove('visible'); // Elimina la clase "visible" para aplicar la transición de opacidad
    boton_menu.style.transform = "rotate(0deg)"; // vuelvo el signo "x" a "+"
    boton_menu.style.color = ""; // Vuelve "+" al color por defecto
    boton_menu.style.textShadow = ""; // Elimina la sombra de "+" 
    
    setTimeout(() => {
      barra_mobile.style.display = "none";
    }, 200);  // Espera a que termine la animación antes de ocultar el menu
    menuAbierto = false; // paso menu a false para saber que esta cerrado
  }
});



// *******************   fin menu desplegable en la version movil 


/******************** ventana modal *****************/
function bebidaClick(elemento) {  
  // funcion cuando se le da clic a una bebida, obtiene el codigo, pone toda la web en oscura y abre ventana modal
  const codigoBebida = elemento.classList[1]; // obtengo la segunda clase del eb sobre el que se hizo clic que contiene el codigo del prod
  let modal = document.querySelector(".modal_background");
  let modal_v = document.querySelector(".modal_ventana");
 
  modal.style.display = "flex";
  modal.style.animation = "bkgnd_modal .3s forwards";
 
  let bebidaClickeada = '';
  for (let codigo in bebidas) {
    if (bebidas[codigo].code === codigoBebida) {
      let descripcion = bebidas[codigo].descripcion; // nombre de la bebida
      let precio = bebidas[codigo].precio; // el precio
      let extension = bebidas[codigo].extension; // la extension de la img
      let tipoBebida = bebidas[codigo].tipo; // el tipo de bebida
      let stock = bebidas[codigo].cantidad_stock; // el stock
      let codigoProd = bebidas[codigo].code; // obtengo codigo del producto
      let imagen = `Imagenes/${tipoBebida}/${descripcion}.${extension}`; // armo ruta de la img          
      modal_v.style.display = "";

      bebidaClickeada = `
      <div class="columna_izquierda"><img src="${imagen}" alt="${descripcion}" /></div>
      <div class="columna_derecha">  
        <div class="columna_derecha_categoria">${tipoBebida.toUpperCase()}</div>
        <div class="columna_derecha_descripcion"><h2>${descripcion.toUpperCase()}</h2></div>
        <div class="columna_derecha_precio">${precio} USD</div>
        <div class="columna_derecha_extras">Este producto tiene envio gratis!</div>
        <div class="columna_derecha_stock">STOCK: ${stock} unidades</div>
        <div class="columna_derecha_cantidad">
          <button class="botones_cantidad" onclick="restarCantidad()">-</button>
          <span class="cantidad">1</span>
          <button class="botones_cantidad" onclick="sumarCantidad(${stock})">+</button>
        </div>
        <div class="columna_derecha_total">Total a pagar: <span class="precio_total">${precio}</span> USD</div>
        <button class="boton-agregar-carrito" onclick="agregarAlCarrito('${codigoProd}', ${precio})">Agregar al carrito</button>
      </div>`;
    }
  }
  bebidaClickeada += `<button class="boton-cerrar" onclick="cerrarModal()">X</button>`;

  
  document.querySelector(".modal_ventana").innerHTML = bebidaClickeada;
  console.log("BEBIDA CLICKEADA ->",  codigoBebida);
}

// Función para cerrar la ventana modal
function cerrarModal() {
  let modal_v = document.querySelector(".modal_ventana");
  let modal_back = document.querySelector(".modal_background");
  modal_v.style.display = "none";
  modal_back.style.animation = "";
  modal_back.style.display = "none";
}

// Función para restar la cantidad de productos
function restarCantidad() {
  let cantidadElement = document.querySelector(".cantidad");
  let cantidad = parseInt(cantidadElement.textContent);
  if (cantidad > 1) {
    cantidad -= 1;
    cantidadElement.textContent = cantidad;
    actualizarTotalPagar();
  }
}

// Función para sumar la cantidad de productos
function sumarCantidad(stock) {
  let cantidadElement = document.querySelector(".cantidad");
  let cantidad = parseInt(cantidadElement.textContent);
  if (cantidad < stock) {
    cantidad += 1;
    cantidadElement.textContent = cantidad;
    actualizarTotalPagar();
  }
}

// Función para actualizar el total a pagar
function actualizarTotalPagar() {
  let cantidad = parseInt(document.querySelector(".cantidad").textContent);
  let precio = parseFloat(document.querySelector(".columna_derecha_precio").textContent);
  let total = cantidad * precio;
  document.querySelector(".precio_total").textContent = total.toFixed(2);
}

// Función para agregar al carrito
function agregarAlCarrito(codigoProd, precio) {
  let cantidad = parseInt(document.querySelector(".cantidad").textContent);


  localStorage.setItem(codigoProd, cantidad);


  alert("Producto agregado al carrito");

  cerrarModal();   // Cierro la ventana modal
  notificacion.style.display = 'block';

}






/*************************** productos.html **************************/
/* muestra los productos almacenados en el objeto del inicio de este archivo */

function seccionesProductos() { //creo las secciones para cada tipo de bebida

    productType.forEach(tipoBebida => { //recorro todo el array productType para extraer los tipos de bebidas

      const section = document.createElement('section'); //creo el elemento <section>
      section.classList.add('product'); // a <section le agrego la class='product'

      const title = document.createElement('h2'); // creo un h2 con el titulo de la seccion 
      title.classList.add('titleSection'); //agrego la class=titleSection al h2
      title.textContent = `~ ${tipoBebida.toUpperCase()} ~`; // paso el titulo de la seccion a mayus
      section.appendChild(title); //el titulo creado lo pongo de hijo de <section>

      let divtarjetas=document.createElement('div'); //credo un nuevo div que contendra todas las bebidas de la seccion. El div es flexbox
      divtarjetas.classList.add('card'); // le agrego la clase "card" al div flex
      
      
      //****** **creo la tarjeta para cada producto y almaceno todo en vble "tarjeta" *************/

        let tarjeta="";
          for (let keyTipo in bebidas) { // recorro objeto bebidas y voy separando aquellos que coincidan con el tipo de bebida
            if (bebidas[keyTipo].tipo === tipoBebida) { // si hay coincidencia, extraigo los valores en variables
                let sinStock=''; // esta variable se agregara al codigo si una bebida esta sin stock
                //let comprar=''; // variable que guarda el boton "comprar"
                let p_precio=''; // variable que guarda el div "precio"
                let descripcion = bebidas[keyTipo].descripcion; //nombre de la bebida
                let precio = bebidas[keyTipo].precio; // el precio
                let extension = bebidas[keyTipo].extension; //la extension de la img
                let stock = bebidas[keyTipo].cantidad_stock; // el stock
                let codigoProd=bebidas[keyTipo].code;//obtengo codigo del producto
                let imagen=`Imagenes/${tipoBebida}/${descripcion}.${extension}`; //armo ruta de la img
                let clickeado=''; //variable que contiene el evneto clic y llama a la ventana modal cuando se hace click sobre una bebia 
                if (stock==0){  
                     sinStock='<div class="sinStock"><div class="sinStock__texto">SIN STOCK</div></div>';
                    // si el stock es igual a 0, agrego un div superpuesto al producto para avisar que no hay stock
                    } else { sinStock='';
                    //comprar='<p class="contacto__form__button comprar__button">Comprar</p>'; // boton comprar si hay stock
                    p_precio=`<p class="text-card">${precio} USD</p>`;// precio del producto si hay stock
                    clickeado=`onclick="bebidaClick(this)"`;
                  
                  }
               
                tarjeta += `
                  <div class="section-card ${codigoProd}" ${clickeado}>${sinStock}<img class="img-card" src="${imagen}" alt="${descripcion}" />
                    <div class="content-card">
                      <h3 class="title-card">${descripcion.toUpperCase()}</h3>
                      ${p_precio}
                    </div>
                  </div>
                `; // se crean todos los divs de las bebidas que coincidan con el tipo de bebida y se van acumulando uno a uno
                sinStock='';
                
          }

          }
            //console.log(tarjeta);
            divtarjetas.innerHTML=tarjeta; //agrego todo el contenido de la vble "tarjeta" al div contenedor de tarjetas
            section.appendChild(divtarjetas); // Agrego el div "card" que contiene las bebidas a la seccion 
            document.body.appendChild(section); // cierro el <section> y lo asigno como hijo de body
    
    
    
    });
}




 /***** FORMULARIO REGISTRO DE USUARIO, VALIDACION DE CONTRASENAS *********/
 /***** FORMULARIO REGISTRO DE USUARIO, VALIDACION DE CONTRASENAS *********/
 /***** FORMULARIO REGISTRO DE USUARIO, VALIDACION DE CONTRASENAS *********/
let valida; // esta vble se usara mas adelanta para mostrar u ocultar el boton "registro" si se reunen las condiciones
let passwordInput = document.getElementById('password'); // campo pass
let confirmaPassInput = document.getElementById('confirma_password'); //campo confirmar pass
let reqCaracteres = document.querySelector('.req_caracteres'); // <li> mas de 5 caract
let reqNumeros = document.querySelector('.req_numeros'); // <li> 3 numeros
let reqContrasena = document.querySelector('.req_contrasena'); // <li> contrasena correcta (oculto por defecto)
let reqIguales = document.querySelector('.req_iguales'); // li contrasenas iguales (oculto por def)
let registerbutton = document.querySelector('.register_button'); // boton registro


function validarPass() { 

       passwordInput.addEventListener('input', () => { //escuchar lo que se escribe en el campo password
        

      const password = passwordInput.value; // se guarda en vble

        if (password.length > 5) { // verifico si lo ingresado es mayor a  5 caracteres
            reqCaracteres.classList.add('ok'); // doy clase ok que muestra tilde en el primer <li>
        } else {
            reqCaracteres.classList.remove('ok'); // si no tiene 5, le saco clase ok al primer li
        }

        const numeros = (password.match(/\d/g) || []).length; //verifico si hay numeros ingresados y los cuento
        if (numeros >= 3) { // si hay 3 numeros 
            reqNumeros.classList.add('ok'); // doy clase ok que pone tilde al segundo li
        } else {
            reqNumeros.classList.remove('ok'); //sino saco clase ok segundo li
        }

        if (reqCaracteres.classList.contains('ok') && 
            reqNumeros.classList.contains('ok')) { //verifico si se cumplieron las dos condiciones
            reqContrasena.style.display = 'block'; // muestro el tercer li "la contrasena reune requisitos"
            valida = 1; //vble para mostrar el boton registro
        } else {
            reqContrasena.style.display = 'none'; // sino, oculto el tercer li
            valida = 0; // si no se cumplen los requisitos no se mostrara el boton registro
        }
        
        passIguales(); //llamo a funcion quer verifica si las pass son iguales 
      });

      

        // verifico si el campo esta vacio y por las dudas oculto mensaje contrasenas iguales
        if (passwordInput.value == ''){
          reqIguales.style.display = 'none'; 
          } 

          
    confirmaPassInput.addEventListener('input', passIguales); // escucho lo que se ingresa en el campo confirmacion de pass y llamo a la funcion que verifica si las pass son iguales
 }

function passIguales() { //funcion que verifica si ambas pass son iguales y muestra boton registro si se cumplieron los requisitos de la funcion anterior
  


    
    if (passwordInput.value === confirmaPassInput.value) { // verifico si lo ingresado en los campos pass y confirma pass son iguales 
         reqIguales.style.display = 'block'; //si son iguales muestro li contrasenas coincidentes 
        if (valida == 1) { //si los requisitos de la pass estan OK
            registerbutton.style.display = 'block'; // muestro boton registro
        } else {
            registerbutton.style.display = 'none'; // de lo contrario oculto boton registro
        }
    } else { // si no son iguales oculto
        reqIguales.style.display = 'none'; //oculto mensaje "contrasenas coinciden" 
        registerbutton.style.display = 'none'; // oculto boton registro
    }
    if (confirmaPassInput.value === ''){ // verifico si el campo esta vacio y por las dudas oculto mensaje contrasenas iguales
      reqIguales.style.display = 'none'; // de lo contrario oculto boton registro
      }
  }



 /***** fin FORMULARIO REGISTRO DE USUARIO, VALIDACION DE CONTRASENAS *********/
 /***** fin FORMULARIO REGISTRO DE USUARIO, VALIDACION DE CONTRASENAS *********/
 /***** fin FORMULARIO REGISTRO DE USUARIO, VALIDACION DE CONTRASENAS *********/


// valida el form de contacto //

function validarContacto() {
  let nombre = document.getElementById('nombre').value; //obtengo campo de nombre 
  let email = document.getElementById('email').value; //obtengo campo mail 
  let mensaje = document.getElementById('mensaje').value; //obtengo text area

  if (nombre !== '' && email !== '' && mensaje !== '') { // elimino posibles espacios y verifico que todo este completo
      alert("Hemos recibido su mensaje. Nos contactaremos a la brevedad, mientras tanto, disfruta de un buen vino ;)");
      } else {
      alert("Por favor complete todos los campos.");   //  falta algo campo, mostrar un mensaje de error
    
  }

}
// FIN valida el form de contacto //


            // valida registro //

            function validarRegistro() {
              var nombre = document.getElementsByName('nombre')[0].value;
              var apellido = document.getElementsByName('apellido')[0].value;
              var confirmacion = document.querySelector('input[name="confirmacion"]:checked');
              var direccion = document.getElementsByName('direccion')[0].value;
              var ciudad = document.getElementsByName('ciudad')[0].value;
              var password = document.getElementsByName('password')[0].value;
              var confirmaPassword = document.getElementsByName('confirma_password')[0].value;

              if (nombre && apellido && confirmacion && direccion && ciudad && password && confirmaPassword) {
                  // Verificar si es mayor de 18
                  if (confirmacion.value === "si") {
                      alert('USUARIO REGISTRADO CON ÉXITO! Disfruta de nuestra tienda :D');
                  } else {
                      alert('Debes tener 18 años para registrarte');
                  }
              } else {
                  alert('Por favor, completa todos los campos.');
              }
            }
            // fin valida registro



 // validar login //


 function validarLogin() {


  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (email && password) {
    alert('Usuario logueado! Disfruta de nuestra tienda :D');
  } else {
    alert('Por favor, completa ambos campos.');
  }
}
// fin validar login //



            // SLIDER INDEX.HTML // 
            // SLIDER INDEX.HTML // 
            // SLIDER INDEX.HTML // 

            function generaAleatorio(a, b) { // esta funcion genera un numero random. a y b son los limites dentro del array de bebidas disp.
              return Math.floor(Math.random() * (b - a + 1)) + a; //tira un numero aleatorio
            }

            let bebidasSeleccionadas = []; // array donde se almacenaran las bebidas sorteadas

            // Iterar sobre cada tipo de bebida
            productType.forEach(tipo => {
              
              let bebidasTipo = Object.values(bebidas).filter(bebida => bebida.tipo === tipo); // obtiene los tipos de bebida

              let bebidasDisponibles = bebidasTipo.filter(bebida => bebida.cantidad_stock > 0); // selecciona las bebidas cuyo stock >0

              if (bebidasDisponibles.length > 0) {
                  let indiceAleatorio = generaAleatorio(0, bebidasDisponibles.length - 1); //dentro de las bebidas disp. genera nro aleatorio (id)
                  let bebidaSeleccionada = bebidasDisponibles[indiceAleatorio];

                  bebidasSeleccionadas.push(bebidaSeleccionada); // se agrega la bebida selecc al array de bebidas sorteadas
              }
            });

            console.log(bebidasSeleccionadas)

            let divBebida=''; //vble que contendra los divs armados con todas las bebidas seleccionadas

            bebidasSeleccionadas.forEach(bebida => {
            
            
              divBebida+=`
              <div class="grid_slider">
                  <div class="col_slider1">
                      <img src="../Imagenes/${bebida.tipo}/${bebida.descripcion}.${bebida.extension}" alt="${bebida.descripcion}">
                  </div>
                  <div class="columna_derecha">
                  <div class="col_slider2">
                  <div class="slider_bebida_tipo">SUPER OFERTA EN ${bebida.tipo.toUpperCase()}!</div>
                    <div class="slider_bebida_descripcion"><h2>${bebida.descripcion.toUpperCase()}</h2></div>
                    <div class="slider_bebida_precio">COMPRALO A TAN SOLO ${bebida.precio} USD</div>
                    <div class="slider_bebida_comprar"> <a href="productos.html" alt="Nuestros productos">MAS OFERTAS AQUI!</a></div>

                    </div>

                  </div>
              </div>
            `;
            });

            let contenedorDiv = document.querySelector('.slides-container'); //selecciono el contenedor del slider
            contenedorDiv.innerHTML=divBebida; //agrego las 4 bebidas sorteadas al azar

            console.log(divBebida);

            // FIN SLIDER INDEX.HTML // 
            // FIN SLIDER INDEX.HTML // 
            // FIN SLIDER INDEX.HTML // 



            /****  carrito: muestra productos seleccionados, cantidad y total */


            function obtenerCarrito() {
              let productosHTML = '';
            
              let sumaTotal=0;
              for (let i = 0; i < localStorage.length; i++) { //recorre el localstorage
                let codigoProd = localStorage.key(i); // Obtener el codigo del producto
               
                let cantidad = localStorage.getItem(codigoProd); //obtiene la cantidad almacenada
               

                for (let key in bebidas) { // recorro el objeto bebidas para buscar las que coinciden con el codigo almacenado en LS
                  if (bebidas[key].code === codigoProd) {
                    let descripcion = bebidas[key].descripcion;
                    let precio = parseInt(bebidas[key].precio);
                    let ptotal=parseInt(precio*cantidad);
                    let extension = bebidas[key].extension;
                    let imagen = `Imagenes/${bebidas[key].tipo}/${descripcion}.${extension}`;

                    sumaTotal+=parseInt(ptotal);
                    productosHTML += `
                    <div class="tarjeta" id="${codigoProd}">
                      <img src="${imagen}" alt="${descripcion}" class="imagen-bebida">
                      <div class="descripcion">
                        <p><span class="resaltado">${descripcion}</span></p>
                        <p><span class="resaltado2">Cantidad seleccionada: ${cantidad}</span></p>
                        <p><span class="resaltado2">Precio unitario: ${precio} USD</span></p>
                        <p><span class="resaltado">Precio Total: ${ptotal} USD</span></p>
                        <button class="eliminar" onclick="eliminarItem('${codigoProd}')">Eliminar</button>
                        </div>
                    </div>
                    `;
                  }
                }

              }
            
              if (localStorage.length > 0) { // muestro los prod y el total 
              document.getElementById('productos').innerHTML = productosHTML;
              let suma=document.querySelector('.sumaTotal');
              suma.style.display = 'block';

              suma.innerHTML = `TOTAL COMPRA: ${sumaTotal} USD`;
              } else { 

              document.querySelector('.vacio').innerHTML = ` <p class="carita_triste">:(</p>TODAVIA NO HAY NADA EN TU CARRITO
              <p class="text-vacio"><a href="productos.html">Ingresa aqui y empeza a elegir las mejores bebidas!</a></p>
              
              `;

              }
              

            }
          
            function eliminarItem(codigoProd) {
              localStorage.removeItem(codigoProd); // Eliminar el elemento del localStorage

              if (localStorage.length==0){ // si el LS esta vacio elimino h2 que m uestra el total
                const sumaTotal = document.querySelector('.sumaTotal');
                sumaTotal.style.display = 'none';
                notificacion.style.display = 'none';

              }
              
              const elementoEliminado = document.getElementById(codigoProd);
              if (elementoEliminado) { //elimino el div de la bebida seleccionada
                  elementoEliminado.remove();

              }
          
              obtenerCarrito();//obtengo nuevamente el carrito
          }

          

