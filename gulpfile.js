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

const cssBundle = () =>
    src([
        'app/_fonts.css',
        'app/scss/normalise.css',
        'app/scss/spider.css',

        'app/scss/swiper.css',
        'app/scss/aos.css',
        'app/scss/fancybox.css',
        'app/scss/hamburger.css',
        'app/scss/mmenu-light.css',

        'app/scss/theme.css',
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

function scripts() {
    return src([  
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
} 

function build() {
    return src([
        // общие скрипты и стили
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/_fonts.css', 
        // Каталог
        'app/scss/catalog.css', 
        // Страница товара
        'app/scss/towar-card.css', 
        // О нас
        'app/scss/about.css', 
        // Комплексные
        'app/scss/complex.css', 
        // Корзина и оформление аказа 
        'app/scss/basket-checkout.css',
        // 'app/scss/catalog.css',
        'app/*.html' 
    ], { base: 'app' })
        .pipe(dest('dist'))
}

function watching() {
    watch(['app/scss/**/*.scss'], cssBundle);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}
 
exports.cssBundle = cssBundle; 
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, libs, build);
exports.default = parallel(cssBundle, scripts, browsersync, watching);