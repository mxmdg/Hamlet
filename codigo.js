// Personal Project!


class interior {
	constructor (orden,cliente,nombre,tipo,cantidad,alto,ancho,pags,coloresFrente,coloresDorso,material) {
		this.orden = orden;
		this.cliente = cliente;
		this.nombre = nombre;
		this.tipo = tipo;
		this.cantidad = cantidad;
		this.alto = alto;
		this.ancho = ancho;
		this.pags = pags;
		this.coloresFrente = coloresFrente;
		this.coloresDorso = coloresDorso;
		this.colores = (coloresFrente + "/" + coloresDorso);
		this.material = material;
		this.soporte = this.material.Nombre;
		this.lomo = Math.ceil(Math.ceil(parseInt(pags) / 2 ) * ((parseInt(material.altoResma))/500));
		this.formato = ancho + " x " + alto;
		this.orientacion = this.orientacionDePagina();
		this.totalPags = this.cantidad * this.pags;
		this.printer = impresoras.filter(impresora => impresora.colores == Math.max(coloresFrente,coloresDorso));
		this.formatosDisponibles = this.printer[0].formatos.filter(f => Math.max(f.x, f.y) > Math.max(this.ancho, this.alto) && Math.min(f.x, f.y) > Math.min(this.ancho, this.alto));
		this.anchoDeTapaSinSolapas = this.lomo + (this.ancho * 2);
		this.anchoDeTapaConSolapas = this.lomo + (this.ancho * 2) + 160;
		this.peso = (this.alto * this.ancho * this.material.gramaje)/1000000 * ((this.coloresDorso>0)?this.pags/2:this.pags)
		this.pesoTotal = this.peso * this.cantidad
		this.fecha = new Date();
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
		}

	impresorasDisponibles() {
		
		let impresorasPorFormato = this.printer.filter(impresora => Math.min(this.alto, this.ancho) < Math.min(impresora.xMin, impresora.yMin));
		console.log(impresorasPorFormato)
	}

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
		this.Nombre = `${tipoPapel} ${gramaje} (${marca} - ${anchoPlana}x${largoPlana})`;
		this.tipoPapel = tipoPapel;
		this.gramaje = gramaje;
		this.marca = marca
		this.anchoPlana = anchoPlana;
		this.largoPlana = largoPlana;
		this.fibra = fibra;
		this.altoResma = altoResma;
		this.peso = (this.anchoPlana * this.largoPlana * this.gramaje)/(1000*1000);
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
	iD_648x230 = new formato("648x230",648,230),
	iD_360x290 = new formato("360x290",360,290),
	iD_470x320 = new formato("470x320",470,320),
	iD_470x315 = new formato("470x315",470,315),
	iD_450x295 = new formato("450x295",450,295),
	iD_470x216 = new formato("470x216",470,216),
	iD_490x300 = new formato("490x300",490,300),
	iD_432x320 = new formato("432x320",432,320),
	iD_648x315 = new formato("648x315",648,315),
	iD_650x340 = new formato("650x340",650,340),
	iD_588x298 = new formato("588x288",588,288),
	iD_650x358 = new formato("650x358",650,358),
	iD_508x358 = new formato("508x358",508,358),
	iD_488x240 = new formato("488x240",488,240),
	iD_488x245 = new formato("488x245",488,245),
	iD_548x245 = new formato("548x245",548,245),
	iD_508x240 = new formato("508x240",508,240),
	iD_508x299 = new formato("508x299",508,299),
	iD_350x250 = new formato("350x250",350,250),
	iD_660x360 = new formato("660x360",660,360),
	tmp_210x255 = new formato("210x255",210,255),
	iD_215x315 = new formato("215x315",215,315)

]


formatos.sort((a, b) => {return parseInt(a.nombre) - parseInt(b.nombre)});



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



const tiposDeTrabajos = ["Libro","Revista","Anillado","Sin Encuadernacion","Multipagina","Cosido a Hilo"];

const tiposDePartes = ['Tapa','Interior Binder','Interior Cosido','Interior Anillado','Interior Revista','Hojas sueltas','Afiche','Señalador','Tarjeta','Etiqueta','Insert','Diptico','Triptico','Folleto','Cubierta','Guardas'];

