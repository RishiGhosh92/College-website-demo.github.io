$(document).ready(function () {
                
				
				//Detect hover over particular item
				
				$(document).mousemove(function(e){
				if(e.pageY>460 || e.pageY<150)
				{
					$('li #top').css("background-color","#002966");
					$('li #top').css("color","white");
					$('.submenus').fadeOut(400);
				}
   }); 
                $('.nav ul li').hover(
                    function () {
                        //show the submenus
								
								$('.topmenu a').css("background-color","#002966");
								$('.topmenu a').css("color","white");
								
								$('#'+this.id+' #top').css("color","#002966");
								$('#'+this.id+' #top').css("background-color","white");
								$('#'+this.id+' #top').css("opacity","0");
								$('#'+this.id+' #top').animate({opacity:1},"slow");
								//$('#'+this.id+' #top').fadeIn(1000);
							
							
							
						
						if(this.id=='about')
						$('.submenus').load("menu/about.html").fadeIn(500);
						else if(this.id=='admissions')
						$('.submenus').stop().load("menu/admission.txt").fadeIn(500);
						else if(this.id=='academics')
						$('.submenus').stop().load("menu/academics.txt").fadeIn(500);
						else if(this.id=='people')
						$('.submenus').stop().load("menu/people.txt").fadeIn(500);
						else if(this.id=='students')
						$('.submenus').stop().load("menu/students.txt").fadeIn(500);
						else if(this.id=='links')
						$('.submenus').stop().load("menu/links.txt").fadeIn(500);
						else if(this.id=='admin')
						$('.submenus').stop().load("menu/admin.txt").fadeIn(500);
						},function (e) {
                        
						
                    });
						
						
						
                    
				
				
				
				});
				
				
