"use strict"

if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
}

let trabajosDB = window.indexedDB.open("ImprentaDorrego",1);
let jobsDB = window.indexedDB.open("Gutenberg",1);


// CRUD = create, read, update, delete

const validarIDB = (dataBase,store) => {
	dataBase.addEventListener("upgradeneeded",()=>{
		console.log(`${dataBase.result.name} creada exitosamente`);
		const mxmDB = dataBase.result;
		mxmDB.createObjectStore(store,{ keyPath: "id", autoIncrement:true }/*{keyPath: "nombre"}*/);
		console.log(mxmDB.objectStore)
	});

	dataBase.addEventListener("success",()=>{
		console.log(`${dataBase.result.name} cargada exitosamente`);
		renderJobs(store,dataBase);
	});

	dataBase.addEventListener("error",()=>{
		console.log(`ERROR con la base de datos ${dataBase}`);
	});
}

validarIDB(trabajosDB,"Trabajos");
//validarIDB(jobsDB,"Productos");

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
	idbData[0].addEventListener("error", (e)=>{
		alert(e.target.error.message);
	})
};

const renderJobs = (almacen,dataBase)=> {
	const idbData = abrirTrans(almacen,dataBase);
	const cursor = idbData[1].openCursor();
	let cont = document.querySelector(".productList")
	cont.innerHTML = ``//'<form><input class="buscador" id="buscador" type="text" placeholder="322">322</form></form>';
	let i = 0;

	let jobsList = [];


	cursor.addEventListener("success",()=>{

	
		
		if (cursor.result) {
			let element = cursor.result.value;
			
			jobsList.push(element);
			cursor.result.continue();
			i++
		} else {
			
			console.log("Estos son todos los datos de renderJobs");
			new gridjs.Grid({
 				search: true,  
  				columns: [
						'orden',
  						'cliente',
						{
							name: 'id',
							attributes: (cell,row) => {
								// add these attributes to the td elements only
								if (cell) { 
								  return {
									'data-cell-content': cell,
									'onclick': () => dibujarCorteOptimizado(row.cells[11].data, row.cells[12].data),
									'style': 'cursor: pointer',
								  };
								}
							  },
							//data: (row)=> row.id
						},
						'nombre',
  						'tipo', 
  						'cantidad', 
  						'pags', 
  						'colores',
						'soporte', 
  						'lomo', 
  						'formato',
						{
							name: 'ancho',
							hidden: true

						},
						{
							name: 'alto',
							hidden: true

						},
  						'orientacion', 
  						'totalPags'
  					
  				],
 				data: jobsList,
  				sort: true,
  				pagination: {limit: 15},
  				fixedHeader: true,
  				style: { 
    				table: { 
      					'white-space': 'nowrap'
   					 }
 				 },
			}).render(cont);
		}
		
	})
};


const leerObjetos = (almacen,dataBase)=> {
	const idbData = abrirTrans(almacen,dataBase);
	const cursor = idbData[1].openCursor();
	let cont = document.querySelector(".productList")
	cont.innerHTML = `<div class="informe floatWindow hidden" id="info"></div>`//'<form><input class="buscador" id="buscador" type="text" placeholder="322">322</form></form>';
	let buscar = document.getElementById("buscador");
	let i = 0;


	cursor.addEventListener("success",()=>{

	
		
		if (cursor.result) {
			let element = crearHTML(
				cursor.result.value.id,
				cursor.result.value.orden,
				cursor.result.value.cliente,
				cursor.result.value.nombre,
				cursor.result.value.tipo,
				cursor.result.value.material,
				cursor.result.value.cantidad,
				cursor.result.value.coloresFrente,
				cursor.result.value.coloresDorso,
				cursor.result.value.formato,
				cursor.result.value.orientacion,
				i
				);
			
			cont.appendChild(element);
			cursor.result.continue();
			i++
		} else {
			
			console.log("Estos son todos los datos de leerObjetos");
		}
		
	})
};


const leerObjeto = async (a,db)=> {
	const idbData = abrirTrans(a,db);
	const cursor = idbData[1].openCursor();
	let arr = []
	await cursor.addEventListener("success",()=>{
		if (cursor.result) {
			let key = cursor.result.key
			let detalle = Object.defineProperty(cursor.result.value,`Key`, { enumerable: true, configurable: false, writable: false, value: `${key}`
	});
			arr.push(detalle);
			cursor.result.continue();
		}

	});
	console.log("Esta es la funcion 'leerObjeto'")
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
};


