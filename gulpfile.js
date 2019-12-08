const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require('gulp-sass');



// Static server
function bs() {
    serveSass()
    minCSS()
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch('./css/**/*.css');
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass(){
    return src("./sass/*.sass","./sass/*.scss")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};


function minCSS() {
    return src(["./css/*.css", "!./css/*.min.css"])
      .pipe(cleanCSS())
      .pipe(rename({
          suffix: '.min'
    }))
      .pipe(dest("./css"));
 };

  exports.serve = bs;


