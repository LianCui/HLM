// Sgoods具体商品页
define(["ballMove","jquery","jquery.cookie"],function(ballMove,$){

      function Sgoods(){
    
      	$(function(){


          //点击加入购物车数量增加，cookie缓存
          $("#prodCartBtn").click(function(){

            // 给点击的按钮加抛物线
             ballMove.ballMove($(this));


            //alert(this.id); id是点击按钮的id
              //是否是第一次添加cookie
              var id = this.id;
              var first = $.cookie("goods") == null ? true : false;
              if(first){
                //第一次添加  [{id:id,num:2}]
                $.cookie("goods", '[{id:' + id + ',num:'+ parseInt($("#insertnum").html()) + '}]', {
                  expires: 7
                });
               /* sc_car();*/
              }else{
                var str = $.cookie("goods");
                var arr = eval(str);
                var same = false; //代表是否有相同商品

                //遍历所有的对象，判断是否id相同，num++
                for(var i in arr){
                  if(arr[i].id == id){
                    arr[i].num = arr[i].num + parseInt($("#insertnum").html());
                    var cookieStr = JSON.stringify(arr);
                    $.cookie("goods", cookieStr,  {
                      expires: 7
                    });
                    same = true;
                    break;
                  }
                }
                //没有相同的商品,insertnum我要买的数量
                if(!same){
                  var obj = {id: id, num: parseInt($("#insertnum").html())};
                  arr.push(obj);
                  var cookieStr = JSON.stringify(arr);
                  $.cookie("goods", cookieStr, {
                    expires: 7
                  });
                }
                sc_car("goods");
              }
              // console.log($.cookie("goods"));
              // debugger
              // [{"id":{"jQuery111302572284570570962":29},"num":1},{"id":"prodCartBtn","num":2}]
              return false;
          })



        // 头部图片加载
      		$.ajax({
       			url:"../data/one.json",
       			method:"GET",
       			success:function(data){
       				var html = "";
       				for(var i = 0 ; i < data.length ; i++){
       					html += `
    						      <a href="#">
    		                   <img src="${data[i].img}"/>
    		              </a>	
       					  `
       				   }	
       				$("#top").html(html);
       			  }   		
   		    });

    //下拉导航
    

      $(".nnavwrap .hassub1").mouseenter(function(){
          $(".navvsub").eq($(this).index()-2).css("display","block");
      }).mouseleave(function(){
           $(".navvsub").eq($(this).index()-2).css("display","none");
      })
   
 
      //放大镜 缩略图
      $.ajax({
        url:"../data/goods.json",
        method:"GET",
        success:function(data){
         var html = "";
         var html1 = "";
         for(var i = 0; i < data.length; i++){
             html1 +='<div class = "'+i+'"><img src = "'+ data[i].img+'"/><p></p></div>'
             html +='<div class = "'+i+'"><img src = "'+ data[i].img+'"/><p></p></div>'
            }
          $("#goodsparticulartop").html(html);
          $("#goodsparticularbott").html(html1)
          }
      })

      //图片的移入移除事件
       $("#goodsparticularbott").on("mouseenter","div",function(){
         $("#goodsparticulartop").find("div").css("display","none")
         var i = $(this).attr("class");
         $("#goodsparticulartop").find("." + i + "").css("display","block");
         $(this).css("overflow","hidden");
       })
        $("#goodsparticulartop").on("mouseenter","div",function(){
         $("#getBig").css("display","none");
         $(this).find("p").eq(0).css("display","none");


         var i = $(this).attr("class");
         i++;
         var html = '<img src ="../images/' + i + '.jpg"/>';

      $("#getBig").html(html);
      $("#getBig").css("display","block")

 
      	})
           //放大镜
        $("#goodsparticulartop").on("mousemove","div",function(ev){
          var ev = ev || document.event;
          var oS_position = $(this).find("p").eq(0);
          var oS_box = $("#goodsparticulartop");
          var oB_box_all = $("#getBig").find("img").eq(0);
          var oB_box = $("#goodsparticularbottshell")
          
          var left = ev.offsetX-oS_position.width()/2;
          if(left<0){
            
            left=0;
          }else if(left>oS_box.width()-oS_position.width()){
            left=oS_box.width()-oS_position.width();
          
          }else{
            left = ev.offsetX-oS_position.width()/2;
          } 
          $(this).find("p").eq(0).css("left",left);
          var top =ev.offsetY-oS_position.height()/2;
          if(top<0){
            top=0;
          }else if(top>oS_box.height()-oS_position.height()){
            top=oS_box.height()-oS_position.height()
          }else{
            top =ev.offsetY-oS_position.height()/2;
          }
          $(this).find("p").eq(0).css("top",top)
          var proportionX=left/(oS_box.width()-oS_position.width());
          var proportionY=top/(oS_box.height()-oS_position.height());


          $("#getBig").find("img").eq(0).css("left",-proportionX*(oB_box_all.width()-oB_box.width()))
          $("#getBig").find("img").eq(0).css("top",-proportionY*(oB_box_all.height()-oB_box.height()))
        })
     
      $("#goodsparticulartop").on("mouseleave","div",function(){
        $("#getBig").css("display","none");
        $(this).find("p").eq(0).css("display","none")
      })


  // hover尺寸的时候尺寸码出来
     $(".prodConSize #shoeSize").find("li").eq(3).hover(function(){
            $(".english").css({
              "display":"block",
            })
       },function(){
            $(".english").css({
              "display":"none",
            })
       })

       $(".prodConSize #shoeSize").find("li").eq(4).hover(function(){
            $(".english").css({
              "display":"block",
            })
       },function(){
            $(".english").css({
              "display":"none",
            })
       })

       //顶部固定不行
         $(window).scroll(function(){
            if($(window).scrollTop() > 1300 ){ 
                $(".proinfotab").css({
                     top:0,
                     position:"fixed",
              });
            }            
          })
     
      // ajax加载图片
       $.ajax({
          url:"../data/shoes.json",
          method:"GET",
          success:function(data){
            var html = "";
            for(var i = 0 ; i < data.length ; i++){
              html += `
                  <div class="Simg">
                     <img name="MulPicH" alt=${data[i].alt} src=${data[i].img} original=${data[i].org} style="display: inline;" border="0">
                </div>
              `
            }
            $('.PImg').html(html);
          }
       })
         

       //多张图片加载
           $.ajax({
          url:"../data/js1.json",
          method:"GET",
          success:function(data){
            var html = "";
            for(var i = 0 ; i < data.length ; i++){
              html += `
                <a href="/topic/show/66164" target="_blank"><img src=${data[i].img} alt="" style="margin-right:10px;margin-bottom:10px" width="365" height="140" border="0"></a>
              `
            }
            $('.MulPicH750').html(html);
          }
       }) 


   //加载用户评价
      $.ajax({
        url:"../data/user.json",
        method:"GET",
        success:function(data){
          var html = "";
          for(var i = 0 ; i < data.length ; i++){
            html += `
              <li class="User_li">
                  <div class="common_1">
                  <span class="com-star star5"></span>
                  <span class="com-time">${data[i].date}</span>
                  </div>
                  <div class="common_2">
                  <p>${data[i].exp}</p>
                  <ul class="User_size">
                    <li>尺码：<span>${data[i].size}</span></li>
                    <li>关于尺码：<span>${data[i].abu}</span></li>
                    <li>常穿尺码：<span>${data[i].size}</span></li>
                    <li>是否舒适：<span>${data[i].com}</span></li>
                  </ul>
                  </div>
                  <div class="common_3">
                    <p>${data[i].user}</p>
                    <p>有用（<span>${data[i].help}</span>）</p>
                  </div>
              </li>
            `
          }
          $(".DUser").html(html);
        }
      }) 


    //点击加号事件
        $("#add").click(function(){
          var num = parseInt($("#insertnum").html());
          $("#insertnum").html(++num);
        })

        $("#subtract").click(function(){
          var num = parseInt($("#insertnum").html());
          if(num == 1 ){
            $("#insertnum").html("1");
          }else{
            $("#insertnum").html(--num);
          }
          
        })

        


      

     })
      	return "具体商品的js代码"
        
     
     }      
    // //购物车数字
    // var sc_car = function (){
    //   var sc_str = $.cookie("goods");
    //      if(sc_str){ //判断字符串是否存在
    //        var sc_arr = eval(sc_str);
    //        var sc_num = 0;
    //        for(var i in sc_arr){
    //          sc_num = Number(sc_arr[i].num) + sc_num;
    //        }
    //        $(".cartfull b").html(sc_num);

    //      } 
    //    } 
    
	  return {
		   Sgoods:Sgoods, 
       
	   }

})
