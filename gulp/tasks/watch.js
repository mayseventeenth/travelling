// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

// Watch Files For Changes
gulp.task('watch', function(){
   
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	gulp.watch('./app/index.html', function(){
		browserSync.reload();
	});

    gulp.watch('./app/src/styles/**/*.css', ['cssInject']);
});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/src/styles/styles.css'')
	.pipe(browserSync.stream());
})
