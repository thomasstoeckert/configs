var $submitbutton = $('#submitButton');
loadOptions();

$submitbutton.on('click', function(){
    console.log('Submit');
    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
});

function loadOptions(){
    /* Replace this, this is all example code
    var exampleCheckbox = document.getElementByID('exampleBox');
    var exampleSelector = document.getElementByID('exampleSel');
    
    if(localStorage['exampleSel']){
        console.log('Found local information');
        exampleSelector.value = localStorage['exampleSel'];
        exampleCheckbox.checked = JSON.parse(localStorage['exampleBox']);
    }
    */
}

function getAndStoreConfigData(){
    /* Replace this, this is all example code
    var exampleCheckbox = document.getElementByID('exampleBox');
    var exampleSelector = document.getElementByID('exapmleSel');
    
    var options = {
        'exampleSel': exampleSel[exampleSel.selectedIndex].value,
        'exampleBox': exampleBox.checked
    }
    
    localStorage['exampleBox'] = options['exampleBox'];
    localStorage['exampleSel'] = options['exampleSel'];
    
    return options;
    */
}

function getQueryParam(variable, defaultValue){
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