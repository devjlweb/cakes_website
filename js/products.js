$(document).ready(function(){
  $('#numSelector').on('change', function() {
  
    //If chocolateIndulgence is selected, show chocolateIndulgence, hide others.
    if ( this.value == 'chocolateIndulgence')
    {
      $("#chocolateIndulgence").show();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
    }
    
     //If cappuccinoCreme is selected, show cappuccinoCreme, hide others.
    if ( this.value == 'cappuccinoCreme')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").show();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
    }
    
    //If redVelvet is selected, show redVelvet hide others.
    if ( this.value == 'redVelvet')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").show();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
    }

    //If limoncello is selected, show limoncello hide others.
    if ( this.value == 'limoncello')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").show();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
    }
    
    //If yemaCaramel is selected, show yemaCaramel hide others.
    if ( this.value == 'yemaCaramel')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").show();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
    }

    //If blue is chocoMochaCrunch, show chocoMochaCrunch hide others.
    if ( this.value == 'chocoMochaCrunch')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").show();
      $("#blackForest").hide();
    }

    //If blackForest is selected, show blackForest hide others.
    if ( this.value == 'blackForest')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").show();
    }

  });
});
