// Clock: ejercio de los primeros apuntes

const twoDigits = (x) => {
    let z = new String(x);
    (z.length == 1)?(z = '0' + x):(z=new String(x));
    return z
}

const printTime = () => {
    const myWatch = document.querySelector("#clock")

    const thisMoment = new Date()

    let seconds = twoDigits(thisMoment.getSeconds())

    let minutes = twoDigits(thisMoment.getMinutes())

    let hours = twoDigits(thisMoment.getHours())

    const clockContent = `${hours}:${minutes}:${seconds}`

    myWatch.innerHTML = clockContent

    setTimeout("printTime()", 1000)
}

// Calculadora: Clase que incluye las operaciones basicas y otras funciones para armar una calculadora en el DOM

class calculadora {
    constructor() {
        this.botonera = this.armarBotonera();
        this.operacion = "";
        this.estado = "apagada"
        this.nombre = "MXM3000"
    }

    v1 = () => document.getElementById("dispValor1");
    v2 = () => document.getElementById("dispValor2");
    CA = () => document.getElementById("btn_CA");
    C = () => document.getElementById("btn_C");
    igual = () => document.getElementById("btn_\=");
    ON = () => document.getElementById("btn_ON");
    OFF = () => document.getElementById("btn_OFF");
    
    armarCalculadora = ()=> {
        const cuerpo = (this.cuerpo());
        this.grabarNombre(cuerpo)
        cuerpo.appendChild(this.display());
        cuerpo.appendChild(this.armarBotonera());
        document.addEventListener("DOMContentLoaded", (e)=>{
            try {
                (this.estado == "apagada")?this.v1().innerHTML = "OFF":this.escucharEventos();
                this.ON().addEventListener("click",(e)=>{
                    if (this.estado == "apagada"){
                        this.encender()
                    }
                })
                this.OFF().addEventListener("click",()=>{ 
                    if (this.estado="encendida") {
                        this.apagar()
                    }
                })
                moverVentana(`#${this.nombre}`)              
            } catch (e) {
                console.log("No se escucha ningun evento porque " + e)
            }
        })
        
        this.estado = "apagada"
        
        return cuerpo
    }

    grabarNombre = (cont) => {
        crearElementoClaseId(cont,"div",`<h3>${this.nombre}</h3>`,"grabado")
    }

    encender = () => {
        this.estado = "encendida";
        this.escucharEventos()
        this.v1().innerHTML = "";
        this.OFF().addEventListener("click",()=>{ 
            if (this.estado="encendida") {
                this.apagar()
            }
        }) 
        console.log("Calculadora " + this.estado)
        this.v1().parentElement.parentElement.classList.remove("apagada")
    }

    apagar = () => {
        this.estado = "apagada";
        const calcOff = this.v1().parentElement.parentElement;
        const calcClone = calcOff.cloneNode(true)
        calcClone.classList.add("apagada")
        calcOff.parentNode.replaceChild(calcClone,calcOff)
        this.v1().innerHTML = "OFF"
        document.removeEventListener("keydown", this.tecladoInput);
        console.log("calculadora " + this.estado)
        this.ON().addEventListener("click",(e)=>{
            if (this.estado == "apagada"){
                this.encender()
            }
        })
        moverVentana(`#${this.nombre}`) 
    }

    

    cuerpo = ()=> {
        const cuerpo = document.createElement("div");
        cuerpo.classList.add("calc", "apagada")
        cuerpo.id = this.nombre
        return cuerpo
    }

    display = ()=>{
        const displayCont = document.createDocumentFragment();
        const display = document.createElement("div");
        display.id = "display";
        display.classList.add("pantallita")
        const dispValor1 = document.createElement("div");
        dispValor1.id = "dispValor1"
        const dispValor2 = document.createElement("div");
        dispValor2.id = "dispValor2"
        display.appendChild(dispValor1);
        display.appendChild(dispValor2);
        displayCont.appendChild(display);
        return displayCont
    }

