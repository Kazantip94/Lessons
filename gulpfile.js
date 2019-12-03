const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();

const cssFiles = [
    './src/css/main.css',
    './src/css/media.css'
]

function styles(){
    return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
}))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());

}

function clean(){
    return del(['build/*'])
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/css/**/*.css', styles)
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles)));
gulp.task('dev', gulp.series('build', 'watch'));
