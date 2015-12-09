		
	$(document).ready(function(){
		
		// Twitter button functionalty	
		!function(d,s,id){
			var js,
			fjs=d.getElementsByTagName(s)[0],
			p=/^http:/.test(d.location)?'http':'https';
			if(!d.getElementById(id)){
				js=d.createElement(s);
				js.id=id;
				fjs.parentNode.insertBefore(js,fjs);
				}
			}(document, 'script', 'twitter-wjs');
			
			// team pic description on hover
			$(function () {
        $('.btn').hover(function() {
					$(".picture-description").fadeToggle("slow");
        });
			});
	});