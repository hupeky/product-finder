// JavaScript Document


window.onload = function(){
	"use strict";
	
	
	placeStaticText();
	
	TweenMax.delayedCall(1,function(){
		initScreen();
	});
	
	
	$('#btnGo').click(function(){
		showStartScreen();	
	});
	$('#btnInfo').click(function(){
		showHideSidebar();	
	});
	$('#btnInfo').on("mouseover",function(){
		$(this).css("background-position-x","right");
	});
	$('#btnInfo').on("mouseleave",function(){
		$(this).css("background-position-x","left");
	});
	
	$('#hsConveyor').on("mouseover",function(){
		showInfo($(this),"conveyorsystems");});
	
	$('#hsRobotics').on("mouseover",function(){
		showInfo($(this),"robotics");});
	
	$('#hsControlCabinet').on("mouseover",function(){
		showInfo($(this),"controlcabinet");});
	
	$('#hsStorageTank').on("mouseover",function(){
		showInfo($(this),"storagetank");});
	
	
	$('.detHS').on("mouseover",function(){
		showDetailInfo($(this));
	});
	
	
	
	/*
	$("#btnbot1").click(function(){
		if (_subopen === false){
			_subopen = true;	
			TweenMax.to('#bottomsubmenu',0.3,{"top":"100px"});
		}
		else{
			_subopen = false;
			TweenMax.to('#bottomsubmenu',0.3,{"top":"550px"});
		}
			
	});
	*/
	$("#btnbot1").on("mouseenter",function(){
		generateSubMenus("accessories");
	});
	$("#btnbot2").on("mouseenter",function(){
		generateSubMenus("testandmeasurement");
	});
	$("#btnbot3").on("mouseenter",function(){
		generateSubMenus("tools");
	});
	$("#btnbot4").on("mouseenter",function(){
		generateSubMenus("rspro");
	});
	
	
	
	
	$('#infoWindow').on("mouseleave",function(){
		TweenMax.to(this,0.5,{autoAlpha:0});	
	});
	
	
	$('#detailInfoWindow').on("mouseleave",function(){
		TweenMax.to(this,0.5,{autoAlpha:0});
		$('.detarrow_left').css("background-position","left center");	
		$('.detarrow_right').css("background-position","left center");		
		
	});
	
	
	$('#btnSelect').click(function(){
		
		initXMLData(mainSelection);
		showSelection();
	});
	
	
	$('#btnclosex').click(function(){
		TweenMax.killAll();
		TweenMax.to("#navHUD",0.3,{autoAlpha:0});
		TweenMax.to("#bottommenu",0.3,{"top":"550px"});
		TweenMax.to("#bottomsubmenu",0.3,{"top":"550px"});
		TweenMax.to("#subhotspots",0.3,{autoAlpha:0,onComplete:function(){
			$('#subhotspots').html("");	
		}});
		TweenMax.to("#objects_robotics",0.3,{autoAlpha:0});
		TweenMax.to("#objects_storagetank",0.3,{autoAlpha:0});
		TweenMax.to('#objects_conveyor',0.5,{autoAlpha:0});
		TweenMax.to('#objects_controlcabinet',0.5,{autoAlpha:0});	
		TweenMax.to("#detailInfoWindow",0.3,{autoAlpha:0,onComplete:function(){
			$('#detailInfoWindow').css("left","-999px");	
		}});
		TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
				$('#pageHeadline').html(_cpchooseyourselection);
				TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
		}});
		
		if (mainSelection !=="robotics") TweenMax.to("#robotics",0.01,{"scale":"1","top":"-350px","left":"653px"});
		if (mainSelection !=="storagetank") TweenMax.to("#storagetank",0.01,{"scale":"1","top":"87px","left":"-200px"});
		if (mainSelection !=="conveyorsystems") TweenMax.to("#conveyor",0.01,{"scale":"1","top":"550px","left":"165px"});
		
		if (mainSelection !=="controlcabinet") TweenMax.to("#controlcabinet",0.01,{"scale":"1","top":"550px","left":"885px"})
		
		TweenMax.to("#robotics",0.5,{autoAlpha:1,"scale":"1","top":"87px","left":"373px",delay:0.5});
		TweenMax.to("#storagetank",0.5,{autoAlpha:1,"scale":"1","top":"87px","left":"98px",delay:0.5});
		TweenMax.to('#storagetankopen',0.5,{autoAlpha:0});
		
		TweenMax.to("#conveyor",0.5,{autoAlpha:1,"scale":"1","top":"290px","left":"65px",delay:0.5});
		TweenMax.to("#controlcabinet",0.5,{autoAlpha:1,"scale":"1","top":"275px","left":"685px",delay:0.5});
		
		TweenMax.to("#controlcabinetopen",0.5,{autoAlpha:0,delay:0.3});
		TweenMax.to('.ccdoor',0.5,{"left":"-26px","top":"42px",delay:0.3});
		//TweenMax.to('#robotics',0.5,{"top":"87px","left":"373px"});
		
		TweenMax.to('#hsRobotics',0.5,{autoAlpha:1,delay:1.5});
		TweenMax.to('#hsConveyor',0.5,{autoAlpha:1,delay:1.5});
		TweenMax.to('#hsControlCabinet',0.5,{autoAlpha:1,delay:1.5});
		TweenMax.to('#hsStorageTank',0.5,{autoAlpha:1,delay:1.5});
		TweenMax.to('#btnInfo',0.5,{autoAlpha:1,delay:1.5});
		mainSelection = "";
	});
	
	$('#btnprev').click(function(){
		TweenMax.killAll();
		//TweenMax.to("#bottommenu",0.3,{"top":"550px"});
		TweenMax.to("#bottomsubmenu",0.3,{"top":"550px"});
		TweenMax.to("#detailInfoWindow",0.3,{autoAlpha:0});
		TweenMax.to("#subhotspots",0.3,{autoAlpha:0});
		
		switch (mainSelection){
			
			case "robotics":
				TweenMax.to("#objects_robotics",0.3,{autoAlpha:0});
				TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
					$('#pageHeadline').html(_cphotspot4);
					TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
					}});
				
				TweenMax.to("#robotics",0.8,{autoAlpha:1,"left":"1000px",delay:1});
				
				$('#storagetank').css({"top":"43px","left":"-1000px"});
				TweenMax.to("#storagetank",0.01,{"scale":"2.53",transformOrigin: "left top"});
				TweenMax.to("#storagetank",0.8,{autoAlpha:1,"left":"156px",delay:1});
				TweenMax.to('#storagetankopen',0.5,{autoAlpha:1,delay:2.5});
				TweenMax.to('#objects_storagetank',0.5,{autoAlpha:1,delay:3});
			
				
				
				
				mainSelection = "storagetank";
			break;
			
			case "controlcabinet":
			TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
					$('#pageHeadline').html(_cphotspot1);
					TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
					}});
					
					
			TweenMax.to("#objects_controlcabinet",0.3,{autoAlpha:0});
			TweenMax.to("#controlcabinetopen",0.5,{autoAlpha:0});
			TweenMax.to('.ccdoor',0.5,{"left":"-26px","top":"42px"});
			TweenMax.to("#controlcabinet",0.8,{autoAlpha:1,"left":"1000px",delay:1});
				
			$('#robotics').css({"top":"-23px","left":"-1000px"});
			TweenMax.to("#robotics",0.01,{"scale":"1.64",transformOrigin: "left top"});
			TweenMax.to("#robotics",0.8,{autoAlpha:1,"left":"138px",delay:1});
			TweenMax.to('#objects_robotics',0.5,{autoAlpha:1,delay:3});	
			
			
			
			
			
			mainSelection = "robotics";
			break;
			
			case "conveyorsystems":
			TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
					$('#pageHeadline').html(_cphotspot2);
					TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
					}});
			
			TweenMax.to("#objects_conveyor",0.3,{autoAlpha:0});	
			TweenMax.to("#conveyor",0.8,{autoAlpha:1,"left":"1000px",delay:1});	
			
			$('#controlcabinet').css({"top":"-63px","left":"-1000px"});
			TweenMax.to("#controlcabinet",0.01,{"scale":"1.93",transformOrigin: "left top"});
			TweenMax.to("#controlcabinet",0.8,{autoAlpha:1,"left":"443px",delay:1});
			TweenMax.to("#controlcabinetopen",0.5,{autoAlpha:1,delay:2.5});
			TweenMax.to('.ccdoor',0.5,{"left":"-171px","top":"53px",delay:2.5});
			TweenMax.to('#objects_controlcabinet',0.5,{autoAlpha:1,delay:3.0});	
			
			
			mainSelection = "controlcabinet";
			break;
			
			case "storagetank":
			TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
					$('#pageHeadline').html(_cphotspot3);
					TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
					}});
					
			TweenMax.to("#objects_storagetank",0.3,{autoAlpha:0});	
			TweenMax.to("#storagetank",0.8,{autoAlpha:1,"left":"1000px",delay:1});			
			
			$('#conveyor').css({"top":"104px","left":"-1000px"});
			TweenMax.to("#conveyor",0.01,{"scale":"1.48",transformOrigin: "left top"});
			TweenMax.to("#conveyor",0.8,{autoAlpha:1,"left":"100px",delay:1});
			TweenMax.to('#objects_conveyor',0.5,{autoAlpha:1,delay:2.0});	
				
					
			mainSelection = "conveyorsystems";
			break;
			
			
			default:
			break;	
		}
		initXMLData(mainSelection);
		TweenMax.to('#subhotspots',0.5,{autoAlpha:1,delay:3.5});
		TweenMax.to('#bottommenu',0.5,{"top":"505px",delay:2.2});	
	});
	
	$('#btnnext').click(function(){
		console.log(mainSelection);
		TweenMax.killAll();
		//TweenMax.to("#bottommenu",0.3,{"top":"550px"});
		TweenMax.to("#bottomsubmenu",0.3,{"top":"550px"});
		TweenMax.to("#detailInfoWindow",0.3,{autoAlpha:0});
		TweenMax.to("#subhotspots",0.3,{autoAlpha:0});
		
		switch (mainSelection){
			
			case "robotics":
				TweenMax.to("#objects_robotics",0.3,{autoAlpha:0});
				TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
					$('#pageHeadline').html(_cphotspot2);
					TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
					}});
				
				TweenMax.to("#robotics",0.8,{autoAlpha:1,"left":"-800px",delay:1});
				$('#controlcabinet').css({"top":"-63px","left":"1000px"});
				TweenMax.to("#controlcabinet",0.01,{"scale":"1.93",transformOrigin: "left top"});
				TweenMax.to("#controlcabinet",0.8,{autoAlpha:1,"left":"443px",delay:1});
				TweenMax.to("#controlcabinetopen",0.5,{autoAlpha:1,delay:2.5});
				TweenMax.to('.ccdoor',0.5,{"left":"-171px","top":"53px",delay:2.5});
				TweenMax.to('#objects_controlcabinet',0.5,{autoAlpha:1,delay:3.0});	
				mainSelection = "controlcabinet";
			break;
			
			case "controlcabinet":
			TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
					$('#pageHeadline').html(_cphotspot3);
					TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
					}});
					
					
			TweenMax.to("#objects_controlcabinet",0.3,{autoAlpha:0});
			TweenMax.to("#controlcabinetopen",0.5,{autoAlpha:0});
			TweenMax.to('.ccdoor',0.5,{"left":"-26px","top":"42px"});
			TweenMax.to("#controlcabinet",0.8,{autoAlpha:1,"left":"-800px",delay:1});
				
			$('#conveyor').css({"top":"104px","left":"1000px"});
			TweenMax.to("#conveyor",0.01,{"scale":"1.48",transformOrigin: "left top"});
			TweenMax.to("#conveyor",0.8,{autoAlpha:1,"left":"100px",delay:1});
			TweenMax.to('#objects_conveyor',0.5,{autoAlpha:1,delay:2.0});	
			
			
			mainSelection = "conveyorsystems";
			break;
			
			case "conveyorsystems":
			TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
					$('#pageHeadline').html(_cphotspot4);
					TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
					}});
			
			TweenMax.to("#objects_conveyor",0.3,{autoAlpha:0});	
			TweenMax.to("#conveyor",0.8,{autoAlpha:1,"left":"-900px",delay:1});	
			
			$('#storagetank').css({"top":"43px","left":"1000px"});
			TweenMax.to("#storagetank",0.01,{"scale":"2.53",transformOrigin: "left top"});
			TweenMax.to("#storagetank",0.8,{autoAlpha:1,"left":"156px",delay:1});
			TweenMax.to('#storagetankopen',0.5,{autoAlpha:1,delay:2.5});
			TweenMax.to('#objects_storagetank',0.5,{autoAlpha:1,delay:3});
			
			
			mainSelection = "storagetank";
			break;
			
			case "storagetank":
			TweenMax.to('#pageHeadline',0.3,{autoAlpha:0,delay:0.5,onComplete:function(){
					$('#pageHeadline').html(_cphotspot1);
					TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
					}});
					
			TweenMax.to("#objects_storagetank",0.3,{autoAlpha:0});	
			TweenMax.to("#storagetank",0.8,{autoAlpha:1,"left":"-800px",delay:1});			
			
			
			$('#robotics').css({"top":"-23px","left":"1000px"});
			TweenMax.to("#robotics",0.01,{"scale":"1.64",transformOrigin: "left top"});
			TweenMax.to("#robotics",0.8,{autoAlpha:1,"left":"138px",delay:1});
			TweenMax.to('#objects_robotics',0.5,{autoAlpha:1,delay:3});		
					
			mainSelection = "robotics";
			break;
			
			
			default:
			break;	
		}
		initXMLData(mainSelection);
		TweenMax.to('#subhotspots',0.5,{autoAlpha:1,delay:3.5});
		TweenMax.to('#bottommenu',0.5,{"top":"505px",delay:2.2});
		
			
	});
	
};


