

const autos = require('./autos.js') /* requerir módulo autos */

const concesionaria = {
   autos,
   buscarAuto: function (patente) {
       for (let i = 0; i < autos.length; i++){
       if (autos[i].patente === patente){
           return autos[i]
       } else {
           return null
       }
       }
   },
   venderAuto: function (patente){
           this.buscarAuto(patente).vendido = true
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
 } 
}
console.log(concesionaria.autosNuevos())