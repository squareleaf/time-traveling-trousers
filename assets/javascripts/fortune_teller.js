$(document).ready(function() {
    $(document).on("click", ".generate-custom", function() {
    	customDataInput = new CleanUserData();
    	new CreateFortune(customDataInput);
    });

    $(document).on("click", ".dislike-fortune", function() {
    	$(".fortune-result").fadeOut();
      $(".dislike-fortune").fadeOut();
    	new CreateFortune(customDataInput);
    });
});