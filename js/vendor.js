jQuery( document ).ready(function () {


  function setBootstrapTooltip() {
    if ( $.fn.tooltip ) {
      $( '[data-toggle="tooltip"]' ).tooltip();
    }
  }


  function setLightbox() {
    if ( $.fn.magnificPopup ) {
      $( '.mfp-zoom' ).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
          verticalFit: true
        }
      });
    }
  }


  function setFormValidationNotifyByModal( formSelector ) {
    if ( $.fn.validate ) {
      var requiredFieldMsg = 'field is required';
      var validEmailMsg = 'email is invalid';

      $( formSelector ).validate({
        errorClass: 'error-msg',
        rules: {
          name2:     { required: true },
          email2:    { required: true, email: true },
          subject2:  { required: true },
          message2:  { required: true }
        },
        messages: {
          name2:     { required: requiredFieldMsg },
          email2:    { required: requiredFieldMsg, email: validEmailMsg },
          subject2:  { required: requiredFieldMsg },
          message2:  { required: requiredFieldMsg }
        },
		
		//submit email
        submitHandler: function( form ) {

            $( '#form-success-modal' ).modal();
           var email = $('#email2').val();
            var mensagem = $( '#message2' ).val();
            emailjs.send("gmail", "template_vMA2xSlA", {"reply_to":"","from_name":email,"to_name":"Leandro","message_html":mensagem})
        }
      });
    }
  }

  function setFormValidationNotifyByAlert() {
    var $formSelector = $( '#contact-form' );
    var $formErrorSelector = $( '.contact-panel .panel-heading' );
    if ( $.fn.validate ) {
      var requiredFieldMsg = 'field is required';
      var validEmailMsg = 'email is invalid';

      $formSelector.validate({
        errorClass: 'error-msg',
        rules: {
          name:     { required: true },
          email:    { required: true, email: true },
          subject:  { required: true },
          message:  { required: true }
        },
        messages: {
          name:     { required: requiredFieldMsg },
          email:    { required: requiredFieldMsg, email: validEmailMsg },
          subject:  { required: requiredFieldMsg },
          message:  { required: requiredFieldMsg }
        },
        submitHandler: function( form ) {
		  
            $( '#form-success-modal' ).modal();
           var email = $('#email').val();
            var mensagem = $( '#message' ).val();

            emailjs.send("gmail", "template_vMA2xSlA", {"reply_to":"","from_name":email,"to_name":"Leandro","message_html":mensagem})
        }
      });
    }
  }


  function setAutoClosingAlert( selector, delay ) {
    var alert = $( selector ).alert();
    window.setTimeout(function() { alert.alert( 'close' ) }, delay );
  }


  function setGoogleMap( la, ln, zoomLevel ) {
    var map;
    map = new GMaps({
      el: '#gmap',
      lat: la,
      lng: ln,
      zoom: zoomLevel,

      styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],
      zoomControl : true,
      zoomControlOpt: {
        style : 'SMALL',
        position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      scrollwheel: false,
      mapTypeControl: false,
      overviewMapControl: false
    });
  }


  function setPieChart( selector ) {
    $( selector ).easyPieChart({
      barColor: '#6AC293',
      trackColor: '#ededed',
      lineCap: 'square',
      lineWidth: '4',
      scaleColor: '#fff',
      onStep: function( from, to, percent ) {
        $( this.el ).find( '.percent' ).text( Math.round( percent ) );
      }
    });
  }


  var initialVendorScript = new function () {
    
    setBootstrapTooltip();
    setPieChart( '.pie-chart' );
    setLightbox();
    setFormValidationNotifyByModal( '#contact-form-second' );
    setFormValidationNotifyByAlert();

    setGoogleMap( -23.4697662, -47.4301296, 17 );//FACENS
  }
});
