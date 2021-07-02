const project_folder = require('path').basename(__dirname);
const source_folder = '_src';

const path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        assets: project_folder + '/assets/'
    },
    src: {
        html: source_folder + '/*.html',
        css: source_folder + '/scss/style.scss',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        assets: source_folder + '/assets/**/*.*'
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        assets: source_folder + '/assets/**/*.*'
    },
    clean: [
        './' + project_folder + '/' + '**',
        './' + '!' + project_folder + '/',
        './' + '!' + project_folder + '/' + '.git' + '/' + '**/*.*',
        './' + '!' + project_folder + '/' + '.gitignore',
    ]
};

const { src, dest } = require('gulp');
const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const del = require('del');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const group_media = require('gulp-group-css-media-queries');
const clean_css = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webphtml = require('gulp-webp-html');
const htmlmin = require('gulp-htmlmin');

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/',
            port: 3000,
        },
        notify: false
    });
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webphtml())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: { level: 2, },
            minifyJS: { toplevel: true, },
            removeEmptyAttributes: true,
        }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(scss({
            outputStyle: 'expanded'
        }))
        .pipe(group_media())
        .pipe(autoprefixer({
            cascade: true,
        }))

        .pipe(dest(path.build.css))
        .pipe(clean_css({
            level: 2,
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(uglify({
            toplevel: true,
        }))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(webp({
            quality: 70
        }))
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(imagemin({
            prograssive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function assets() {
    return src(path.src.assets)
        .pipe(dest(path.build.assets))
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
}

function clean() {
    return del(path.clean)
}

const build = gulp.series(clean, gulp.parallel(js, css, html, images, assets));
const watch = gulp.parallel(build, browserSync, watchFiles);

exports.html = html;
exports.css = css;
exports.js = js;
exports.assets = assets;
exports.clean = clean;
exports.images = images;
exports.build = build;
exports.watch = watch;
exports.default = watch;
