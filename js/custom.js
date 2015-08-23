/**
 * Created by jleon on 8/22/2015.
 */

$(function(){

	//not ie legacy styles
	if(!$('.ie-legacy').length > 0){
		$('body').addClass('mdrn');
	}

	// Remove search icon on focus
   $('.search-box').focus(function(){
		 $('.glyphicon-search').fadeOut(800);
	 })

	// Sub navigation menu
	$('.dropdown').hover(function(){
		var $nav = $('.nav'),
		$container = $nav.parents('.container'),
		$cntnrOffset = $container.offset(),
		$fnlOffset = $(this).offset();
		style ={
			left: - $fnlOffset.left + $cntnrOffset.left,
			width: $container.width() + 30
		};
		$nav.find('.dropdown.open').removeClass('open');
    $(this).find('.dropdown-menu').css(style)
			.end()
		  .addClass('open');
	});

}) // End of document ready