var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cleancss = require('gulp-cleancss');

// Sass
// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'header'], function() {

    browserSync.init({
        proxy: "127.0.0.1:4000"
    });

    gulp.watch('**/*.scss', ['sass', 'header']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./_sass/atf.scss")
        .pipe(sass())
        .pipe(cleancss({keepBreaks: false}))
        .pipe(gulp.dest("./_includes"))
        .pipe(browserSync.stream());
});

// Compile sass into CSS for header
gulp.task('header', function() {
    return gulp.src("./_sass/header.scss")
        .pipe(sass())
        .pipe(cleancss({keepBreaks: false}))
        .pipe(gulp.dest("./gulped-header.css"));
});

gulp.task('default', ['serve']);