var mainSelection = "";
var subSelection = "";
var _subopen = false;

var _roboticsHotspotArray=[];
var _roboticsObjectsArray=[];
var _roboticsAccArray = [];

/* New Arrays for all Subjects */
var _hotSpotArray = [];
var _objectsArray = [];
var _accessoriesArray = [];
var _testmeasurementArray = [];
var _toolsArray = [];
var _rsproArray = [];

var _cpchooseyourselection;
var _cphotspot1,_cphotspot2,_cphotspot3,_cphotspot4;
var _cpsubmenu1,_cpsubmenu2,_cpsubmenu3,_cpsubmenu4;

function placeStaticText(){
	"use strict";
	$("#splashtitle").html($(_content).find("cp_title").text());
	$("#splashsubtitle").html($(_content).find("cp_subtitle").text());
	$("#btnGo").html($(_content).find("cp_btngo").text());
	$("#pageHeadline").html($(_content).find("cp_chooseyourselection").text());
	$("#sidebartitle").html($(_content).find("cp_titleourservice").text());
	$("#list1").html($(_content).find("cp_copyourservice1").text());
	$("#list2").html($(_content).find("cp_copyourservice2").text());
	$("#list3").html($(_content).find("cp_copyourservice3").text());
	$("#list4").html($(_content).find("cp_copyourservice4").text());
	$("#list5").html($(_content).find("cp_copyourservice5").text());
	$("#list6").html($(_content).find("cp_copyourservice6").text());
	$("#list7").html($(_content).find("cp_copyourservice7").text());
	$("#btnSelect").html($(_content).find("cp_btnselect").text());
	
	$("#btnbot1").html($(_content).find("cp_submenu1").text());
	$("#btnbot2").html($(_content).find("cp_submenu2").text());
	$("#btnbot3").html($(_content).find("cp_submenu3").text());
	$("#btnbot4").html($(_content).find("cp_submenu4").text());
	
	
	_cpchooseyourselection = $(_content).find("cp_chooseyourselection").text();
	_cphotspot1 = $(_content).find("cp_hotspot1").text();
	_cphotspot2 = $(_content).find("cp_hotspot2").text();
	_cphotspot3 = $(_content).find("cp_hotspot3").text();
	_cphotspot4 = $(_content).find("cp_hotspot4").text();
	_cpsubmenu1 = $(_content).find("cp_submenu1").text();
	_cpsubmenu2 = $(_content).find("cp_submenu2").text();
	_cpsubmenu3 = $(_content).find("cp_submenu3").text();
	_cpsubmenu4 = $(_content).find("cp_submenu4").text();
	
	
	
}


