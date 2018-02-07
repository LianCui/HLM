console.log("main.js载入成功");

/*
	设置需要引入的js文件
*/
require.config({
	paths:{
		"jquery":"jquery",
		"jquery.cookie":"jquery.cookie",
		"parabola":"parabola",
		"index":"index",
		"login":"login",
		"details":"details",
		"Sgoods":"Sgoods",
		"public":"public",
	},
	shim:{
		/*
			在实例的app中，还用到jquery以外的第三方库
			如果该类库不是一个标准AMD规范，我又不想去改代码
			需要通过下述方式定义该文件
		*/
	    "parabola":{
	    	exports:"_",
	    },
	    // 设置依赖关系
	    "jquery.cookie":["jquery"],
	    "parabola":["jquery"]
	}
})
 

//要去调用index.js中的index函数
require(["index","login","resign","details","Sgoods","shopcar","public"],function(index,login,resign,details,Sgoods,shopcar,public){
	console.log(index.index());
	console.log(login.login());
	console.log(resign.resign());
	console.log(details.details());
	console.log(Sgoods.Sgoods());
	console.log(shopcar.shopcar());
})
 
 