//遵从AMD
define(["jquery", "parabola"], function($){

	//node起始的位置的购物车按钮
	function BallMove1(node){

		//抛物线运动
		$(".PAO").css({
			display: "block",
			left: $(node).offset().left,
			top: $(node).offset().top
		})

		var offsetX = $(".cartfull").offset().left - $(".PAO").offset().left  ;
		var offsetY = $(".cartfull").offset().top - $(".PAO").offset().top  ;
/*	     alert(offsetY);
	     alert(offsetX);
*/		//【注】配置参数
		var bool = new Parabola({
			el: ".PAO",
			targetEl: null,
			offset: [offsetX, offsetY],
			curvature: 0.001,
			duration: 5000,
			callback: function(){
				$(".PAO").css("display", "none")
				 console.log("抛物线运动")
			}
		})
		//启动
		bool.start();
	}
	return {
		BallMove1: BallMove1
	}
})
















