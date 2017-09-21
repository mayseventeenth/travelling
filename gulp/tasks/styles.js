// Include gulp
var gulp = require('gulp');

// Include Our Plugins

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcss_simple_vars = require('postcss-simple-vars');
var postcss_nested = require('postcss-nested');
var postcss_import = require('postcss-import');
var postcss_mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

// Styles Task
gulp.task('styles', function(){
	return gulp.src('./app/src/styles/styles.css')
	   .pipe(postcss([postcss_import, postcss_mixins, postcss_nested, postcss_simple_vars, hexrgba, autoprefixer]))
      	.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
       .pipe(gulp.dest('./app/build/styles'));
});