    crearBotones (arr, claseDeBoton) {   
        let teclado = document.createElement("div")
        teclado.classList.add("tecladito")                      
        for (let i = 0; i < arr.length; i++) {
            const btn = document.createElement("div");
            btn.innerHTML = `${arr[i]}`;
            btn.classList.add(claseDeBoton);
            btn.id = `btn_${arr[i]}`;
            teclado.appendChild(btn)
        }
        return teclado
    }

    createNumArr (from,to) {
        let arr = ["."]
        for (let i = from; i < to; i++){
            try {
               arr.push(i);
            } catch (err) {
                console.log(err);
            }
        };
       return arr
    };

    armarBotonera(){
        let botonera = document.createDocumentFragment();
        let numeros = this.createNumArr(0,10);
        let operaciones = ["Pi","Ran","+","-","*","/","=","C","CA","ON","OFF"];
        let numBtn = this.crearBotones(numeros,"numBtn");
        let opBtn = this.crearBotones(operaciones,"opBtn");
        botonera.appendChild(numBtn);
        botonera.appendChild(opBtn);
     
        return botonera
    }
    
    sumar (a = 0,b = 0) {
        let c = a + b;
        console.log(`${a} + ${b} = ${c}`)
        return c
    }
    
    restar (a = 0,b = 0) {
        let c = a - b;
        console.log(`${a} - ${b} = ${c}`)
        return c
    }
    
    multiplicar (a,b) {
        let c = a * b;
        console.log(`${a} * ${b} = ${c}`)
        return c
    }
    
    dividir (a,b) {
        let c = (b == 0)?"Error: No se puede dividir por 0":a/b;
        console.log(`${a} / ${b} = ${c}`)
        return c
    }

    borrarTodo () {
        this.v1().innerHTML = "";
        this.v2().innerHTML = "";
        this.operacion = "";
    }

    borrar () {
        this.v1().innerHTML = this.v1().innerHTML.slice(0, (this.v1().innerHTML.length -1) ); 
    }

    ingresarValores (valor) {
        if (this.estado == "encendida") {
            this.v1().innerHTML += valor;
        } else if (this.estado == "resuelto") {
            this.v1().innerHTML = "";
            this.v1().innerHTML += valor;
            this.estado = "encendida";
        }
        console.log(this.estado)
    }
    
    operar () {
        this.v2().innerHTML = this.v1().innerHTML;
        this.v1().innerHTML = "";
        console.log("Operar: ingresar otro valor")
        //this.estado = "calulando"
    }

    calcular (a,b,operacion) {
        let c = operacion(a,b);
        return c
    }

    resolver () {
        switch (this.operacion) {
            case "+":
              this.mostrarResultado(this.calcular(Number(this.v2().textContent), Number(this.v1().textContent), this.sumar))
              break;
            case "-":
              this.mostrarResultado(this.calcular(this.v2().textContent, this.v1().textContent, this.restar))
              break;
            case "*":
             this.mostrarResultado(this.calcular(this.v2().textContent, this.v1().textContent, this.multiplicar))
              break;
            case "/":
              this.mostrarResultado(this.calcular(this.v2().textContent, this.v1().textContent, this.dividir))
              break;
          }
    }
    
    mostrarResultado (res) {
        this.v1().innerHTML = res;
        this.v2().innerHTML = "";
        this.operacion = "";
        this.estado = "resuelto"
    }

    tecladoInput = (e)=>{
        console.log(e.key)
        if (e.key >= 0 && e.key < 10 || e.key === ".") {
            this.ingresarValores(e.key)
        } else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
            if (this.v1().innerHTML !== "" && this.v2().innerHTML == "") {
                this.operar()
            }
            this.operacion = e.key
        } else if (e.key == "Enter") {
            if (this.v1().innerHTML !== ""){
                this.resolver();
            }
        } else if (e.key == "Backspace") {
            this.borrar()                        
        } else if (e.key == "Delete") {
            this.borrarTodo()
        }
    
    }

    escucharEventos() {
        let numBtn = document.getElementsByClassName("numBtn");
        let opBtn = document.getElementsByClassName("opBtn");

        for (let btn of numBtn) {
            btn.addEventListener("click",(e)=>{
                e.preventDefault();
                this.ingresarValores(btn.textContent)
            })
            document.addEventListener("keydown", this.tecladoInput);
        }

        this.CA().addEventListener("click",(e)=>{
            e.preventDefault();
            this.borrarTodo();
        });

        for (let i = 0; i < opBtn.length; i++) {
            opBtn[i].addEventListener("click",(e)=>{
                e.preventDefault()
                if (opBtn[i].textContent == "+" || opBtn[i].textContent == "-" || opBtn[i].textContent == "*" || opBtn[i].textContent == "/") {
                    this.operar();
                    this.operacion = (e.target.textContent)
                } else if (opBtn[i].textContent == "Pi"){
                    this.v1().innerHTML = Math.PI
                } else if (opBtn[i].textContent == "Ran"){
                    this.v1().innerHTML = Math.floor(Math.random() * 1000)
                } 
            })
        }

       this.C().addEventListener("click",(e)=>{
            e.preventDefault();
            this.borrar();
        })

        this.igual().addEventListener("click", (e)=>{
            this.resolver();
        })
    }
}

