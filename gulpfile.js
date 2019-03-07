let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
//let browswerSync.creat 

gulp.task('sass', function () {
    return stream = gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(rename('styles.css'));
});

gulp.task('minify-css', () => {
	return gulp.src('css/styles.css')
	.pipe (cleanCSS({compatibility: 'ie8'}))
	.pipe (rename({suffix: '.min'}))
	.pipe (gulp.dest('./css/'));
});

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('watch', function() {
	gulp.watch('./scss/*.scss', gulp.series('styles'));
});

gulp.task('scripts', function() {
	return gulp.src(['./js/*.js', "!./js/concat.js", "!./js/bundle.min.js"])
	.pipe (concat('concat.js'))
	.pipe (gulp.dest("./js/"))
});

gulp.task("uglify", function () {
    return gulp.src('./js/concat.js')
        .pipe(uglify())
        .pipe(rename("bundle.min.js"))
        .pipe(gulp.dest("./js/"));
});