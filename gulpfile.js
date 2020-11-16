'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

var pathSass = './resources/sass/*.scss';
var pathCss = './resources/css/*.css';
var pathOutputCss = './dist';

// task for sass
gulp.task('sass', function() {
    return gulp.src('./resources/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

// minify css file
gulp.task('css', function() {
    gulp.src('./dist/css/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('run', gulp.series('sass', 'css'));
gulp.task('watch', function() {
    gulp.watch(pathSass, ['sass']);
    gulp.watch(pathCss, ['css']);
});

// task for rename
gulp.task('default', gulp.series('run', 'watch'), function() {

});