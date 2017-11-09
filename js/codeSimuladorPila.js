

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
var nuevoEstado =-1;
var lineaCodigo;
var letra;
var letraNueva ;
var contLineas;
var j;
var isUseEstIncial = false;
var hashTransiciones = new Map();
var transicionesVar2 = [];
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

//entrega true o false si la sintaxis esta correcta
function compilarSintaxis() {
	var letra;
	var estadoActual = 0;
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
		var cont = 0;
		if (lineaCodigo != '' ) {
			var str = "";
			var transicion = "";
			for (j =  0; j < lineaCodigo.length ; j++) {
				
					var letraNueva = lineaCodigo.charAt(j);
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
						
						transicion = "";
						str = letraNueva;
					}
					if (estadoActual == 36 && nuevoEstado == 36 && h != 5) {
						str += letraNueva;
					}
					if (estadoActual == 36 && (nuevoEstado == 37 || nuevoEstado == 38)) {
						if (str == estadoInicial) {
							isUseEstIncial = true;
						}
						transicion += str+",";
						estadosInicialesTransicion.push(str);
						if (isNotExitsEstadoAutomata(str)) {
							estadosAutomata.push(str);
						}
					}
					//guardar alfabeto Automata
					if (estadoActual == 38 && nuevoEstado == 39) {
						transicion += letraNueva+","
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
						transicion += str+",";
						estadosFinalesTransicion.push(str);
						if (isNotExitsEstadoAutomata(str)) {
							estadosAutomata.push(str);
						}
					}

					if (estadoActual == 45 && nuevoEstado == 46) {
						transicion += letraNueva+",";
						if (esta_Definido(letraNueva)){
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
						transicion += str;
						apilamiento.push(str);
						hashTransiciones.set(numeroTransiciones,transicion);
						numeroTransiciones++;
					}else if ((isLetter(letra) || isLetter(letraNueva)) && (estadoActual == 47 || estadoActual == 48) && nuevoEstado ==  48 && j == lineaCodigo.length-1) {
						transicion += str;
						apilamiento.push(str);
						hashTransiciones.set(numeroTransiciones,transicion);
						numeroTransiciones++;
					}
					
					
					//estado Aceptaciòn
					estadoActual = nuevoEstado;
					letra = letraNueva;
			}
		}
	 
		if (estadoActual == 48 || estadoActual == 49 || estadoActual == 34 || estadoActual == 33 || estadoActual == 35) {
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
			transformar();
			document.getElementById('estado').innerHTML = "Todo esta bien";
			document.getElementById('error').innerHTML = "";
			
		}else{
			document.getElementById('error').innerHTML = "Error la compilacion";
		}
	
}

function transformar() {
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
	funcionDeltaPila = Array3D(alfabetoAutomata.length,alfabetoPila.length,estadosAutomata.length);
	funcionDeltaEstados = Array3D(alfabetoAutomata.length,alfabetoPila.length,estadosAutomata.length);
	for (var i = 0; i < hashTransiciones.size  ; i++) {
		transicionesVar2.push(hashTransiciones.get(i).split(","));
	}

	for (var i = 0; i < numeroTransiciones; i++) {
		funcionDeltaEstados[posAlfabetoAutomata(transicionesVar2[i][1])][posAlfabetoPila(transicionesVar2[i][3])][posEstadoAutomata(transicionesVar2[i][0])] = posEstadoAutomata(transicionesVar2[i][2]); 
		funcionDeltaPila[posAlfabetoAutomata(transicionesVar2[i][1])][posAlfabetoPila(transicionesVar2[i][3])][posEstadoAutomata(transicionesVar2[i][0])] = transicionesVar2[i][4];

	}
	/**
	

*/
}
function probar() {
	if (transicion()) {
		var p = document.getElementById('correct');
		p.innerHTML = 'Ok ';
	}else{
		var p = document.getElementById('correct');
		p.innerHTML = 'No';
	}
}
function transicion() {
	var estadoActualAut = posEstadoAutomata(estadoInicial);
	var pila = [topeInicialPila];
	var cadena2 = document.getElementById('cadena');
	var string = cadena2.value;
	for (var i = 0 ; i < string.length; i++) {
		var letra = string.charAt(i);
		var h =  posAlfabetoAutomata(letra);
		if (h !== -1) {
			if (typeof estadoActualAut != 'empty' && typeof estadoActualAut != 'undefined' && estadoActualAut != -1) {
				var p = funcionDeltaPila[h][posAlfabetoPila(pila[pila.length-1])][estadoActualAut];
				estadoActualAut = funcionDeltaEstados[h][posAlfabetoPila(pila[pila.length-1])][estadoActualAut];
				
				var arr = p.split('');
				if (pila.length >= 0  && p !="_" ) {
					if (p.split('').length > 1 && pila[pila.length-1] != arr[0]) {
						for (var i = 0; i < arr.length; i++) {
							pila.push(arr[i]);
						}
					}else if (arr.length > 1 && pila[pila.length-1] == arr[0]) {
						for (var i = 1; i < arr.length; i++) {
							pila.push(arr[i]);
						}
					}else if (arr.length == 1 && pila[pila.length-1] != arr[0]) {
						pila.push(arr[0]);
					}
					
				}else if (pila.length == 0 && p == "_") {
					console.log("Error!!");
				}
			}else{
				console.log('No hay transicion con ese estado');
				break;
			}
		}else{
			console.log('Este simbolo'+letra+' no es parte del alfabeto del automata declarado en las transiciones');
			break;
		}
	}
	for (var i = 0; i < estadosFinales.length; i++) {
		if (estadoActualAut == posEstadoAutomata(estadosFinales[i])) {
			return true;
		}
	}
	return false;
}


function Array3D(x, y,z)
{
    var array3D = new Array(x);

    for(var i = 0; i < array3D.length; i++)
    {
        array3D[i] = new Array(y);
        for (var j = 0; j< array3D[i].length; j++) {
        	array3D[i][j] = new Array(z);
        }
    }

    return array3D;
}

function posAlfabetoAutomata(letra) {
	return alfabetoAutomata.indexOf(letra);
}
function posAlfabetoPila(letra) {
	return alfabetoPila.indexOf(letra);
}
function estadoAutomata(pos) {
	return estadosAutomata[pos];
}
function posEstadoAutomata(estado) {
	return estadosAutomata.indexOf(estado);
}
