 //Check of 
 $("ul").on("click", "li",function () {
 	$(this).toggleClass("completed");	// body...
 });

 $("ul").on("click","span", function(event) {
 	$(this).parent().fadeOut(500,function () {
 		// body...
 		$(this).remove();
 	});
 	event.stopPropogation();

 	// body...
 });


 $("input").keypress(function (event) {
 	// body...
 	if (event.which === 13) {
 		var todoText = $(this).val();
 		$(this).val("");
 		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");

 	}
 });

 $(".fa-plus").click(function () {
 	// body...
 	$("input").fadeToggle();
 });