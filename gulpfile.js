/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
  rimraf = require("rimraf"),
  concat = require("gulp-concat"),
  cssmin = require("gulp-cssmin"),
  uglify = require("gulp-uglify"),
  shell = require("gulp-shell"),
  gsass = require("gulp-sass"),
  gutil = require("gulp-util");
    

var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");

var webroot = "./content/";

var paths = {
  js: webroot + "js/bundle/**/*.js",
  appJs: webroot + "app/**/*.js",
  minJs: webroot + "js/**/*.min.js",
  scss: webroot + "css/**/*.scss",
  appScss: webroot + "app/**/*.scss",
  libCss: webroot + "css/lib/**/*.css",
  minCss: webroot + "css/**/*.min.css",
  
  webpackEntryJs: webroot + "app/app.js",
  jsDestination: webroot + "js/",
  concatCssDest: webroot + "css/site.min.css"

};

gulp.task("clean:js", function (cb) {
  rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
  rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("webpack", function(callback) {
    webpack({
      entry: "./content/app/app.js",
      output: {
        path: paths.jsDestination,
        filename: "site.min.js"
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: "uglify!jsx!babel" }
        ]
      }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("min:css", function () {
  return gulp.src([paths.scss, paths.appScss, paths.libCss, "!" + paths.minCss])
    .pipe(gsass())
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .on('error', gutil.log)
    .pipe(gulp.dest("."));
});

gulp.task("min", ["webpack", "min:css"]);

gulp.task('watch-dotnet', shell.task(['dotnet watch run']));