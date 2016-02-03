/*merging jquery, bootstrap and remodal js files*/
const gulp = require('gulp'),
			concat = require('gulp-concat'),
      minifyCss = require('gulp-minify-css');
 
gulp.task('css-merge-minify', function() {
  return gulp.src(['./src/css/mobilelayout.css',
                   './src/css/font.css',
                   './src/css/colorandshadow.css',
                   './src/css/effect.css',
                   './src/css/mediaqueries.css'])
    .pipe(concat('all.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css/'));
});


gulp.task('scripts', function() {
  return gulp.src(['./src/bower_components/jquery/dist/jquery.min.js', 
									 './src/bower_components/bootstrap/dist/js/bootstrap.min.js',
									 './src/bower_components/remodal/dist/remodal.min.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('copy-root-files', function () {
    return gulp.src(['./src/index.html',
                     './src/Enso.png'])
    .pipe(gulp.dest('./dist/'))
})

gulp.task('copy-img-files', function () {
    return gulp.src(['./src/img/**/*'])
    .pipe(gulp.dest('./dist/img'))
})

gulp.task('copy-dependencies', function() {
    return gulp.src(['./src/bower_components/font-roboto/**/*',
                    './src/bower_components/iron-flex-layout/**/*',
                    './src/bower_components/iron-image/**/*',
                    './src/bower_components/paper-card/**/*',
                    './src/bower_components/paper-material/**/*',
                    './src/bower_components/paper-styles/**/*',
                    './src/bower_components/polymer/**/*',
                    './src/bower_components/webcomponentsjs/**/*',
                    './src/bower_components/bootstrap/dist/**/*',
                    './src/bower_components/remodal/dist/**/*'])
            .pipe(gulp.dest(function(file) { //idea from andreasonny83 at https://github.com/gulpjs/gulp/issues/151
                var dest = file.base.replace('src', 'dist');    // this strategy preserves the folder structure
                return dest;
            }));
});



gulp.task('default', ['css-merge-minify','scripts','copy-root-files','copy-img-files', 'copy-dependencies']);


//Do not forget to modify the index.html file accordingly after the gulp tasks. Thus, you have to modify the personal css files and the js files to their concatenated+minified format.