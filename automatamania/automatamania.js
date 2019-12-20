/*
 * Automatamania
 * 

Aluno 1: 52915 Ricardo Ferreira
Aluno 2: 53298 Alexandre Correia

Comment:

?????????????????????????
?????????????????????????
?????????????????????????
?????????????????????????
?????????????????????????
?????????????????????????

01234567890123456789012345678901234567890123456789012345678901234567890123456789

INSIDE THIS FILE, YOU CAN CHANGE EVERYTHING YOU WANT!
/*

/*
DOCUMENTATION
 
HTML and DOM documentation:
	http://ctp.di.fct.unl.pt/miei/lap/teoricas/17.html
	https://www.w3schools.com/html/default.asp
	https://www.w3schools.com/js/js_htmldom.asp

CSS documentation:
	https://www.w3schools.com/css/default.asp

JavaScript introduction:
	http://ctp.di.fct.unl.pt/miei/lap/teoricas/18.html
	http://ctp.di.fct.unl.pt/miei/lap/teoricas/19.html
	https://www.w3schools.com/js/default.asp

Cytoscape.js documentation:
	http://js.cytoscape.org/
*/

/* UTILITY GLOBAL FUNCTIONS ------------------------------------------------- */

function equals(a, b) {  // fairly general structural comparison
	if( a === b )
		return true;
	if( !(a instanceof Object) || !(b instanceof Object) )
		return false;
	if( a.constructor !== b.constructor )
		return false;
	const aProps = Object.getOwnPropertyNames(a);
	const bProps = Object.getOwnPropertyNames(b);
	if( aProps.length != bProps.length )
		return false;
	for( var i = 0; i < aProps.length; i++ ) {
		const propName = aProps[i];
		if( !equals(a[propName], b[propName]) )
			return false;
	}
	return true;
}

function belongs(v, arr) {
	return arr.some(x => equals(x, v));
}

function canonical(arr) {
	// This version do not sort, so that we can control the order of the
	// states of the finite automata in the screen presentation
	const res = [];
	arr.forEach( x => { if(!belongs(x, res)) res.push(x); } );
	return res;
}

function canonicalPrimitive(arr) {
	// This version do not sort, so that we can control the order of the
	// states of the finite automata in the screen presentation
	return Array.from(new Set(arr));
}

function cons(v, arr) {
	return [v].concat(arr);
}

function consLast(v, arr) {
	return arr.concat(v);
}

function isEmpty(arr) {
	// Beware: arr == [] does not work
	// For example, note that [] == [] is false
	return arr.length == 0;
}

function intersection(arr1, arr2) {
	return arr1.filter(value => arr2.includes(value));
}

function addAll(v, arr) {
	return arr.map(l => cons(v,l));
}

function flatMap(f, arr) {
	return arr.map(f).reduce((acc,a)=>consLast(acc,a), []);
}

function clone(obj) {
	return Object.assign({}, obj);
}


/* FINITE AUTOMATA ---------------------------------------------------------- */

class AbstractAutomaton {  // common features to FA, PDA, TM, etc.
	constructor() {}
}

class FiniteAutomaton extends AbstractAutomaton {
	constructor(fa) {
		super();
		this.initialState = fa.initialState;
		this.transitions = fa.transitions;
		this.acceptStates = fa.acceptStates;
	}
    
    /* added by us */
    getAlphabet() {
        return canonical(
            this.transitions.map(([_0, a, _1]) => a)
        );
    }
	
	getStates() {
		return canonical(
			[this.initialState].
			concat(this.transitions.map(([s,_0,_1]) => s)).
			concat(this.transitions.map(([_0,_1,s]) => s)).
			concat(this.acceptStates)
		);
	}	

	gcut(s, ts) {
		return [ts.filter(([z,_0,_1]) => z == s),
				ts.filter(([z,_0,_1]) => z != s)];
	}
    
    /* added by us */
    determinism() {
        const stateAndSymbols = this.transitions.map(([s, a, _]) => [s, a]);
        if (stateAndSymbols.length == canonical(stateAndSymbols).length)
            return true;
        else
            return false;
    }
	
	reachableX(s, ts) {
		const [x, xs] = this.gcut(s,ts);
		return cons(s, flatMap(([_0,_1,z]) => this.reachableX(z,xs), x));
	}
	
	reachable() {
		return canonical(this.reachableX(this.initialState, this.transitions));
	}

