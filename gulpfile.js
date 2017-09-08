// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcss_simple_vars = require('postcss-simple-vars');
var postcss_nested = require('postcss-nested');
var postcss_import = require('postcss-import');
var browserSync = require('browser-sync').create();

// Styles Task
gulp.task('styles', function(){
	return gulp.src('./app/src/styles/styles.css')
	   .pipe(postcss([postcss_import, postcss_nested, postcss_simple_vars, autoprefixer]))
      	.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
       .pipe(gulp.dest('./app/build/styles'));
});

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

    gulp.watch('./app/src/styles/**/*.css', ['styles']);
});


// Default Task
gulp.task('default');
