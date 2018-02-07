define(["jquery"],function($){
		function resign(){
			$(function(){
				  //验证
					$("#mobile").focus(function(){
						if(!($("#mobile").val())){
							$("#mobilen").css({display:"block"});
					    	$("#mobilep").html("请输入手机号！");
						}
						
			 		})
			 	
			 		
			 		$("#code").focus(function(){
			 			if(!($("#code").val())){
			 				$("#coden").css({display:"block"});
					        $("#codep").html("请填写密码！");
			 			}
			 			
			 		})
			 		$("#code").blur(function(){
			 			$("#coden").css({display:"none"});
					    $("#codep").html(" ");
			 		})

			 		$("#Vcode").focus(function(){
			 			if(!($("#Vcode").val())){
			 			  $("#note_code").css({display:"block"});
					      $("#codev").html("请输入正确验证码！");
					  }
			 		})
			 		$("#Vcode").blur(function(){
			 			$("#note_code").css({display:"none"});
					    $("#codev").html(" ");
			 		})

			 		//验证账号
		$("#mobile").blur(function(){
			
			//1、将用户名中误输入的空格清除掉
			var oValue = $("#mobile").val().replace(/ /g, "");
			
			//手机号验证
			var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
			if(!($("#mobile").val())){
				// alert(2);
				$("#mobilen").css({display:"block"});
				$("#mobilep").html("手机号不可以为空");
			}else if(!regPhone.test(oValue)){
				$("#mobilen").css({display:"block"});
			    $("#mobilep").html("请输入正确格式的账号");
			}else{
				$("#mobilen").css({display:"none"});
			    $("#mobilep").html(" ");
			}
		})
		//验证密码
		$("#code").blur(function(){
			//1、将密码中误输入的空格清除掉
			var oValue = $("#code").val().replace(/ /g, "");
			$("#code").val(oValue);
			oValue = $("#code").val();
			//密码规则验证
			var resPass = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
			if(oValue == ""){
				$("#coden").css({display:"block"});
			    $("#codep").html("密码不能为空");
				
			}else if(oValue.length > 20 || oValue.length < 6){
				$("#coden").css({display:"block"});
			    $("#codep").html("密码长度6-20位");				

			}else if(!resPass.test(oValue)){
				$("#coden").css({display:"block"});
			    $("#codep").html("密码至少包含数字、字母、字符其中的2种");

			}else{
				$("#coden").css({display:"none"});
			    $("#codep").html(" ");
			}	
 
		})
			 		

		//注册事件
		//点击注册
		$(".register_btn").click(function(ev){
			// alert(1);
			var id = $("#mobile").val();
			var pwd = $("#code").val();
			var first = $.cookie("useInfo") == null ? true : false;
			if (first) {
				//第一次添加 
				$.cookie("useInfo",id + ":" + pwd,{expires:7});
				alert("注册成功");
				location.reload();
			}else{
				var str = $.cookie("useInfo");
				var arr = str.split(":");
				var same = false;//代表是否有相同用户
				//遍历所有的对象，判断是否id相同
				for(var i = 0; i < arr.length; i++){
					if(arr[i] == id){
						same = true;
						alert("该用户已经注册");
						break;
					}
				}
				//没有相同的用户
				if(!same){
					str += ":" + id + ":" + pwd;
					$.cookie("useInfo",str,{expires:7});
					alert("注册成功");
					location.reload();
				}
			}
		
			return false;
		})
			 	 
			 		
			})
			 	 

		return "注册的页面"
	}
	return{
		resign:resign
	}
})