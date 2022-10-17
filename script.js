$(document).ready(() => {
	// Header Style App
	$("header li").on("click", function () {
		$(this).addClass("active").siblings().removeClass("active");
		// $(this).addClass("active").parent().siblings().find("a").removeClass("active");
	});

	// Window App
	if ($(this).scrollTop() > 200) {
		$("header").addClass("changeHeader");
		$(".scrollTop").css("display", "flex");
	} else {
		$("header").removeClass("changeHeader");
		$(".scrollTop").hide();
	}

	const homeOffset = $(".home").offset().top;
	const sections = $("section");
	$(window).on("scroll", function (e) {
		for (const section of sections) {
			e.preventDefault();
			const navItem = $(`[data-nav="${section.id}"]`);
			const rect = section.getBoundingClientRect();

			if (rect.top > -100 && rect.top < 500) {
				// console.log(rect);
				// section is intersection
				// do my thing (add css class to section and nav)
				// section.classList.add('your-active-section');
				navItem.addClass("active");
			} else {
				//reverse my thing (remove css class from section and nav)
				// section.classList.remove('your-active-section');
				navItem.removeClass("active");
			}
		}
		const windowScroll = $(this).scrollTop();
		if (windowScroll > 200) {
			$("header").addClass("changeHeader");
			$(".scrollTop").css("display", "flex");
		} else {
			$("header").removeClass("changeHeader");
			$(".scrollTop").hide();
		}
	});

	/*
	// Dynamic Taps
	// $("header li").click(function () {
	// 	$("section").hide();
	// 	// $("section").css("display", "none");
	// 	// $(`.${$(this).attr("id")}`).css("display", "flex");
	// 	// $(`.${this.id}`).css("display", "flex");
	// 	$(`.${this.id}`).fadeIn().css("display", "flex");
	// });
    */

	// Filter Images // mixitup jquery plugin
	$(".tabs button").click(function () {
		if (this.id == "all") $(".images img").fadeIn();
		else {
			$(".images img").fadeOut();
			$(`.images #${this.id}`).fadeIn();
		}
	});

	// Smooth Scroll Header App
	const headerHeight = $("header").height(); // height
	const headerInnerHeight = $("header").innerHeight(); // height & padding
	const headerOuterHeight = $("header").outerHeight(); // height & padding & border
	const headerOuterHeightTrue = $("header").outerHeight(true); // height & padding & border & margin
	$("header li").click(function () {
		const className = $(this).attr("data-nav");
		$("body,html").animate({
			scrollTop: $(`#${className}`).offset().top - headerHeight,
		});
	});

	// Scroll To Top App
	$(".scrollTop").click(() => {
		$(this).scrollTop(0);
	});

	// Calculate | CountDown Characters of Textarea App
	$("textarea").keyup(function (e) {
		if (e.target.value.length > 10) {
			e.target.value = e.target.value.slice(0, 10);
		}
	});
}); // End jQuery
