$(document).ready(function(){
  $('#numSelector').on('change', function() {
  
    //If chocolateIndulgence is selected, show chocolateIndulgence, hide yellow and blue.
    if ( this.value == 'chocolateIndulgence')
    {
      $("#chocolateIndulgence").show();
      $("#yellow").hide();
      $("#blue").hide();
    }
    
     //If yellow is selected, show yellow, hide red and blue.
    if ( this.value == 'yellow')
    {
      $("#chocolateIndulgence").hide();
      $("#yellow").show();
      $("#blue").hide();
    }
    
    //If blue is selected, show blue hide red and yellow.
    if ( this.value == 'blue')
    {
      $("#chocolateIndulgence").hide();
      $("#yellow").hide();
      $("#blue").show();
    }
    
  });
});
