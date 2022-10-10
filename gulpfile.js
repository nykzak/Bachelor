const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const webpack = require("webpack-stream");

const dist = "/Applications/MAMP/htdocs/bakServer";
gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: dist
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dist + "/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/data/**/*").on('change',gulp.parallel('datas'));
    gulp.watch("src/mailer/**/*").on('change',gulp.parallel('mailer'));
    gulp.watch("src/img/src/conf/**/*.png").on('change', gulp.parallel('images'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(dist));
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browserSync.reload);
});



gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest(dist + "/fonts"));
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest(dist + "/icons"));
});

gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest(dist + "/mailer"));
});

gulp.task('vendor', function () {
    return gulp.src("src/vendor/**/**/**")
        .pipe(gulp.dest(dist + "/vendor"));
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest(dist + "/img"));
});

gulp.task('datas', function () {
    return gulp.src("src/data/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest(dist + "/data"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'build-js', 'fonts', 'icons', 'mailer', 'html', 'images', 'datas','vendor'));