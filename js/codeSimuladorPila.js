

var estados= [];
var alfabeto = ["N","I","F","P","T","\n"," ",",",":","/","_","#","*"];

var funcionDelta =[
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*  N	*/		[3 ,50, 2,50, 5, 5,50,50,50, 9,50,12,12,50,50,50,16,50,19,19,50,50,50,23,50,26,50,50,50,29,50,32,50,50,34,36,36,50,39,50,43,50,42,43,50,46,50,48,48,50,50],//0
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*  I   */		[50,50, 2,50, 5, 5,50,10,50, 9,50,12,12,50,50,50,16,50,19,19,50,50,50,23,50,26,50,50,50,29,50,32,50,50,34,36,36,50,39,50,43,50,42,43,50,46,50,48,48,50,50],//1
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*  F 	*/		[50,50, 2,50, 5, 5,50,50,50, 9,50,12,12,50,17,50,16,50,19,19,50,50,50,23,50,26,50,50,50,29,50,32,50,50,34,36,36,50,39,50,43,50,42,43,50,46,50,48,48,50,50],//2
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*  P 	*/		[50,50, 2,50, 5, 5,50,50,50, 9,50,12,12,50,50,50,16,50,19,19,50,24,50,23,50,26,50,50,50,29,50,32,50,50,34,36,36,50,39,50,43,50,42,43,50,46,50,48,48,50,50],//3
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*  T    */		[50,50, 2,50, 5, 5,50,50,50, 9,50,12,12,50,50,50,16,50,19,19,50,50,50,23,50,26,50,30,50,29,50,32,50,50,34,36,36,50,39,50,43,50,42,43,50,46,50,48,48,50,50],//4
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/* \n 	*/		[0 ,50, 0,50,50, 7, 7, 7,50, 7,50,50,14,14,14,50,14,50,50,21,21,21,50,21,50,50,27,27,50,27,50,50,35,50,35,35,50,50,50,40,40,50,40,50,50,46,50,50,35,35,50],//5
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*[Space]*/		[0 ,50, 2, 3, 4, 6, 6, 7,50, 9,10,11,13,13,14,50,16,17,18,20,20,21,50,23,24,25,26,27,50,29,30,31,32,50,34,35,37,37,38,39,40,50,42,44,44,45,46,47,49,49,50],//6
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*  , 	*/		[50,50, 2,50,50,50,50,50,50, 9,50,50,50,50,50,50,16,50,50,18,18,50,50,23,50,50,25,50,50,29,50,50,50,50,34,50,38,38,50,50,50,50,42,45,45,50,47,50,50,50,50],//7
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*  : 	*/		[50,50, 2, 4,50,50,50,50,50, 9,11,50,50,50,50,50,16,18,50,50,50,50,50,23,25,50,50,50,50,29,31,50,50,50,34,50,50,50,50,50,50,50,42,50,50,50,50,50,50,50,50],//8
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/*  /	*/		[1 , 2, 2,50,50, 8, 8, 8, 9, 9,50,50,15,15,15,16,16,50,50,22,22,22,23,23,50,50,28,28,29,29,50,50,33,34,34,33,50,50,50,41,41,42,42,50,50,50,50,50,33,33,50],//9
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/* _	*/		[50,50, 2,50, 5, 5,50,50,50, 9,50,12,12,50,50,50,16,50,19,19,50,50,50,23,50,50,50,50,50,29,50,50,50,50,34,36,36,50,39,50,43,50,42,43,50,46,50,48,48,50,50],//10
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/* #	*/		[50,50, 2,50, 5, 5,50,50,50, 9,50,12,12,50,50,50,16,50,19,19,50,50,50,23,50,50,50,50,50,29,50,32,50,50,34,36,36,50,39,50,43,50,42,43,50,46,50,48,48,50,50],//11
				   /*0 , 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50*/
	/* [*]	*/		[50,50, 2,50, 5, 5,50,50,50, 9,50,12,12,50,50,50,16,50,19,19,50,50,50,23,50,26,50,50,50,29,50,32,50,50,34,36,36,50,39,50,43,50,42,43,50,46,50,48,48,50,50]//12
	];
var editorCode;
var estadoActual = 0;
var lineaCodigo;
var letra;
var letraNueva ;
var contLineas;
// variable de automata con pila
var nameAutomata = "";
var estadoInicial = "";
var topeInicialPila = "";
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
    	k= 12;
    }
    return k;
}
var j;

