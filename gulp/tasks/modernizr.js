var gulp = require("gulp"),
    modernizr = require("gulp-modernizr"),
    path = require("path");

gulp.task('modernizr', () => {
    return gulp.src([path.join('app', 'assets', 'styles', '**', '*.css'), path.join('app', 'assets', 'scripts', '**', '*.js')])
        .pipe(modernizr({
            "options": [
                "setClasses"
            ]
        }))
        .pipe(gulp.dest(path.join('app', 'temp', 'scripts')));
});
