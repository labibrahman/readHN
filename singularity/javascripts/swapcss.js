(function() {

	// Remove PG's CSS
	var links = document.getElementsByTagName('link');
	for(var i=0; i<links.length; i++) {
		links[i].getAttribute('rel') === 'stylesheet' && links[i].remove();
	}

	// Inject mine
	var link = document.createElement('link');
	link.href =  chrome.extension.getURL('singularity/stylesheets/style.css');
	link.rel = 'stylesheet';
	document.documentElement.insertBefore(link);
})();