function initXMLData(_selectedData){
	"use strict";
	console.log("INIT XML:" + _selectedData);
	var _mainData = $(_content).find(_selectedData);
	//console.log($(_content).text());
	_hotSpotArray = $(_mainData).find("hotspots").find("entry");
	_accessoriesArray = $(_mainData).find("accessories").find("entry");
	_testmeasurementArray = $(_mainData).find("testandmeasurment").find("entry");
	_toolsArray = $(_mainData).find("tools").find("entry");
	_rsproArray = $(_mainData).find("rspro").find("entry");
	
	//generateAccessories();
	
	
	
	generateHotspots();
	
}


var oldsubmenus ="";

function generateSubMenus(_selectedSub){
	"use strict";
	//TweenMax.killAll();
	TweenMax.killTweensOf('#bottomsubmenu');
if (_selectedSub!==oldsubmenus){

	var _selectedSubArray = [];
	var _subLeft,_subTop;
	 
	if (_selectedSub === "accessories"){
		 _selectedSubArray = _accessoriesArray;
		 _subLeft = "0px";
	}
	
	if (_selectedSub === "testandmeasurement"){
		_selectedSubArray = _testmeasurementArray;
		_subLeft = "246px";
	}
	if (_selectedSub === "tools"){
		_selectedSubArray = _toolsArray;
		_subLeft = "492px";
	}
	if (_selectedSub === "rspro"){
		_selectedSubArray = _rsproArray;
		_subLeft = "738px";
	}
	
	TweenMax.to('#bottomsubmenu',0.3,{"top":"550px"});
	var _tHTML = "";
	for (var i=0;i<_selectedSubArray.length;i++){
				var _idName = $(_selectedSubArray[i]).find("name").text();
				//console.log(	$(_selectedSubArray[i]).find("idname").text());
				var _link = $(_selectedSubArray[i]).find("link").text();
				
				var _lastElement = "";

				if (i+1 ===_selectedSubArray.length){
					 _lastElement="lastElement";
				}

				if (_selectedSub ==="rspro"){
					_lastElement = "";
					_tHTML +='<div onclick="openLocation(\''+_link+'\')" class="botsubbgrspro '+_lastElement+'">';
					_tHTML +='	<div class="logorspro"></div><div class="botsubtitelrspro">'+_idName+'</div>';
					_tHTML +=' 	<div class="botsubsmarrow_rightrspro icon-rs_21-chev-right icon"></div>';
					_tHTML +='</div>';
				}
				else{
					_tHTML +='<div onclick="openLocation(\''+_link+'\')" class="botsubbg '+_lastElement+'">';
					_tHTML +='	<p class="botsubtitel">'+_idName+'</p>';
					_tHTML +=' 	<div class="botsubsmarrow_right icon-rs_21-chev-right icon"></div>';
					_tHTML +='</div>';
					
					
				}
				
				
	}
		
	

	$('#bottomsubmenu').html(_tHTML);
	$('#bottomsubmenu').css("left",_subLeft);
	$('#bottomsubmenu').css("overflow-y","hidden");
	//$('#btnclose').css({"display":"block","left":_subLeft});

	/*$('#btnclose').click(function(){
		TweenMax.to('#bottomsubmenu',0.3,{"top":"550px"});
		$(this).css("display","none");		
	});*/
	
		$('#bottomsubmenu').on("mouseleave",function(event){
			console.log(event.target);
			if (!($(event.target).hasClass('lastElement')))
			{
				TweenMax.to('#bottomsubmenu',0.3,{"top":"550px"});
				$('#btnclose').css("display","none");	
				oldsubmenus="";
			}
		});

	


	$(document).click(function(event){
		console.log(event.target);
		if (!($(event.target).hasClass('botmenu')))
		{
			TweenMax.to('#bottomsubmenu',0.3,{"top":"550px"});
			$('#btnclose').css("display","none");
			oldsubmenus="";
		}
	});
	
	
	
	if (_selectedSubArray.length >=9){
		_subTop = "100";
		if (_selectedSubArray.length >9){
		 $('#bottomsubmenu').css("overflow-y","scroll");
		}
	}
	else if (_selectedSub ==="rspro"){
		_subTop = 370;	
	}
	else{
		_subTop = 100 + (405-(_selectedSubArray.length*45));	
		
	}

	/*if (_subopen === false){
		_subopen = true;	
		$('#bottomsubmenu').css("top","550px");
		TweenMax.to('#bottomsubmenu',0.3,{"top":_subTop+"px"});
	}
	else{
		_subopen = false;
		TweenMax.to('#bottomsubmenu',0.3,{"top":"550px"});
	}*/
	
		$('#bottomsubmenu').css("top","550px");
	 	TweenMax.to('#bottomsubmenu',0.3,{"top":_subTop+"px"});		
	}
	
	oldsubmenus = _selectedSub;
}

