window.onload = function() {
	new WOW().init();
	var oCover = document.querySelector(".cover");
	var hammer = new Hammer(oCover);
	var first = document.querySelector(".first");
	var movex;
	var on = document.getElementById("on");
	var off = document.getElementById("off");
	var music = document.getElementById("music")
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
		$(".li").eq($(this).index()).css("display", "block");
		$(".audio").css("z-index", -1);
	});
	$("#del").click(function() {
		$(".li").css("display", "none");
		$(".list").css("display", "none");
		$(".audio").css("z-index", 1000);
	});
	on.onclick = function() {
		music.pause();
		this.style.display = "none";
		off.style.display = "block";
	};
	off.onclick = function() {
		music.play();
		this.style.display = "none";
		on.style.display = "block";
	}
}