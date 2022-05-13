"use strict"

if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
}


const jobsDB = window.indexedDB.open("Gutenberg",1);


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
		leerObjetos(store,dataBase);
	});

	dataBase.addEventListener("error",()=>{
		console.log(`ERROR con la base de datos ${dataBase}`);
	});
}


validarIDB(jobsDB,"Productos");

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

const leerValores = (almacen,dataBase)=> {
	const idbData = abrirTrans(almacen,dataBase);
	const cursor = idbData[1].openCursor();
	cursor.addEventListener("success",()=>{
   		let c = event.target.result;

   		 if (c) {
        	console.log(`${c.value.nombre}, ${c.value.material.tipoPapel} ${c.value.material.gramaje}, ${c.value.tipo}, ${c.value.cantidad}`);
        	c.continue();
    	} else {
        	console.log("Listo el pollo");
    }
});
}


const leerObjetos = (almacen,dataBase)=> {
	const idbData = abrirTrans(almacen,dataBase);
	const cursor = idbData[1].openCursor();
	let cont = document.querySelector(".productList")
	cont.innerHTML = "";
	let i = 0;
	cursor.addEventListener("success",()=>{
		
		if (cursor.result) {
			let element = crearHTML(
				cursor.result.value.id,
				cursor.result.value.nombre,
				cursor.result.value.tipo,
				cursor.result.value.cantidad,
				i
				);
			
			cont.appendChild(element);
			cursor.result.continue();
			i++
		} else {
			
			console.log("Estos son todos los datos");
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
	return arr
};

const selectJob = (job) => {
	let arr = leerObjeto("Trabajos",trabajosDB);
	console.log(arr);
	let thisJob = []
	for (let j of arr) {
		console.log("jota" + j);
		if (j.nombre == job) {
			thisJob.push(j)
		}
	}
	//console.log(thisJob);
	return thisJob
}

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


const crearHTML = (id,name,type,qty,i)=> {
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
	//titulo.textContent = `${name} (${type}) - ${stock.tipoPapel} ${stock.gramaje} - Cantidad: ${qty} - Colores: ${cF}/${cD} - Formato: ${format} (${orientation})`;
	titulo.textContent = `${name} (${type}) - Cantidad: ${qty}`;

	saveButtons.appendChild(saveButton);
	saveButtons.appendChild(deleteButton);

	container.appendChild(titulo);
	container.appendChild(saveButtons);

	titulo.setAttribute("contenteditable","false");
	titulo.setAttribute("spellcheck","false");

	titulo.addEventListener("keyup",()=>{
		saveButton.classList.replace("imposible","posible");
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
			eliminarObjetos(jobsDB,"Productos",id);
			document.querySelector(".productList").removeChild(container);
		}
	})
	

	return container
};



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