//entrega true o false si la sintaxis esta correcta
function compilarSintaxis() {
	
	estadoActual = 0;
	alfabetoAutomata = [];
	numeroTransiciones = 0;
	topePilas = [];
	apilamiento = [];
	alfabetoPila = [];
	estadosAutomata = [];
	estadosInicialesTransicion = [];
	estadosFinalesTransicion = [];
	estadoInicial = "";
	estadosFinales = [];
	funcionDeltaPila = [];
	var incorrect = false;
	 lineaCodigo = editorCode.getValue();
	 contLineas = 1;
	 var nuevoEstado = -1;
		estadoActual = 0;
		var i = 0;
		if (lineaCodigo != '' ) {
			var str = "";
			for (j =  0; j < lineaCodigo.length ; j++) {
					letraNueva = lineaCodigo.charAt(j);
					var h = get_indice(letraNueva);
					if( h == 5){

						contLineas++;
					}
					if (h !== -1) {
						nuevoEstado = funcionDelta[h][estadoActual];
					}
					//Guardar nombre de automata 
					if (nuevoEstado == 5 && estadoActual == 4) {
						//console.log(true);
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
					if (nuevoEstado == 12 && estadoActual == 12 && h != 5 ) {
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
						alfabetoPila.push(letraNueva);
					}
					//guardar tope inicial de pila
					if (estadoActual == 31 && nuevoEstado == 32) {
						topeInicialPila = letraNueva;
					}


					//guardar estados de automata con pila
					if (estadoActual == 35 && nuevoEstado == 36) {
						numeroTransiciones++;
						str = letraNueva;
					}
					if (estadoActual == 36 && nuevoEstado == 36 && h != 5) {
						str += letraNueva;
					}
					if (estadoActual == 36 && (nuevoEstado == 37 || nuevoEstado == 38)) {
						estadosInicialesTransicion.push(str);
						if (isNotExitsEstadoAutomata(str)) {
							estadosAutomata.push(str);
						}
					}
					//guardar alfabeto Automata
					if (estadoActual == 38 && nuevoEstado == 39) {
						alfabetoAutomata.push(letraNueva);
					}
					//guardar estados de automata con pila 2
					if (estadoActual == 40 && nuevoEstado == 43) {
						str = letraNueva;
					}
					if (estadoActual == 43 && nuevoEstado == 43 && h != 5) {
						str += letraNueva;
					}
					if (estadoActual == 43 && (nuevoEstado == 44 || nuevoEstado == 45)) {
						estadosFinalesTransicion.push(str);
						if (isNotExitsEstadoAutomata(str)) {
							estadosAutomata.push(str);
						}
					}

					if (estadoActual == 45 && nuevoEstado == 46) {
						if (esta_Definido(letraNueva)) {
							topePilas.push(letraNueva);
						}else{
							console.log('No esta definido');
						}
					}

					if (estadoActual == 47 && nuevoEstado == 48) {
						if (esta_Definido(letraNueva)) {
							str = letraNueva
						}else{
							console.log('No esta definido');
						}
					}
					if (estadoActual == 48 && nuevoEstado == 48) {
						if (esta_Definido(letraNueva)) {
							str += letraNueva;
						}else{
							console.log('No esta definido');
						}
					}
					
					if ((isLetter(letra) || isLetter(letraNueva)) && estadoActual == 48 && (nuevoEstado == 33 || nuevoEstado == 35 || nuevoEstado == 49)) {
						apilamiento.push(str);
					}else if ((isLetter(letra) || isLetter(letraNueva)) && estadoActual == 47 && nuevoEstado ==  48 && j == lineaCodigo.length -1) {
						apilamiento.push(str);
					}
					
					
					//estado Aceptaciòn
					estadoActual = nuevoEstado;
					letra = letraNueva;
			}
		}
	
		if (estadoActual == 48 || estadoActual == 49) {
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
		}
	
}

function transiciones() {
	/**
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
	**/
	var pila = [];
	var cadena2 = document.getElementById('cadena');
	var string = cadena2.value;
	for (var i = 0 ; i < string.length; i++) {
		var h = esta_alfabetoAutomata(string.charAt(i));
		if (h !== -1) {
			
		}else{
			break;
		}
	}


}
function get_indiceEstado(estado) {
	return estadosAutomata.indexOf(estado);
}
function esta_alfabetoAutomata(letra){
	var k = alfabetoAutomata.indexOf(letra);
	return k;
}
