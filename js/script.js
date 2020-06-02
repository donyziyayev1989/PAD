$(document).ready(function(){
	$('.navbar-toggle').on('click', function () {
		$('.animated-icon1').toggleClass('open');
		$('#navbar, #sideDrawer').toggleClass('opened');
	});
	
	$('#sideDrawer').click(function() {
		$('.animated-icon1').removeClass('open');
		$('#navbar, #sideDrawer').removeClass('opened');
	});
	

	// Tabs
	$('ul.nav-tabs li').click(function(){
		var $this = $(this);
		var tab_id = $this.attr('data-tab');

		$this.siblings('li').removeClass('active');
		$('.tab-content .tab-pane').removeClass('active');

		$this.addClass('active');
		$("#"+tab_id).addClass('active');
	});

	$('.mobile-app').addClass('visible');
	
});
