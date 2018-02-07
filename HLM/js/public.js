 //购物车数字=========================================================================================
    function sc_car(goods){
      var sc_str = $.cookie("goods");
         if(sc_str){ //判断字符串是否存在
           var sc_arr = eval(sc_str);
           var sc_num = 0;
           for(var i in sc_arr){
             sc_num = Number(sc_arr[i].num) + sc_num;
           }
           $(".cartfull b").html(sc_num);

         } 
       } 
    







//具体元素加载购物车的商品======================================================================================
      function sc_msg(goods){
        $.ajax({
          url:"../data/datao.json",
          methed:"GET",
          success:function(res){         
        
            //判断当后台cookie不存在的时候,点击清除购物车的按钮,将购物车的html设置为空
            if(!$.cookie("goods")){
              //要将购物车内的商品清空
              $(".cartpop").html("");
              //购物车的商品被清空，直接将函数中止就可以了
              return;
            }

            //a:获取的所有cookie数据，并转化数组
            var arr = eval($.cookie("goods"));
                // alert($.cookie("goods"));
             
   
            var html = "";
            for(var i = 0 ; i < arr.length ; i++){
              // alert(arr[1].num); 
                // alert(arr[i].src); 
               /*alert(arr[i].id);*/
              //因为id和对应商品的下标一样，所以用id当做下标取出数据
              html += `
                   <div class="pop">
                     <div class="cc">
                         <div class="cell">
                            <a href="/product/detail/17535577.html" class="img">
                                <img src= "${res[0].src}" alt=""/> 
                            </a>
                          <div class="text">
                            <p class="name">
                               <a href="/product/detail/17535577.html">三叶草女士高帮休闲鞋</a> 
                            </p>
                            <p>
                              <span class="price">${res[0].price}</span> 
                              <span class="rmb">RMB</span> x <span class="count">${arr[i].num}</span> 
                            </p>
                          </div>
                          <a href="#" class="close" row_id="537d16d356594e0cfbf6a9a8344f7910">×</a>
                          </div>
                          <div class="bottom">
                              <p>共计：</p>
                              <p> 
                               <span class="total">${arr[i].num} * ${res[0].price}</span> 
                               <span class="rmb">RMB</span>
                              </p>
                              <a href="/cart" class="checkout" title="去结算">去结算</a>
                          </div>
                      </div>
                  </div>
                 `
              }
            $('.cartpop').html(html);
          }
        })
      }



//详情页加载购物车====================================================================
      function sc_shop(){
          $.ajax({
            url:"../data/details.json",
            methed:"GET",
            success:function(res){  

            // alert(1)执行到了
            //判断当后台cookie不存在的时候,点击清除购物车的按钮,将购物车的html设置为空
             if(!$.cookie("cargo")){
               //要将购物车内的商品清空
               $(".cartpop").html("");
               //购物车的商品被清空，直接将函数中止就可以了
               return;
             }
               
               
                // alert("cargo");
            //a:获取的所有cookie数据，并转化数组
            var arr = eval($.cookie("cargo"));
             
                // alert($.cookie("cargo"));
                 // [{"id":10,"num":2},{"id":"9","num":1},{"id":"33","num":1}]
                
                // alert(arr); 数组里有id和所添加商品的数量
            var html = "";
            for(var i = 0 ; i < arr.length ; i++){

               /*alert(arr[i].num); 
               alert(res[i].pic); 
               alert(arr[i].id);  */ 
              //因为id和对应商品的下标一样，所以用id当做下标取出数据
              html += `
                   <div class="pop">
                     <div class="cc">
                         <div class="cell">
                            <a href="/product/detail/17535577.html" class="img">
                                <img src= "${res[i].pic}" alt=""/> 
                            </a>
                          <div class="text">
                            <p class="name">
                               <a href="/product/detail/17535577.html">${res[i].title}</a> 
                            </p>
                            <p>
                              <span class="price">${res[i].exp}</span> 
                              <span class="rmb">RMB</span> x <span class="count">${arr[i].num}</span> 
                            </p>
                          </div>
                          <a href="#" class="close" row_id="537d16d356594e0cfbf6a9a8344f7910">×</a>
                          </div>
                          <div class="bottom">
                              <p>共计：</p>
                              <p> 
                               <span class="total">${arr[i].num} * ${res[i].exp}</span> 
                               <span class="rmb">RMB</span>
                              </p>
                              <a href="/cart" class="checkout" title="去结算">去结算</a>
                          </div>
                      </div>
                  </div>
                 `
              }

            $("#cartpop").html(html);
          }
        })
      }