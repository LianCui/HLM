//遵从AMD
define(["jquery", "parabola"], function($){

	//node起始的位置的购物车按钮
	function ballMove(node){

		//抛物线运动
		$(".Asuccess").css({
			display: "block",
			left: $(node).offset().left,
			top: $(node).offset().top
		})

		var offsetX = $(".cartfull").offset().left - $(".Asuccess").offset().left  ;
		var offsetY = $(".cartfull").offset().top - $(".Asuccess").offset().top  ;
/*	     alert(offsetY);
	     alert(offsetX);
*/		//【注】配置参数
		var bool = new Parabola({
			el: ".Asuccess",
			targetEl: null,
			offset: [offsetX, offsetY],
			curvature: 0.002,
			duration: 2000,
			callback: function(){
				$(".Asuccess").css("display", "none")
			}
		})
		//启动
		bool.start();
	}
	return {
		ballMove: ballMove
	}
})
















