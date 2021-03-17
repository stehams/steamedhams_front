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
}