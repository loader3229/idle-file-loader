var current_window='about';

function show_window(a){
	hide_window( current_window);
	$("#"+a).addClass('shown');
	
	document.getElementById("export1").value="";
	current_window=a;
}

function hide_window(a){
	$("#"+a).removeClass('shown');
}