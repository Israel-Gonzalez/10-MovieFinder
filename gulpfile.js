var gulp = require('gulp'),
    livereload = require('gulp-livereload'), // auto-reload browser when files are changed 
    wiredep = require('wiredep').stream, //	
    gutil = require('gulp-util'),
    connect = require('gulp-connect'), // run a local dev server 
    inject = require('gulp-inject'), // inject app dependency includes on index.html
    open = require('gulp-open'); // open a url in the browser 

var jsSources = ['*.js'],
    cssSources = ['**/*.css'],
    htmlSources = ['**/*.html'];

var paths = ['./bower_components/', '/js/*.js', './css/*.css', './bower_components/bootstrap/dist/**/*.css'];

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('app', function() {
    var options = {
        uri: 'http://localhost:8080',
        app: 'chrome'
    };
    gulp.src('./index.html')
        .pipe(open(options));

});

gulp.task('serve', ['connect', 'watch', 'injectables', 'app', 'livereload']);

// Reload page when changes are made 
gulp.task('livereload', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch(cssSources, ['css']);
	gulp.watch(htmlSources, ['html']);
})


// Watch 
gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);

});

gulp.task('injectables', function() {
    var sources = gulp.src(paths, { read: true });
    return gulp.src('index.html')
        .pipe(wiredep())
        .pipe(inject(sources))
        .pipe(gulp.dest('.'));

});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});


gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload())
});



gulp.task('hello', function() {
    console.log("Hello, world!");

});

gulp.task('default', ['hello']);
