$('.select_search').select2();
$( ".start" ).datepicker();

$('.show_balance').click(function(){
	$('.balance_block').css({'opacity': 1, 'right': 0});
	$('.support_block').css({'opacity': 1, 'right': '-100%'});
})


$('.close_btn').click(function(){
	$('.balance_block').css({'opacity': 1, 'right': '-100%'});
})


$('.show_support').click(function(){
	$('.support_block').css({'opacity': 1, 'right': 0});
	$('.balance_block').css({'opacity': 1, 'right': '-100%'});
})


$('.support_close_btn').click(function(){
	$('.support_block').css({'opacity': 1, 'right': '-100%'});
})

$('.topbar_handle').click(function(){
	if($(this).children('i').hasClass('fa-chevron-down')){
		$('.topbar ul').slideDown('slow');
		$(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
	}	else{
		$('.topbar ul').slideUp('slow');
		$(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		
	}
})

var window_w = $(window).width();

$('.show_balance').click(function(){
	if(window_w <= 480){
	$('.topbar ul').slideUp('slow');
	$('.topbar_handle i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	$('.balance_block').css({'opacity': 1, 'right': 0});
	$('.support_block').css({'opacity': 1, 'right': '-100%'});
	}
})


$('.show_support').click(function(){
	if(window_w <= 480){
	$('.topbar ul').slideUp('slow');
	$('.topbar_handle i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	$('.support_block').css({'opacity': 1, 'right': 0});
	$('.balance_block').css({'opacity': 1, 'right': '-100%'});
	}
})


$('.menu_bar').click(function(){
	if($(this).children('i').hasClass('fa-bars')){
		$('.main_menu>ul').slideDown('slow');
		$(this).children('i').removeClass('fa-bars').addClass('fa-close');
	}	else{
		$('.main_menu>ul').slideUp('slow');
		$(this).children('i').removeClass('fa-close').addClass('fa-bars');
		
	}
})



$('.main_menu a span').click(function(){
	if($(this).children('i').hasClass('fa-chevron-down')){
		$('.dropdown_menu').slideUp('slow');
		$(this).parent().next().slideDown('slow');
		$(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
	}	else{
		$(this).parent().next().slideUp('slow');
		$(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		
	}
})


$(window).load(function(){

$('.grid').masonry({
  // options...
  itemSelector: '.grid-item'
});

})