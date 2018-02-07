//1.引入gulp
const gulp = require("gulp");

//html文件托管
gulp.task("html",() => {
	return gulp.src("html/*.html")
	.pipe(gulp.dest("HLM/html"))
	.pipe(connect.reload());
})


//images图片的托管
gulp.task("images",() =>{
	return gulp.src("images/**/*")
	.pipe(gulp.dest("HLM/images"))
	.pipe(connect.reload());
})


//js文件的托管
gulp.task("scripts",() => {
	return gulp.src("js/*.js")
	.pipe(gulp.dest("HLM/js"))
	.pipe(connect.reload());
})

const scss = require("gulp-sass-china");
//SCSS文件的托管
gulp.task("scss",() => {
	return gulp.src("scss/*.scss")
	.pipe(scss())   //将scss文件转为css文件
	.pipe(gulp.dest("HLM/css"))
	.pipe(connect.reload());
})

//css文件托管
gulp.task("css",() => {
	return gulp.src("scss/*.css")
	.pipe(gulp.dest("HLM/css"))
	.pipe(connect.reload());
})


//data数据json文件的托管,整理数据源
gulp.task("data",() => {
	return gulp.src("data/*.json")
	.pipe(gulp.dest("HLM/data"))
	.pipe(connect.reload());
})


//上述操作都是整理文件的，作为整体，建立项目的整体，让他们一起执行

gulp.task("build",["html","images","scripts","scss","data","css"],() => {
	console.log("gulp托管成功");
})


//watch开启时时监听
gulp.task("watch", function(){
	/*
		两个参数
		第一个参数我们要监听文件路径
		第二个参数我们监听到变化以后，要去执行的任务
	*/
	gulp.watch("html/*.html", ["html"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("data/*.json", ["data"]);
	gulp.watch("scss/*.scss", ["scss"]);
	gulp.watch("scss/*.css", ["css"]);
})

//开启服务 gulp-connect
const connect = require("gulp-connect");

gulp.task("server", () => {
	connect.server({
		root: "HLM",
		port: 8888,
		livereload: true //自动刷新
	})
})


//默认开启default
gulp.task("default", ["watch", "server"]);