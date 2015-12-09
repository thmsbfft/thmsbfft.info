// REQUIRES
var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    minifyCss    = require('gulp-minify-css'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create();

var vendor = [
	'src/js/vendor/jquery-2.1.4.min.js',
	'src/js/vendor/*.js'
];

var scripts = [
	'src/js/index.js'
];

// LOCALHOST:3000
gulp.task('serve', function() {

    browserSync.init({
        server: "./www",
        notify: false
    });

    gulp.watch("src/*.html", ['html']);
    gulp.watch("src/sass/*/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['js']);
});

// TASKS
gulp.task('sass', function() {
    gulp.src("src/sass/bundle.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
		.pipe(rename('bundle.min.css'))
        .pipe(sourcemaps.write())
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

gulp.task('html', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('www/'))

    browserSync.reload();
});

// DEFAULT
gulp.task('default', ['html', 'sass', 'js', 'serve']);