const materiales = [
	Obra_80 = new material("Obra",80,"Boreal",650,950,950,56),
	Obra_80_Prisma = new material("Obra",80,"Prisma",650,950,950,49),
	Obra_70 = new material("Obra",70,"Boreal",650,950,950,47),
	Obra_90 = new material("Obra",90,"Boreal",650,950,950,60),
	Obra_120 = new material("Obra",120,"Celulosa",650,950,950,80),
	Obra_180 = new material("Obra",180,"Boreal",650,950,950,0),
	Obra_240 = new material("Obra",240,"Chambrill",650,950,950,0),
	Obra_300 = new material("Obra",300,"Bulk",660,960,960,0),
	Bookcell_80 = new material("Bookcell",80,"Boreal",650,950,950,60),
	Bookcell_80_590x900 = new material("Bookcell",80,"Boreal",590,900,590,60),
	Bookcell_65 = new material("Bookcell",65,"Boreal",650,950,950,47),
	Nat_75 = new material("Nature",75,"Ledesma",650,950,950,57),
	IlustMate_120 = new material("Encapado Mate",120,"Suzano",650,950,950,55),
	IlustMate_150 = new material("Encapado Mate",150,"Suzano",650,950,950,62),
	IlustMate_150_72 = new material("Encapado Mate",150,"DigiArt",720,1020,1020,56),
	IlustMate_170 = new material("Encapado Mate",170,"Suzano",650,950,950,70),
	IlustMate_270 = new material("Encapado Mate",270,"Suzano",720,1020,1020,64),
	IlustMate_300 = new material("Encapado Mate",300,"Suzano",740,1100,1100,64),
	IlustMate_350 = new material("Encapado Mate",350,"Suzano",650,950,950,67),
	IlustBrillo_120 = new material("Encapado Brillo",120,"Suzano",650,950,950,52),
	IlustBrillo_150 = new material("Encapado Brillo",150,"Suzano",650,950,950,65),
	IlustBrillo_170 = new material("Encapado Brillo",170,"Creator",650,950,950,76),
	IlustBrillo_250 = new material("Encapado Brillo",250,"Suzano",650,950,950,0),
	autoadhesivoIlust = new material("Autoadhesivo Ilustracion",150,"Support",1000,700,700,0),
	oppBlanco = new material("OPP Blanco",150,"Support",1000,700,700,0),
	oppTransparente = new material("OPP Transparente",150,"Support",1000,700,700,0),
	vegetal = new material("Vegetal",90,"",700,500,500,60),
	cartulina = new material("Cartulina",270,'',700,1000,1000,0)
]



const impresoras = [
	nuvera314 = new impresora("Nuvera 314",1,200,490,200,320,314,2),
	nuvera157 = new impresora("Nuvera 157",1,200,470,200,320,157,2),
	iGen = new impresora("iGen V",4,200,660,200,360,150,5),
	iGenBN = new impresora("iGen V - B&N",1,200,660,200,360,150,3),
	versant80 = new impresora("Versant 80",4,150,488,120,330,80,5),
	//versant180 = new impresora("Versant 180",4,150,488,120,330,80,5),
	versant3100 = new impresora("Versant 80",4,150,660,120,330,100,4),
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
	materialesSorted = materiales.sort();
	for (mat of materialesSorted) {
		
		crearDocFrag("#material","Option",`${mat.Nombre}`);
	};

	for (tipo of tiposDeTrabajos) {
		
		crearDocFrag("#tipoTrabajo","Option",`${tipo}`);
	};

	for (tipo of tiposDePartes) {
		
		crearDocFrag("#Partes","Option",`${tipo}`);
	};

	for (pro of procesosTerminacion) {
		crearDocFrag(".terminacion", "div",`<input type="checkbox" id="${pro.proceso}"><p>${pro.proceso}</p>`);
	};
	
	let arroyo = ()=> {
    let resultado = leerObjeto("Trabajos",trabajosDB);
    resultado.then(r=>{
        //console.log(r)
        savedJobs = r;
        });
    resultado.catch(err => alert(err))
	}

	setTimeout(arroyo,2500)

	prodListMin.addEventListener("click",(e)=> {
		console.log(`Click en ${e.target}`)

		let minBtn = e.target;
		let ventana = minBtn.parentElement.parentElement;


		if (ventana.classList.contains("verdeMin")) {
			ventana.classList.remove("verdeMin");
			minBtn.innerHTML = "ᐯ";
			
		} else {
			ventana.classList.add("verdeMin")
			minBtn.innerHTML = "ᐱ";
		}

	})


	//resultado.catch(err=> alert(err));

	//console.log(savedJobs);
	e.preventDefault();
});


