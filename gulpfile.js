var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var nib = require('nib');

gulp.task('default',function() {
        // 将默认的任务代码放在这里
}) 


//定义一个watch任务来监听模板文件的变化
gulp.task('watch',function(){
    gulp.watch('./styl/**/*',['stylus']);
})


//duang CSS 生成
gulp.task('stylus', function () {
    gulp.src('./styl/index.styl')
        .pipe(stylus({
            compress:true,
            use: nib()
        }))
        .pipe(rename('bar.min.css'))//重命命
        .pipe(gulp.dest('./dist/css/'));//压缩到的文件夹
});




