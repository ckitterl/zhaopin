window.onload = function() {
	new WOW().init();
	var oCover = document.querySelector(".cover");
	var hammer = new Hammer(oCover);
	var first = document.querySelector(".first");
	var movex;
	hammer.on("panstart", function() {
		hammer.on("panmove", function(e) {
			movex = e.deltaY;
			oCover.classList.add("tran");
			if(movex < 0) {
				oCover.style.top = -100 + "vh";
			} else {
				oCover.style.top = 0;
			}

		})
	});
	$(".one_1").click(function() {
		$(".list").css("display", "block");
		$(".li").eq($(this).index()).css("display", "block")
	});
	$("#del").click(function() {
		$(".li").css("display", "none");
		$(".list").css("display", "none")
	})
}