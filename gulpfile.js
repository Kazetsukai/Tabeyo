/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
  rimraf = require("rimraf"),
  concat = require("gulp-concat"),
  cssmin = require("gulp-cssmin"),
  uglify = require("gulp-uglify"),
  shell = require("gulp-shell");
    
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var globby = require('globby');
var through = require('through2');
var gutil = require('gulp-util');

var babelify = require('babelify');

var webroot = "./wwwroot/";

var paths = {
  js: webroot + "js/bundle/**/*.js",
  minJs: webroot + "js/**/*.min.js",
  css: webroot + "css/**/*.css",
  minCss: webroot + "css/**/*.min.css",
  concatJsDest: webroot + "js/site.min.js",
  concatCssDest: webroot + "css/site.min.css"
};
  
gulp.task("clean:js", function (cb) {
  rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
  rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
  
  var bundledStream = through();
  
  bundledStream
    .pipe(source(paths.concatJsDest))
    .pipe(buffer())
    //.pipe(uglify())
    .on('error', gutil.log)
    .pipe(gulp.dest("."));
  
  globby([paths.js]).then(function(entries){
    var b = browserify({
      entries: entries,
      transform: [babelify]
    });
    
    b.bundle().pipe(bundledStream);
  }).catch(function(err) {
    // ensure any errors from globby are handled
    bundledStream.emit('error', err);
  });

  return bundledStream;
});

gulp.task("min:css", function () {
  return gulp.src([paths.css, "!" + paths.minCss])
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('watch-dnx', shell.task(['dnx-watch web']));
gulp.task('watch-min', function() {
  gulp.watch("js/bundle/**/*.js", {cwd: webroot }, ['min:js']);
  gulp.watch(paths.css, ['min:css']);
});