const crearHTML = (id,order, client, name,type,stock,qty,cF,cD,format,orientation,i)=> {
	let container = document.createElement("DIV");
	let titulo = document.createElement("h3");
	let saveButtons = document.createElement("DIV");
	let saveButton = document.createElement("button");
	let deleteButton = document.createElement("button");

	

	container.classList.add("productItem");
	saveButtons.classList.add("saveButtons");
	saveButton.classList.add("posible");
	deleteButton.classList.add("delete")

	saveButton.textContent = "Cargar";
	deleteButton.textContent = "Borrar";
	titulo.textContent = `${order} - ${client} - ${name} (${type}) - ${stock.Nombre} - Cantidad: ${qty} - Colores: ${cF}/${cD} - Formato: ${format} (${orientation})`;

	saveButtons.appendChild(saveButton);
	saveButtons.appendChild(deleteButton);

	container.appendChild(titulo);
	container.appendChild(saveButtons);

	titulo.setAttribute("contenteditable","false");
	titulo.setAttribute("spellcheck","false");

	const informe = (n)=>{
		let lomo = n.lomo;
		let tapaConSol = n.anchoDeTapaConSolapas;
		let tapaSinSol = n.anchoDeTapaSinSolapas;
		let pags = n.pags;
		let peso = Math.round(n.peso);
		let pesoTotal = Math.round(n.pesoTotal/100)/10;
		let fecha = n.fecha?( n.fecha.getDate() + "/" +  (parseInt(n.fecha.getMonth()) + 1) + "/" +  n.fecha.getFullYear()):"2022"; 
		
		let contenedor = document.createElement("div");
		let content = `<p>Paginas: ${pags}</p>
						<p>Lomo: ${lomo}</p>
						<p>Tapa con Solapas: ${tapaConSol}</p>
						<p>Tapa Sin solapas: ${tapaSinSol}</p>
						<p>Peso: ${peso} gr.</p>
						<p>Peso Total: ${pesoTotal} kg.</p>
						<p>Fecha: ${fecha}</p>`;

		//contenedor.appendChild(content)

		return content
	}

	titulo.addEventListener("click",(e)=>{
		//replaceDocFragConClase(".productList","DIV",informe(savedJobs[i]),"informe","floatWindow","info");
		e.preventDefault();
		const content = (informe(savedJobs[i]));
		let fw = document.getElementById("info");
		fw.innerHTML = content;
		let posX = e.clientX + 25;
    	let posY = e.clientY>(screen.availHeight - 300)?screen.availHeight - 300:e.clientY;
		
		fw.setAttribute("style",`top: ${posY}px; left: ${posX}px;`);
		fw.classList.remove("hidden");
		//console.log(posX + " - " + posY) 
	})

	titulo.addEventListener("mouseout", (e)=>{
		let fw = document.getElementById("info");
		fw.classList.add("hidden");
		e.stopImmediatePropagation();
		//let pl = document.querySelector(".productList");
		//pl.lastChild.classList.contains("informe")?pl.removeChild(pl.lastChild):"";
	})



	saveButton.addEventListener("click",()=>{
		if (saveButton.className == "posible") {
			cargarDatos(i)
			//modificarObjetos({identificador: titulo.textContent},trabajosDB,"Trabajos",id);
			//saveButton.classList.replace("posible","imposible")
		}
	})

	deleteButton.addEventListener("click",()=>{
		if (window.confirm(`Seguro queres eliminar "${name}"" de la base de datos`) == true) {
			eliminarObjetos(trabajosDB,"Trabajos",id);
			document.querySelector(".productList").removeChild(container);
		}
	})
	

	return container
};

window.addEventListener("load", e => {
	crearDocFrag(".dbPick","label",`Seleccionar base de datos`)
	crearDocFragConID(".dbPick","select",`<option>ImprentaDorrego</option><option>Imprenta</option>`,"dbSelector");
	const dbSelector = document.getElementById("dbSelector");
	dbSelector.addEventListener("change", e =>{
		trabajosDB = window.indexedDB.open(dbSelector.value,1);
		validarIDB(trabajosDB,"Trabajos");
		renderJobs("Trabajos",trabajosDB);
		//leerObjeto("Trabajos",trabajosDB);
		let arroyo = async ()=> {
			

			let resultado = await leerObjeto("Trabajos",trabajosDB);
			resultado.then(r=>{
				console.log(r)
				savedJobs = r;
				});
			resultado.catch(err => alert(err))
			}
		
		arroyo();

	})
})

const addButton = document.querySelector(".add");
const newProduct = document.getElementById("product");

/*addButton.addEventListener("click",(e)=>{
	if (newProduct.value.length > 0) { 
		if (document.querySelector(".posible") != undefined) {
			if (confirm("Hay elementos sin guardar, queres continuar")) {
				agregarObjetos({identificador: newProduct.value},"Trabajos",trabajosDB);
				document.querySelector(".productList").innerHTML = "";
				leerObjetos("Trabajos",trabajosDB);
			}
		} else {
			agregarObjetos({identificador: newProduct.value},"Trabajos",trabajosDB);
			document.querySelector(".productList").innerHTML = "";
			leerObjetos("Trabajos",trabajosDB);
		}
	} else {
		alert("Debe agregar un titulo, infeliz!")
	}
	e.preventDefault();
});*/