function generateHotspots(){
	"use strict";
	console.log("GENERATING HOTSPOTS:" + _hotSpotArray.length);
	var _tHTML = "";
	for (var i=0;i<_hotSpotArray.length;i++){
		console.log(	$(_hotSpotArray[i]).find("idname").text());
		var _idName = $(_hotSpotArray[i]).find("idname").text();
		var _left = $(_hotSpotArray[i]).find("left").text();
		var _top = $(_hotSpotArray[i]).find("top").text();
		var _itemdata = $(_hotSpotArray[i]).find("items");
		_objectsArray[_idName] = _itemdata;
		
		
		_tHTML += '<div class="detHS" id="'+_idName+'" style="position:absolute;left:'+_left+'px;top:'+_top+'px;">';
		_tHTML += '   <div class="hscircle"></div>';
		_tHTML += '</div>';
	}
	
	
	$('#subhotspots').html(_tHTML);
	$('.detHS').on("mouseover",function(){
		showDetailInfo($(this));
	});
}

function openLocation(_targetLoc){
	"use strict";
	window.open(_targetLoc);
}


function showDetailInfo(_target){
	"use strict";
	
	var _newLeft,_newTop,_arrowYPosition;
	var _targetLeft = parseInt(_target.css("left"));
	var _targetTop = parseInt(_target.css("top"));
	
	console.log("TOP:" + _targetTop + "| LEFT:" + _targetLeft);
	
	var _theID = _target.attr("id");
	var _items = $(_objectsArray[_theID]).find("item");
	console.log($(_objectsArray[_theID]));
	var _tHTML ='';
	
	for (var i=0;i<_items.length;i++){
		
		var _iconsrc = 'images/png/' + $(_items[i]).find("iconsrc").text();
		var _itemname = $(_items[i]).find("name").text();
		var _itemlink = $(_items[i]).find("link").text();
		
		_tHTML +=' <div onclick="openLocation(\''+_itemlink+'\')" class="detailInfo">';
		_tHTML +=' <div class="detarrow_left" style="top:'+(((i+1)*80)-53)+'px!important;"></div>';	
		_tHTML +='  <img class="detailInfoIcon" src="'+_iconsrc+'" width="50" height="60" />';
		_tHTML +='	<p class="detailTitle">'+_itemname+'</p>';
		_tHTML +='  <div class="smarrow_right icon-rs_21-chev-right icon"></div>';
		_tHTML +='<div class="detarrow_right"></div>';
		_tHTML +=' </div>';
		
		
	}
	$('#detailInfoWindow').html(_tHTML);
	
	$('.detailInfo').on("mouseenter",function(){
		$( this ).find('.detarrow_left').css("background-position","right center");	
		$( this ).find('.detarrow_right').css("background-position","right center");	
	});
	$('.detailInfo').on("mouseleave",function(){
		$( this ).find('.detarrow_left').css("background-position","left center");	
		$( this ).find('.detarrow_right').css("background-position","left center");	
	});
	
	
	if (_targetTop >300){
		_newTop = _targetTop - 200+((3-parseInt(_items.length))*80);
		_arrowYPosition = "left " + (187) + "px";
		$('.detarrow_left').css("visibility","hidden");
		$('.detarrow_right').css("visibility","hidden");
		
		$(".detarrow_left:eq("+(_items.length-1)+")").css("visibility","visible");
		$(".detarrow_right:eq("+(_items.length-1)+")").css("visibility","visible");
		
		
		
	}
	else if(_targetTop <200){
		_newTop = _targetTop-40;
		_arrowYPosition = "left " + (27) + "px";
		$('.detarrow_left').css("visibility","hidden");
		$('.detarrow_right').css("visibility","hidden");
		$(".detarrow_left:eq(0)").css("visibility","visible");
		$(".detarrow_right:eq(0)").css("visibility","visible");
		
	}
	else{
		if (_items.length >1){
			_newTop = _targetTop-120+((3-parseInt(_items.length))*80);
			_arrowYPosition = "left " + (107) + "px";		
			$('.detarrow_left').css("visibility","hidden");
			$('.detarrow_right').css("visibility","hidden");
			$(".detarrow_left:eq(1)").css("visibility","visible");
			$(".detarrow_right:eq(1)").css("visibility","visible");
		}
		else{
			_newTop = _targetTop-120+((parseInt(_items.length))*80);
			_arrowYPosition = "left " + (107) + "px";		
		}
	}
	
	if (_targetLeft >650){
		_newLeft = _targetLeft-315;
		$('.detarrow_left').css("display","none");
		$('.detarrow_right').css("display","block");
		
		
		
	}
	else{
		 _newLeft = _targetLeft+10;	
		$('.detarrow_left').css("display","block");
		$('.detarrow_right').css("display","none");
	}
	
	
	
	
	console.log("ID:" + _theID + " | " + "LEFT:" + _targetLeft + " | " + "TOP:" + _targetTop);
	console.log($(_roboticsObjectsArray[_theID]).text());
	
	//var _newLeft = parseInt(_target.css("left"))+10;
	//var _newTop = parseInt(_target.css("top"))-65;
	
	$('#detailInfoWindow').css({"left":_newLeft+"px","top":_newTop+"px"});
	/*$('.detarrow_left').css("background-position",_arrowYPosition);
	$('.detarrow_right').css("background-position",_arrowYPosition);*/
	TweenMax.to('#detailInfoWindow',0.5,{autoAlpha:1});
	
}

