var gulp = require("gulp"),
  webpack = require("webpack"),
  path = require("path");

  // scripts task starts
  gulp.task("scripts", (callback) => {
    webpack(require(path.join('..', '..', 'webpack.config.js')), (err, stats) => {
        if (err) {
          console.error(`Caught you: ${err.message}`);
        }

        console.log(stats.toString());
        callback();
    });
  });