	productive() {
		const allStates = this.getStates();
		const reachAccepted =
				s => !isEmpty(intersection(this.acceptStates,
							this.reachableX(s, this.transitions)));
		return allStates.filter(reachAccepted);
	}
	
	transitionsFor(s, symb) {
		return this.transitions.filter(([s1,symb1,_]) =>
									s == s1 && symb == symb1);
	}

	acceptX(s, w) {
		if( isEmpty(w) )
			return this.acceptStates.includes(s);
		else {
			const [x,...xs] = w;
			const ts = this.transitionsFor(s,x);
			if( isEmpty(ts) )
				return false;
			else {
				const [[_0,_1,s],..._] = ts;
				return this.acceptX(s,xs);
			}
		}
	  }

	accept(w) {
		return this.acceptX(this.initialState,w);
	}
    
    /* added by us */
    generateAux(n, state) {
        if (n > 0) {
            const [x, ...xs] = this.gcut(state, this.transitions);
            return flatMap(([_, a, s]) => 
                           addAll(a, this.generateAux(n - 1, s)), x);
        } else {
            if (this.acceptStates.includes(state))
                return [[]];
            else
                return [];
        }
    }
    
    generate(n) {
        return canonical(this.generateAux(n, this.initialState));
    }
}

const abc = new FiniteAutomaton({
	initialState: "START",
	transitions: [
			["START",'a',"A"], ["START",'b',"START"],
						["START",'c',"START"], ["START",'d',"START"],
			["A",'a',"A"], ["A",'b',"AB"], ["A",'c',"START"], ["A",'d',"START"], 
			["AB",'a',"A"], ["AB",'b',"START"],
						["AB",'c',"SUCCESS"], ["AB",'d',"START"],
			["SUCCESS",'a',"SUCCESS"], ["SUCCESS",'b',"SUCCESS"],
						["SUCCESS",'c',"SUCCESS"], ["SUCCESS",'d',"SUCCESS"]
		],
	acceptStates: ["SUCCESS"]
});

function testAll() {
//	getAlphabet
	console.log("");
	console.log(abc.getStates());
	console.log("");
	console.log(abc.gcut(abc.initialState, abc.transitions));
	console.log("");
	console.log(abc.reachable());
	console.log("");
	console.log(abc.productive());
	console.log("");
	console.log(abc.accept(['a','b','c']));
	console.log("");
	console.log(abc.accept(['a','b']));
//	generate
//	accept2
}

//Â testAll();


/* CYTOSCAPE GRAPHS AND USER INTERFACE -------------------------------------- */

// global constants and variables
var cyGraph;

const cyGraphStyle = {
	  layout: {
		name: 'grid',
		rows: 2,
		cols: 2
	  },

	  style: [
		{ selector: 'node[name]',
		  style: {
			'content': 'data(name)'
		  }},

		{ selector: 'edge',
		  style: {
			'curve-style': 'bezier',
			'target-arrow-shape': 'triangle',
			'label': 'data(symbol)'
		  }},

		// some style for the extension

		{ selector: '.eh-handle',
		  style: {
			'background-color': 'red',
			'width': 12,
			'height': 12,
			'shape': 'ellipse',
			'overlay-opacity': 0,
			'border-width': 12, // makes the handle easier to hit
			'border-opacity': 0
		  }},

		{ selector: '.eh-hover',
		  style: {
			'background-color': 'red'
		  }},

		{ selector: '.eh-source',
		  style: {
			'border-width': 2,
			'border-color': 'red'
		  }},

		{ selector: '.eh-target',
		  style: {
			'border-width': 2,
			'border-color': 'red'
		  }
		},

		{ selector: '.eh-preview, .eh-ghost-edge',
		  style: {
			'background-color': 'red',
			'line-color': 'red',
			'target-arrow-color': 'red',
			'source-arrow-color': 'red'
		  }},

		{ selector: '.eh-ghost-edge.eh-preview-active',
		  style: {
			'opacity': 0
		  }}
	  ]
};

class CyGraph {
	constructor(nodes, edges, fa) {
		const spec = clone(cyGraphStyle);
		spec.elements = { "nodes": nodes, "edges": edges};
		spec.container = document.getElementById('cy');  // the graph is placed in the DIV 'cy'
		this.cy = cytoscape(spec);
		this.cy.edges().map(t => t.unselectify());
		//this.cy.$('#START').select();
        this.grayAndSelectNewState(fa.initialState);
        this.selectedStates = [];
        this.skipNextActions = false;
        this.processedWord = '';
		this.cy.on('select', e => this.grayAndSelectNewState(e.target.id()));
        //this.cy.on('click', e => {alert(e.cyTarget.isNode());});
		this.fa = fa;
	}
    
