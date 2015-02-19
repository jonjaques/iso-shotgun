var gulp = require('gulp');
var webpack = require('webpack');
var sass = require('gulp-ruby-sass');

gulp.task('build', ['webpack', 'sass']);

gulp.task('default', ['build']);

gulp.task('webpack', function(done) {
  var config = require('./webpack.config');
  webpack(config, function() {
    done();
  })
});

gulp.task('default', function () {
  return gulp.src('client/app/**/*.html')
    .pipe(templateCache({
      standalone: true,
      moduleSystem: 'Browserify'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('client/styles/main.scss')
    .pipe(sass({
      sourcemap: true,
      sourcemapPath: '../../',
      loadPath: [
        './node_modules/bootstrap-sass/assets/stylesheets'
      ]
    }))
      .on('error', console.log)
    .pipe(gulp.dest('client/dist/css'))
});
