var gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    less        = require('gulp-less'),
    cleanCSS    = require('gulp-clean-css');

// GMA API LESS >> CSS

gulp.task('less', function () {
    return gulp.src(['less/application.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['less']);

