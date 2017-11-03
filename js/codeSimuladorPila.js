

var estados= [];
var alfabeto = ["N","I","F","P","\n"," ",",",":","/","*"];
var desempilar = "_";

var funcionDelta =[
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/*  N	*/		[3 ,44, 2,44, 5, 5,44,44,44, 9,44,12,12,44,44,44,16,44,19,19,44,44,44,23,44,26,44,30,44,29,30,44,33,44,37,44,36,37,44,40,44,42,42,44,44],//0
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/*  I   */		[44,44, 2,44, 5, 5,44,10,44, 9,44,12,12,44,44,44,16,44,19,19,44,44,44,23,44,26,44,30,44,29,30,44,33,44,37,44,36,37,44,40,44,42,42,44,44],//1
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/*  F 	*/		[44,44, 2,44, 5, 5,44,44,44, 9,44,12,12,44,17,44,16,44,19,19,44,44,44,23,44,26,44,30,44,29,30,44,33,44,37,44,36,37,44,40,44,42,42,44,44],//2
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/*  P 	*/		[44,44, 2,44, 5, 5,44,44,44, 9,44,12,12,44,44,44,16,44,19,19,44,24,44,23,44,26,44,30,44,29,30,44,33,44,37,44,36,37,44,40,44,42,42,44,44],//3
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/* \n 	*/		[0 ,44, 0,44,44, 7, 7, 7,44, 7,44,44,14,14,14,44,14,44,44,21,21,21,44,21,44,44,27,27,44,27,44,44,44,34,34,44,34,44,44,44,44,44,27,27,44],//4
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/*[Space]*/		[0 ,44, 2, 3, 4, 6, 6, 7,44, 9,10,11,13,13,14,44,16,17,18,20,20,21,44,23,24,25,26,27,44,29,31,31,32,33,34,44,36,38,38,44,40,41,43,43,44],//5
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/*  , 	*/		[44,44, 2,44,44,44,44,44,44, 9,44,44,44,44,44,44,16,44,44,18,18,44,44,23,44,44,25,44,44,29,32,32,44,44,44,44,36,39,39,44,41,44,44,44,44],//6
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/*  : 	*/		[44,44, 2, 4,44,44,44,44,44, 9,11,44,44,44,44,44,16,18,44,44,44,44,44,23,25,44,44,44,44,29,44,44,44,44,44,44,36,44,44,44,44,44,44,44,44],//7
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/*  /	*/		[1 , 2, 2,44,44, 8, 8, 8, 9, 9,44,44,15,15,15,16,16,44,44,44,22,22,23,23,44,44,28,28,29,29,44,44,44,35,35,36,36,44,44,44,44,44,44,44,44],//8
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44*/
	/* [*]	*/		[44,44, 2,44, 5, 5,44,44,44, 9,44,12,12,44,44,44,16,44,19,19,44,44,44,23,44,26,44,30,44,29,30,44,33,44,37,44,36,37,44,40,44,42,42,44,44] //9
	];
var editorCode;
var estadoActual = 0;
var lineaCodigo;
// variable de automata con pila
var nameAutomata = "";
var estadoInicial = "";
var estadosFinales = [];
var funcionDeltaPila = [];
var estadosAutomata = [];
var alfabetoAutomata = [];
var alfabetoPila = [];
var numeroTransiciones = 0;
var estadosInicialesTransicion = [];
var estadosFinalesTransicion = [];
var topePilas = [];
var apilamiento = [];

$(document).ready(function () {
	editorCode = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
      													width: "350px",
      													lineNumbers: true}
													   );
	
	var speed_bar = document.getElementById('speed_bar');
	noUiSlider.create(speed_bar, {
		start:[50],
		step: 1,
		range: { 'min': 0, 'max': 100 },
		connect: "lower",
	});

	speed_bar.noUiSlider.on('slide', function(){
		trans_speed = 2.0001 - 2 * speed_bar.noUiSlider.get()/100
	});


});

function functionError(i,incorrect) {
	if (estadoActual == estadoError) {
		incorrect = true;
		document.getElementById('estado').innerHTML = "Error "+(i+2)+"!! linea "+(i+1);
		return incorrect;
	}
}

function get_indice(letra) {
    
    var k = alfabeto.indexOf(letra);
    if(k == -1 && isLetter(letra)){
    	k= 9;
    }
    console.log(k);
    return k;
}
var letra;
var letraNueva ;

