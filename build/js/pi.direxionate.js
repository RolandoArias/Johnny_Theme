jQuery(function($){

	 
	if($.fn.revolution){
		$('.pi-revolution-slider-home').revolution({
			delay:9000,
			startwidth:1130,
			startheight:400,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"off",
			hideTimerBar:"on"
		});
	}
	 
});
$(document).ready(function() {
$('.option-advance').on('click', function () {
	$(this).text('Opcion Basica');
	if ($(this).data('type') =='0') {
		$('.search-basic').hide(400);
		$('.search-advanced').show(400);		
			$(this).data('type','1');
	} else{
		$(this).text('Opcion Avanzada');
		$('.search-basic').show(400);	
		$('.search-advanced').hide(400);
			$(this).data('type','0');
	};
});
});
