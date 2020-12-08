var darkMode = false;

var changeCol = function() {
    if(darkMode){
        document.documentElement.setAttribute('data-theme', 'light');
        darkMode = false;
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode = true;
    }
}


document.querySelector('#themeToggle').addEventListener('click', changeCol, false);

function setInitialTheme() {

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  		console.log('dark mode is enabled');
        darkMode = true;
    	document.documentElement.setAttribute('data-theme', 'dark');
    	// document.querySelector('#dark').classList.add('selected');
	} else {
  		console.log('dark mode is not enabled');
        darkMode = false;
    	document.documentElement.setAttribute('data-theme', 'light');
    	// document.querySelector('#colourful').classList.add('selected');
	}

	window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  	if (e.matches) {
    	console.log('dark mode is enabled');
        darkMode = true;
    	document.documentElement.setAttribute('data-theme', 'dark');
        // document.querySelector('#dark').classList.add('selected');
  	} else {
  		console.log('dark mode is not enabled');
        darkMode = false;
    	document.documentElement.setAttribute('data-theme', 'light');
        // document.querySelector('#colourful').classList.add('selected');
  	}
	});
}

setInitialTheme();
