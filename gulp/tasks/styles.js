var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  postcssnest = require("postcss-nested"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  hexrgba = require("postcss-hexrgba"),
  path = require("path");

// styles task start
gulp.task("styles", () => {
  return gulp.src(path.join('app', 'assets', 'styles', 'styles.css'))
    .pipe(postcss([cssImport, mixins, cssvars, postcssnest, hexrgba, autoprefixer]))
    .on("error", (err) => {
      console.error(`Caught you: ${err.message}`);
    })
    .pipe(gulp.dest(path.join('app', 'temp', 'styles')));
}); //styles task ends