    /* added by us */
    grayAndSelectNewState(newState) {
        this.grayAllStates();
        this.selectNewState(newState);
    }
    
    selectNewState(newState) {
        this.clearResults();
        this.selectedState = newState;
        this.setStateColor(newState, 'blue');
        document.getElementById('selected-state').innerHTML = newState;
    }
    
    getSelectedState() {
        return this.selectedState;
    }
    
    getSelectedStates() {
        return this.selectedStates;
    }
    
    getSkipNextActions() {
        return this.skipNextActions;
    }
    
    getProcessedWord() {
        return this.processedWord;
    }
    
    grayAllStates() {
        this.cy.nodes().style('background-color', 'gray');
    }
    
    setStateColor(state, color) {
        this.cy.$('#' + state).style('background-color', color);
    }
    
    clearResults() {
        document.getElementById('results-result').innerHTML = '';
    }
    
    /* given - modified by us */
	static build(fa) {
        const states = fa.getStates();
        var nodes = [];
        
        states.map(s => nodes.push({ data: { id: s, name: s } }));
        
		var transitions = fa.transitions;
        var edges = [];
        
        transitions.map(([s1, a, s2]) => 
                edges.push({ data: { source: s1, symbol: a, target: s2 } }));
    
		return new CyGraph(nodes, edges, fa);
	}
	
    /* given */
	static load(text) {
		try {
			const json = JSON.parse(text);
			const fa = new FiniteAutomaton(json);
			return this.build(fa);
		} catch( ex ) {
			alert(ex);
			document.getElementById('file-select').value = "";
		}
	}

	static sampleGraph() {
        return new CyGraph(
			[
			  { data: { id: "START", name: "START" } },
			  { data: { id: "A", name: "A" } },
			  { data: { id: "AB", name: "AB" } },
			  { data: { id: "SUCCESS", name: "SUCCESS" } }
			],
			[
			  { data: { source: "START", symbol: 'a', target: "A" } },
			  { data: { source: "START", symbol: 'b', target: "START" } },
			  { data: { source: "START", symbol: 'c', target: "START" } },
			  { data: { source: "START", symbol: 'd', target: "START" } },
			  { data: { source: "A", symbol: 'a', target: "A" } },
			  { data: { source: "A", symbol: 'b', target: "AB" } },
			  { data: { source: "A", symbol: 'c', target: "START" } },
			  { data: { source: "A", symbol: 'd', target: "START" } },
			  { data: { source: "AB", symbol: 'a', target: "A" } },
			  { data: { source: "AB", symbol: 'b', target: "START" } },
			  { data: { source: "AB", symbol: 'c', target: "SUCCESS" } },
			  { data: { source: "AB", symbol: 'd', target: "START" } },
			  { data: { source: "SUCCESS", symbol: 'a', target: "SUCCESS" } },
			  { data: { source: "SUCCESS", symbol: 'b', target: "SUCCESS" } },
			  { data: { source: "SUCCESS", symbol: 'c', target: "SUCCESS" } },
			  { data: { source: "SUCCESS", symbol: 'd', target: "SUCCESS" } }
			],
			abc
		);
	}
}


/* EVENT HANDLING ----------------------------------------------------------- */

function onLoadAction(event) {
	cyGraph = CyGraph.sampleGraph();
    /* added by us */
    updateStatistics();
}

/* added by us */
function updateStatistics() {
    cyGraph.clearResults();
    
    const n_states = cyGraph.fa.getStates().length;
    const n_accept_states = cyGraph.fa.acceptStates.length;
    const s_alphabet = cyGraph.fa.getAlphabet().length;
    const deterministicStat = document.getElementById('fa-deterministic');
    
    document.getElementById('number-states').innerHTML = n_states;
    document.getElementById('number-accept-states').innerHTML = n_accept_states;
    document.getElementById('size-alphabet').innerHTML = s_alphabet;
    if (cyGraph.fa.determinism())
        deterministicStat.innerHTML = 'Yes';
    else
        deterministicStat.innerHTML = 'No';
}

