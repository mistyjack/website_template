var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create();

// watch task start
gulp.task("watch",  () => {

  // Browser sync options
  browserSync.init({
    server: {
      baseDir: "app"
    }
  })


// Reload page with browser browserSync
  watch("./app/index.html", () => {
    browserSync.reload();
  });

// Toggle on the cssinject task
  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("cssinject");
  });

  // // Toggle on the script refresh task
  // watch("./app/assets/scripts/**/*.js", () => {
  //   gulp.start("scriptsRefresh");
  // });

}); // watch task ends

// cssinject task starts
gulp.task("cssInject", ["styles"], () => {
  return gulp.src("./app/temp/styles/styles.css")
  .pipe(browserSync.stream());
}); // cssInject task ends

// // scriptsRefresh task starts
// gulp.task("scriptsRefresh", ["scripts"], () {
//   browserSync.reload();
// }); // scriptsRefresh task ends
