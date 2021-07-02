const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const del = require("del");

const build = "./_build/";
const src = "./_src/";

const path = {
  build: {
    css: build,
    js: build ,
    html: build
  },
  src: {
    scss: src + "scss/style.scss",
    js: src + "js/script.js",
    html: src + "html/*.html"
  },
  watch: {
    scss: src + "scss/**/*.scss",
    js: src + "js/**/*.js",
    html: src + "html/**/*.html"
  },
};

const main = {
  style: () =>
    gulp
      .src(path.src.scss)
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
          cascade: false,
        })
      )
      .pipe(gulp.dest(path.build.css))
      .pipe(browserSync.stream()),

  script: () =>
    gulp
      .src(path.src.js)
      .pipe(gulp.dest(path.build.js))
      .pipe(browserSync.stream()),

  html: () =>
    gulp
      .src(path.src.html)
      .pipe(gulp.dest(path.build.html))
      .pipe(browserSync.stream()),

  watch: () => {
    browserSync.init({ server: { baseDir: build }, notify: false });
    gulp.watch(path.watch.scss, this.style);
    gulp.watch(path.watch.js, this.script);
    gulp.watch(path.watch.html, this.html);
    gulp.watch(src).on("change", browserSync.reload);
  },

  del: () => del(build),
};

const start = gulp.series(
  main.del,
  gulp.parallel(main.script, main.html, main.style),
  main.watch
);

exports.start = start;
exports.del = main.del;
exports.script = main.script;
exports.html = main.html;
exports.style = main.style;
exports.watch = main.watch;
