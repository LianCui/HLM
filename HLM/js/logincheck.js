

define(["jquery","jquery.cookie","jquery1","jquery2","jquery3"],function($){
		function checkSubmit() { 

		$(function(){

		})
		var a = true; 

		if($("#username")[0].value == "") { 
			$("#usernameError i").css("display", "inline-block");
		    $("#usernameError span").html("请填写邮箱/已验证手机/用户名");
		    a = false 
		} else { 
			$("#usernameError i").css("display", "none");
		    $("#usernameError span").html("") 
		} 
		if($("#password")[0].value == "") {
		    $("#passwordError i").css("display", "inline-block");
		    $("#passwordError span").html("请填写密码");
		    a = false 
		} else { 
		   $("#passwordError i").css("display", "none");
		   $("#passwordError span").html("") 
		} 
		$("#login_error_1").html(""); return a 

	   }
	   (function(a) {
	    dk_slideplayer = function(c, b) { this.obj = c;
		this.n = 0;
		this.j = 0; var f = this; var d; var e = { width: "300px", height: "200px", fontsize: "12px", right: "0px", bottom: "3px", time: "5000" };
		this.config = a.extend(e, b);
		this.count = a(this.obj + " li").size(); if(this.config.fontsize == "14px") { this.size = "14px";
			this.height = "23px";
			this.right = "6px";
			this.bottom = "15px" } else { this.size = "12px";
			this.height = "21px";
			this.right = "6px";
			this.bottom = "10px" } this.factory = function() { a(this.obj).css({ position: "relative", zIndex: "0", margin: "0", padding: "0", width: this.config.width, height: this.config.height, overflow: "hidden" });
			a(this.obj).prepend("<div style='position:absolute;z-index:20;right:" + this.config.right + ";bottom:" + this.config.bottom + "'></div>");
			a(this.obj + " li").css({ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden" }).each(function(g) { a(f.obj + " div").append("<a>" + (g + 1) + "</a>") });
			a(this.obj + " img").css({ border: "none", width: "100%", height: "100%" });
			this.resetclass(this.obj + " div a", 0);
			a(this.obj).prepend("<div class='dkTitleBg'></div>");
			a(this.obj + " .dkTitleBg").css({ position: "absolute", margin: "0", padding: "0", zIndex: "1", bottom: "0", left: "0", width: "100%", height: f.height, background: "#000", opacity: "0.4", overflow: "hidden", display: "none" });
			a(this.obj).prepend("<div class='dkTitle'></div>");
			a(this.obj + " p").each(function(g) { a(this).appendTo(a(f.obj + " .dkTitle")).css({ position: "absolute", margin: "0", padding: "0", zIndex: "2", bottom: "0", left: "0", width: "100%", height: f.height, lineHeight: f.height, textIndent: "5px", textDecoration: "none", fontSize: f.size, color: "#FFFFFF", background: "none", opacity: "1", overflow: "hidden", display: "none" }); if(g != 0) { a(this).hide() } });
			this.slide();
			this.addhover();
			d = setInterval(this.autoplay, this.config.time) };
		this.slide = function() { a(this.obj + " div a").mouseover(function() { f.j = a(this).text() - 1;
				f.n = f.j; if(f.j >= f.count) { return } a(f.obj + " li:eq(" + f.j + ")").fadeIn("200").siblings("li").fadeOut("200");
				a(f.obj + " .dkTitle p:eq(" + f.j + ")").show().siblings().hide();
				f.resetclass(f.obj + " div a", f.j) }) };
		this.addhover = function() { a(this.obj).hover(function() { clearInterval(d) }, function() { d = setInterval(f.autoplay, f.config.time) }) };
		this.autoplay = function() { f.n = f.n >= (f.count - 1) ? 0 : ++f.n;
			a(f.obj + " div a").eq(f.n).triggerHandler("mouseover") };
		this.resetclass = function(j, h) { var g = { "float": "left", marginRight: "3px", width: "15px", height: "14px", lineHeight: "15px", textAlign: "center", fontWeight: "800", fontSize: "12px", color: "#000", background: "#FFFFFF", cursor: "pointer", display: "none" };
			a(j).css(g);
			a(j).eq(h).css({ color: "#FFFFFF", background: "#FF7D01", textDecoration: "none", display: "none" }) };
		this.factory() } })(jQuery);
$(document).ready(function() { $("#getcode_img").click(function(d) { $(this).attr("src", "/Verify/getcode/" + Math.random()) });
	$("#getcode_click").click(function(d) { $("#getcode_img").attr("src", "/Verify/getcode/" + Math.random()) });
	$("#loginformbtn").click(function() { if(checkSubmit()) { var e = false; if($("#getcode_img").length) { e = $("#validatecode").val() } var d = {};
			d = { csrf_param: $("#csrf_param").val(), code: e, username: $("#username").val(), password: $("#password").val() };
			$.ajax({ type: "POST", url: "/members/login/ajax_login", dataType: "json", data: d, success: function(g) { if(g.rs_code === 2) { location.href = "/members/get_email" } else { if(g.rs_code === 1) { var f = $("#jumpurl").val();
							location.href = f } else { if(g.rs_code === -10) { $("#usernameError i").css("display", "none");
								$("#usernameError span").html("");
								$("#passwordError i").css("display", "none");
								$("#passwordError span").html("");
								$("#login_error_1").html("您的账号目前处于保护状态，请联系网站客服") } else { if(g.rs_code === 5) { window.location.reload() } else { $("#usernameError i").css("display", "none");
									$("#usernameError span").html("");
									$("#passwordError i").css("display", "none");
									$("#passwordError span").html("");
									$("#login_error_1").html(g.rs_msg) } } } } $("#getcode_img").attr("src", "/Verify/getcode/" + Math.random()) } }) } return false }); if($("#username").val() === "") { $("#username").focus() } else { $("#password").focus() } $("body").delegate(".login_new_tabhead span", "click", function(e) { $(this).addClass("active").siblings().removeClass("active"); var d = $(".login_new_tabhead span").index(this);
		$(".login_new_tabbody .loginbody").eq(d).addClass("active").siblings().removeClass("active") });
	$(".havecode").hover(function(d) { $(".havecode .code").stop(true, false).animate({ left: "0px" });
		$(".havecode .prompt").stop(true, false).delay(100).fadeIn().css("opcity", "1") }, function(d) { $(".havecode .prompt").stop(true, false).fadeOut().css("opcity", "0");
		$(".havecode .code").stop(true, false).delay(100).animate({ left: "80px" }) }); var a; var c = true;
	$("body").delegate(".login_new_tabhead .account", "click", function(d) { clearInterval(a);
		$(".codefail,.codesuccess").hide();
		$(".havecode").show();
		c = true });
	$("body").delegate(".borderleft", "click", function(d) { clearInterval(a); if($(".borderleft").hasClass("active") && c) { a = setInterval(b, 1000);
			$.ajax({ url: "/loginqrcode/get_qr_login?" + Math.random(), dataType: "json", type: "GET", success: function(e) { $(".havecode .code").attr("src", "/loginqrcode/qrcode?action=login&id=" + e.str);
					$(".havecode .code").after('<input type="hidden"  id="str" value="' + e.str + '">') } }) } });
	$(".coderefresh").click(function(d) { clearInterval(a);
		c = true;
		a = setInterval(b, 1000);
		$.ajax({ url: "/loginqrcode/get_qr_login?" + Math.random(), data: {}, dataType: "json", type: "GET", success: function(e) { $(".codesuccess,.codefail").hide();
				$(".havecode").show();
				$(".havecode .code").attr("src", "/loginqrcode/qrcode?action=login&id=" + e.str);
				$(".havecode .code").after('<input type="hidden"  id="str" value="' + e.str + '">') } }) });

	function b() { c = false; var d = $("#str").val();
		$.ajax({ data: { action: "login", id: d }, dataType: "json", type: "GET", url: "/loginqrcode/check_result?" + Math.random(), success: function(e) { if(e.code === -1) { $(".havecode,.codesuccess").hide();
					$(".codefail").show();
					clearInterval(a);
					c = false } else { if(e.code === 1 || e.code === 3) { clearInterval(a);
	window.location.href = "/order/lists" } else { if(e.code === 2) { $(".havecode,.codefail").hide();
							$(".codesuccess").show() } } } } }) } 

	});
 return {
   	checkSubmit:checkSubmit
   }

})

