$(function () {
	$(".sub2_inner> ul> li").click(function () {
		$(this).children(".text_info").stop().slideToggle();
		$(this).siblings().children(".text_info").stop().slideUp();
	});
});
$(function () {
	$(".sub2_inner> ul> li").click(function () {
		$(this).toggleClass("turn");

		if ($(this).hasClass("turn") === true) {
			$(this).siblings().removeClass("turn");

		}

	});
});






