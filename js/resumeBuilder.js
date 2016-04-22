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
  "bioPic": "images/alexis.jpg"
}


var work = {
  "jobs": [
   {
    "employer": "Seaview Orthopaedics",
    "title": "Surgical Authorization Coordinator",
    "dates": "November 2015- Current",
    "description": "Authorize surgical procedures through patients auto insurance for patients involved in motor vehicle accidents",
    "location": "Ocean Township, NJ"
   },
   {
    "employer": "Lincare/Sleep Circle",
    "title": "DME Authorization Coordinator",
    "dates": "October 2012-November 2015",
    "description": "Authorize BiPaP, CPaP, and Oxygen equipment for patients with sleep apnea",
    "location": "Eatontown, NJ"
   }
  ]
};

var education = {

"schools" : [
  {
    "name" : "Brookdale Community College",
    "degree" : "Associates Degree",
    "location" : "Lincroft, NJ",
    "major" : "Computer Science",
    "dates" : "2015-2016"
  }],
  
"online" : {
    "title" : "NanoDegree Front End Web Developer",
    "name" : "Udacity",
    "dates" : "Jan. 15 2016 - present",
    "url" : "https://www.udacity.com",
  }
};

var projects = {
  "projects" : [
   {
    "title" : "P.1 Portfolio Site",
    "dates" : "2/25/16",
    "description" : "Using bootstrap for page layout, editing css, and adding a column based layout to form a Portfolio",
    "image" : "images/projectone.png",
       }
  ]
};

bio.display = function() {

var name = "Alexis DeLucia";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
  
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

var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBiopic);
  
}

bio.display();


bio.skills.display = function() {
if(bio.skills.length>0) {
$('#header').append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
$('#skills').append(formattedSkill);
 
var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
$('#skills').append(formattedSkill);
 
var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
$('#skills').append(formattedSkill);
  
var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
 }
}

bio.skills.display();


projects.display = function() {
  for (project in projects.projects) {
$("#projects").append(HTMLprojectStart);

var formattedProjectTitle = HTMLprojectTitle.replace("%data%" , projects.projects[project].title);
$(".project-entry:last").append(formattedProjectTitle);

var formattedProjectDate = HTMLprojectDates.replace("%data%" , projects.projects[project].dates);
$(".project-entry:last").append(formattedProjectDate);

var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
$(".project-entry:last").append(formattedProjectDescription);

var formattedProjectImage = HTMLprojectImage.replace("%data%" , projects.projects[project].image);
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


function displayEducation () {
for (var school in education.schools) {
$("#education").append(HTMLschoolStart); 
 var formattedSchoolName =  HTMLschoolName.replace("%data%",education.schools[school].name);
 $(".education-entry:last").append(formattedSchoolName);

 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
 $(".education-entry:last").append(formattedSchoolLocation);

 var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
 var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
 $(".education-entry:last").append(formattedDegree+""+formattedSchoolDates);

 var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
 $(".education-entry:last").append(formattedMajor);

$("#education").append(HTMLonlineClasses);

var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.online.title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.online.name);
$(".regular-heading:last").append(formattedonlineTitle+ " "+formattedonlineSchool);

var formattedonlineDates = HTMLonlineDates.replace("%data%",education.online.dates);
$(".regular-heading:last").append(formattedonlineDates);
var formattedonlineUrl = HTMLonlineURL.replace("%data%",education.online.url);
$(".regular-heading:last").append(formattedonlineUrl);
  }
}  

displayEducation();


function inName() {
    var splitName = name.trim().split(" ");
    var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    var lastName = splitName[1].toUpperCase();
    return (firstName + " " + lastName);  
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
