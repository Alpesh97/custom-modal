$(document).ready(function() {

	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});

	// modal 
  jQuery('.modal-btn').click(function () {
    jQuery("body").addClass('modal-open');
    var _this = jQuery(this).attr('data-link');

    var _currentModal = jQuery("[data-target='" + _this + "']");
    _currentModal.fadeIn(300);
    _currentModal.addClass("visible");
  });

    jQuery('.modal-backdrop,.modal-close').click(function () {        
      var _this = jQuery(this);
        _this.closest(".custom-modal").removeClass("visible").fadeOut(300, function() {
            jQuery("body").removeClass('modal-open');
            _this.closest(".custom-modal").find("#video").attr('src','');
        });
    });
});