function showInfo() {
    alert("GENERAL\n  After using the functions 'Generate' or 'Accept?' or  " + 
          "'Step' or 'Animation', if you don't select a state, the previous " +
          "selected state (indicated in the 'Statistics' section) will " +
          "automatically be selected.\n\nEDGES " +
          "(TRANSITIONS BETWEEN STATES)\n  If you click on them, they won't " +
          "be selected.\n\nRESULTS\n  When running any of the functions we " +
          "describe/explain what's happening in the 'Results' section.");
}

function reachableAction(event) {
    if (cyGraph.getSelectedState() == '')
        cyGraph.grayAndSelectNewState(cyGraph.fa.initialState);
    cyGraph.clearResults();

    const states = cyGraph.fa.reachableX(cyGraph.getSelectedState(), 
                                         cyGraph.fa.transitions);

    if (!belongs(cyGraph.getSelectedState(), cyGraph.fa.getStates()))
        cyGraph.grayAndSelectNewState(cyGraph.fa.initialState);
    else
        cyGraph.grayAndSelectNewState(cyGraph.getSelectedState());

    states.map(s => { if (s != cyGraph.getSelectedState())
                        { cyGraph.setStateColor(s, 'purple'); } });

    document.getElementById('results-result').innerHTML = 
            'Command: <span>Reachable</span><br><br>'+
            'Marked with <span style="color: purple">purple</span>';
}

function productiveAction(event) {
    cyGraph.clearResults();
    cyGraph.grayAllStates();

    const states = cyGraph.fa.productive();

    states.map(s => cyGraph.setStateColor(s, 'yellow'));

    document.getElementById('results-result').innerHTML = 
            'Command: <span>Productive</span><br><br>'+
            'Marked with <span style="color: yellow">yellow</span>';
}

function usefulAction(event) {
    cyGraph.clearResults();
    cyGraph.grayAllStates();

    const productive = cyGraph.fa.productive();
    const states = productive.filter(s => belongs(s, cyGraph.fa.reachable()));

    states.map(s => cyGraph.setStateColor(s, 'green'));

    document.getElementById('results-result').innerHTML = 
            'Command: <span>Useful</span><br><br>'+
            'Marked with <span style="color: green">green</span>';
}

function generateAction(event) {
    cyGraph.clearResults();
    //cyGraph.grayAndSelectNewState(cyGraph.fa.initialState);
    cyGraph.grayAllStates(); //
    
    const n = document.getElementById('generate').value;
    const show = 10; // number of results to show
    var result;
    
    if (n >= 0) {
        const words = cyGraph.fa.generate(n);
        
        temp_result = '';
        var shown = 0;
        
        words.map(w => {if (shown < 10) 
                    {temp_result += '<option>' + w + '</option>';}
                    shown++;});
        
        /*temp_result = '[';
        for (var word = 0; word < words.length && word < show; word++) {
            if (temp_result == '[')
                temp_result += '[' + words[word] + ']';
            else
                temp_result += ', [' + words[word] + ']';
        }
        temp_result += ']';*/
        
        result = 'Total: <span>' + words.length + '</span><br>' +
            'First ' + show + ':<br>' +
            '<select size="10" style="width: 90%">' + 
            temp_result + '</select>';
    } else
        result = 'Words length not valid, must be a non-negative integer';
    document.getElementById('results-result').innerHTML = 
            'Command: <span>Generate</span><br><br>' + result;
}

function acceptAction(event) {
    cyGraph.clearResults();
    
    const word = document.getElementById('word').value;
    var result, step = 0;
    var wordToCheck = document.getElementById('word').value;
    
    if (wordToCheck == '')
        step = stepAction(event, 'ac');
    else
        while (wordToCheck != '') {
            wordToCheck = document.getElementById('word').value;
            step = stepAction(event, 'ac');
        }
        
    if (step == 1)
        result = 'accepted';
    else if (step == 2)
        result = 'not accepted';
    
    document.getElementById('word').value = word;
    
    document.getElementById('results-result').innerHTML = 
        'Command: <span>Accept?</span><br><br>' +
        'Word is <span>' + result + '</span>';
}

