$(document).ready(function(){
  $('#priceSelector').on('change', function() {
    

    //If red is selected, show red, hide yellow and blue.
    if ( this.value == '1size')
    {
      $("#1size").show();
      $("#2size").hide();
      $("#3size").hide();
      $("#4size").hide();
      $("#5size").hide();
      $("#6size").hide();
    }
    
     //If yellow is selected, show yellow, hide red and blue.
    if ( this.value == '2size')
    {
      $("#1size").hide();
      $("#2size").show();
      $("#3size").hide();
      $("#4size").hide();
      $("#5size").hide();
      $("#6size").hide();
    }
    
    //If blue is selected, show blue hide red and yellow.
    if ( this.value == '3size')
    {
      $("#1size").hide();
      $("#2size").hide();
      $("#3size").show();
      $("#4size").hide();
      $("#5size").hide();
      $("#6size").hide();
    }
    
    //If red is selected, show red, hide yellow and blue.
    if ( this.value == '4size')
    {
      $("#1size").hide();
      $("#2size").hide();
      $("#3size").hide();
      $("#4size").show();
      $("#5size").hide();
      $("#6size").hide();
    }

    //If red is selected, show red, hide yellow and blue.
    if ( this.value == '5size')
    {
      $("#1size").hide();
      $("#2size").hide();
      $("#3size").hide();
      $("#4size").hide();
      $("#5size").show();
      $("#6size").hide();
    }

    //If red is selected, show red, hide yellow and blue.
    if ( this.value == '6size')
    {
      $("#1size").hide();
      $("#2size").hide();
      $("#3size").hide();
      $("#4size").hide();
      $("#5size").hide();
      $("#6size").show();
    }

  });
});