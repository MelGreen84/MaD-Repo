(function($) {
	var $container = $('.masonry-container');
	$container.imagesLoaded(function() {
		$container.masonry({
			itemSelector : '.masonry-item',
			isAnimated : true
		});
	});
})(jQuery);