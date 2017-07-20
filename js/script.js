/**
 * verifica se o elemento "existe", not null, not empty
 *
 * @param  {Element} $element elemento que quero verificar
 * @return {Boolean}
 */
function isExists( $element ) {
  return $element.length > 0;
}

/**
 * verifica se attr existe
 *
 * @param  {Element} $element elemento que quero verificar
 * @param  {String}  attrName attr name of element
 * @return {Boolean}
 */
function hasAttr( $element, attrName ) {
  var attr = $element.attr( attrName );
  

  if (typeof attr !== typeof undefined && attr !== false) {
    return true;
  } else {
    return false;
  }
}

/**
 * verifica attr "data-*" existe
 *
 * @param  {Element} $element     elemento que quero verificar
 * @param  {String}  dataAttrName attr name que quero verificar (e.g. 'test', function will looking for 'data-test')
 * @return {Boolean} 
 */
function hasDataAttr( $element, dataAttrName ) {
  return hasAttr( $element, 'data-' + dataAttrName );
}

jQuery( document ).ready(function() {
  
  
  var $toTopBtn = $( '.to-top-btn' );
  var $contactFormBtn = $( '.contact-btn' );


  function setGoToTopBtn() {
    $toTopBtn.click(function( e ) {
      e.preventDefault();
      $( 'html, body' ).animate({ scrollTop: 0 }, 'slow' );
    });
  }

  /**
   * painel formulario slide
   */
  function setContactFormPanelBtn() {
    var $contactFormPanel = $( '.contact-panel' );

    $contactFormBtn.on( 'click', function() {
      if ( $contactFormPanel.css( 'right') == '24px' ) {
        $contactFormPanel.stop().animate({ 'right': '-324px' });
      } else {
        $contactFormPanel.stop().animate({ 'right': '24px' });
      }
    })
  }


  function setPreload() {
    var $loading = $( '#loading' );
    var delayTime = 600;

    setTimeout(function(){
      $loading
        .delay( delayTime )
        .fadeOut( 'slow', function(){
          $( this ).remove();
        });

      $('body')
        .delay( delayTime * 2 )
        .attr('style', 'overflow: visible !important;');

    }, delayTime );
  }


  function setDynamicCopyrightYear() {
    $( '.copyright' ).find( 'span.year' ).text( '2017' );
  }
  



  function setWindowScrollFunction() {
    var offset = $( window ).height() / 2;
    if ( $( this ).scrollTop() > offset ) {

      // go to top button show
      $toTopBtn
        .css( 'opacity', '1' )
        .css( 'cursor', 'pointer' );

      $( '.contact-btn' ).css( 'top', '24px' );
      $( '#contact-section' ).css( 'top', '76px' );

    } else {

      // go to top button hide
      $toTopBtn
        .css( 'opacity', '0' )
        .css( 'cursor', 'default' );

      $( '.contact-btn' ).css( 'top', '192px' );
      $( '#contact-section' ).css( 'top', '244px' );
    }
  }


  var initMainScript = new function() {
    
    setWindowScrollFunction();
    setGoToTopBtn();
    setContactFormPanelBtn();
    setDynamicCopyrightYear();


  }


  $( window ).scroll(function() {
    setWindowScrollFunction();
  });

  
  $( window ).resize(function() {
    
  });
});
