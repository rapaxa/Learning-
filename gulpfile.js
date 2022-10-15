const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
// const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
gulp.task('html',function (){
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist/"))
});
gulp.task('image',function (){
    return gulp.src("src/img/*.*")
        .pipe(gulp.dest("dist/img"))
});
gulp.task('script',function (){
    return gulp.src("src/**/*.js")
        .pipe(gulp.dest("dist/"))
});
gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("dist/*.html").on('change', browserSync.reload);
    gulp.watch("dist/**/*.js").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        // .pipe(rename({suffix: '', prefix: ''}))
        // .pipe(autoprefixer())
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/**/*.scss", gulp.parallel('styles'));
    gulp.watch("src/**/*.html", gulp.parallel('html'));
    gulp.watch("src/**/*.js", gulp.parallel('script'));
})

gulp.task('default', gulp.parallel('watch',"html","image", 'server',"script", 'styles'));