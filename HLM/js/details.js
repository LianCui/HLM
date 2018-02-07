//详情页
define(["BallMove1","jquery","jquery.cookie","Sgoods"],function(BallMove1,$,Sgoods){
      function details(){       
      	$(function(){ 

        // 加载购物车数据
         sc_cart("cargo");
      
//加载购物车的商品======================================================================================
      


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
   

      //详情商品加载
      $.ajax({
        url:"../data/details.json",
        method:"GET",
        success:function(data){
          var html = "";
          for(var i = 0 ; i < data.length; i++){
              html += `
                <li>
                  <a href="Sgoods.html" title= ${data[i].title} target="_blank">
                       <img src= ${data[i].pic} alt= ${data[i].title} class="Pimg"/>
                  </a> 
                  <div class="logobg">
                     <span class="BLB">
                       <img src= ${data[i].img}>
                     </span>
                  </div>
                  <a href="/p-camel%E9%AA%86%E9%A9%BC/detail-shoe-17592088.html" class="Alink" title=${data[i].title} target="_blank"> ${data[i].title}
                  </a>
                  <span class="Slink">
                     ¥
                     <span id="17592088" class="Spr">${data[i].exp}</span>
                     <i>
                       <span>${data[i].dec}</span>
                     </i>
                     <button class="first" id=${data[i].id}>加入购物车</button>
                     <p class = "PAO"></p>
                  </span>
                </li>
              `
          }
          $(".product ul").html(html);
         
//加载购物车的商品======================================================================================
      
       $(".first").click(function(){  

            // 给点击的按钮加抛物线
             BallMove1.BallMove1($(this));


                var id = this.id;
                var first = $.cookie("cargo") == null ? true : false;
                if(first){
                  //第一次添加  [{id:id,num:2}]
                  $.cookie("cargo", '[{id:' + id + ',num:1}]', {
                    expires: 7
                  });
                  sc_cart();
                }else{
                  var str = $.cookie("cargo");
                  var arr = eval(str);
                  var same = false; //代表是否有相同商品

                  //遍历所有的对象，判断是否id相同，num++
                  for(var i in arr){
                    if(arr[i].id == id){
                      arr[i].num = arr[i].num + 1;
                      var cookieStr = JSON.stringify(arr);
                      $.cookie("cargo", cookieStr,  {
                        expires: 7
                      });
                      same = true;
                      break;
                    }
                  }
                  //没有相同的商品
                  if(!same){
                    var obj = {id: id, num: 1};
                    arr.push(obj);
                    var cookieStr = JSON.stringify(arr);
                    $.cookie("cargo", cookieStr, {
                      expires: 7
                    });
                  }
                  sc_cart();
                }
         
      })
       
       


        }
      });

     $(".cartfull").mouseenter(function(){
     
          $(".cartpop").slideDown(1000);
          // sc_msg("goods");
          sc_shop("cargo");
        });
        $(".cartfull").mouseleave(function(){
          $(".cartpop").slideUp(1000);
        }); 
     

      $.ajax({
        url:"../data/images.json",
        method:"GET",
        success:function(data){
          var html = "";
          for(var i = 0 ; i < data.length ; i++){
              html += `
                  <li>
                    <div class="photo">
                      <a href=${data[i].href} target="_blank">
                        <img src=${data[i].img} alt=${data[i].ALT} width="376" height="150" border="0">
                        <p>${data[i].dec}</p>
                      </a>
                    </div>
                 </li>
                 `
             }
           $(".addMoreActivity").html(html);
       }
      })


  
 
      	})
      	return "详情页的js代码"
      }

      function sc_cart(){
          var sc_str = $.cookie("cargo");
          if(sc_str){ //判断字符串是否存在
            var sc_arr = eval(sc_str);
            var sc_num = 0;
            for(var i in sc_arr){
              sc_num = Number(sc_arr[i].num) + sc_num;
            }
           $(".cartfull b").html(sc_num);
          }
        }



       
	return {
		details:details
	}
})
