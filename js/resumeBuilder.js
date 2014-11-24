/*var name = "Rennie"
var formattedName = HTMLheaderName.replace("%data%", name);

var role= "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);*/

/*var bio = {

	"name": "Rennie Bevineau",
	"role": "Web Developer",
	"info": "Email: rsbevineau@gmail.com",
	"pictureUrl":"images/fry.jpg",
	"welcomeMessage":"Welcome to my Resume page",
	"skills": "HTML,CSS and Javascript"
};

$("#main").append(bio.name);

var work = {};
work.position = "teacher";
work.employer = "Ministry of education";
work.years = "2 years";
work.city = "Madrid";

var education = {};
education["name"] = "College of Dupage";
education["Years"] = "4";
education["city"] = "Dupage";

$("#main").append(work["position"]);

$("#main").append(education.name);
*/

var work = {
	"jobs": [{"employer" : "Ministry of education",
			  "title" : "Assistent teacher",
			  "datesWorked" : "October 2014 - June 30th 2015",
			  "location" : "Madrid"},
			  {
			  "employer" : "Ministry of education",
			  "title" : "Assistent teacher",
			  "datesWorked" : "September 15th 2013-June 24th 2014",
			  "location" : "Segovia"}
			  ]

};


var projects = {
	"projects":[{
		"title": "portfolio project",
		"datesWorked": "October 2014",
		"description" : "Uses HTML, CSS and Bootstrap to create a website that showcases my work",
		"images":["..nanodegree\portfolio1\img\drag-and-drop.jpg","..nanodegree\portfolio1\img\flashcards.jpg", "..nanodegree\portfolio1\img\science.jpg"]
	},

	{
		"name":"Interactive Resume",
		"description":"Creates html and css using javascript to display my Resume. Ideal for material that is constantly being updated"
	}


	]



};



var bio = {

	"name": "Rennie Bevineau",
	"role": "Web Developer",
	"welcomeMessage":"Welcome to my Resume page",
	"contacts": {"mobileNumber":"684128822","Email": "rsbevineau@gmail.com", "githubUsername":"renniesb","location":"Madrid"},
	"pictureUrl":"images/fry.jpg",	
	"skills": ["HTML","CSS", "Javascript"]
};

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



if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}