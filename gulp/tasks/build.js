var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require("browser-sync").create(),
    path = require("path");

gulp.task('deleteDistFolder', () => {
    return del(path.join('dist'));
});

gulp.task('previewDist', () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
    return gulp.src([path.join('app', 'assets', 'images', '**', '*'), path.join('!app', 'assets', 'images', 'icons'), path.join('!app', 'assets', 'images', 'icons', '**', '*')])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest(path.join('dist', 'assets', 'images')));
});

gulp.task('usemin', () => {
    return gulp.src(path.join('app', 'index.html'))
        .pipe(usemin({
            css: [() => {return rev()}, () => {return cssnano()}],
            js: [() => {return rev()}, () => {return uglify()}]
        }))
        .pipe(gulp.dest(path.join('dist')));
})

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
