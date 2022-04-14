//"use strict";

/* 	Capitulo 10
	Control de Flujo y manejo de errores.
	
	-Sentencias de bloque.

		let nombre = "Pedro"
			{
				let nombre = "Juan"
				alert(nombre)
			}
		alert(nombre)

	-Sentencias de control de flujo
		(if, else if, else, switch)...



// Veamos como funciona Switch...

let fruta = "Mandarina";

switch(fruta){
	case "Manzana": 
		console.log("$200 el kg");
		break;
	case "Banana":
		console.log("$250 el kg");
		break;
	case "Naranja":
		console.log("$150 el kg");
		break;
	default: console.log("No hay datos");		
}

 -Sentencias de manejo de excepciones.

	- Sintaxis
	- Objeto Error
	- Catch... try (condicional e incondicional)
	- Sentencia Throw
	- Finally


function asdasd(txt) {
	alert(txt);
}

try {
	throw { "Error desde Throw";
} catch(error) {
	alert(error);
} finally {
	alert("Esto se ejecuta si o si");
}
*/

// Personal Project!

class trabajo {
	constructor (usuario,nombre,tipo,cantidad,partes) {
		this.usuario = usuario;
		this.tipo = tipo;
		this.cantidad = cantidad;
		this.nombre = nombre;
		this.partes = []
	}

}


class interior {
	constructor (nombre,tipo,cantidad,alto,ancho,pags,coloresFrente,coloresDorso,material) {
		this.nombre = nombre;
		this.tipo = tipo;
		this.cantidad = cantidad;
		this.alto = alto;
		this.ancho = ancho;
		this.pags = pags;
		this.coloresFrente = coloresFrente;
		this.coloresDorso = coloresDorso;
		this.material = material;
		this.lomo = Math.ceil(Math.ceil(parseInt(pags) / 2 ) * ((parseInt(material.altoResma))/500));
		this.formato = ancho + " x " + alto;
		this.orientacion = this.orientacionDePagina();
		this.totalPags = this.cantidad * this.pags;
		this.printer = impresoras.filter(impresora => impresora.colores == Math.max(coloresFrente,coloresDorso));
		this.formatosDisponibles = this.printer[0].formatos;
		this.anchoDeTapaSinSolapas = this.lomo + (this.ancho * 2);
		this.anchoDeTapaConSolapas = this.lomo + (this.ancho * 2) + 160;
		};

	orientacionDePagina() {
		let orientacion;
		if (parseInt(this.ancho ) < parseInt(this.alto)) {
			orientacion = "Vertical";
		} else if (parseInt(this.ancho ) > parseInt(this.alto)) {
			orientacion = "Apaisado"
		} else if (parseInt(this.ancho ) == parseInt(this.alto)) {
			orientacion = "Cuadrado"
		} return orientacion;
		};

	calcularCortes() {
		for (let f of this.formatosDisponibles) {
				
		};
	};

	};

class tapa {
	constructor (id,alto,ancho,solapaTapa,solapaContra,material,laminado,coloresFrente,coloresDorso) {
		this.alto = alto;
		this.ancho = ancho;
		this.solapaTapa = solapaTapa;
		this.solapaContra = solapaContra;
		this.material = material;
		this.laminado = laminado;
		this.coloresFrente = coloresFrente;
		this.coloresDorso = coloresDorso;
	}
};

class Revista {
	constructor (identificador,alto,ancho,pags,coloresFrente,coloresDorso,material) {
		this.identificador = identificador;
		this.alto = alto;
		this.ancho = ancho;
		this.pags = (pags % 4 > 0)?alert("El numero de paginas debe ser multiplo de 4"):pags;
		this.coloresFrente = coloresFrente;
		this.coloresDorso = coloresDorso;
		this.material = material;
		this.formato = ancho + " x " + alto;
		this.orientacion = this.orientacionDePagina();

	};

	orientacionDePagina() {
		let orientacion;
		if (parseInt(this.ancho ) < parseInt(this.alto)) {
			orientacion = "Vertical";
		} else if (parseInt(this.ancho ) > parseInt(this.alto)) {
			orientacion = "Apaisado"
		} else if (parseInt(this.ancho ) == parseInt(this.alto)) {
			orientacion = "Cuadrado"
		} return orientacion;
		};

};