const btnEnviar = document.getElementById("enviar");
const orden = document.getElementById("orden");
const cliente = document.getElementById("cliente");
const ident = document.getElementById("descripcion");
const tipoTrabajo = document.getElementById("tipoTrabajo");
const partes = document.getElementById("Partes");
const cantidad = document.getElementById("cantidad");
const coloresFrente = document.getElementById("coloresFrente");
const coloresDorso = document.getElementById("coloresDorso");
const alto = document.getElementById("alto");
const ancho = document.getElementById("ancho");
const pags = document.getElementById("paginas");
const materialSeleccionado = document.getElementById("material");
const prodListMin = document.getElementById("prodListMin");
let papelElegido

const cargarDatos = (n) => {
	tipoTrabajo.value = n.tipo;
	cliente.value = n.cliente;
	orden.value = n.orden;
	partes.value = n.nombre.split('-')[1].trim();
	ident.value = n.nombre.split('-')[0];
	cantidad.value = n.cantidad;
	coloresFrente.value = n.coloresFrente;
	coloresDorso.value = n.coloresDorso;
	alto.value = n.alto;
	ancho.value = n.ancho;
	pags.value = n.pags;
	materialSeleccionado.value = `${n.material.Nombre}`;
	for (mat of materiales) {
		if (materialSeleccionado.value.includes(`${mat.Nombre}`)) {
		papelElegido = mat
		};
	}; return papelElegido;
}

materialSeleccionado.addEventListener("change",(e)=>{
	for (mat of materiales) {
		if (materialSeleccionado.value.includes(`${mat.Nombre}`)) {
		papelElegido = mat
		};
	}; return papelElegido;

});

partes.addEventListener('change',e=>{
			let tt = 'Tipo de Producto'
			switch(partes.value) { //'Interior Binder','Tapa','Interior Cosido','Interior Revista','Afiche','Señalador','Tarjeta','Insert','Diptico','Triptico','Folleto','Cubierta','Guardas'
				case 'Interior Binder': tt = "Libro";
					break;
				case 'Tapa':  tt = "Multipagina";
					break;
				case 'Interior Cosido':  tt = "Cosido a Hilo";
					break;
				case 'Interior Anillado':  tt = "Anillado";
					break;
				case 'Interior Revista':  tt = "Revista";
					break;
					case 'Hojas sueltas':  tt = "Multipagina";
					break;
				case 'Afiche':  tt = "Sin Encuadernacion";
					break;
				case 'Señalador':  tt = "Sin Encuadernacion";
					break;	
				case 'Tarjeta':  tt = "Sin Encuadernacion";
					break;	
				case 'Etiqueta':  tt = "Sin Encuadernacion";
					break;	
				case 'Insert':  tt = "Multipagina";
					break;	
				case 'Diptico':  tt = "Sin Encuadernacion";
					break;	
				case 'Triptico':  tt = "Sin Encuadernacion";
					break;	
				case 'Folleto':  tt = "Sin Encuadernacion";
					break;	
				case 'Cubierta':  tt = "Sin Encuadernacion";
					break;	
				case 'Guardas':  tt = "Sin Encuadernacion";
					break;	
											
			}
			tipoTrabajo.value = tt;
			e.preventDefault()
		});

orden.addEventListener('change', e => {
	e.preventDefault();
	console.log("antes del loop: " + orden.value);
	for (let j of savedJobs) {
		if (j.orden == orden.value) {
			console.log(j)
			console.log(orden.value)
			presentarProducto(j);
		};
	};
});

