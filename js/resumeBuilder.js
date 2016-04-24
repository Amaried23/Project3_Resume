var bio = {
  "name": "Alexis",
  "role": "front end web developer",
  "contacts": {
  "mobile": "732-222-2222",
  "email": "alexisdelucia23@gmail.com",
  "github": "amaried23",
  "location": "Long Branch, NJ"
},
  "welcomeMessage": "Welcome to my resume",
  "skills": [
   "javascript", "programming", "health insurance coordinator"
],
  "biopic": "images/alexis.jpg"
};

var education = {

"schools" : [
  {
    "name" : "Brookdale Community College",
    "location" : "Lincroft, NJ",
    "degree" : "Associates Degree",
    "majors": [
         "Computer Science", "Software Engineering"
  ],
    "dates" : "2015-2016",
    "url": "http://www.brookdalecc.edu/",
  }],
  
"onlineCourses" : {
    "title" : "NanoDegree Front End Web Developer",
    "school" : "Udacity",
    "dates" : "January 2016-September 2016",
    "url" : "https://www.udacity.com",
  }
};

var work = {
  "jobs": [
   {
    "employer": "Seaview Orthopaedics",
    "title": "Surgical Authorization Coordinator",
    "location": "Ocean Township, NJ",
    "dates": "November 2015- Current",
    "description": "Authorize surgical procedures through patients auto insurance for patients involved in motor vehicle accidents",
   },
   {
    "employer": "Lincare/Sleep Circle",
    "title": "DME Authorization Coordinator",
    "location": "Eatontown, NJ",
    "dates": "October 2012-November 2015",
    "description": "Authorize BiPaP, CPaP, and Oxygen equipment for patients with sleep apnea",
    
   }
  ]
};


var projects = {
  "projects" : [
   {
    "title" : "P.1 Portfolio Site",
    "dates" : "2/25/16",
    "description" : "Using bootstrap for page layout, editing css, and adding a column based layout to form a Portfolio",
    "images" : [
    "images/projectone.png",
    ],
   }
  ]
};

bio.display = function() {

bio.name = "Alexis DeLucia";
var formattedName = HTMLheaderName.replace("%data%", bio.name);

bio.role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  
$("#header").prepend(formattedName+ " "+formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation)
$("#footerContacts").append(formattedLocation);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);

if(bio.skills.length>0) {
$('#header').append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
$('#header').append(formattedSkill);
 
var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
$('#header').append(formattedSkill);
 
var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
$('#header').append(formattedSkill);
  
var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
 }
}
bio.display();


projects.display = function() {
  for (project in projects.projects) {
$("#projects").append(HTMLprojectStart);

var formattedProjectTitle = HTMLprojectTitle.replace("%data%" , projects.projects[project].title);
$(".project-entry:last").append(formattedProjectTitle);

var formattedProjectDate = HTMLprojectDates.replace("%data%" , projects.projects[project].dates);
$(".project-entry:last").append(formattedProjectDate);

var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
$(".project-entry:last").append(formattedProjectDescription);

var formattedProjectImage = HTMLprojectImage.replace("%data%" , projects.projects[project].images);
$(".project-entry:last").append(formattedProjectImage);
    
   }
 }

projects.display();



work.display = function() {
for (job in work.jobs)  {
$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);

var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
$(".work-entry:last").append(formattedWorkLocation);
  }
}
work.display();


education.display = function () {
for (var school in education.schools) {
$("#education").append(HTMLschoolStart); 
 var formattedSchoolName =  HTMLschoolName.replace("%data%",education.schools[school].name);
 $(".education-entry:last").append(formattedSchoolName);

 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
 $(".education-entry:last").append(formattedSchoolLocation);

 var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
 var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
 $(".education-entry:last").append(formattedDegree+""+formattedSchoolDates);

 var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[0].majors);
 $(".education-entry:last").append(formattedMajor);

 var formattedschoolUrl = HTMLschoolUrl.replace("%data%",education.schools[school].url);
 $(".education-entry:last").append(formattedschoolUrl);

$("#education").append(HTMLonlineClasses);

var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses.school);
$(".regular-heading:last").append(formattedonlineTitle+ " "+formattedonlineSchool);

var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses.dates);
$(".regular-heading:last").append(formattedonlineDates);
var formattedonlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses.url);
$(".regular-heading:last").append(formattedonlineUrl);
  }
}  

education.display();


function inName() {
    var splitName = name.trim().split(" ");
    var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    var lastName = splitName[1].toUpperCase();
    return (firstName + " " + lastName);  
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
