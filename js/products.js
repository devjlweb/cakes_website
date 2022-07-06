
$(document).ready(function(){
  $('#numSelector').on('change', function() {
  
    //If red is selected, show red, hide yellow and blue.
    if ( this.value == 'red')
    {
      $("#red").show();
      $("#yellow").hide();
      $("#blue").hide();
    }
    
     //If yellow is selected, show yellow, hide red and blue.
    if ( this.value == 'yellow')
    {
      $("#red").hide();
      $("#yellow").show();
      $("#blue").hide();
    }
    
    //If blue is selected, show blue hide red and yellow.
    if ( this.value == 'blue')
    {
      $("#red").hide();
      $("#yellow").hide();
      $("#blue").show();
    }
    
  });
});
