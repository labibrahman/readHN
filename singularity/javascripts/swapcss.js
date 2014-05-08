/* Sequence of Events:
	1. On document start, display: hidden of body
	2. Then add the readhackernews.CSS
	3. Finally, set body to display block 
	*/


// Step 1:
// document.write('<style type="text/css">body{display:none}</style>');


jQuery(function($) {
	// Step 1:
	$('body').css('display','none');

	// Step 2:
	var link = document.createElement('link');
	link.href =  chrome.extension.getURL('singularity/stylesheets/style.css');
	link.rel = 'stylesheet';
	document.documentElement.insertBefore(link);

	// Step 3:
	$('body').css('display','block');
});



// Flickers less but still flickers