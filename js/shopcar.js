define(["jquery","jquery.cookie"],function($){
	function shopcar(){
		$(function(){ 
      var totalPrice = 0; 
      var totalNum = 0;  
      var alltotal = null;
      var allnum = null;        
             // 具体商品页添加购物车
            $.ajax({
                  url:"../data/datao.json",
                  methed:"GET",
                  success:function(res){         
                
                    //判断当后台cookie不存在的时候,点击清除购物车的按钮,将购物车的html设置为空
                    if(!$.cookie("goods")){                        
                      //要将购物车内的商品清空
                      $(".PStart").html("");
                      //购物车的商品被清空，直接将函数中止就可以了
                      return;
                    }

                    //a:获取的所有cookie数据，并转化数组
                    var arr = eval($.cookie("goods"));
                         // alert($.cookie("goods"));
                                       
                    var html = "";
                    for(var i = 0 ; i < arr.length ; i++){                       
                      html += `
                          <li>
                            <span class="checkboxall allcur"></span>
                             <div class="Pleft">
                               <a href="#">
                                 <img src="${res[0].src}"/>     
                                  <span> ${res[0].title}</span> 
                                  <br/>
                                  <b>尺码：<i>${res[0].size}</i></b>
                                </a>
                             </div>
                             <div class="Middle">
                                 ￥ ${res[0].price}
                             </div>
                             <div class="num">
                               <span id="subtract">-</span>
                               <span id="insertnum">${arr[i].num}</span>
                               <span id="add">+</span>
                             </div>
                             <div class="Middle TWOmiddle">
                                 ￥ ${res[0].price} * ${arr[i].num}
                             </div>
                             <div class="lash">
                                <span class="wish"> <i>收藏</i> </span>
                                <span class="delete"> <i>删除</i></span>
                             </div>
                         </li>
                     `;
                     alltotal += arr[i].num*res[0].price;
                     allnum   += arr[i].num;
                      }
                    $('.PStart').html(html);        
                  }
                })
            

            //详情页添加购物车
   $.ajax({
       url:"../data/details.json",
       method:"GET",
       success:function(data){
         var arr = eval($.cookie("cargo"));
         var html = "";
         
         for(var i = 0; i < arr.length; i++){
       
           for(var j = 0; j < data.length; j++){
             if(arr[i].id == data[j].id){
                  html += `
                           <li>
                             <span class="checkboxall allcur"></span>
                                    <div class="Pleft">
                                       <a href="#">
                                        <img src="${data[j].pic}"/>     
                                        <span> ${data[j].title}</span> 
                                        <br/>
                                      <b>尺码：<i>38</i></b>
                                          </a>
                                       </div>
                                       <div class="Middle">
                                           ￥ ${data[j].exp}
                                       </div>
                                      <div class="num">
                                         <span id="subtract">-</span>
                                         <span id="insertnum">${arr[i].num}</span>
                                         <span id="add">+</span>
                                      </div>
                                       <div class="Middle TWOmiddle">
                                           ￥ ${data[j].exp} * ${arr[i].num}
                                       </div>
                                       <div class="lash">
                                          <span class="wish"> <i>收藏</i> </span>
                                          <span class="delete"> <i>删除</i></span>
                                       </div>
                                   </li>
                               `;
                               totalPrice+=arr[i].num*data[j].exp;
                               totalNum += arr[i].num;
                          }
                       $('.PStart').html(html);                     
                      }
                    }

                    $(".checkboxall").click(function(){
                      $(".SAccount").find(".AllT").find("i").html(alltotal);
                      $(".SAccount").find(".CNUMB").find("i").html(allnum);
                    })


                    //全选
                    $(".checkboxall").click(function(){
                      $(".SAccount").find(".AllT").find("i").html(totalPrice);
                      $(".SAccount").find(".CNUMB").find("i").html(totalNum);
                    })

                    //点击加号事件
                    $("#add").click(function(){
                        alert($("#insertnum").html());
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
                  }
                  
              })
            

			//全选按钮
	 
             var isshow = true;/*布尔值*/

            $(".checkboxall").on("click",function(){
                if(isshow){
                   $(".checkboxall").css("backgroundPosition","-20px 0");
                  isshow = !isshow; /*false*/
                }else if(!isshow){
                  $(".checkboxall").css("backgroundPosition","0 0");  
                 isshow = true;
                }
           });



  

            //弹出窗
            $("#DEshop").click(function(){
            	 	$(".checkShop").css({
            	 		"display":"block",
            	 		"position":"fixed"
            	 	});
            	 	centerFunc();
            	 })
            })
        		 	//弹出窗消失
        		 	$(".checkShop").find("button").eq(1).click(function(){
        		 		$(".checkShop").css({
        		 			 "display":"none",
        		 			  "position":"relative"
        		 		});

})
            
            
            
	  return "购物车的js代码"
	}
	function  centerFunc(){
 
		   $(".checkShop").css("left", ($(window).width()-$(".checkShop").outerWidth())/2).css("top",($(window).height() - $(".checkShop").outerHeight())/2);
          }
	return{
		shopcar:shopcar
	}
})