const miCalculadora = new calculadora();

miCalculadora.nombre = "casio-3600";

// Trabajo Practico

window.addEventListener("DOMContentLoaded", (e)=> {
    e.preventDefault();
    let a = document.getElementById("valor1");
    let b = document.getElementById("valor2");
    let suma = document.getElementById("sumar");
    let resta = document.getElementById("restar");
    let multiplicacion = document.getElementById("multiplicar");
    let division = document.getElementById("dividir");
    let resultado = document.getElementById("resultado");

 
    
    /* suma.addEventListener("click", (e)=>{
        e.preventDefault();
        resultado.textContent = miCalculadora.sumar(Number(a.value) , Number(b.value) );
    })

    resta.addEventListener("click", (e)=>{
        e.preventDefault();
        resultado.textContent = miCalculadora.restar(Number(a.value) , Number(b.value) );
    })

    multiplicacion.addEventListener("click", (e)=>{
        e.preventDefault();
        resultado.textContent = miCalculadora.multiplicar(Number(a.value) , Number(b.value) );
    })

    division.addEventListener("click", (e)=>{
        e.preventDefault();
        resultado.textContent = miCalculadora.dividir(Number(a.value) , Number(b.value) );
    })  */


})

// funcion para agregar elementos al DOM 

function crearElementoClaseId (contenedor, etiqueta, contenido, clase, id) {
    let container
    try {
        container = document.querySelector(contenedor);
    } catch(e) {
        container = contenedor;
        console.log("El parametro no se puede seleccionar con query selector")
    }

    console.log(contenedor)
    let df = document.createDocumentFragment()
    let textContainer = document.createElement(etiqueta);
    textContainer.classList.add(clase)
    textContainer.innerHTML = contenido;
    df.appendChild(textContainer);
    container.appendChild(df);
    if (id !== undefined) {
        container.lastElementChild.setAttribute("id", id)
    };
};

// Funcion para arrastrar y soltar

function moverVentana(ventana) {
	const dragObject = document.querySelector(`${ventana}`);
	//const dragZone = document.querySelector(`${barra}`);

	dragObject.onmousedown = function(event) {
		let shiftX = event.clientX - dragObject.getBoundingClientRect().left+20;
		let shiftY = event.clientY - dragObject.getBoundingClientRect().top+20;
        event.stopPropagation();
		dragObject.classList.add("agarrado");

		moveAt(event.pageX, event.pageY);

		function moveAt(pageX, pageY) {
			dragObject.style.left = pageX - shiftX + 'px';
			dragObject.style.top = pageY - shiftY + 'px';
		}

		function onMouseMove(event) {
			moveAt(event.pageX, event.pageY);
		}

		document.addEventListener('mousemove', onMouseMove);

		dragObject.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseMove);
			dragObject.onmouseup = null
			dragObject.classList.remove("agarrado");
		};

		document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            dragObject.onmouseup = null;
            dragObject.classList.remove("agarrado");
          };

	
	};

	dragObject.onDragStart = function(){
		return 
	};
}


// Probar calculadora completa

// const test = document.getElementById("testArea");


// test.appendChild(miCalculadora.armarCalculadora());

// moverVentana("#clock");

// moverVentana("#calc")