//entrega true o false si la sintaxis esta correcta
function compilarSintaxis() {
	var incorrect = false;
	 lineaCodigo = editorCode.getValue();
	 var contLineas = 1;
	 var contTransiciones = 0;
	 var nuevoEstado = -1;
		estadoActual = 0;
		var i = 0;
		if (lineaCodigo != '' ) {
			var str = "";
			for (var j =  0; j < lineaCodigo.length ; j++) {
					letraNueva = lineaCodigo.charAt(j);
					if(letraNueva =='\n'){

						contLineas++;
					}
					var h = get_indice(letraNueva);
					if (h !== -1) {
						nuevoEstado = funcionDelta[h][estadoActual];
					}
					console.log(estadoActual+" "+nuevoEstado);
					//Guardar nombre de automata 
					if (nuevoEstado == 5 && estadoActual == 4) {
						console.log(true);
						str = letraNueva;
					}
					if (nuevoEstado == 5 && estadoActual ==5 && h != 5) {
						str += letraNueva;
					}
					if (estadoActual == 5 && nuevoEstado != 5) {
						nameAutomata = str;
					}
					//guardar estado inicial
					if (nuevoEstado == 12 && estadoActual == 11) {
						str = letraNueva;
					}
					if (nuevoEstado == 12 && estadoActual == 12 && h != 5) {
						str += letraNueva;
					}
					if (estadoActual == 12 && nuevoEstado != 12) {
						estadoInicial = str;
						estadosAutomata.push(estadoInicial);
					}
					//estadosFinales
					if (nuevoEstado == 19 && estadoActual == 18) {
						str = letraNueva;
					}
					if (nuevoEstado == 19 && estadoActual == 19 && h != 5) {
						str += letraNueva;
					}
					if (estadoActual == 19 && nuevoEstado != 19) {
						estadosFinales.push(str);
						if (isNotExitsEstadoAutomata(str)) {
							estadosAutomata.push(str);
						}					
					}
					//guardar alfabeto Pila
					if (estadoActual == 25 && nuevoEstado == 26) {
						if (!esta_Definido(letraNueva)) {
							alfabetoPila.push(letraNueva);
						}
						
					}
					//guardar estados de automata con pila
					if (estadoActual == 27 && nuevoEstado == 30) {
						numeroTransiciones++;
						str = letraNueva;
					}
					if (estadoActual == 30 && nuevoEstado == 30 && h != 5) {
						str += letraNueva;
					}
					if (estadoActual == 30 && (nuevoEstado == 31 || nuevoEstado == 32)) {
						estadosInicialesTransicion.push(str);
						if (isNotExitsEstadoAutomata(str)) {
							estadosAutomata.push(str);
						}
					}
					//guardar alfabeto pila
					if (estadoActual == 32 && nuevoEstado == 33) {
						alfabetoAutomata.push(letraNueva);
					}
					//guardar estados de automata con pila 2
					if (estadoActual == 34 && nuevoEstado == 37) {
						str = letraNueva;
					}
					if (estadoActual == 37 && nuevoEstado == 37 && h != 5) {
						str += letraNueva;
					}
					if (estadoActual == 37 && (nuevoEstado == 38 || nuevoEstado == 39)) {
						estadosFinalesTransicion.push(str);
						if (isNotExitsEstadoAutomata(str)) {
							estadosAutomata.push(str);
						}
					}
					if (estadoActual == 39 && nuevoEstado == 40) {
						if (esta_Definido(letraNueva)) {
							topePilas.push(letraNueva);
						}else{
							console.log('No esta definido');
						}
					}
					if (estadoActual == 41 && nuevoEstado == 42) {
						if (esta_Definido(letraNueva)) {
							str = letraNueva
						}else{
							console.log('No esta definido');
						}
					}
					if (estadoActual == 42 && nuevoEstado == 42) {
						if (esta_Definido(letraNueva)) {
							str += letraNueva;
						}else{
							console.log('No esta definido');
						}
					}
					
					if ((isLetter(letra) || isLetter(letraNueva)) && estadoActual == 42 && ((nuevoEstado == 42 && j == lineaCodigo.length-1) || nuevoEstado == 27 || nuevoEstado == 43)) {
						apilamiento.push(str);
					}
					
					
					//estado Aceptaciòn
					estadoActual = nuevoEstado;
					letra = letraNueva;
			}
		}
	
		if (estadoActual == 42 || estadoActual == 43) {
			return incorrect;
		}else{
			incorrect = true;
		}
	return incorrect; 
}

function isNotExitsEstadoAutomata(letra) {
	var l = estadosAutomata.indexOf(letra);
	if (l !== -1) {
		return false;
	}
	return true;
}

function esta_Definido(letra) {
	var k = alfabetoPila.indexOf(letra);
	if (k !== -1) {
		return true;
	}
	return false;
}

function comprobarSintaxis(){
		alfabetoPila = [];
		estadoActual = 0;
		if (!compilarSintaxis()) {
			document.getElementById('estado').innerHTML = "Todo esta bien";
			document.getElementById('error').innerHTML = "";
			
		}else{
			document.getElementById('error').innerHTML = "Error la compilacion";
			alfabetoPila = [];
		}
	
}

function transiciones() {
	estadoInicial
	estadosFinales
	estadosAutomata
	alfabetoAutomata
	alfabetoPila
	estadosFinalesTransicion
	estadosInicialesTransicion
	topePilas
	apilamiento
	funcionDeltaPila = [[,],[],[],[]];


}
function get_indiceEstado(estado) {
	return estadosAutomata.indexOf(estado);
}