function stepAction(event, command) {
    cyGraph.clearResults();
    cyGraph.grayAllStates();
    cyGraph.selectedState = '';
    
    const word = document.getElementById('word').value;
    const action = word.substring(0, 1);
    cyGraph.processedWord = cyGraph.getProcessedWord() + action;
    
    var result; // 0: running, 1: accepted, 2: not accepted
	var timer; //Added
    var noNext = 0;
    var previousStates;
    if (isEmpty(cyGraph.getSelectedStates()))
        previousStates = [cyGraph.fa.initialState];
    else
        previousStates = cyGraph.getSelectedStates();
    cyGraph.selectedStates = [];
    
    for (var previous = 0; previous < previousStates.length && 
                        !cyGraph.getSkipNextActions(); previous++) {
        if (action != '') {
            result = 0;
            
            const transitions = 
                  cyGraph.fa.transitionsFor(previousStates[previous], action);
            const nextStates = transitions.map(([_0, _1, s]) => s);

            if (!isEmpty(nextStates)) {
                nextStates.map(s => cyGraph.setStateColor(s, 'blue'));
                nextStates.map(s => { 
                    if (!belongs(s, cyGraph.getSelectedStates())) 
                        {cyGraph.selectedStates.push(s)};} );
            } else {
                if (!belongs(previousStates[previous], 
                             cyGraph.getSelectedStates())) 
                    { cyGraph.selectedStates.push(previousStates[previous]); }
                noNext++;
                result = 2;
				
                cyGraph.setStateColor(previousStates[previous], 'red');
            }
            if (command == 'an')
                document.getElementById('results-result').innerHTML = 
                        'Command: <span>Animation</span><br><br>' +
                        'Processed word: <span>' +
                    cyGraph.getProcessedWord() + '</span>';
        } else {
            if (belongs(previousStates[previous], cyGraph.fa.acceptStates)) {
                result = 1;
				
                cyGraph.setStateColor(previousStates[previous], 'green');
                if (command == 'st')
                    document.getElementById('results-result').innerHTML = 
                        'Command: <span>Step</span><br><br>' +
                        'Word is <span>accepted</span>';
                else if (command == 'an')
                    document.getElementById('results-result').innerHTML = 
                        'Command: <span>Animation</span><br><br>' +
                        'Word is <span>accepted</span>';
            } else {
                cyGraph.setStateColor(previousStates[previous], 'red');
                if (result == 1) { ; } 
                else {
                    result = 2;
                    if (command == 'st')
                        document.getElementById('results-result').innerHTML = 
                            'Command: <span>Step</span><br><br>' +
                            'Word is <span>not accepted</span>';
                    else if (command == 'an')
                        document.getElementById('results-result').innerHTML = 
                            'Command: <span>Animation</span><br><br>' +
                            'Word is <span>not accepted</span>';
                }
            }
            cyGraph.processedWord = '';
        }
    }
    
    if (noNext == previousStates.length)
        cyGraph.skipNextActions = true;
    
    if (cyGraph.getSkipNextActions()) {
        result = 2;
        if (action != '') {
            cyGraph.selectedStates = previousStates;
            if (command == 'an')
                document.getElementById('results-result').innerHTML = 
                        'Command: <span>Animation</span><br><br>' +
                        'Processed word: <span>' +
                    cyGraph.getProcessedWord() + '</span>';
        } else {
            cyGraph.skipNextActions = false;
            cyGraph.selectedStates = [];
            if (command == 'st')
                document.getElementById('results-result').innerHTML = 
                    'Command: <span>Step</span><br><br>' +
                    'Word is <span>not accepted</span>';
            else if (command == 'an')
                document.getElementById('results-result').innerHTML = 
                    'Command: <span>Animation</span><br><br>' +
                    'Word is <span>not accepted</span>';
            cyGraph.processedWord = '';
        }
        previousStates.map(s => cyGraph.setStateColor(s, 'red'));
    }
    
    document.getElementById('word').value = 
        word.substring(1, word.length);
    
    return result;
}

function animationAction(event) {
    cyGraph.clearResults();
    
    var action = document.getElementById('word').value;
    
    time = setInterval(
            function() {
                if (action == '') {
                    clearInterval(time);
                };
                stepAction(event, 'an');
                action = document.getElementById('word').value;
            }, 1000 );
}

/* given */
function fileSelectAction(event) {
	const file = event.target.files[0];
	if( file == undefined ) // if canceled
		return;
	const reader = new FileReader();
	reader.onload = function(event) { 
        cyGraph = CyGraph.load(event.target.result); 
        updateStatistics();
        cyGraph.clearResults(); };
	reader.readAsText(file);
}
