import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.
function calcularTotal( id: string, cant: number, codigo: string): number {
  let primerprecio: number

if (id=== "sabrina") { 
 primerprecio = 1000 

}
else if (id==="kgatlw") {
primerprecio = 700
}
else if (id==="lali") {
  primerprecio = 500
}
else if (id==="magdalena") {
  primerprecio = 600
 }
 else if (id==="viagra") {
  primerprecio = 400
 }
 else if (id==="dillom") {
  primerprecio = 350
 }
 else if (id==="marilina") {
  primerprecio = 200
 }
 else if (id==="mugre") {
  primerprecio = 150
 }
 else {
  primerprecio= 0
 }
let precioporpersona: number = primerprecio*cant 

if (codigo==="TIC10") {
  precioporpersona = precioporpersona*0.9  
}
 if (codigo==="TIC20") {
  primerprecio * 0.8
 }
 if (codigo==="DARIO") {
  primerprecio * 0.5
 }

 return precioporpersona;

 }
 

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});


iniciar();



