const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");



// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/css/**/*.css', cleanCSS),
    gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task('cleanCSS', () => {
    return gulp.src('css/*.css')
      .pipe(cleanCSS())
      .pipe(rename({
          suffix: '.min'
    }))
      .pipe(gulp.dest('build/css'));
  });


