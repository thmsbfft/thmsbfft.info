// REQUIRES
var gulp  		= require('gulp'),
    gutil 		= require('gulp-util'),
    concat 		= require('gulp-concat'),
    rename 		= require('gulp-rename'),
    compass 	= require('gulp-compass'),
    minifyCss 	= require('gulp-minify-css');
var browserSync = require('browser-sync').create();

var vendor = [
	'src/js/vendor/jquery-2.1.4.min.js',
	'src/js/vendor/*.js'
];

var scripts = [
	'src/js/index.js'
];

// LOCALHOST:8080
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./www",
        notify: false
    });

    gulp.watch("src/sass/*/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("www/*.html").on('change', browserSync.reload);
});

// TASKS
gulp.task('sass', function() {
    return gulp.src("src/sass/bundle.scss")
        .pipe(compass( {
        	sass: 'src/sass'
        }))
        .pipe(minifyCss())
		.pipe(rename('bundle.min.css'))
        .pipe(gulp.dest("www/css"))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
	gulp.src(vendor)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('www/js/'));

	gulp.src(scripts)
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('www/js/'));

	browserSync.reload();
});

// DEFAULT
gulp.task('default', ['sass', 'js', 'serve']);