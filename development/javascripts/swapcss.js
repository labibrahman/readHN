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
	link.href =  chrome.extension.getURL('singularity/stylesheets/readhackernews.css');
	link.rel = 'stylesheet';
	document.documentElement.insertBefore(link);

	$(document).ready(function() {
		// The div we grab to move page content down from header also
		// grabs the reply box and moves it down. Corrects that:
		// Tried really hard to avoid injecting non-FOUC styles via jQuery but failed in this one instance
		$('input[value="reply"]').parent().css('margin-top', '-10rem');
		$('.fouc').css('display', 'block');
	});

});



