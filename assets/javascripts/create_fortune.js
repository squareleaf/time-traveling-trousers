(function($) {
  window.CreateFortune = (function(fortuneData) {

    var fortuneTextInput = new Array,
        allFortunes = new Array,
        possFortune,
        firstVariable,
        secondVariable,
        randomFortune;

    fortuneTextInput = $(".fortune-text").val().split("\n");

    for(var i=0, ilength=fortuneData.length;i < ilength; i++) {
      for(var j=0, jlength=fortuneTextInput.length;j < jlength; j++) {
        possFortune = fortuneTextInput[j]; 
        firstVariable = possFortune.substring(possFortune.indexOf("${") + 2, possFortune.indexOf("}"));
        secondVariable = possFortune.substring(possFortune.lastIndexOf("${") + 2, possFortune.lastIndexOf("}"));
        if (fortuneData[i][0] == firstVariable && fortuneData[i][2] == secondVariable) {
          allFortunes.push([fortuneTextInput[j].replace("${" + firstVariable + "}", fortuneData[i][1]).replace("${" + secondVariable + "}", fortuneData[i][3])]);
        }
      }
    }

    if (allFortunes.length == 0) {
      randomFortune = "Signs are unclear. Please drop in another coin and ask again. (Check that your data and string variables match.)"
    } else {
      randomFortune = allFortunes[Math.floor(Math.random() * allFortunes.length)];
    }

    $(".fortune-result").text(randomFortune).fadeIn("slow");
    $(".dislike-fortune").fadeIn("slow");

	return CreateFortune;
  });
})(jQuery);