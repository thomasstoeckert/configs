var $submitbutton = $('#submitButton');
katLoadOptions();

$submitbutton.on('click', function() {
   console.log('Submit');
   
   var return_to = getKatQueryParam('return_to', 'pebblejs://close#');
   document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreKatConfigData())); 
});

function katLoadOptions(){
    var scheme = document.getElementById('scheme-select');
    var vibeTG = document.getElementById('vibeToggle');
    var fetchT = document.getElementById('fetchToggle');
    var dispTG = document.getElementById('displayToggle');
    
    if(localStorage["scheme-select"]){
        console.log("Found local information");
        scheme.value = localStorage["scheme-select"];
        vibeTG.checked = localStorage["vibeToggle"];
        fetchT.checked = localStorage["fetchToggle"];
        dispTG.checked = localStorage["displayToggle"];
    }
}

function getAndStoreKatConfigData(){
    var scheme = document.getElementById('schemeselect');
    var vibeTG = document.getElementById('vibeToggle');
    var fetchT = document.getElementById('fetchToggle');
    var dispTG = document.getElementById('displayToggle');
    
    var options = {
        scheme: scheme.value,
        vibeTG: vibeTG.checked,
        fetchT: fetchT.checked,
        dispTG: dispTG.checked
    }
    
    localStorage["scheme-select"] = options["scheme"];
    localStorage["vibeToggle"] = options["vibeTG"];
    localStorage["fetchToggle"] = options["fetchT"];
    localStorage["displayToggle"] = options["dispTG"];
    
    return options;
}

function getKatQueryParam(variable, defaultValue){
	var query = location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++){
		var pair = vars[i].split('=');
		if (pair[0] === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return defaultValue || false;
}