var funcionDeltaEstados ;
var funcionDeltaPila ;
var alfabetoAtomata = ['a','b','c'];
var alfabetoPila = ['Z','A','W'];
var estadosAtomata = ['q0','q1','q2','q3','q4','q5','q6'];
var transiciones = [['q0','c','q0','Z','Z'],['q0','a','q1','']]

funcionDeltaEstados = [
/* a*/[	   /*0,1,2, 3, 4,5,6,7,8,9*/
	/* Z*/	[1,3,1,10,10,],
	/*A*/	[],
	/*W*/	[]
	],
/* b*/[	   /*0,1,2, 3, 4,5,6,7,8,9*/
	/* Z*/	[0,3,1,10,10,],
	/*A*/	[],
	/*W*/	[]
	],
/* c */[   /*0,1,2, 3, 4,5,6,7,8,9*/
	/* Z*/	[0,3,1,10,10,],
	/*A*/	[],
	/*W*/	[]
	]
];
funcionDeltaPila = [
/* a*/[	    /*0,1,2, 3, 4,5,6,7,8,9*/
	/* Z*/	['',3,1,10,10,],
	/*A*/	[],
	/*W*/	[]
	],
/* b*/[	   /*0,1,2, 3, 4,5,6,7,8,9*/
	/* Z*/	[0,3,1,10,10,],
	/*A*/	[],
	/*W*/	[]
	],
/* c */[.  /*0,1,2, 3, 4,5,6,7,8,9*/
	/* Z*/	[0,3,1,10,10,],
	/*A*/	[],
	/*W*/	[]
	]
];

function posAlfabetoAutomata(letra) {
	return alfabetoAtomata.indexOf(letra);
}
function posAlfabetoPila(letra) {
	return alfabetoPila.indexOf(letra);
}
function estadoAutomata(pos) {
	return estadosAtomata[pos];
}
function posEstadoAutomata(estado) {
	return estadosAtomata.indexOf(estado);
}

function tranformacion() {
	for (var i = 0; i < numeroTransiciones; i++) {
		funcionDeltaEstados[posAlfabetoAutomata(transiciones[i][1])][posAlfabetoPila(transiciones[i][3])][posEstadoAutomata(transiciones[i][0])] = posEstadoAutomata(transiciones[i][2]); 
		funcionDeltaPila[posAlfabetoAutomata(transiciones[i][1])][posAlfabetoPila(transiciones[i][3])][posEstadoAutomata(transiciones[i][0])] = posEstadoAutomata(transiciones[i][4]);

	}
}