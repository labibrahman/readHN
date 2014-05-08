/* Sequence of Events:
	1. On document start, display: hidden of body
	2. Remove PG's CSS
	3. Then add the readhackernews.CSS
	4. Finally, set body to display block 
	*/


// Step 1:
$('html').addClass('fouc');
$('.fouc').css('display', 'none');

jQuery(function($) {
	
	// Remove PG's CSS
	var links = document.getElementsByTagName('link');
	for(var i=0; i<links.length; i++) {
		links[i].getAttribute('rel') === 'stylesheet' && links[i].remove();
	}

	// Step 2:
	var link = document.createElement('link');
	link.href =  chrome.extension.getURL('singularity/stylesheets/style.css');
	link.rel = 'stylesheet';
	document.documentElement.insertBefore(link);

	$(document).ready(function() {
		$('.fouc').css('display', 'block');
	});

});



