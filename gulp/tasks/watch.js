var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create(),
  path = require("path");

// watch task start
gulp.task("watch",  () => {

  // Browser sync options
  browserSync.init({
    server: {
      baseDir: "app"
    }
  })

// Reload page with browser browserSync
  watch(path.join('app', 'index.html'), () => {
    browserSync.reload();
  });

// Toggle on the cssinject task
  watch(path.join('app', 'assets', 'styles', '**', '*.css'), () => {
    gulp.start("cssInject");
  });

// Toggle on the script refresh task
  watch(path.join('app', 'assets', 'scripts', '**', '*.js'), () => {
    gulp.start("scriptsRefresh");
  });

}); // watch task ends

// cssinject task starts
gulp.task("cssInject", ["styles"], () => {
  return gulp.src(path.join('app', 'temp', 'styles', 'styles.css'))
  .pipe(browserSync.stream());
}); // cssInject task ends

// scriptsRefresh task starts
gulp.task("scriptsRefresh", ["scripts"], () => {
  browserSync.reload();
}); // scriptsRefresh task ends