class material {
	constructor (tipoPapel,gramaje,marca,anchoPlana,largoPlana,fibra,altoResma){
		
		this.tipoPapel = tipoPapel;
		this.gramaje = gramaje;
		this.marca = marca
		this.anchoPlana = anchoPlana;
		this.largoPlana = largoPlana;
		this.fibra = fibra;
		this.altoResma = altoResma;
	}

	howManyOf(formato) {
		calcularMejorCorte(this.anchoPlana,this.largoPlana,formato.x,formato.y)

	}
};

class terminacion {
	constructor (proceso,costo) {
		this.proceso = proceso;
		this.costo = costo;
	}
};

class formato {
	constructor (Nombre,x,y) {
		this.nombre = Nombre;
		this.x = x;
		this.y = y;
	}
};

const formatos = [
	a3 = new formato("A3",420,297),
	a4 = new formato("A4",297,210),
	carta = new formato("Carta",279.4,215.9),
	oficio = new formato("Oficio",215.9,355.6),
	tabloide = new formato("Tabloide",431.8,279.4),
	iD_488x330 = new formato("488x330",488,330),
	iD_360x290 = new formato("360x290",360,290),
	iD_470x320 = new formato("470x320",470,320),
	iD_432x320 = new formato("432x320",432,320),
	iD_648x315 = new formato("648x315",648,315),
	iD_650x340 = new formato("650x340",650,340),
	iD_650x358 = new formato("650x358",650,358),
	iD_508x358 = new formato("508x358",508,358),
	iD_508x240 = new formato("508x240",508,240),
	iD_350x250 = new formato("350x250",350,250),
	iD_215x315 = new formato("215x315",215,315)

]


class impresora {
	constructor (Nombre,Colores,xMinimo,xMaximo,yMinimo,yMaximo,PPM,ValorCopia) {
		this.nombre = Nombre;
		this.colores = Colores;
		this.xMin = xMinimo;
		this.xMax = xMaximo;
		this.yMin = yMinimo;
		this.yMax = yMaximo;
		this.ppm = PPM;
		this.valorCopia = ValorCopia;
		this.formatos = formatos.filter(f => Math.max(f.x,f.y) <= this.xMax && Math.min(f.x,f.y) >= this.xMin && Math.min(f.x,f.y) <= this.yMax && Math.max(f.x,f.y) >= this.yMin);
	}


};



const tiposDeTrabajos = ["Libro","Revista","Anillado","Sin Encuadernacion","Multipagina","Cosido a Hilo"]

const materiales = [
	Obra_80 = new material("Obra",80,"Boreal",650,950,950,57),
	Obra_70 = new material("Obra",70,"Boreal",650,950,950,50),
	Obra_90 = new material("Obra",90,"Boreal",650,950,950,62),
	Obra_120 = new material("Obra",120,"Boreal",650,950,950,70),
	Obra_180 = new material("Obra",180,"Boreal",650,950,950,73),
	Bookcell_80 = new material("Bookcell",80,"Boreal",650,950,950,60),
	Bookcell_65 = new material("Bookcell",65,"Boreal",650,950,950,54),
	Nat_75 = new material("Nature",75,"Ledesma",650,950,950,58),
	IlustMate_120 = new material("Encapado Mate",120,"Suzano",650,950,950,52),
	IlustMate_150 = new material("Encapado Mate",150,"Suzano",650,950,950,55),
	IlustMate_170 = new material("Encapado Mate",170,"Suzano",650,950,950,58),
	IlustMate_270 = new material("Encapado Mate",270,"Suzano",720,1020,1020,64),
	IlustMate_350 = new material("Encapado Mate",350,"Suzano",650,950,950,67),
	IlustBrillo_120 = new material("Encapado Brillo",120,"Suzano",650,950,950,52),
	IlustBrillo_150 = new material("Encapado Brillo",150,"Suzano",650,950,950,55),
	IlustBrillo_170 = new material("Encapado Brillo",170,"Suzano",650,950,950,58),
	autoadhesivoIlust = new material("Autoadhesivo Ilustracion",150,"Support",500,700,700,62),
	oppBlanco = new material("OPP Blanco",150,"Support",500,700,700,62),
	oppTransparente = new material("OPP Transparente",150,"Support",500,700,700,62)
]


