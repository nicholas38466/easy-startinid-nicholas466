var  gulp         = require('gulp'),
     postcss      = require('gulp-postcss'),
     sass         = require('gulp-sass'),
     autoprefixer = require('autoprefixer'),
     browser      = require('browser-sync'),
     sourcemaps   = require('gulp-sourcemaps'),
     iconfont     = require("gulp-iconfont"),
  	 consolidate  = require("gulp-consolidate"),
     pug  = require('gulp-pug');

     gulp.task('views', function buildHTML() {
  return gulp.src('views/*.pug')
  .pipe(pug({
            pretty: true
    // Your options in here. 
  }))
  .pipe(gulp.dest('views'))
});
     
 gulp.task("build:icons", function() {
   return gulp.src(["./icons/*.svg"])//path to svg icons
     .pipe(iconfont({
       fontName: "icon-font",
       formats: ["ttf", "eot", "woff2", "woff", "svg"],
       centerHorizontally: true,
       fixedWidth: true,
       normalize: true
     }))
     .on("glyphs", function (glyphs) {

       gulp.src("./icons/util/*.scss") // Template for scss files
           .pipe(consolidate("lodash", {
               glyphs: glyphs,
               fontName: "icon-font",
               fontPath: "../dist/fonts/"
           }))
           .pipe(gulp.dest("./scss/icons/"));//generated scss files with classes
     })
     .pipe(gulp.dest("dist/fonts/"));//icon font destination
});
    
 gulp.task('build:sass', function () {
   return gulp.src('scss/**/*.scss')
         .pipe(sourcemaps.init())
         .pipe(sass({
               includePaths: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
           }).on('error', sass.logError))
         .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
         .pipe(sourcemaps.write('.'))
         .pipe(gulp.dest('./css'))
         .pipe(browser.stream({match: '**/*.css'}));
 }); 

 // Starts a BrowerSync instance
 gulp.task('serve', ['build:sass','views'], function(){
     browser.init({
         server: {
             baseDir: "./"
         }
     });
 });

 // Runs all of the above tasks and then waits for files to change
 gulp.task('default', ['serve'], function() {
     gulp.watch(['scss/**/*.scss'], ['build:sass']);  
     gulp.watch('./**/*.html').on('change', browser.reload);
 });