const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");

function style() {
  return gulp
    .src("./#src/scss/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./#build/css"))
    .pipe(browserSync.stream());
}

function html() {
  return gulp
    .src("./#src/index.html")
    .pipe(gulp.dest("./#build/"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({ server: { baseDir: "./#build/" }, notify: false });
  gulp.watch("./#src/scss/**/*.scss", style);
  gulp.watch("./#src/index.html", html);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.html = html;
exports.style = style;
exports.watch = watch;
