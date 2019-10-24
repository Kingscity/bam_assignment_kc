var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect');

var env,
    sassSources,
    outputDir,
    sassStyle;

//env = process.env.NODE_ENV || 'development';

outputDir = 'src/';
sassStyle = 'expanded';

sassSources = ['src/components/sass/App.scss'];


gulp.task('compass', function(done){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'src/components/sass',
            image: 'public/assets/images',
            style: sassStyle
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
    done();
});


gulp.task('watch', function(done){
    gulp.watch('src/components/sass/*.scss', gulp.series('compass'));
    done();
});

gulp.task('default', gulp.series('compass', 'watch'));