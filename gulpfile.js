var gulp = require('gulp');

gulp.task('default', function() {
	gulp.src('development/singularity/stylesheets/readHN.css') 
	.pipe(gulp.dest('production'))	
});