function validarForm() {
		let error
		
		let max = 300, min = 60, pagMax = 1000, pagMin = 20;

		switch(tipoTrabajo.value) { //"Libro","Revista","Anillado","Sin Encuadernacion","Multipagina","Cosido a Hilo"
			case "Libro" :
				max = 315; min = 50; pagMax = 1000; pagMin = 20;
				break;
			case "Revista":	
				max = 320; min = 70; pagMax = 68; pagMin = 4;
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
		} else if (orden.value.length == 0) {
			error = "Verifique el Nº de Orden"
			orden.classList.add("inputError");
		} else if (cliente.value.length == 0) {
			error = "Ingrese el cliente o razon social"
			cliente.classList.add("inputError");
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
			error = "El numero de paginas debe ser multiplo de 4";
			pags.classList.add("inputError");
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


let nw = 0;

function informarProducto(prod) {
	nw = nw + 1;
	
	prod = new interior(orden.value,
						cliente.value,
						(ident.value + " - " + partes.value), 
						tipoTrabajo.value,
						parseInt(cantidad.value),
						parseInt(alto.value),
						parseInt(ancho.value),
						parseInt(pags.value),
						parseInt(coloresFrente.value),
						parseInt(coloresDorso.value),
						papelElegido);
	
	crearDocFragConClase(".secContainer","div",`<div class="fixedWindow-title" id="arrastre_${nw}">
													<h4>${prod.orden} - ${prod.cliente} - ${prod.nombre}</h4>
													<div class="botonMin" id="btnMin_${nw}">_</div>
													<div class="botonCerrar" id="btnCierre_${nw}">X</div>
												</div>
													<section class="jobOrder">
														Cantidad: ${prod.cantidad}<br>
														Material: ${prod.material.tipoPapel}  ${prod.material.gramaje}<br>
														Formato: ${prod.formato} ${prod.orientacion}<br>
													</section>
													<section class="jobInfo">
														<br>Lomo: ${prod.lomo}<br>
														Ancho de tapa con solapas: ${prod.anchoDeTapaConSolapas}<br>
														Ancho de tapa sin solapas: ${prod.anchoDeTapaSinSolapas}
													</section>`,
												"fixedWindow","xy",`resultado_${nw}`);

																							
	trabajoNuevo.push(prod);



	agregarObjetos(prod,"Trabajos",trabajosDB);

	//-------- Cerrar ventana -- ya fue... no, volvió

	let clickParaCerrar = document.getElementById(`btnCierre_${nw}`); 

	let clickParaMin = document.getElementById(`btnMin_${nw}`); 

	let estaVentana = document.getElementById(`resultado_${nw}`);

	

	/* estaVentana.addEventListener("click", e=> {
		e.preventDefault();
		let otrasVentanas = document.querySelectorAll(".verde");
		for (w of otrasVentanas) {
			w.classList.remove("arriba");
		};
		e.target.classList.add("arriba");
	}); */


	clickParaMin.addEventListener("click",(e)=> {

		let minBtn = e.target;
		let ventana = minBtn.parentElement.parentElement;


		if (ventana.classList.contains("verdeMin")) {
			ventana.classList.remove("verdeMin");
			minBtn.innerHTML = "-";
			
		} else {
			ventana.classList.add("verdeMin")
			minBtn.innerHTML = "+";
		}

	})

	clickParaCerrar.addEventListener("click", () => {
		if (clickParaCerrar.getAttribute("id") === "contCanvas") {
			alert("You can't close this window");
		} else {
			removeGrandParent(clickParaCerrar)
			let num = (clickParaCerrar.getAttribute("id").substring(10));

			console.log(num);


			trabajoNuevo.splice((num - 1), 1);
		}
		
	});	

	renderJobs("Trabajos", trabajosDB);

};

function presentarProducto(prod) {
	nw = nw + 1;
	
	this.prod = prod	
	
	crearDocFragConClase(".secContainer","div",`<div class="fixedWindow-title" id="arrastre_${nw}">
													<h4>${prod.orden} - ${prod.cliente}</h4>
													<div class="botonMin" id="btnMin_${nw}">_</div>
													<div class="botonCerrar" id="btnCierre_${nw}">X</div>
												</div>
													<h4>${prod.nombre}</h4>
													<section class="jobOrder">
														Cantidad: <b>${prod.cantidad}</b><br>
														Paginas: <b>${prod.pags}</b><br>
														Material: ${prod.material.tipoPapel}  ${prod.material.gramaje}<br>
														Formato: ${prod.formato} ${prod.orientacion}<br>
														colores: ${prod.colores}
													</section>
													<form>
													<textarea class='obs' placeholder='Observaciones'></textarea>
												</form>`,
												"fixedWindow","xy",`resultado_${nw}`);

											

/* Esto es para agregar la impo en el cuadro de la parte

<canvas id="canvas_${nw}" width="400" height="300"></canvas>
<div id="buttons${nw}"><button class="button__ON" id="impo${nw}">Imponer</button></div>
*/

	//trabajoNuevo.push(prod);

	

	//-------- Cerrar ventana -- ya fue... no, volvió

	let clickParaCerrar = document.getElementById(`btnCierre_${nw}`); 

	let clickParaMin = document.getElementById(`btnMin_${nw}`); 

	let estaVentana = document.getElementById(`resultado_${nw}`);

	//---------Duplicado para ventana observaciones

	// let clickParaCerrar2 = document.getElementById(`btnCierre_${nw+100}`); 

	// let clickParaMin2 = document.getElementById(`btnMin_${nw+100}`); 

	// let estaVentana2 = document.getElementById(`resultado_${nw+100}`);

	//const impoBtn = document.getElementById(`impo${nw}`);

	/*document.getElementById(`impo${nw}`).addEventListener("click", (e, prod)=>{
		e.preventDefault();

		crearDocFragConClase(`#buttons${nw}`,"select",`<option>Elegir formato</option>`,"selFormat","btn",`formatoElegido${nw}`);

		console.log(this.prod)

		for (f of this.prod.formatosDisponibles) {
			crearDocFrag("#formatoElegido","option",f.nombre);
	}
	sf = document.getElementById(`formatoElegido${nw}`);
		
	})*/

	/* estaVentana.addEventListener("click", e=> {
		e.preventDefault();
		let otrasVentanas = document.querySelectorAll(".verde");
		for (w of otrasVentanas) {
			w.classList.remove("arriba");
		};
		e.target.classList.add("arriba");
	}); */


	clickParaMin.addEventListener("click",(e)=> {

		let minBtn = e.target;
		let ventana = minBtn.parentElement.parentElement;


		if (ventana.classList.contains("verdeMin")) {
			ventana.classList.remove("verdeMin");
			minBtn.innerHTML = "-";
			
		} else {
			ventana.classList.add("verdeMin")
			minBtn.innerHTML = "+";
		}

	})


	clickParaCerrar.addEventListener("click", () => {
		if (clickParaCerrar.getAttribute("id") === "contCanvas") {
			alert("You can't close this window");
		} else {
			removeGrandParent(clickParaCerrar)
			let num = (clickParaCerrar.getAttribute("id").substring(10));

			console.log(num);


			trabajoNuevo.splice((num - 1), 1);
		}

		
	});	

	

	//-----------Duplicado para ventana observaciones

	// clickParaMin2.addEventListener("click",(e)=> {

	// 	let minBtn = e.target;
	// 	let ventana = minBtn.parentElement.parentElement;


	// 	if (ventana.classList.contains("verdeMin")) {
	// 		ventana.classList.remove("verdeMin");
	// 		minBtn.innerHTML = "-";
			
	// 	} else {
	// 		ventana.classList.add("verdeMin")
	// 		minBtn.innerHTML = "+";
	// 	}

	// })


	// clickParaCerrar2.addEventListener("click", () => {
	// 	if (clickParaCerrar2.getAttribute("id") === "contCanvas") {
	// 		alert("You can't close this window");
	// 	} else {
	// 		removeGrandParent(clickParaCerrar2)
	// 		let num = (clickParaCerrar2.getAttribute("id").substring(10));

	// 		console.log(num);


	// 		trabajoNuevo.splice((num - 1), 1);
	// 	}
		
	// });

	

};

const buscar = (xx)=>{
	let resultado = []
	for (let j of savedJobs) {
	j.nombre.includes(xx)?resultado.push(j):console.log("--");
	}
	return resultado;
};

const reload = (job)=> {
	cargarDatos(job);
	presentarProducto(job);
}

let formu = document.getElementById("interiorForm");

let btnCerrar = document.getElementById("btnCierre");

btnEnviar.addEventListener("click",(e)=>{
		e.preventDefault();
		validarForm();
		console.log(trabajoNuevo);
		moverVentana(`#resultado_${nw}`,`#arrastre_${nw}`);
		});
		
btnCerrar.addEventListener("click", (e)=>{
    e.preventDefault();
    alert("No se puede cerrar la ventana de imposicion")
    
});

const btnImpose = document.getElementById("impose");

btnImpose.addEventListener("click",(e)=> {
	e.preventDefault();
	prod = new interior(orden.value,
		cliente.value,
		ident.value, 
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
			document.getElementById("xPliego").value = f.x;
			document.getElementById("yPliego").value = f.y;
			document.getElementById("xFinal").value = prod.ancho;
			document.getElementById("yFinal").value = prod.alto;
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


		console.log(`Poses = ${poses} + ${masPoses}`);
		console.log(`Total = ${totalPoses}`)

		return [ xP= xPoses, 
			yP= yPoses,
			mP= masPoses,
			tP= totalPoses,
			xR= xResto,
			yR= yResto,
			x=x2,
			y=y2
			]
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
	x1 = x1 - 2*margen;
	y1 = y1 - 2*margen;
	x2 = x2 + (calle/2);
	y2 = y2 + (calle/2);
	let a = optimizarCorte(x1,y1,x2,y2);
	console.log(a);
	let b = optimizarCorte(x1,y1,y2,x2);
	console.log(b);
	resultado = (a[3]>=b[3])? a : b;
	
	
	console.log(`RESULTADO FINAL: ${resultado} en ${x1 + margen} x ${y1 + margen}`);
	return resultado
};

const dibujarCorteOptimizado = (x1,y1,x2,y2,margen = 0, calle = 0)=> {
	let printAreaX = x1 - (margen * 2);
	let printAreaY = y1 - (margen * 2);

	let resultado = corteFinal(x1,y1,x2,y2,margen,calle);

	let xPoses = resultado[0];
	let yPoses = resultado[1];
	let masPoses = resultado[2];
	let tPoses = resultado[3];
	let xResto = resultado[4];
	let yResto = resultado[5];
	let x = resultado[6] - calle;
	let y = resultado[7] - calle;

	ctx.clearRect(0,0,700,400);

	let izq = (700 - x1)/2;
	let top = (400 - y1)/2;

	console.log("izq: " + izq)
	console.log("top: " + top)

	ctx.strokeStyle = "#fff";
	ctx.strokeWidth = "1"
	ctx.strokeRect(izq,top,x1,y1);
	ctx.strokeStyle = "#999";
	ctx.strokeRect(izq + margen,top + margen,printAreaX,printAreaY);
	
	ctx.strokeStyle = "#fd0";

	izq = (izq + margen);
	izq2 = izq;
	top = (top + margen);
	top2 = top;

	let xImpo = izq2 + (xPoses * (x + calle))-calle;
	let yImpo = top2 + (yPoses * (y + calle))-calle;


	for (let h = 0; h < yPoses; h++){
		top = top2 + (y + calle)*h;
		izq = izq2;
		for (let i = 0; i < xPoses; i++) {
			izq = izq2 + (x + calle)*i;
			ctx.strokeRect(izq,top,x,y);
		}
	};

	if (y < xResto) {
		dibujarCorte(xResto,y1,x,y,xImpo,top2);
	} else if (x < yResto) {
		dibujarCorte(x1,yResto,x,y,izq2,yImpo);
	}
		

}

const dibujarCorte = (x1,y1,x2,y2,x3, y3)=> {

		let xPoses1 = Math.floor(x1 / parseInt(x2));
		let yPoses1 = Math.floor(y1 / parseInt(y2));
		let xPoses2 = Math.floor(x1 / parseInt(y2));
		let yPoses2 = Math.floor(y1 / parseInt(x2));

		let n1 = xPoses1 * yPoses1;
		let n2 = xPoses2 * yPoses2;

		n = Math.max(n1,n2);
		//console.log(`Entran ${n}`);

		let izq = x3;
		let top = y3;


		ctx.strokeStyle = "#0ff";


		
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
			
		}
		
};

const dibujarMejorCorte = (x1,y1,x2,y2,margen = 0, calle = 0)=> {

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


		ctx.strokeStyle = "#999";
		ctx.strokeWidth = "1"
		ctx.strokeRect(izq,top,x1,y1);

		ctx.strokeStyle = "#3aa";


		
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

// ___________________________ Custom Impo _______________________________

document.getElementById("customImpo").addEventListener("submit",(e)=>{
	e.preventDefault();
	let data = []
	data.push(parseInt(document.getElementById("xFinal").value));
	data.push(parseInt(document.getElementById("yFinal").value));
	data.push(parseInt(document.getElementById("xPliego").value));
	data.push(parseInt(document.getElementById("yPliego").value));
	data.push(parseInt(document.getElementById("calle").value));
	data.push(parseInt(document.getElementById("margenes").value));

	if (Math.max(data[2],data[3]) > 680 || Math.min(data[2],data[3]) > 380 ) {
		
		dibujarCorteOptimizado(Math.max(data[2],data[3])/2,Math.min(data[2],data[3])/2,data[0]/2,data[1]/2,data[5]/2,data[4]/2);

	} else {

		dibujarCorteOptimizado(Math.max(data[2],data[3]),Math.min(data[2],data[3]),data[0],data[1],data[5],data[4]);

	}

	

})


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

const getItemByKey = async (keyNumber,store,db)=> {
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

const esPrimo = (n)=> {
    primo = true
    for (let index = 2; index < n; index++) {
		//console.log(n/index)
        if (n % index == 0) {
            primo = false;
			console.log(`${n} no es un numero primo porque ${n} / ${index} = ${n/index}`)
            break
    	}    
    }
	if (primo == true) {
		console.log(`${n} es un numero primo`)
	}

}