const impresoras = [
	nuvera314 = new impresora("Nuvera 314",1,200,490,200,320,314,2),
	nuvera157 = new impresora("Nuvera 157",1,200,470,200,320,157,2),
	iGen = new impresora("iGen V",4,200,660,200,360,150,5),
	versant80 = new impresora("Versant 80",4,150,488,120,330,80,5),
	versant180 = new impresora("Versant 180",4,150,488,120,330,80,5),
]



const procesosTerminacion = [
	guillotinado = new terminacion ("Guillotinado","Tiempo"),
	laminado = new terminacion ("laminado","Unidad"),
	troquelado = new terminacion ("Troquelado", "Tiempo"),
	medioCorte = new terminacion ("Medio Corte", "Tiempo"),
]

const materialesSeleccion = document.getElementById("material");

let trabajoNuevo = [];
let savedJobs = [];

window.addEventListener("load",(e)=>{
	for (mat of materiales) {
		
		crearDocFrag("#material","Option",`${mat.tipoPapel} ${mat.gramaje} (${mat.marca})`);
	};
	for (tipo of tiposDeTrabajos) {
		
		crearDocFrag("#tipoTrabajo","Option",`${tipo}`);
	};
	savedJobs = leerObjeto("Trabajos",trabajosDB,0);

	console.log(savedJobs);
	e.preventDefault();
});


window.addEventListener("DOMContentLoaded",(e)=>{
	for (pro of procesosTerminacion) {
		crearDocFrag(".terminacion", "div",`<input type="checkbox" id="${pro.proceso}"><p>${pro.proceso}</p>`);
	}
	e.preventDefault();
});	

var btnEnviar = document.getElementById("enviar");
var ident = document.getElementById("descripcion");
var tipoTrabajo = document.getElementById("tipoTrabajo");
var cantidad = document.getElementById("cantidad");
var coloresFrente = document.getElementById("coloresFrente");
var coloresDorso = document.getElementById("coloresDorso");
var alto = document.getElementById("alto");
var ancho = document.getElementById("ancho");
var pags = document.getElementById("paginas");
var materialSeleccionado = document.getElementById("material");
var papelElegido

let colores

/*for (let i = 0; i < impresion.length; i++) {
	impresion[i].addEventListener("change", ()=> {
	colores = impresion[i].value;
	console.log(colores);
	})
};*/


materialSeleccionado.addEventListener("change",(e)=>{
	for (mat of materiales) {
		if (materialSeleccionado.value.includes(mat.tipoPapel + " " + mat.gramaje)) {
		papelElegido = mat
		};
	}; return papelElegido;

});



function validarForm() {
		let error
		

		let max = 300, min = 60, pagMax = 1000, pagMin = 20;

		switch(tipoTrabajo.value) { //"Libro","Revista","Anillado","Sin Encuadernacion","Multipagina","Cosido a Hilo"
			case "Libro" :
				max = 315; min = 50; pagMax = 1000; pagMin = 20;
				break;
			case "Revista":	
				max = 300; min = 70; pagMax = 64; pagMin = 4;
				break;
			case "Anillado":	
				max = 356; min = 100; pagMax = 900; pagMin = 20;
				break;
			case "Sin Encuadernacion":	
				max = 650; min = 20; pagMax = 999999; pagMin = 1;
				break;
			case "Multipagina":	
				max = 650; min = 20; pagMax = 999999; pagMin = 1;
				break;
			case "Cosido a Hilo":
				max = 300; min = 100; pagMax = 900; pagMin = 20;
				break;
			default :	
				max = 356; min = 100; pagMax = 900; pagMin = 20;	 	  	 	
		}
		
		if (tipoTrabajo.value == "Tipo de producto") {
			error = "Elija el tipo de Producto";
			tipoTrabajo.classList.add("inputError");
		} else if (ident.value.length == 0) {
			error = "Ingrese el nombre de la parte o trabajo"
			ident.classList.add("inputError");
		} else if (cantidad.value <= 0) {
			error = "Ingrese cantidad de impresiones"
			cantidad.classList.add("inputError");
		} else if (pags.value <= 0) {
			error = "Ingrese cantidad de Paginas"
			pags.classList.add("inputError");
		} else if (pags.value < pagMin || pags.value > pagMax) {
			error = `Este tipo de trabajo no puede contener menos de ${pagMin} paginas ni mas de ${pagMax}`
			pags.classList.add("inputError");
		} else if (tipoTrabajo.value == "Revista" && ((pags.value % 4) > 0)) {
			error = "El numero de paginas debe ser multiplo de 4"
		} else if (coloresFrente.value < 0 || coloresFrente.value > 7) {
			error = "Elija 1 color para blanco y negro, 4 para CMYK. Puede añadri hasta 3 colores especiales."
			coloresFrente.classList.add("inputError");
		} else if (coloresDorso.value < 0 || coloresDorso.value > 7) {
			error = "Elija 1 color para blanco y negro, 4 para CMYK. Puede añadri hasta 3 colores especiales."
			coloresDorso.classList.add("inputError");
		} else if (materialSeleccionado.value == "Material" || materialSeleccionado == undefined) {
			error = "Seleccione el material"
			materialSeleccionado.classList.add("inputError");
		} else if (ancho.value.length == 0) {
			error = "Ingrese ancho del trabajo"
			ancho.classList.add("inputError");
		} else if (ancho.value < min || ancho.value > max) {
			error = `El ancho del trabajo debe estar entre ${min} y ${max} mm`
			ancho.classList.add("inputError");
		} else if (alto.value.length == 0) {
			error = "Ingrese alto del trabajo"
			alto.classList.add("inputError");
		} else if (alto.value < min || alto.value > max) {
			error = `El alto del trabajo debe estar entre ${min} y ${max} mm`
			alto.classList.add("inputError");
		};

		if (error == undefined) {
			let pifiados = document.querySelectorAll(".inputError");

			for (err of pifiados) {
				err.classList.remove("inputError");
			}
			
			informarProducto(tipoTrabajo.value);
		
		} else {
			alert(error);
		}

};


let n = 0;

function informarProducto(prod) {
	n = n + 1;
	
	prod = new interior(ident.value, 
						tipoTrabajo.value,
						parseInt(cantidad.value),
						parseInt(alto.value),
						parseInt(ancho.value),
						parseInt(pags.value),
						parseInt(coloresFrente.value),
						parseInt(coloresDorso.value),
						papelElegido);
	
	crearDocFragConClase(".secContainer","div",`<div class="zonaDeArrastre" id="arrastre_${n}">${prod.nombre}<div class="botonMin" id="btnMin_${n}">-</div><div class="botonCerrar" id="btnCierre_${n}">X</div></div><br>Lomo: ${prod.lomo}<br>Formato: ${prod.formato} ${prod.orientacion}<br>Material: ${prod.material.tipoPapel}  ${prod.material.gramaje}<br>Ancho de tapa con solapas: ${prod.anchoDeTapaConSolapas}<br>Ancho de tapa sin solapas: ${prod.anchoDeTapaSinSolapas}`,"verde","xy",`resultado_${n}`);
	trabajoNuevo.push(prod);

	agregarObjetos(prod,"Trabajos",trabajosDB);

	leerObjetos("Trabajos",trabajosDB);



	//-------- Cerrar ventana -- ya fue...

	let clickParaCerrar = document.getElementById(`btnCierre_${n}`); 

	let clickParaMin = document.getElementById(`btnMin_${n}`); 

	let ventanaACerrar = document.getElementById(`resultado_${n}`);

	clickParaMin.addEventListener("click",()=> {

		let minBtn = document.getElementById(`btnMin_${n}`);
		let ventana = document.getElementById(`btnMin_${n}`).parentElement.parentElement;


		if (ventana.classList.contains("verdeMin")) {
			ventana.classList.remove("verdeMin");
			minBtn.innerHTML = "-";
			
		} else {
			ventana.classList.add("verdeMin")
			minBtn.innerHTML = "+";
		}

	})


	clickParaCerrar.addEventListener("click", () => {
		removeGrandParent(clickParaCerrar)
		let num = (clickParaCerrar.getAttribute("id").substring(10));

		console.log(num);


		trabajoNuevo.splice((num - 1), 1);
	});	

}



let formu = document.getElementById("interiorForm");

let btnCerrar = document.getElementById("btnCierre");

btnEnviar.addEventListener("click",(e)=>{
		e.preventDefault();
		validarForm();
		console.log(trabajoNuevo);
		moverVentana(`#resultado_${n}`,`#arrastre_${n}`);
		});
		
btnCerrar.addEventListener("click", (e)=>{
    e.preventDefault();
    removeGrandParent(btnCerrar);
});

const btnImpose = document.getElementById("impose");

btnImpose.addEventListener("click",(e)=> {
	e.preventDefault();
	prod = new interior(ident.value, 
						tipoTrabajo.value,
						parseInt(cantidad.value),
						parseInt(alto.value),
						parseInt(ancho.value),
						parseInt(pags.value),
						parseInt(coloresFrente.value),
						parseInt(coloresDorso.value),
						papelElegido);


	replaceDocFragConClase(".formulario","select",`<option>Elegir formato</option>`,"selFormat","btn","formatoElegido")
	for (f of prod.formatosDisponibles) {
		crearDocFrag("#formatoElegido","option",f.nombre);
	}
	sf = document.getElementById("formatoElegido");

	

	sf.addEventListener("change",(e)=>{
		e.preventDefault();

		let minBtn = document.getElementById("btnMin");
		let ventana = document.getElementById("contCanvas");


		if (ventana.classList.contains("verdeMin")) {
			ventana.classList.remove("verdeMin");
			minBtn.innerHTML = "-";
			
		};


		
		const dibujar = ()=> {
			let f
			for (fd of prod.formatosDisponibles) {
				if (sf.value == fd.nombre) {
					f = fd

				}
			}
			dibujarMejorCorte(f.x,f.y,prod.ancho,prod.alto);
			calcularCortePlana(prod.material,f.x,f.y); //retorna poses
			calcularMejorCorte(f.x,f.y,prod.alto,prod.ancho);//retorna n
			let resultado = n; //esto es para no reemplazar el retorno "resultado" que viene de la funcion corteFinal. Usamos n para usar la funcion calcularMejorCorte
			let hojas = (prod.coloresDorso > 0) ? prod.pags / 2 : prod.pags;
   			let tirada = Math.ceil(prod.cantidad / resultado);
   			let pliegos = hojas * tirada;
   			let pliegosPlana = Math.ceil(pliegos / poses);

			//console.log(`f.x: ${f.x} - f.y: ${f.y}`)

   			//replaceDocFragConClase("#contCanvas","div",("Lomo: " + prod.lomo + " Ancho de Tapa: " + prod.anchoDeTapaSinSolapas + " - Con Solapas: " + prod.anchoDeTapaConSolapas),"info","data","infoData");
   			if (resultado == 0) {
   				//console.log("No entra, la puta madre")
   				replaceDocFragConClase("#contCanvas","div",(`${prod.nombre} no cabe en ${f.nombre}`),"info","resultados","infoResult");
   			
   			} else {
   				//console.log("LTA puto!")
   				replaceDocFragConClase("#contCanvas","div",(`Hojas ${hojas} - Poses: ${resultado} - Tirada: ${tirada} - Pliegos: ${pliegos} - Pliegos Plana: ${pliegosPlana} (salen ${poses} de ${prod.material.anchoPlana} x ${prod.material.largoPlana})`),"info","resultados","infoResult");
   			
   			}
   			
		}

		dibujar();

		
		
		
	})

})


//___________________________Calculo de posado_______________________________


function calcularCortePlana (papelElegido,anchoTrabajo,altoTrabajo) {
		
		let xPoses_1 = Math.floor(papelElegido.anchoPlana / parseInt(anchoTrabajo));
		let yPoses_1 = Math.floor(papelElegido.largoPlana / parseInt(altoTrabajo));
		let totalPoses_1 = xPoses_1 * yPoses_1;
		
		let xPoses_2 = Math.floor(papelElegido.largoPlana / parseInt(anchoTrabajo));
		let yPoses_2 = Math.floor(papelElegido.anchoPlana / parseInt(altoTrabajo));
		let totalPoses_2 = xPoses_2 * yPoses_2;
		
		let totalPoses = Math.max(totalPoses_1,totalPoses_2)		


		//console.log(`Entran ${xPoses_1} en los ${papelElegido.anchoPlana} de ancho de la resma, por ${yPoses_1} en los ${papelElegido.largoPlana} que tiene de alto la resma. Total: ${totalPoses}`);
		//console.log(`Salen ${totalPoses} pliegos`);

		return poses = totalPoses;
};

let pliegosTotales = ()=> {

	let tirada = Math.ceil(cantidad.value / poses);

	(Math.ceil(parseInt(pags.value) / 2) * tirada);

}

function optimizarCorte (x1,y1,x2,y2) {
		
		let xPoses = Math.floor(x1 / parseInt(x2));

		let yPoses =Math.floor(y1 / parseInt(y2));

		let poses = xPoses * yPoses;

		let xResto = x1 % x2;
		
		let yResto = y1 % y2;

		
		let masPoses
		
		if (y2 <= xResto && x2 < y1) {
			calcularMejorCorte(xResto,y1,x2,y2);

			masPoses = n;
			
		} else if (x2 <= yResto && y2 < x1) {
			calcularMejorCorte(yResto,x1,x2,y2);
			masPoses = n;
		} else {
			masPoses = 0;
		};


		totalPoses = parseInt(poses) + parseInt(masPoses);		


		/*console.log(`Mas Poses = ${masPoses}`);
		console.log(`Total = ${totalPoses}`)*/

		return totalPoses;

};

const calcularMejorCorte = (x1,y1,x2,y2)=> {

		let xPoses1 = Math.floor(x1 / parseInt(x2));
		let yPoses1 = Math.floor(y1 / parseInt(y2));
		let xPoses2 = Math.floor(x1 / parseInt(y2));
		let yPoses2 = Math.floor(y1 / parseInt(x2));

		let n1 = xPoses1 * yPoses1;
		let n2 = xPoses2 * yPoses2;
		n = Math.max(n1,n2);
		//console.log(`Entran ${n}`);

		return n;
};


function corteFinal (x1,y1,x2,y2,margen = 5,calle = 2) {
	x1 = x1 - margen;
	y1 = y1 - margen;
	x2 = x2 + (calle/2);
	y2 = y2 + (calle/2);
	let a = optimizarCorte(x1,y1,x2,y2);
	let b = optimizarCorte(x1,y1,y2,x2);
	resultado = Math.max(a,b);
	
	
	//console.log(`RESULTADO FINAL: ${resultado} en ${x1 + margen} x ${y1 + margen}`);
	return resultado
};


const dibujarMejorCorte = (x1,y1,x2,y2)=> {

		let xPoses1 = Math.floor(x1 / parseInt(x2));
		let yPoses1 = Math.floor(y1 / parseInt(y2));
		let xPoses2 = Math.floor(x1 / parseInt(y2));
		let yPoses2 = Math.floor(y1 / parseInt(x2));

		let n1 = xPoses1 * yPoses1;
		let n2 = xPoses2 * yPoses2;
		n = Math.max(n1,n2);
		//console.log(`Entran ${n}`);

		ctx.clearRect(0,0,700,400);

		let izq = (700 - x1)/2;
		let top = (400 - y1)/2;


		ctx.strokeStyle = "#fff";
		ctx.strokeWidth = "1"
		ctx.strokeRect(izq,top,x1,y1);

		ctx.strokeStyle = "#ff3";


		
		if (n1 >= n2 && n1 > 0) {
			top = top - y2;
			for (let h = 0; h < yPoses1; h++){
				top = top + y2;
				for (let i = 0; i < xPoses1; i++) {
				ctx.strokeRect(izq + ((x1-((x2 * xPoses1)))/2) + (x2 * i),top + ((y1-(y2*yPoses1))/2),x2,y2)

				}
			}
			
		} else if (n2 > n1 && n2 > 0){
			top = top - x2;
			for (let h = 0; h < yPoses2; h++){
				top = top + x2;
				for (let i = 0; i < xPoses2; i++) {
				ctx.strokeRect(izq + ((x1-((y2 * xPoses2)))/2) + (y2 * i),top + ((y1-(x2*yPoses2))/2),y2,x2);

				}
			}
			
		} else if (n1 == 0 && n2 == 0) { 
				console.log("Ahora el dibujo deberia ser rojo")
				ctx.clearRect(0,0,700,400);
				ctx.strokeStyle = "#F00";
				ctx.strokeWidth = "3"
				ctx.strokeRect(izq,top,x1,y1);

		};
		
		
		//ctx.fillRect(izq + ((x1-x2)/2),top + ((y1-y2)/2),x2,y2);


		return n;
};

//___________________________ I D B _______________________________


