$( document ).ready(function() {
    console.log( "ready!" );
});

$('#workwork').click(function() {
	var version = JSON.parse($('textarea').val()).version;
	$("#yourversion").html("Your version is: "+version);
	$("ul").find("[data-version='" + version + "']").css('background-color', 'green');
});