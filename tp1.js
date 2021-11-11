

const autos = require('./autos.js') /* requerir módulo autos */
const personas = require('./persona.js')

const concesionaria = {
   autos: autos,
   buscarAuto: function (patente) {
       for (let i = 0; i < autos.length; i++){
       if (autos[i].patente === patente){
        //    console.log("foundAuto", this.autos[i])
           return this.autos[i]
       } 
       } return null
       },
       venderAuto: function (patente){
        let autoEncontrado = this.buscarAuto(patente)
        autoEncontrado.vendido = true
        return autoEncontrado
    },
   autosParaLaVenta: function(){
    var autosNoVendidos = this.autos.filter(function(auto){
     return auto.vendido == false
 }); return autosNoVendidos
 },
 autosNuevos: function(){
 let enVenta = this.autosParaLaVenta();
 let nuevos = enVenta.filter(function(auto){
     return auto.km < 100
 }); return nuevos
  //  if (this.autosParaLaVenta.km < 100){
       // var autos0km = this.autosParaLaVenta
  // return this.autosParaLaVenta(); }  
 } ,

 listaDeVentas: function(){
    //  let vendidos = [];
    //  let sold = function(){if(this.autos.vendido === true){
        //   vendidos.push()
    //  }
    // };
    //  console.log("???", sold)
    // console.log("allAutos", this.autos)

    let autoPriceList = []
    let totalVentas = this.autos.filter(auto => 
        {
            if(auto.vendido === true) {
            autoPriceList.push(auto.precio)
    }
})

return autoPriceList

    //  let totalVentas = this.autos.reduce((acumulador, auto) => {
    //     //  console.log("precio", auto)
    //      if(auto.vendido === true){
    //     acumulador.push(auto.precio)
    //      } 
    //      return acumulador
    // }, [])
    // //  console.log("totalVentas", totalVentas)
    //  return totalVentas
 },
 totalDeVentas: function(){

    let totalVentas = this.listaDeVentas()
    let resultado = totalVentas.reduce((acumulador, precio) => {
        // if(auto.vendido === true) {
        acumulador += precio
     return acumulador
}, 0) 
return resultado
},
puedeComprar: function(unAuto, unaPersona){
//     let autoAComprar = this.buscarAuto(unAuto);
//     let valorDeCuota = autoAComprar.precio / autoAComprar.cuotas;
//     // let unaPersona = personas
//     // let valorDeCuota = autosEnVenta.forEach(auto => {
//     //     let montoCuota = auto.precio / auto.cuotas
//     //     return montoCuota
//     // });
//   console.log("cuota", valorDeCuota, " precio del auto: ", autoAComprar.precio)
//   console.log('capacidad de pago en cuota: ', unaPersona.capacidadDePagoEnCuotas)
// //   console.log('capacidad de pago total ')
//    console.log( " capacidad de pago total ", unaPersona.capacidadDePagoTotal)
//   if (unaPersona.capacidadDePagoEnCuotas > valorDeCuota && unaPersona.capacidadDePagoTotal >= autoAComprar.precio){
//          return true
//     }  
    // else {
    //     return false
    // }  
    let valorDeCuota = unAuto.precio / unAuto.cuotas;
    if (unaPersona.capacidadDePagoEnCuotas >= valorDeCuota && unaPersona.capacidadDePagoTotal >= unAuto.precio){
        return true
   }  
   else {
       return false
   }  
   }  
}

console.log(concesionaria.puedeComprar(        {
    marca: 'Toyota',
    modelo: 'Corolla',
    precio: 200000,
    km: 0,
    color: 'Blanco',
    cuotas: 14,
    anio: 2019,
    patente: 'JJK116',
    vendido: false
}, {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }))