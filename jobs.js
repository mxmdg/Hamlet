
class trabajo {
	constructor (usuario,nombre,tipo,cantidad,partes) {
		this.usuario = usuario;
		this.tipo = tipo;
		this.cantidad = cantidad;
		this.nombre = nombre;
		this.partes = []
	}

};

// Clases de partes:

class Interior {
	constructor (nombre,tipo,alto,ancho,pags,coloresFrente,coloresDorso,material) {
		this.nombre = nombre;
		this.tipo = tipo;
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

class Tapa {
	constructor (nombre,alto,ancho,solapaTapa,solapaContra,material,laminado,coloresFrente,coloresDorso) {
		this.nombre = nombre;
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

class Folleto {
	constructor (nombre,alto,ancho,material,laminado,coloresFrente,coloresDorso) {
		this.nombre = nombre;
		this.alto = alto;
		this.ancho = ancho;
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
	tabloide = new formato("Tabloide",431.8,215.9),
	iD_488x330 = new formato("488x330",488,330),
	iD_470x320 = new formato("470x320",470,320),
	iD_432x320 = new formato("432x320",432,320),
	iD_648x315 = new formato("648x315",648,315),
	iD_650x340 = new formato("650x340",650,340),
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

const tiposDePartes = [];

tiposDePartes.push(Tapa,Interior,Folleto)

const materiales = [
	Obra_80 = new material("Obra",80,"Boreal",650,950,950,57),
	Obra_70 = new material("Obra",70,"Boreal",650,950,950,50),
	Obra_90 = new material("Obra",90,"Boreal",650,950,950,62),
	Obra_120 = new material("Obra",120,"Boreal",650,950,950,70),
	Bookcell_80 = new material("Bookcell",80,"Boreal",650,950,950,60),
	Bookcell_65 = new material("Bookcell",65,"Boreal",650,950,950,54),
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

window.addEventListener("load",(e)=>{
		for (tipo of tiposDeTrabajos) {
		
		crearDocFrag("#jobType","Option",`${tipo}`);
	};
	e.preventDefault();
});

let jt = document.getElementById("jobType");

let id = document.getElementById("jobName");

let qt = document.getElementById("quantity");

let nw = document.getElementById("newJob");

const currentJob = ()=> {
	let cj = new trabajo (navigator.appCodeName,id.value,jt.value,qt.value,[]);
	 console.log(cj);
	 agregarObjetos(cj,"Trabajos",trabajosDB);
	 return cj
}


function validarForm() {
		
		let error;

		if (jt.value == "Tipo de producto") {
			error = "Elija el tipo de Producto";
			jt.classList.add("inputError");
		} else if (id.value.length == 0) {
			error = "Ingrese el nombre de la parte o trabajo"
			id.classList.add("inputError");
		} else if (qt.value <= 0) {
			error = "Ingrese cantidad de impresiones"
			qt.classList.add("inputError");
		};

		if (error == undefined) {
			let pifiados = document.querySelectorAll(".inputError");

			for (err of pifiados) {
				err.classList.remove("inputError");
			}
			
			currentJob();
			crearDocFrag(".formulario","select","Agregar parte");
			for (p of tiposDePartes) {
				let contenedor = document.getElementById("interiorForm").lastElementChild
				let n = document.createElement("option");
				let op = document.createTextNode(p.name);
   				n.appendChild(op);
   				contenedor.appendChild(n);
   			};
   			nw.replaceWith(nw.cloneNode(true))
   			nw.classList.replace("button__ON","button__OFF");
   			mw.addEventListener("load", (e)=>{
   				e.preventDefault();
   			})

		
		} else {

			alert(error);
		}

};

nw.addEventListener("click",(e)=>{
		e.preventDefault();
		validarForm();
		console.log("Trabajo Nuevo:" + trabajoNuevo);
		//moverVentana(`#resultado_${n}`,`#arrastre_${n}`);
		});
		