var gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  svg2png = require("gulp-svg2png"),
  path = require("path");

  // config object starts
  var config = {
    shape: {
      spacing: {
        padding: 1
      }
    },
    mode: {
      css: {
        variables: {
          replaceSvg: () => {
            return (sprite, render) => {
              return render(sprite).split('.svg').join('.png');
            }
          }
        },
        sprite: 'sprite.svg',
        render: {
          css: {
            template: path.join('gulp', 'template', 'sprite.css')
          }
        }
      }
    }
  } //config object ends

// createSprite task starts
  gulp.task("createSprite", () => {
    return gulp.src(path.join('app', 'assets', 'images', 'icons', '**', '*.svg'))
      .pipe(svgSprite(config))
      .pipe(gulp.dest(path.join('app', 'temp', 'sprite')))
  }); // createSprite task ends

// createPngCopy task starts
  gulp.task('createPngCopy', ['createSprite'], () => {
    return gulp.src(path.join('app', 'temp', 'sprite', 'css', '*.svg'))
        .pipe(svg2png())
        .pipe(gulp.dest(path.join('app', 'temp', 'sprite', 'css')));
}); // createPngCopy task ends

// copySpriteGraphic task starts
gulp.task('copySpriteGraphic', ['createPngCopy'], () => {
    return gulp.src(path.join('app', 'temp', 'sprite', 'css', '**', '*.{svg,png}'))
        .pipe(gulp.dest(path.join('app', 'assets', 'images', 'sprites')));
}); // copySpriteGraphic task ends

// copySprite task starts
gulp.task('copySprite', ['createSprite'], () => {
    return gulp.src(path.join('app', 'temp', 'sprite', 'css', '*.css'))
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest(path.join('app', 'assets', 'styles', 'modules')));
}); //copySprite task ends


gulp.task('icons', ['createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySprite']);
