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
var gsass = require('gulp-sass');

var babelify = require('babelify');

var webroot = "./content/";

var paths = {
  js: webroot + "js/bundle/**/*.js",
  appJs: webroot + "app/**/*.js",
  minJs: webroot + "js/**/*.min.js",
  scss: webroot + "css/**/*.scss",
  appScss: webroot + "app/**/*.scss",
  libCss: webroot + "css/lib/**/*.css",
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
    .on('error', gutil.log)
    .pipe(gulp.dest("."));
  
  globby([paths.appJs, paths.js]).then(function(entries){
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
  return gulp.src([paths.scss, paths.appScss, paths.libCss, "!" + paths.minCss])
    .pipe(gsass())
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .on('error', gutil.log)
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('watch-dotnet', shell.task(['dotnet watch run']));
gulp.task('watch-min', function() {
  gulp.watch(paths.js, {cwd: webroot }, ['min:js']);
  gulp.watch(paths.appJs, {cwd: webroot }, ['min:js']);
  gulp.watch(paths.appScss, ['min:css']);
  gulp.watch(paths.scss, ['min:css']);
});