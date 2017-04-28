const gulp 	   	= require('gulp'),
	  concat   	= require('gulp-concat'),
	  jsmin 	= require('gulp-jsmin'),
	  rename 	= require('gulp-rename'),
	  sass 	   	= require('gulp-sass');

gulp.task('scripts', () => {
	console.log('\x1b[36m', 'Concat scripts' ,'\x1b[0m');
	gulp.src(['./src/js/*.js','./src/*/*.js'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./src/'));
});

gulp.task('sass', () => {
	console.log('\x1b[36m', 'Compiling sass files' ,'\x1b[0m');
	gulp.src('./src/sass/styles.sass')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('compress', ['scripts'], () => {
	console.log('\x1b[36m', 'Minifying files' ,'\x1b[0m');
    gulp.src('./src/main.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', () => {
	gulp.watch('./src/sass/*.sass', ['sass']);
	gulp.watch('./src/**/*.js', ['scripts', 'compress']);
});

gulp.task('default', ['scripts', 'sass', 'compress', 'watch']);

