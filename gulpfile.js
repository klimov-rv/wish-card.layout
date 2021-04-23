const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');


function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

function cleanDist() {
    return del('dist')
}

function images() {
    return src('app/images/**/*')
        // .pipe(imagemin([
        //     imagemin.gifsicle({interlaced: true}),
        //     imagemin.mozjpeg({quality: 75, progressive: true}),
        //     imagemin.optipng({optimizationLevel: 5}),
        //     imagemin.svgo({
        //         plugins: [
        //             {removeViewBox: true},
        //             {cleanupIDs: false}
        //         ]
        //     })
        // ]))
        .pipe(dest('dist/images'))
}

function libs() {
    return src('app/libs/**/*')
        .pipe(dest('dist/libs'))
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/common.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}


const cssBundle = () =>
    src([
        'app/_fonts.css',
        'app/scss/normalise.css',
        'app/scss/spider.css',
        'app/scss/theme.css',

        'app/scss/swiper.css',
        'app/scss/aos.css',
        'app/scss/fancybox.css',
        'app/scss/hamburger.css',
        'app/scss/mmenu-light.css',

        'app/scss/index.css',
        'app/scss/responsive.css'
    ]) 
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())



// function styles() {
//     // 'css/fonts.css',
//     // 'css/normalise.css',
//     // 'css/spider.css',
//     // 'css/theme.css',

//     // 'css/swiper.css',
//     // 'css/aos.css',
//     // 'css/fancybox.css',
//     // 'css/hamburger.css',
//     // 'css/mmenu-light.css',

//     // 'css/index.css',
//     // 'css/responsive.css' 
//     return src('app/scss/style.scss')
//         .pipe(scss({ outputStyle: 'compact' }))
//         .pipe(concat('style.min.css'))
//         .pipe(autoprefixer({
//             overrideBrowserslist: ['last 10 version'],
//             grid: true
//         }))
//         .pipe(dest('app/css'))
//         .pipe(browserSync.stream())
// }

function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/_fonts.css',
        'app/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'))
}

function watching() {
    watch(['app/scss/**/*.scss'], cssBundle);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}

// exports.styles = styles;
exports.cssBundle = cssBundle; 
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, libs, build);
exports.default = parallel(cssBundle, scripts, browsersync, watching);