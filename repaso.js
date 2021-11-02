

let autos = [
    {
        marca:"Ford",
        modelo: "Fiesta",
        precio: 150000,
        color: "Azul",
        km: 200,
        cuotas: 12 ,
        anio: 2019,
        patente: "APL123",
        vendido: false,
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 100000,
        color: "Blanco",
        km: 0,
        cuotas:14 ,
        anio: 2019,
        patente: "JJK116",
        vendido: false,
    }
    
]

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}


const concesionaria = {
    autos: autos,
    persona: persona,
    buscarAuto: function(patente){
        const autoBuscado = this.autos.find(auto => auto.patente === patente); return autoBuscado? autoBuscado: null;
        
    },  
    venderAuto: function (patente) {
        const autoPatente = this.buscarAuto(patente)
        this.autos.forEach(auto => (auto.patente === autoPatente.patente) && (auto.vendido = true))
    },
    autosParaLaVenta: function(){
        return this.autos.filter(auto => (auto.vendido === false))
        
    },
    autosNuevos: function (){
        return this.autosParaLaVenta().filter(auto=>auto.km <=100)
        
    }, 
    
    listaDeVentas: function(){
        const vendidos = this.autos.filter(auto=>auto.vendido)
        return vendidos.map(auto=> auto.precio)
    },
    totalDeVentas: function(){
        return ventas = this.listaDeVentas().reduce((num,precio)=> num + precio,0)
    },
    puedeComprar: function(autos, persona){
        const tieneCapacidadDePagoEnCuotas = persona.capacidadDePagoEnCuotas>= autos.precio / autos.cuotas
        const tieneCapacidadDePagoTotal = persona.capacidadDePagoTotal >= autos.precio
        return tieneCapacidadDePagoTotal && tieneCapacidadDePagoEnCuotas; 
    },
    autosQuePuedeComprar: function(persona){
        return this.autosParaLaVenta(autos).filter(auto => this.puedeComprar(auto,persona));
    }
}
