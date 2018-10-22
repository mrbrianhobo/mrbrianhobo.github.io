$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollingSpeed: 1000,
		onLeave: function(index, nextIndex, direction) {
			if (direction == 'up') {
				$("#arrow" + (index - 1).toString()).removeClass('arrow_moved');
			} else {
				$("#arrow" + index.toString()).addClass('arrow_moved');
			}
		}
	});
});
