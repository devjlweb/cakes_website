$(document).ready(function(){
  $('#cupCakeSelector').on('change', function() {


    //If vanilla is selected, show vanilla, hide others.
    if ( this.value == 'vanilla')
    {
      $("#vanilla").show();
      $("#chocolateFudge").hide();
      $("#lemon").hide();
      $("#carrot").hide();
      $("#cookiesAndCream").hide();
      $("#coffee").hide();
    }

    //If chocolateFudge is selected, show chocolateFudge, hide others.
    if ( this.value == 'chocolateFudge')
    {
      $("#vanilla").hide();
      $("#chocolateFudge").show();
      $("#lemon").hide();
      $("#carrot").hide();
      $("#cookiesAndCream").hide();
      $("#coffee").hide();
    }

    //If lemon is selected, show lemon, hide others.
    if ( this.value == 'lemon')
    {
      $("#vanilla").hide();
      $("#chocolateFudge").hide();
      $("#lemon").show();
      $("#carrot").hide();
      $("#cookiesAndCream").hide();
      $("#coffee").hide();
    }

    //If carrot is selected, show carrot, hide others.
    if ( this.value == 'carrot')
    {
      $("#vanilla").hide();
      $("#chocolateFudge").hide();
      $("#lemon").hide();
      $("#carrot").show();
      $("#cookiesAndCream").hide();
      $("#coffee").hide();
    }

    //If cookiesAndCream is selected, show cookiesAndCream, hide others.
    if ( this.value == 'cookiesAndCream')
    {
      $("#vanilla").hide();
      $("#chocolateFudge").hide();
      $("#lemon").hide();
      $("#carrot").hide();
      $("#cookiesAndCream").show();
      $("#coffee").hide();
    }

    //If coffee is selected, show coffee, hide others.
    if ( this.value == 'coffee')
    {
      $("#vanilla").hide();
      $("#chocolateFudge").hide();
      $("#lemon").hide();
      $("#carrot").hide();
      $("#cookiesAndCream").hide();
      $("#coffee").show();
    }


  });
});
