const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require('gulp-uglify-es').default;

function style() {
  return gulp
    .src("./_src/scss/style.scss")
    .pipe(
      sass({
        includePaths: require("node-normalize-scss").includePaths,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(
        autoprefixer({
          overrideBrowserslist:  ['last 2 versions'],
          cascade: false,
        })
      )
    .pipe(gulp.dest("./_build/css/"))
    .pipe(browserSync.stream());
}

function script() {
  return gulp
    .src("./_src/js/script.js")
    .pipe(
      uglify({
        toplevel: true,
      })
    )
    .pipe(gulp.dest("./_build/js/"));
}

function html() {
  return gulp
    .src("./_src/index.html")
    .pipe(gulp.dest("./_build/"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({ server: { baseDir: "./_build/" }, notify: false });
  gulp.watch("./_src/scss/style.scss", style);
  gulp.watch("./_src/js/script.js", script);
  gulp.watch("./_src/index.html", html);
  gulp.watch("./_src/").on("change", browserSync.reload);
}

exports.script = script;
exports.html = html;
exports.style = style;
exports.watch = watch;