function showInfo(_target,_option){
	"use strict";
	mainSelection = _option;
	console.log(_target.css("left"));
	var _newLeft = parseInt(_target.css("left"))+10;
	var _newTop = parseInt(_target.css("top"))-65;
	
	$('.arrow_right').css("display","none");
	$('.arrow_left').css("display","block");
	
	switch (_option){
		case "robotics":
			$('.infoTitle').html(_cphotspot1);
		
		break;
		case "conveyorsystems":
			$('.infoTitle').html(_cphotspot3);
		break;
		
		case "controlcabinet":
			_newLeft -=350;
			$('.arrow_right').css("display","block");
			$('.arrow_left').css("display","none");
			$('.infoTitle').html(_cphotspot2);
		break;
		
		case "storagetank":
			$('.infoTitle').html(_cphotspot4);
		break;
	
	default:
	break;	

	}
	
	$('#infoWindow').css({"left":_newLeft+"px","top":_newTop+"px"});
	TweenMax.to('#infoWindow',0.5,{autoAlpha:1});
}

function showSelection(){
	"use strict";
	TweenMax.to('#infoWindow',0.5,{autoAlpha:0});
	TweenMax.to('#hsRobotics',0.5,{autoAlpha:0});
	TweenMax.to('#hsConveyor',0.5,{autoAlpha:0});
	TweenMax.to('#hsControlCabinet',0.5,{autoAlpha:0});
	TweenMax.to('#hsStorageTank',0.5,{autoAlpha:0});
	TweenMax.to('#btnInfo',0.5,{autoAlpha:0});
	TweenMax.to('#pageHeadline',0.3,{autoAlpha:0});
	
	switch (mainSelection){
		case "robotics":
			TweenMax.delayedCall(0.5,function(){
				$('#pageHeadline').html(_cphotspot1);
				TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
			});
			TweenMax.to('#infoWindow',0.5,{autoAlpha:0});
			TweenMax.to('#conveyor',0.5,{autoAlpha:0});
			TweenMax.to('#storagetank',0.5,{autoAlpha:0});
			TweenMax.to('#controlcabinet',0.5,{autoAlpha:0});
			TweenMax.to('#robotics',0.5,{"top":"-23px","left":"138px","scale":"1.64",transformOrigin: "left top",delay:1.5});	
			TweenMax.to('#objects_robotics',0.5,{autoAlpha:1,delay:2});
			
			
		break;
		
		case "conveyorsystems":
			TweenMax.delayedCall(0.5,function(){
				$('#pageHeadline').html(_cphotspot3);
				TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
			});
			TweenMax.to('#robotics',0.5,{autoAlpha:0});
			TweenMax.to('#storagetank',0.5,{autoAlpha:0});
			TweenMax.to('#controlcabinet',0.5,{autoAlpha:0});
			
			TweenMax.to('#conveyor',0.5,{"top":"104px","left":"100px","scale":"1.48",transformOrigin: "left top",delay:1.5});
			TweenMax.to('#objects_conveyor',0.5,{autoAlpha:1,delay:2});	
		break;
		case "storagetank":
			TweenMax.delayedCall(0.5,function(){
				$('#pageHeadline').html(_cphotspot4);
				TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
			});
			TweenMax.to('#robotics',0.5,{autoAlpha:0});
			TweenMax.to('#conveyor',0.5,{autoAlpha:0});
			TweenMax.to('#controlcabinet',0.5,{autoAlpha:0});
			
			
			TweenMax.to('#storagetank',0.5,{"top":"43px","left":"156px","scale":"2.53",transformOrigin: "left top",delay:1.5});
			TweenMax.to('#objects_storagetank',0.5,{autoAlpha:1,delay:3});
			TweenMax.to('#storagetankopen',0.5,{autoAlpha:1,delay:2.5});
		break;
		
		case "controlcabinet":
			TweenMax.delayedCall(0.5,function(){
				$('#pageHeadline').html(_cphotspot2);
				TweenMax.to('#pageHeadline',0.3,{autoAlpha:1});
			});
			TweenMax.to('#robotics',0.5,{autoAlpha:0});
			TweenMax.to('#conveyor',0.5,{autoAlpha:0});
			TweenMax.to('#storagetank',0.5,{autoAlpha:0});
			
			TweenMax.to('#controlcabinet',0.5,{"top":"-63px","left":"443","scale":"1.93",transformOrigin: "left top",delay:1.5});
			TweenMax.to("#controlcabinetopen",0.5,{autoAlpha:1,delay:2.5});
			TweenMax.to('.ccdoor',0.5,{"left":"-171px","top":"53px",delay:2.5});
			TweenMax.to('#objects_controlcabinet',0.5,{autoAlpha:1,delay:3.0});	
			//-279, +23
		break;
		
		default:
		break;	
	}
	TweenMax.to('#subhotspots',0.5,{autoAlpha:1,delay:3.5});
	TweenMax.to('#bottommenu',0.5,{"top":"505px",delay:2.2});
	TweenMax.to('#navHUD',0.5,{autoAlpha:1,delay:2});
	
	
}

