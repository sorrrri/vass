const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync')

const PATH = {
    HTML: './src',
    ASSETS: {
        FONTS: './src/assets/fonts',
        CSS: './src/assets/css',
        IMAGES: './src/assets/images',
        JS: './src/assets/js',
    }
}

const DEST_PATH = {
    HTML: './dist',
    ASSETS: {
        FONTS: './dist/fonts',
        CSS: './dist/css',
        IMAGES: './dist/images',
        JS: './dist/js',
    }
}

gulp.task('html', () => {
    return gulp.src('./src' + '/*.html')
        .pipe(gulp.dest('./dist'))
})

gulp.task('nodemon:start', () => {
    return new Promise(resolve => {
        nodemon({
            script: 'app.js',
            watch: 'app'
        })
        resolve()
    })
})

gulp.task('browserSync', () => {
    return new Promise(resolve => {
        browserSync.init(null, {
            proxy: 'http://localhost:5020',
            port: 5021
        })
        resolve()
    })
})

gulp.task('watch', () => {
    return new Promise(resolve => {
        gulp.watch('./src' + '/**/*.html', gulp.series(['html']))
        gulp.watch('./src/assets/css' + '/**/*.css')
        resolve()
    })
})

const series = gulp.series([
    'html',
    'nodemon:start',
    'browserSync',
    'watch'
])

gulp.task('default', series)
