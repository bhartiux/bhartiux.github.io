
$(document).ready(function(){
	
	//code to view image larger
	
	$('body').on('click', '.work-demo-img', function() {   
		var url = $(this).attr('src');
		$(this).parents('.img-viewer').find('#work-demo-large').attr('src', url).css('display', 'block').parents('.img-overlay').fadeIn("slow");
	});
	
	$('body').on('click', '.img-overlay-close', function(){
		$(this).parents('.img-overlay').fadeOut("slow");
	})
	
	
	//Check to see if the window is top if not then display button
	$('#project-modal').scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn("slow");
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('body').on('click', '.scrollToTop', function(){ 
		//if($('#project-modal').is(':hidden')){
		//	$(window).scrollTop(0);
		//} else { 
			$('#project-modal').animate({scrollTop : 0}, 700);
		//}
		return false;
	})
	
});
   