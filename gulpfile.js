var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
        gulp.src('./sass/**/*.sass')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('./CSS'))
});

gulp.task('sass:watch', function() {
        gulp.watch('./sass/**/*.sass', ['sass'] );
});

gulp.task('default', function () {
    return gulp.src('CSS/style.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./CSS'));
});