function initScreen(){
	"use strict";
	TweenMax.to('#robotics',0.7,{autoAlpha:1,delay:0});	
	TweenMax.to('#storagetank',0.7,{autoAlpha:1,delay:0.3});
	TweenMax.to('#conveyor',0.7,{autoAlpha:1,delay:0.5});	
	TweenMax.to('#controlcabinet',0.7,{autoAlpha:1,delay:0.7});
	TweenMax.to('#splashscreen',0.7,{autoAlpha:1,delay:1.5});
}



function showStartScreen(){
	"use strict";
	TweenMax.to('#splashscreen',0.3,{autoAlpha:0});
	TweenMax.to('#btnInfo',0.3,{autoAlpha:1,delay:2});
	//TweenMax.to('#robotics',0.5,{"top":"87px","left":"373px",delay:1});
	TweenMax.to('#pageHeadline',0.5,{autoAlpha:1,delay:1.5});
	TweenMax.to('#hsRobotics',0.5,{autoAlpha:1,delay:2.0});
	TweenMax.to('#hsConveyor',0.5,{autoAlpha:1,delay:2.0});
	TweenMax.to('#hsControlCabinet',0.5,{autoAlpha:1,delay:2.0});
	TweenMax.to('#hsStorageTank',0.5,{autoAlpha:1,delay:2.0});
	
}



function showHideSidebar(){
	"use strict";
	
	if ($('#sidebarRight').css("right") === "0px"){
		$('#btnInfo').css("background-position-y","top");
		TweenMax.to('#sidebarRight',0.8,{"right":"-500px"});
	}
	else{
		$('#btnInfo').css("background-position-y","bottom");

		TweenMax.to('#sidebarRight',0.8,{"right":"0px"});
	}

	
}