/*const testIDB = window.indexedDB.open("testDataBase",1);

//const jobsIDB = indexedDB.open("jobsDataBase",1);

// CRUD = create, read, update, delete

const validarIDB = dataBase => {
	dataBase.addEventListener("upgradeneeded",()=>{
		console.log(`${dataBase.result.name} creada exitosamente`);
		const mxmDB = dataBase.result;
		mxmDB.createObjectStore("Almacen",{
			autoIncrement: true
		});
	});

	dataBase.addEventListener("success",()=>{
		console.log(`${dataBase.result.name} cargada exitosamente`);
	});

	dataBase.addEventListener("error",()=>{
		console.log(`ERROR con la base de datos ${dataBase}`);
	});
}

validarIDB(testIDB);
//svalidarIDB(jobsIDB);

const abrirTrans = (almacen,dataBase) => {
	const db = dataBase.result;
	const t = db.transaction(almacen,"readwrite");
	const os = t.objectStore(almacen);
	return [t,os];
};

const agregarObjetos = (objeto,almacen,dataBase) => {
	const idbData = abrirTrans(almacen,dataBase);
	idbData[1].add(objeto);
	idbData[0].addEventListener("complete",()=>{
		console.log(`Objeto agregado`)
	})
};

const leerObjetos = (almacen,dataBase)=> {
	const idbData = abrirTrans(almacen,dataBase);
	const cursor = idbData[1].openCursor();
	let arr = []
	cursor.addEventListener("success",()=>{
		if (cursor.result) {
			arr.push(cursor.result.value);
			cursor.result.continue();
		} else {
			console.log("Estos son todos los datos");
		}

	});

	return arr

};

const modificarObjetos = (objeto,dataBase,almacen,key) => {
	const idbData = abrirTrans(almacen,dataBase);
	idbData[1].put(objeto,key);
	idbData[0].addEventListener("complete",()=>{
		console.log(`Objeto modificado`)
	})
};

const eliminarObjetos = (dataBase,almacen,key) => {
	const idbData = abrirTrans(almacen,dataBase);
	idbData[1].delete(key);
	idbData[0].addEventListener("complete",()=>{
		console.log(`Objeto eliminado`)
	})
};*/



const test = (prod)=>{
	let r 
	for (f of formatos) {
		corteFinal(f.x,f.y,prod.ancho,prod.alto);
		r = resultado;
		console.log(`Formato: ${prod.formato} - Pliego: ${f.nombre} - Poses: ${r}`)
		}

};

const getItemByKey = (keyNumber,store,db)=> {
	const arr = leerObjeto(store,db);
	return arr
};

function verPosados(job,i) {
	for (f of job.formatosDisponibles) {
   		console.log("-------------------------------------")
    	corteFinal(f.x,f.y,job.alto,job.ancho);
    	calcularCortePlana(job.material,f.x,f.y);
    	console.log("-------------------------------------")
	}
	return arr
};



function informar(t) {
	
  	  for (f of t.formatosDisponibles) {
		if (corteFinal(f.x,f.y,t.alto,t.ancho) > 0) {
  		console.log("-------------------------------------")
  		console.log(t.nombre + " " + t.material.tipoPapel + " " + t.material.gramaje);  
		console.log(t.formato + " en " + f.nombre) 
   		console.log("-------------------------------------")    
   		corteFinal(f.x,f.y,t.alto,t.ancho);
   		console.log("Lomo: " + t.lomo + " Ancho de Tapa: " + t.anchoDeTapaSinSolapas + " - Con Solapas: " + t.anchoDeTapaConSolapas);
   		calcularCortePlana(t.material,f.x,f.y);
   		let hojas = (t.coloresDorso > 0) ? t.pags / 2 : t.pags;
   		let tirada = Math.ceil(t.cantidad / resultado);
   		let pliegos = hojas * tirada;
   		let pliegosPlana = Math.ceil(pliegos / poses);
   		console.log(`Hojas ${hojas} - Poses: ${resultado} - Tirada: ${tirada} - Pliegos: ${pliegos} - Pliegos Plana: ${pliegosPlana}`);
   		console.log("-------------------------------------")
	} else {
		console.log(t.formato + " no entra en " + f.nombre)
	}
		} 
	
};


// ----------------- CANVAS ----------------------

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

