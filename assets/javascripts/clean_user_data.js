(function($) {
  window.CleanUserData = (function() {
  	var fortuneInput,
        pattern
        tempArray = new Array,
  		  fortuneData = new Array;

    pattern = /[^A-Za-z0-9]/g;
  	fortuneInput = $(".fortune-data").val().split("\n");

  	for(var i=0, length=fortuneInput.length; i < length;i++) {
  		tempArray = fortuneInput[i].split(/=>|,/);
  		fortuneData.push([
  			tempArray[0].replace(pattern, ''),
  			tempArray[1].replace(pattern, ''),
  			tempArray[2].replace(pattern, ''),
  			tempArray[3].replace(pattern, '')
  		]);
  	}

	return fortuneData;
  });
})(jQuery);