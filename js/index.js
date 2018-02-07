/*
	编写主页的代码
	在这里编写代码都必须遵从AMD规范
*/
define(["jquery","jquery.cookie"],function($){
   function index(){



   	$(function(){
    
        //购物车数字      
        sc_car("goods");


    //头部图片加载
   
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
  

   //购物车移入移出
   $(".cartfull").mouseenter(function(){
 
      $(".cartpop").slideDown(1000);
      sc_msg("goods");
      // sc_shop("cargo");
    });
    $(".cartfull").mouseleave(function(){
      $(".cartpop").slideUp(1000);
    }); 
 
    
 






// 轮播图
    var curIndex = 0;
    var autoChange = setInterval(function(){
         if(curIndex < $(".imgList li").length-1){
               curIndex ++;
            }else{
               curIndex = 0;
            }
            changeTo(curIndex);
         },2500);

    $(".indexList").find("li").each(function(item){
          $(this).hover(function(){
             clearInterval(autoChange);
             changeTo(item);
             curIndex = item;
         },function(){
         autoChange = setInterval(function(){
           if(curIndex < $(".imgList li").length-1){
              curIndex ++;
           }else{
             curIndex = 0;
           }
         changeTo(curIndex);
        },2500);
         });
      });
  function changeTo(num){
    $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
    $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
  }


//商品图标加载
  $.ajax({
  	url:"../data/icon.json",
  	method:"GET",
  	success:function(data){
  		var html = "";
  		for(var i = 0 ; i < data.length;i++){
  			 html += `
				<li>
				  <a href="${data[i].href}" target="_blank" title="${data[i].title}">
				    <img src="${data[i].pic}" alt="${data[i].title}">
				  </a>
				</li>
  			 `
  		}
  		$(".BIcon").html(html);
  	}
  })


//倒计时商品加载
      //第一个
		 var  starttime = new Date("2018/2/21");
		   setInterval(function(){
			var nowtime = new Date();
			var time = starttime - nowtime;
			var day = parseInt(time / 1000 / 60 / 60 / 24);
    		var hour = doubleNum(parseInt(time / 1000 / 60 / 60 % 24));
    		var minute = parseInt(time / 1000 / 60 % 60);
    		var seconds = doubleNum(parseInt(time / 1000 % 60));
    			$.ajax({
    			url:"../data/two.json",
    			method:"GET",
    			success:function(data){
    				var html = '';
    				for(var i = 0 ;i < data.length ; i++){
    					html +=  `
							 <li id="licount">
			  				     <div id="demo">
			  				        <div id="img">
			  				           <img src= ${data[i].pic}/>
			  				           <p>${data[i].tit1}</p>
			  				           <p>${data[i].tit2}</p>
			  				           <p>${data[i].exp}</p>
			  				        </div>
			  				         <div id="timer">
			  				      	  <span><i>${day}</i>天</span>
			  				      	  <span><i>${hour}</i>时</span>
			  				      	  <span><i>${minute}</i>分</span>
			  				      	  <span><i>${seconds}</i>秒</span>
			  				        </div> 
			  				     </div>
			                </li>  
    					`
    				}
    			$("#Onecount").html(html);
    			}
    		}) 
    		   
		},1000);
		 //第二个
	  	 setInterval(function(){
			var nowtime = new Date();
			var time = starttime - nowtime;
			var day = parseInt(time / 1000 / 60 / 60 / 24);
    		var hour = doubleNum(parseInt(time / 1000 / 60 / 60 % 24));
    		var minute = parseInt(time / 1000 / 60 % 60);
    		var seconds = doubleNum(parseInt(time / 1000 % 60));
    			
 		     $.ajax({
    			url:"../data/three.json",
    			method:"GET",
    			success:function(data){
    				var html = '';
    				for(var i = 0 ;i < data.length ; i++){
    					html +=  `
							<li id="listw">
					          <div id="year">
						         <div id="Tyear">
							        <img src= ${data[i].pic}/>			  				
							        <p class="list3tit1">${data[i].tit1}<span>${data[i].exp}</span></p>
						        </div>
						        <div id="Myear">
									<span><i>${day}</i>天</span>
			  				      	<span><i>${hour}</i>时</span>
			  				      	<span><i>${minute}</i>分</span>
			  				      	<span><i>${seconds}</i>秒</span>
						        </div>
					           </div>
				         </li>
    					`
    				}
    			$("#list31").html(html);
    			}
   	       })
    		   
		},1000);
		  
		//对个位数进行处理
		function doubleNum(num){
			if(num < 10){
				return "0" + num;
			}
			return num;
		}
  
 		//ajax动态加载侧边栏
      /* $.ajax({
           url:"../data/menu.json",
           success:function(data){
                html3=''
               var html='';
               var html2='';
               var html5='';
               var html4=`  </p>
            </div>`;
              for(var i  in  data){
                 for(var j in data[i]){
                    for(var k  in data[i][j]){
                        html +=  `
                        <div class="catewrap" style="width:360px;">
                          <h3 class="black">${data[i][j][k].tit1}</h3>
                          <p class="context"> 
                     `
                       for(var g in data[i][j][k].brr){
                          html2 +=`<a href="http://www.okbuy.com/shoe/49" target="_blank">${data[i][j][k].brr[g]}</a>
                          `
                          console.log(html2);
                       }
                       html3=html + html2+html4;
                       html='';
                       html2='';
                       console.log(html3);
               }
                    html5=html3+html5;
                   // html3='';
                   // console.log(html5);
                 }
               
              }
           }




       })*/


       //判断回到顶部
      $(window).scroll(function(){
        if($(window).scrollTop() > 886){
          $("#gotoTop").css("display","block");
          }else{
          $("#gotoTop").css("display","none");    
          } 
       
       })
      
   	  })


   	return "index主页的js文件"
   }
   return {
   	index : index
   }
})
