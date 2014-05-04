// JavaScript / jQuery Document
// name: 'Panels transition v0.1'
// author: Michalski Grzegorz
// more: https://github.com/michalskigrzegorz
// more: pl.linkedin.com/in/grzegorzmichalski/en

$(document).ready(function(){

/* ---------- */

	// Click HOME link
	$(".home").click(function() {

		// checking actual Position for all panels and write it to variables
		var bodyWidth = $('#container').width();
		var widthPanelLeft = bodyWidth * 0.66;
		var widthPanelLeftFix = widthPanelLeft.toFixed(0);
		var widthPanelRight = bodyWidth * 0.34;
		var widthPanelRightFix = widthPanelRight.toFixed(0);
		var startPosLeft = -widthPanelLeft;
		var startPosLeftFix = startPosLeft.toFixed(0);
		var startPosRight = bodyWidth;
		var startPosRightFix = bodyWidth.toFixed(0);
	
		var homeActualPosLeft = $("#homeLeft").css('left');
		var homeActualPosLeftFix = parseFloat(homeActualPosLeft).toFixed(0); 
		var homeActualPosRight = $("#homeRight").css('left');
		var homeActualPosRightFix = parseFloat(homeActualPosRight).toFixed(0);
		
		var portfolioActualPosLeft = $("#portfolioLeft").css('left');
		var portfolioActualPosLeftFix = parseFloat(portfolioActualPosLeft).toFixed(0); 
		var portfolioActualPosRight = $("#portfolioRight").css('left');
		var portfolioActualPosRightFix = parseFloat(portfolioActualPosRight).toFixed(0); 		
		
		var aboutActualPosLeft = $("#aboutLeft").css('left');
		var aboutActualPosLeftFix = parseFloat(aboutActualPosLeft).toFixed(0); 		
		var aboutActualPosRight = $("#aboutRight").css('left');
		var aboutActualPosRightFix = parseFloat(aboutActualPosRight).toFixed(0); 			
		
		var contactActualPosLeft = $("#contactLeft").css('left');
		var contactActualPosLeftFix = parseFloat(contactActualPosLeft).toFixed(0);
		var contactActualPosRight = $("#contactRight").css('left');
		var contactActualPosRightFix = parseFloat(contactActualPosRight).toFixed(0);

// objects

	// home object
	var	homePanels = {
		homeReset: function () {
			$("#homeLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#homeRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		homeSetPos: function () {
			$("#homeLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#homeRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// portfolio object
	var	portfolioPanels = {
		portfolioReset: function () {
			$("#portfolioLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#portfolioRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		portfolioSetPos: function () {
			$("#portfolioLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#portfolioRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// about object
	var	aboutPanels = {
		aboutReset: function () {
			$("#aboutLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#aboutRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		aboutSetPos: function () {
			$("#aboutLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#aboutRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// contact object
	var	contactPanels = {
		contactReset: function () {
			$("#contactLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});						
	
			$("#contactRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});			
		},
		contactSetPos: function () {
			$("#contactLeft")
				.delay(200)
				.animate({"left": 0}, 400)
				.css({"width": widthPanelLeftFix});			

			$("#contactRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

		// this if statement check postion for portfolioLeft and portfolioRight panels, and if this positions === startPos(Left/Right), statement allow to 		other changes
		// if it's not a true statement don't allow to order this action again
		if ( (homeActualPosLeftFix === startPosLeftFix) && (homeActualPosRightFix === startPosRightFix) ) {
	
		{
			// check actual postion from others panels, and if it's ok, make action (show portfolioPanels)
			if 
				( (portfolioActualPosLeftFix === startPosLeftFix ) && 
					(portfolioActualPosRightFix === startPosRightFix) && 
					(contactActualPosLeftFix === startPosLeftFix) && 
					(contactActualPosRightFix === startPosRightFix) &&
					(aboutActualPosLeftFix === startPosLeftFix) && 
					(aboutActualPosRightFix === startPosRightFix) ) {
						homePanels.homeSetPos();
			} 
			// if panels positions isn't 'ok' change it to startPos(Left / Right) and then make action (show portfolioPanels)
			else {
				if 
				( (portfolioActualPosLeftFix !== startPosLeftFix ) && 
					(portfolioActualPosRightFix !== startPosRightFix) ) {
						portfolioPanels.portfolioReset();
				} if 
						(	(aboutActualPosLeftFix !== startPosLeftFix) && 
						(aboutActualPosRightFix !== startPosRightFix) ) {
							aboutPanels.aboutReset();
					} if 
							( (contactActualPosLeftFix !== startPosLeftFix) && 
							(contactActualPosRightFix !== startPosRightFix) )	{
								contactPanels.contactReset();	
						}
				homePanels.homeSetPos();

			}
		}
		
		}

	});
	
	// Click PORTFOLIO link
	$(".portfolio").click(function() {
		
		// checking actual Position for all panels and write it to variables
		var bodyWidth = $('#container').width();
		var widthPanelLeft = bodyWidth * 0.66;
		var widthPanelLeftFix = widthPanelLeft.toFixed(0);
		var widthPanelRight = bodyWidth * 0.34;
		var widthPanelRightFix = widthPanelRight.toFixed(0);
		var startPosLeft = -widthPanelLeft;
		var startPosLeftFix = startPosLeft.toFixed(0);
		var startPosRight = bodyWidth;
		var startPosRightFix = bodyWidth.toFixed(0);
	
		var homeActualPosLeft = $("#homeLeft").css('left');
		var homeActualPosLeftFix = parseFloat(homeActualPosLeft).toFixed(0); 
		var homeActualPosRight = $("#homeRight").css('left');
		var homeActualPosRightFix = parseFloat(homeActualPosRight).toFixed(0);
		
		var portfolioActualPosLeft = $("#portfolioLeft").css('left');
		var portfolioActualPosLeftFix = parseFloat(portfolioActualPosLeft).toFixed(0); 
		var portfolioActualPosRight = $("#portfolioRight").css('left');
		var portfolioActualPosRightFix = parseFloat(portfolioActualPosRight).toFixed(0); 		
		
		var aboutActualPosLeft = $("#aboutLeft").css('left');
		var aboutActualPosLeftFix = parseFloat(aboutActualPosLeft).toFixed(0); 		
		var aboutActualPosRight = $("#aboutRight").css('left');
		var aboutActualPosRightFix = parseFloat(aboutActualPosRight).toFixed(0); 			
		
		var contactActualPosLeft = $("#contactLeft").css('left');
		var contactActualPosLeftFix = parseFloat(contactActualPosLeft).toFixed(0);
		var contactActualPosRight = $("#contactRight").css('left');
		var contactActualPosRightFix = parseFloat(contactActualPosRight).toFixed(0);

// objects

	// home object
	var	homePanels = {
		homeReset: function () {
			$("#homeLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#homeRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		homeSetPos: function () {
			$("#homeLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#homeRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// portfolio object
	var	portfolioPanels = {
		portfolioReset: function () {
			$("#portfolioLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#portfolioRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		portfolioSetPos: function () {
			$("#portfolioLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#portfolioRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// about object
	var	aboutPanels = {
		aboutReset: function () {
			$("#aboutLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#aboutRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		aboutSetPos: function () {
			$("#aboutLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#aboutRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// contact object
	var	contactPanels = {
		contactReset: function () {
			$("#contactLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});						
	
			$("#contactRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});			
		},
		contactSetPos: function () {
			$("#contactLeft")
				.delay(200)
				.animate({"left": 0}, 400)
				.css({"width": widthPanelLeftFix});			

			$("#contactRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

		// this if statement check postion for portfolioLeft and portfolioRight panels, and if this positions === startPos(Left/Right), statement allow to 		other changes
		// if it's not a true statement don't allow to order this action again
		if ( (portfolioActualPosLeftFix === startPosLeftFix) && (portfolioActualPosRightFix === startPosRightFix) ) {
	
		{
			// check actual postion from others panels, and if it's ok, make action (show portfolioPanels)
			if 
				( (homeActualPosLeftFix === startPosLeftFix ) && 
					(homeActualPosRightFix === startPosRightFix) && 
					(contactActualPosLeftFix === startPosLeftFix) && 
					(contactActualPosRightFix === startPosRightFix) &&
					(aboutActualPosLeftFix === startPosLeftFix) && 
					(aboutActualPosRightFix === startPosRightFix) ) {
						portfolioPanels.portfolioSetPos();
			} 
			// if panels positions isn't 'ok' change it to startPos(Left / Right) and then make action (show portfolioPanels)
			else {
				if 
				( (homeActualPosLeftFix !== startPosLeftFix ) && 
					(homeActualPosRightFix !== startPosRightFix) ) {
						homePanels.homeReset();
				} if 
						(	(aboutActualPosLeftFix !== startPosLeftFix) && 
						(aboutActualPosRightFix !== startPosRightFix) ) {
							aboutPanels.aboutReset();
					} if 
							( (contactActualPosLeftFix !== startPosLeftFix) && 
							(contactActualPosRightFix !== startPosRightFix) )	{
								contactPanels.contactReset();	
						}
				portfolioPanels.portfolioSetPos();

			}
		}
		
		}
		
	});

	// Click ABOUT link
	$(".about").click(function() {
		var bodyWidth = $('#container').width();
//	var bodyWidth = $(window).width();
//	var bodyWidth = $('body').width();
		var widthPanelLeft = bodyWidth * 0.66;
		var widthPanelLeftFix = widthPanelLeft.toFixed(0);
		var widthPanelRight = bodyWidth * 0.34;
		var widthPanelRightFix = widthPanelRight.toFixed(0);
		var startPosLeft = -widthPanelLeft;
		var startPosLeftFix = startPosLeft.toFixed(0);
		var startPosRight = bodyWidth;
		var startPosRightFix = bodyWidth.toFixed(0);
	
		var homeActualPosLeft = $("#homeLeft").css('left');
		var homeActualPosLeftFix = parseFloat(homeActualPosLeft).toFixed(0); 
		var homeActualPosRight = $("#homeRight").css('left');
		var homeActualPosRightFix = parseFloat(homeActualPosRight).toFixed(0);
		
		var portfolioActualPosLeft = $("#portfolioLeft").css('left');
		var portfolioActualPosLeftFix = parseFloat(portfolioActualPosLeft).toFixed(0); 
		var portfolioActualPosRight = $("#portfolioRight").css('left');
		var portfolioActualPosRightFix = parseFloat(portfolioActualPosRight).toFixed(0); 		
		
		var aboutActualPosLeft = $("#aboutLeft").css('left');
		var aboutActualPosLeftFix = parseFloat(aboutActualPosLeft).toFixed(0); 		
		var aboutActualPosRight = $("#aboutRight").css('left');
		var aboutActualPosRightFix = parseFloat(aboutActualPosRight).toFixed(0); 			
		
		var contactActualPosLeft = $("#contactLeft").css('left');
		var contactActualPosLeftFix = parseFloat(contactActualPosLeft).toFixed(0);
		var contactActualPosRight = $("#contactRight").css('left');
		var contactActualPosRightFix = parseFloat(contactActualPosRight).toFixed(0);

	// home object
	var	homePanels = {
		homeReset: function () {
			$("#homeLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#homeRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		homeSetPos: function () {
			$("#homeLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#homeRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// portfolio object
	var	portfolioPanels = {
		portfolioReset: function () {
			$("#portfolioLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#portfolioRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		portfolioSetPos: function () {
			$("#portfolioLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#portfolioRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// about object
	var	aboutPanels = {
		aboutReset: function () {
			$("#aboutLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#aboutRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		aboutSetPos: function () {
			$("#aboutLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#aboutRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// contact object
	var	contactPanels = {
		contactReset: function () {
			$("#contactLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});						
	
			$("#contactRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});			
		},
		contactSetPos: function () {
			$("#contactLeft")
				.delay(200)
				.animate({"left": 0}, 400)
				.css({"width": widthPanelLeftFix});			

			$("#contactRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

		if ( (aboutActualPosLeftFix === startPosLeftFix) && (aboutActualPosRightFix === startPosRightFix) ) {
	
		{

			if 
				( (homeActualPosLeftFix === startPosLeftFix ) && 
					(homeActualPosRightFix === startPosRightFix) && 
					(portfolioActualPosLeftFix === startPosLeftFix) && 
					(portfolioActualPosRightFix === startPosRightFix) &&
					(contactActualPosLeftFix === startPosLeftFix) && 
					(contactActualPosRightFix === startPosRightFix) ) {
						aboutPanels.aboutSetPos();
		//			alert('check statement TRUE');
				
			} 

			else {
				if 
				( (homeActualPosLeftFix !== startPosLeftFix ) && 
					(homeActualPosRightFix !== startPosRightFix) ) {
						homePanels.homeReset();
				} if 
						(	(contactActualPosLeftFix !== startPosLeftFix) &&
						(contactActualPosRightFix !== startPosRightFix) ) {
							contactPanels.contactReset();
					} if 
							( (portfolioActualPosLeftFix !== startPosLeftFix) && 
							(portfolioActualPosRightFix !== startPosRightFix) )	{
								portfolioPanels.portfolioReset();	
						}
				aboutPanels.aboutSetPos();					

			}
		}
		}
	});
	
/* ---------- */	

	// Click CONTACT link
	$(".contact").click(function() {
		var bodyWidth = $('#container').width();
// 	var bodyWidth = $(window).width();
//	var bodyWidth = $(body).width();
		var widthPanelLeft = bodyWidth * 0.66;
		var widthPanelLeftFix = widthPanelLeft.toFixed(0);
		var widthPanelRight = bodyWidth * 0.34;
		var widthPanelRightFix = widthPanelRight.toFixed(0);
		var startPosLeft = -widthPanelLeft;
		var startPosLeftFix = startPosLeft.toFixed(0);
		var startPosRight = bodyWidth;
		var startPosRightFix = bodyWidth.toFixed(0);
	
		var homeActualPosLeft = $("#homeLeft").css('left');
		var homeActualPosLeftFix = parseFloat(homeActualPosLeft).toFixed(0); 
		var homeActualPosRight = $("#homeRight").css('left');
		var homeActualPosRightFix = parseFloat(homeActualPosRight).toFixed(0);
		
		var portfolioActualPosLeft = $("#portfolioLeft").css('left');
		var portfolioActualPosLeftFix = parseFloat(portfolioActualPosLeft).toFixed(0); 
		var portfolioActualPosRight = $("#portfolioRight").css('left');
		var portfolioActualPosRightFix = parseFloat(portfolioActualPosRight).toFixed(0); 		
		
		var aboutActualPosLeft = $("#aboutLeft").css('left');
		var aboutActualPosLeftFix = parseFloat(aboutActualPosLeft).toFixed(0); 		
		var aboutActualPosRight = $("#aboutRight").css('left');
		var aboutActualPosRightFix = parseFloat(aboutActualPosRight).toFixed(0); 			
		
		var contactActualPosLeft = $("#contactLeft").css('left');
		var contactActualPosLeftFix = parseFloat(contactActualPosLeft).toFixed(0);
		var contactActualPosRight = $("#contactRight").css('left');
		var contactActualPosRightFix = parseFloat(contactActualPosRight).toFixed(0);

	// home object
	var	homePanels = {
		homeReset: function () {
			$("#homeLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#homeRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		homeSetPos: function () {
			$("#homeLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#homeRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// portfolio object
	var	portfolioPanels = {
		portfolioReset: function () {
			$("#portfolioLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#portfolioRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		portfolioSetPos: function () {
			$("#portfolioLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#portfolioRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// about object
	var	aboutPanels = {
		aboutReset: function () {
			$("#aboutLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});		
	
			$("#aboutRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});
		},
		aboutSetPos: function () {
			$("#aboutLeft")
				.delay(200)
				.animate({"left": 0}, 400)			
				.css({"width": widthPanelLeftFix});	

			$("#aboutRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}

	// contact object
	var	contactPanels = {
		contactReset: function () {
			$("#contactLeft")
				.delay(000)
				.animate({"left": startPosLeftFix}, 200)
				.css({"width": widthPanelLeftFix});						
	
			$("#contactRight")
				.delay(000)
				.animate({"left": startPosRightFix}, 200)
				.css({"width": widthPanelRightFix});			
		},
		contactSetPos: function () {
			$("#contactLeft")
				.delay(200)
				.animate({"left": 0}, 400)
				.css({"width": widthPanelLeftFix});			

			$("#contactRight")
				.delay(200)
				.animate({"left": widthPanelLeftFix}, 300)
				.css({"width": widthPanelRightFix});			
		}		
	}


		if ( (contactActualPosLeftFix === startPosLeftFix) && (contactActualPosRightFix === startPosRightFix) ) {
	
		{

			if 
				( (homeActualPosLeftFix === startPosLeftFix ) && 
					(homeActualPosRightFix === startPosRightFix) && 
					(portfolioActualPosLeftFix === startPosLeftFix) && 
					(portfolioActualPosRightFix === startPosRightFix) &&
					(aboutActualPosLeftFix === startPosLeftFix) && 
					(aboutActualPosRightFix === startPosRightFix) ) {
						contactPanels.contactSetPos();
//						alert('check statement TRUE');
				
			} 

			else {
				if 
				( (homeActualPosLeftFix !== startPosLeftFix ) && 
					(homeActualPosRightFix !== startPosRightFix) ) {
						homePanels.homeReset();
				} if 
						(	(aboutActualPosLeftFix !== startPosLeftFix) && 
						(aboutActualPosRightFix !== startPosRightFix) ) {
							aboutPanels.aboutReset();
					} if 
							( (portfolioActualPosLeftFix !== startPosLeftFix) && 
							(portfolioActualPosRightFix !== startPosRightFix) )	{
								portfolioPanels.portfolioReset();	
						}
				contactPanels.contactSetPos();

			}
		}
		
		}

	});
		
/* ---------- */	

});