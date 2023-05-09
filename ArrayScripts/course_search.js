// Exercise 1 page 36
"use strict";

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

// When does the PROG200 course start?
function getCourseStart(_courses, _courseID){
    for(let i = 0; i < _courses.length; i++){
        if(_courses[i].CourseId == _courseID){
            console.log(_courses[i].StartDate);
        }
    }
}
getCourseStart(courses, "PROG200");

// What is the title of the PROJ500 course?
function getCourseTitle(_courses, _courseID){
    for(let i = 0; i < _courses.length; i++){
        if(_courses[i].CourseId == _courseID){
            console.log(_courses[i].Title);
        }
    }
}
getCourseTitle(courses, "PROJ500");

// What are the titles of the courses that cost $50 or less?
function getCourse50(_courses){
    for(let i = 0; i < _courses.length; i++){
        if(Number(_courses[i].Fee) <= 50){
            console.log(_courses[i].Title);
        }
    }
}
getCourse50(courses);

// What classes meet in "Classroom 1"?
function getCourseByLocation(_courses, _location){
    for(let i = 0; i < _courses.length; i++){
        if(_courses[i].Location == _location){
            console.log(_courses[i].Title);
        }
    }
}
getCourseByLocation(courses, "Classroom 1");
