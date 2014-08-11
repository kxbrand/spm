var include = function(){
	var $ = require("jquery");
	var $tpl = $("script[type='text/html']");
	if($tpl[0]){
		$tpl.each(function(){
			var $this = $(this),tplUrl = $this.attr("data-in");
			$.ajax({
		      async:false,
		      type:"GET",
		      url:tplUrl+".html?radom="+(new Date()).getTime(),
		      dataType:"html",
		      success:function(data){
		        $this.replaceWith(data);
		      }
		    });
		});
		include();
	}
}
module.exports = include;
