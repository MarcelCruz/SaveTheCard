var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendor',function(){
    return gulp.src('./bower_components/**/*.js')
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('app',function(){
    return gulp.src('./app/**/*.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('default',['app']);
