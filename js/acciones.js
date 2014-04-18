// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
	$('.btn').tap(function(){
	var boton = (($(this).attr('class')).split(' '))[1];
	switch (boton)
	{
		case 'b1':
		navigator.notification.beep(2);
		break;
		case 'v1':
		navigator.notification.vibrate(3000);
		
		break;
	}//switch
	
	
	});//tap
	
	$('#izquierda').swipeleft(function(){
	navigator.notification.alert("Deslizo a la Izquierda",function(){"PRUEBA04", "Aceptar"
	});//alert
	});//baner izquierda
	
	$('#derecha').swiperight(function(){
	navigator.notification.confirm("Que quieres hacer",function(opt){
	switch (opt) {
		case 1:
		navigator.notification.beep(3);
		break;
		case 2:
		navigator.notification.vibrate(4000);
		break;
	}//switch opt
		
	},"PRUEBA03 MODIFICADA","Beep, Vibrar, Cancelar");//confirm
	});//baner derecha
	
	
	$('#Data Table td').eq(1).text(device.name);
	
	},false);
});//document