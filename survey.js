var animInClass = "fadeInUp";
var animOutClass = "fadeOutDown";

$(document).ready(function() {
	$(document).on('click', '#btn-show', function () {
		if($('#survey').length) {
			$('#survey').addClass(animInClass);
			$('#survey').modal({backdrop: false});
		}
	});
    $('#survey').on('show.bs.modal', function () {
      var closeModalBtns = $('#survey').find('button[data-custom-dismiss="modal"]');
      closeModalBtns.one('click', function() {
          $('#survey').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function( evt ) {
              $('#survey').modal('hide')
        });
          $('#survey').removeClass(animInClass).addClass(animOutClass);
      })
    })
    $('#survey').on('hidden.bs.modal', function ( evt ) {
      var closeModalBtns = $('#survey').find('button[data-custom-dismiss="modal"]');
      $('#survey').removeClass(animOutClass)
      $('#survey').off('webkitAnimationEnd oanimationend msAnimationEnd animationend')
      closeModalBtns.off('click')
    })
    $('input[name="answerSurvey"]').on('change', function() {
        if ($(this).val() == 0) {
            $('.textarea').show();
        } else {
            $('.textarea').hide();
        }
        $('#sendSurvey').attr('disabled', false);
        $('#sendSurvey').removeClass('btn-default').addClass('btn-success');
    })
    $('#sendSurvey').on('click', function() {
        $('#sendSurvey').attr('disabled', true);
       
        /**
         * ADD CALL AJAX
         */
		 $('.form-check, .modal-header, .modal-footer, #typeSurvey, .textarea').remove();
		$('.success-msg').show();
    })
})