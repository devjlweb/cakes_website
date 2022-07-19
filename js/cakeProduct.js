$(document).ready(function(){
  $('#cakeSelector').on('change', function() {
  
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
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
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
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
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
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
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
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
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
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
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
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
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
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
    }

    //If carrot is selected, show carrot hide others.
    if ( this.value == 'carrot')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
      $("#carrot").show();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
    }

    //If purpleYam is selected, show purpleYam hide others.
    if ( this.value == 'purpleYam')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
      $("#carrot").hide();
      $("#purpleYam").show();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
    }

    //If pandan is selected, show pandan hide others.
    if ( this.value == 'pandan')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").show();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").hide();
    }

    //If rockyRoad is selected, show rockyRoad hide others.
    if ( this.value == 'rockyRoad')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").show();
      $("#strawberry").hide();
      $("#sansrival").hide();
    }

    //If strawberry is selected, show strawberry hide others.
    if ( this.value == 'strawberry')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").show();
      $("#sansrival").hide();
    }

    //If sansrival is selected, show sansrival hide others.
    if ( this.value == 'sansrival')
    {
      $("#chocolateIndulgence").hide();
      $("#cappuccinoCreme").hide();
      $("#redVelvet").hide();
      $("#limoncello").hide();
      $("#yemaCaramel").hide();
      $("#chocoMochaCrunch").hide();
      $("#blackForest").hide();
      $("#carrot").hide();
      $("#purpleYam").hide();
      $("#pandan").hide();
      $("#rockyRoad").hide();
      $("#strawberry").hide();
      $("#sansrival").show();
    }

  });
});
