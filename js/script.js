jQuery(document).ready(function(){
	jQuery('.header-mobile-icon').click(function(){
		if(!jQuery('body').hasClass('menu-open')){
			jQuery('body').addClass('menu-open');
		}else{
			jQuery('body').removeClass('menu-open');
		}
	});
});

function copyText() {
  var copyText = document.getElementById('input-hash');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

(function () {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;

	let fechaGmt = new Date(Date.UTC(2021, 2, 20, 23, 0, 0));
	countDown = new Date(fechaGmt).getTime(),
		x = setInterval(function() {    

		let now = new Date().getTime(),
		distance = countDown - now;

		document.getElementById("days").innerText = Math.floor(distance / (day)),
		document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
		document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
		document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    }, 0)
}());