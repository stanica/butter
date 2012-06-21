define([], function(){

  return function( butter ){
    var _button = document.createElement( "butter-button" );

    _button.id = "add-popcorn";
    _button.title = "Add Popcorn Events to the timeline";
    _button.classList.add( "butter-btn" );
    _button.innerHTML = "<span class=\"icon icon-plus-sign\"></span> Popcorn";

    function click(){
      if( butter.ui.contentState === "timeline" ){
        butter.ui.setContentState( "add-popcorn" );
        butter.ui.contentStateLocked = true;
      }
      else{
        butter.ui.contentStateLocked = false;
        butter.ui.setContentState( "timeline" );
      }
      _button.removeEventListener( "touchstart", click, false );
      /*setTimeout(function() {
      _button.removeEventListener( "touchstart", click, false );
      }, 300);*/
    }
    _button.addEventListener( "touchstart", click, false );
    _button.addEventListener( "click", click, false );

    butter.ui.areas.tools.addComponent( _button, {
      states: [ "add-popcorn", "editor" ],
      transitionIn: function(){
        _button.setAttribute( "disabled", true );
        _button.innerHTML = "Done";
        _button.title = "Finish adding Popcorn Events";
        _button.classList.add( "add-popcorn-done" );
      },
      transitionInComplete: function(){
        _button.removeAttribute( "disabled" );
      },
      transitionOut: function(){
        _button.setAttribute( "disabled", true );
        _button.innerHTML = "<span class=\"icon icon-plus-sign\"></span> Popcorn";
        _button.title = "Add Popcorn Events to the timeline";
        _button.classList.remove( "add-popcorn-done" );
      },
      transitionOutComplete: function(){
        _button.removeAttribute( "disabled" );
      }
    });
  };
});
