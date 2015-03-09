var gulp = require('gulp');
var webpack = require('webpack');
var templateCache = require('gulp-angular-templatecache');
var sass = require('gulp-ruby-sass');

gulp.task('build', ['webpack', 'sass']);

gulp.task('default', ['build']);
gulp.task('dev', ['watch']);

gulp.task('watch', ['build'], function() {
  gulp.watch([
    'client/app/**/*.ts',
    'client/app/**/*.html'
  ], ['webpack']);
  gulp.watch('client/styles/**/*.scss', ['sass']);
});

gulp.task('webpack', ['templates'], function(done) {
  var config = require('./webpack.config');
  webpack(config, function(err, s) {
    if (err) {
      console.log(err);
      done();
      return;
    }
    stats = s.toJson()
    if (stats.warnings.length) {
      stats.warnings.forEach(console.log)
    }
    if (stats.errors.length) {
      stats.errors.forEach(console.log)
    }
    done();
  })
});

gulp.task('templates', function () {
  return gulp.src('client/app/**/*.html')
    .pipe(templateCache({
      standalone: true,
      moduleSystem: 'Browserify'
    }))
    .pipe(gulp.dest('client/app'));
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
