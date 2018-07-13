// JavaScript Document

window.onload = function(){
	"use strict";
	
	//alert("document loaded");

	TweenMax.to('#splashscreen',0.7,{autoAlpha:1,delay:1});
	

	$("#btnGo").click(function(){
		TweenMax.to('#splashscreen',0.8,{autoAlpha:0});
		TweenMax.to('#title',0.8,{autoAlpha:1,delay:0.8});
		TweenMax.to('#robotics1',0.8,{"top":"112px",delay:0.8});
		TweenMax.to('#robotics2',0.8,{"top":"92px",delay:0.8});
		TweenMax.to('#robotics3',0.8,{"top":"275px",delay:0.8});
		TweenMax.to('#conveyor',0.8,{"top":"319px",delay:0.8});
		TweenMax.delayedCall(0.8,function(){
			TweenMax.to('#hotspot1',0.5,{autoAlpha:1,delay:0.4});
			TweenMax.to('#hotspot2',0.5,{autoAlpha:1,delay:0.6});
			TweenMax.to('#hotspot3',0.5,{autoAlpha:1,delay:0.9});
			TweenMax.to('#hotspot4',0.5,{autoAlpha:1,delay:1.3});
		})
	});
	
	$('#hotspot2').click(function(){
		TweenMax.to("#infotool",0.5,{autoAlpha:1});
	});
	$('#subhotspot3').click(function(){
		TweenMax.to("#productchooser",0.5,{autoAlpha:1});
	});
	$('.btnproduct').click(function(){
		window.location.href="http://uk.rs-online.com/web/c/automation-control-gear/sounders-beacons/pre-configured-beacon-towers/&RM=T/?redirect-relevancy-data=636F3D3126696E3D4931384E4C446573635461786F6E6F6D794272616E645365617263685465726D266C753D656E266D6D3D6D617463687061727469616C6D617826706D3D5E5B5C707B4C7D2D5C707B5A737D5D2B2426706F3D353426736E3D592673723D52656469726563742673743D4B4559574F52445F4D554C54495F414C5048412673633D592677633D4E4F4E45267573743D746F776572206C6967687473267374613D746F776572206C696768747326&r=f&sra=oss";	
	});
	
	$('.btnCloseX').click(function(){
		TweenMax.to("#infotool",0.5,{autoAlpha:0});
		TweenMax.to("#productchooser",0.5,{autoAlpha:0});
		
	});
	
	$('.btnselect').click(function(){
		TweenMax.to('#infotool',0.5,{autoAlpha:0});
		TweenMax.to('#hotspot1',0.5,{autoAlpha:0,delay:0.4});
		TweenMax.to('#hotspot2',0.5,{autoAlpha:0,delay:0.6});
		TweenMax.to('#hotspot3',0.5,{autoAlpha:0,delay:0.9});
		TweenMax.to('#hotspot4',0.5,{autoAlpha:0,delay:1.3});
		TweenMax.to('#robotics1',0.8,{autoAlpha:0,delay:1.7});
		
		TweenMax.to('#robotics3',0.8,{autoAlpha:0,delay:1.7});
		TweenMax.to('#conveyor',0.8,{autoAlpha:0,delay:1.7});
		TweenMax.to('#robotics2',0.8,{"x":"-60","y":"40","scale":"1.5",delay:1.5});
		
		TweenMax.delayedCall(3,function(){
			TweenMax.to('#subhotspot1',0.5,{autoAlpha:1,delay:0.2});
			TweenMax.to('#subhotspot2',0.5,{autoAlpha:1,delay:0.5});
			TweenMax.to('#subhotspot3',0.5,{autoAlpha:1,delay:0.8});
			TweenMax.to('#subhotspot4',0.5,{autoAlpha:1,delay:1.1});
			TweenMax.to('#subhotspot5',0.5,{autoAlpha:1,delay:1.4});
			TweenMax.to('#subhotspot6',0.5,{autoAlpha:1,delay:1.7});
			TweenMax.to('#subhotspot7',0.5,{autoAlpha:1,delay:2.0});
			TweenMax.to('#bottommenu',0.5,{"top":"505px",delay:2.2});
			$('#title').html("Robotics");
		});
		
		
		
		
	});
	

};