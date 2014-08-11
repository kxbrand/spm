# Demo

---

## 示例较长
<style type="text/css">  
  .img{background:url(images/loading.gif) 50% 50% no-repeat;width:300px;height: 300px;border:1px solid #ddd;}
</style>

<img class="img j-lazy" src="images/t.gif" data-original="images/1.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/2.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/3.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/4.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/5.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/6.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/7.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/8.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/9.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/10.jpg" width="300" height="300" /><br/><br/>
<img class="img j-lazy" src="images/t.gif" data-original="images/11.jpg" width="300" height="300" /><br/><br/>

````javascript
seajs.use(['jquery','index'], function($,lazyload) {
  $(function(){
    $(".j-lazy").lazyload();
  });
});
````
