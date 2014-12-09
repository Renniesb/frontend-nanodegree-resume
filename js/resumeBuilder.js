
var bio = {

	"name": "Rennie Bevineau",
	"role": "Web Developer",
	"message":"Welcome To My Resume Page",
	"contacts": {"mobile":"684128822","email": "rsbevineau@gmail.com", "github":"renniesb","location":"Madrid"},
	"pictureUrl":"images/profile.jpg",	
	"skills": ["HTML","CSS", "Javascript"]
};



bio.display = function(){



var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.message);
$("#header").append(formattedWelcomeMessage);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl)
$("#header").append(formattedBioPic);




if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
};

}



var work = {
	"jobs": [{"employer" : "Ministry of education",
			  "title" : "Assistant teacher",
			  "datesWorked" : "October 2014 - July 2015",
			  "location" : "Madrid Spain",
			  "description":"Prepared students for examinations with conversation and exercises"},

			  {"employer" : "Ministry of education",
			  "title" : "Assistant teacher",
			  "datesWorked" : "September 15 2013 - June 24th 2014",
			  "location" : "Segovia Spain",
			  "description":"Aided with exercises and practiced english with students"},

			  {
			  "employer" : "Baylor University",
			  "title" : "Library Assistent",
			  "datesWorked" : "September 2007-June 2009",
			  "location" : "Waco Texas",
			  "description":"Found and returned loaned books, packaged loaned books"}
			  ]

};

work.display = function(){

	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

	var formattedJobTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

}

};



var projects = {
	"projects":[{
		"title": "Portfolio Project",
		"datesWorked": "October 2014",
		"description" : "Uses HTML, CSS and Bootstrap to create a website that showcases my work",
		"images":["images/frontEndDeveloper.jpg"]
	},
	{
		"title": "Science Blog",
		"datesWorked": "December 2013 - June 2014",
		"description" : "This is a blog that uses videos, games and other resources to teach science topics to children.",
		"images":["images/scientist.png"]
	},

	{
		"title": "Drag And Drop Game",
		"datesWorked": "May 2014",
		"description" : "This app is designed to test the difference between manufactured goods and raw materials through a drag and drop game.The user must place the different objects in their correct category.",
		"images":["images/drag-and-drop.jpg"]
	},

	{
		"title": "Flashcard App",
		"datesWorked": "April 2014",
		"description" : "This is an app designed to learn basic spanish words, first you see the word in English and when you click the forward arrow you can see the equivalent word in spanish.",
		"images":["images/flashcards.jpg"]
	}




	]



};

projects.display = function(){
	for(project in projects.projects){

		$("#projects").append(HTMLprojectStart);

		formattedProjectTitle= HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);

		formattedProjectDates= HTMLprojectDates.replace("%data%",projects.projects[project].datesWorked);
			$(".project-entry:last").append(formattedProjectDates);
		
		formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if(projects.projects[project].images.length>0){

				for (image in projects.projects[project].images)
				formattedProjectImage= HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjectImage);

			}


		}


}




var education = {

"schools" : [

{

"name": "Baylor",
"location":"Dupage",
"degree":"Bachelor of Science",
"majors": ["Science", "Spanish"],
"datesAttended": "2008-2009",
"schoolWebsite": "http://www.baylor.edu/"
},


{

"name":"College of Dupage",
"location":"Dupage, Illinois",
"degree":"Associates Degree",
"majors": ["Compsi"],
"datesAttended":"2006-2012",
"schoolWebsite":"http://www.cod.edu/"

}

],

"onlineCourses":[{
	"title":"Intro to HTML and CSS",
	"school":"Udacity",
	"dates":"October 2014",
	 "url":"https://www.udacity.com/course/ud304"

},

{
	"title":"How to use Git and Github",
	"school":"Udacity",
	"dates":"November 2014",
	 "url":"https://www.udacity.com/course/ud775"

}

]
};



$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);});


function inName(name){

name = name.trim().split(" ");

name[1]= name[1].toUpperCase();
name[0]= name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();

return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton)














bio.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);