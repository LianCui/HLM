// 登录
define(["jquery","jquery.cookie"],function($){
   function login(){
   	$(function(){ 

      //验证
		$("#password").focus(function(){
        $("#coden").css({display:"block"});
		    $("#passwordu").html("请填写密码！");
 		})
 		$("#password").blur(function(){
        $("#coden").css({display:"none"});
		    $("#passwordu").html(" ");
 		})
 		
 		$("#username").focus(function(){
        $("#mobilen").css({display:"block"});
		    $("#usernamep").html("请输入账号");
 		})
 		$("#username").blur(function(){
        $("#mobilen").css({display:"none"});
		    $("#usernamep").html(" ");
 		})


          $("#username").click(function(){
            //1、将用户名中误输入的空格清除掉
            var oValue = $("#username").val().replace(/ /g, "");
            $("#username").val(oValue);
            oValue = $("#username").val();
            //手机号验证
            var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
            //验证邮件格式
            var regEmail = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/;
            if(oValue == ""){
              $("#mobilen").css({display:"block"});
              $("#usernamep").html("账号不可以为空");
              /*var html = '<p>账号不能为空</p>'; 
              $(".login_hint").html(html);*/
            }else if(!(regPhone.test(oValue) || regEmail.test(oValue))){
              $("#mobilen").css({display:"block"});
              $("#usernamep").html("账号格式错误");
              /*var html = '<p>账号格式错误!</p>'; 
              $(".login_hint").html(html);*/
            }
          })

          $(".btn").on("click",function(ev){
            var oValue = $("#username").val().replace(/ /g, "");
            var pass = $("#password").val().replace(/ /g, "");
            $("#password").val(pass);
            $("#username").val(oValue);
            pass = $("#password").val();
            oValue = $("#username").val();
            if(oValue == ""){
              $("#mobilen").css({display:"none"});
              $("#usernamep").html(" ");
              /*var html = '<p>账号格式错误!</p>'; 
              $(".login_hint").html(html);*/
            }else if(pass == ""){
              $("#coden").css({display:"block"});
              $("#passwordu").html("密码不可以为空 ");
              /*var html = '<p>密码不能为空</p>'; 
              $(".login_hint").html(html);*/
            }else{ 
              $("#coden").css({display:"none"});
              $("#passwordu").html(" ");
            }
              // $(".login_hint").html("");
              //获取用户数据
              var user = $("#username").val();
              var pass = $("#password").val();
              alert(3);
              //alert(user+","+pass);
              var str = $.cookie("useInfo");
              var arr = str.split(":");
              var same = false;//代用户名和密码是否相同
              //遍历所有的对象，判断是否id相同
              alert(2);
              for(var i = 0; i < arr.length;i++){
                alert(1);
                if(arr[i] == user && arr[i+1] == pass){
                  alert("登录成功");
                 /* var html = '<a href="#">'+ user +'</a>';
                  $(".domain").html(html).css("width","100px");
                  $(".domain").find("a").css("color","block");*/
                  //location.reload();
                  //隐藏登录框和蒙版
                  //$(".login").css("display","none");
                  //$(".mask").css("display","none");
                  /*$(".mask").remove();
                  $(".login").remove();
                  same = true;*/
                  break;
                }
              
              if(!same){
                alert("用户名或密码错误");
              }
            }
            return false;
          })



    //tab切换
    
     $(".account").click(function(){

       $(".account").css({color:"#d70057"});
       $(".borderleft").css({color:"#000"});
       $(".loginbody").css({display:"block"});
       $(".logowe").css({display:"none"});

     })
     $(".borderleft").click(function(){

        $(".account").css({color:"#000"});
        $(".borderleft").css({color:"#d70057"});
        $(".logowe").css({display:"block"});
        $(".loginbody").css({display:"none"});
        
     })
      //登录框二维码转换
       $(".havecode").find("img").eq(0).hover(function(){
            $(this).stop().animate({left:'0px'});
            $(".havecode").find("img").eq(1).stop().animate({opacity:1});
       },function(){
          $(".havecode").find("img").eq(0).stop().animate({left:"80px"});
          $(".havecode").find("img").eq(1).stop().animate({opacity:0});
       })

   


       });

   	return "login主页的js文件"
   }
   return {
   	login:login
   }
})