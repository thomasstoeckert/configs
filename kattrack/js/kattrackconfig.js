var $submitbutton = $('#submitButton');
katLoadOptions();

var rect = getKatQueryParam('rect', 'false');
var bw = getKatQueryParam('bw', 'false');
var selectorBox = document.getElementById("selectorbox");
if(bw === "true"){
    selectorBox.style.display = "none";
} else {
    selectorBox.style.display = "block";
}

$submitbutton.on('click', function() {
   console.log('Submit');
   
   var return_to = getKatQueryParam('return_to', 'pebblejs://close#');
   document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreKatConfigData())); 
});

function katLoadOptions(){
    var scheme = document.getElementById('schemeselect');
    var vibeTG = document.getElementById('vibeToggle');
    var fetchT = document.getElementById('fetchToggle');
    var dispTG = document.getElementById('displayToggle');
    
    if(localStorage['schemeselect']){
        console.log('Found local information');
        scheme.value = localStorage['schemeselect'];
        console.log('Scheme found: ' + scheme.value);
        vibeTG[0].checked = localStorage['vibeToggle'];
        fetchT[0].checked = localStorage['fetchToggle'];
        dispTG[0].checked = localStorage['displayToggle'];
    }
}

function getAndStoreKatConfigData(){
    var scheme = document.getElementById('schemeselect');
    var vibeTG = document.getElementById('vibeToggle');
    var fetchT = document.getElementById('fetchToggle');
    var dispTG = document.getElementById('displayToggle');
    
    var options = {
        'scheme': scheme[scheme.selectedIndex].value,
        'vibeTG': vibeTG[0].checked,
        'fetchT': fetchT[0].checked,
        'dispTG': dispTG[0].checked
    }
    
    localStorage['schemeselect'] = options['scheme'];
    localStorage['vibeToggle'] = options['vibeTG'];
    localStorage['fetchToggle'] = options['fetchT'];
    localStorage['displayToggle'] = options['dispTG'];
    
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