// Exercise 3 page 37
"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

// Who is the Academy Member whose ID is 187?
function searchMemberById(_members, _ID){
    for(let i = 0; i < _members.length; i++){
        if(_members[i].memID == _ID){
            return _members[i].name;
        }
    }
}
// console.log(searchMemberById(academyMembers, 187));

// Who has have been in at least 3 films?
function searchMemberByNumFilms(_members, _numFilms){
    let matching = [];
    for(let i = 0; i < _members.length; i++){
        if(_members[i].films.length >= _numFilms){
            matching.push(_members[i].name);
        }
    }
    return matching;
}
// console.log(searchMemberByNumFilms(academyMembers, 3));

// Who has a name that starts with "Bob"?
function searchMemberByName(_members, _name){
    let matching = [];
    for(let i = 0; i < _members.length; i++){
        if(_members[i].name.indexOf(_name) > -1){
            matching.push(_members[i].name);
        }
    }
    return matching;
}
// console.log(searchMemberByName(academyMembers, "Bob"));

// HARDER: Which Academy Members have been in a film
// that starts with "A"
function searchMemberByMovie(_members, _movieName){
    let matching = [];
    for(let i = 0; i < _members.length; i++){
        let filmList = _members[i].films;
        for(let index = 0; index < filmList.length; index++){
            if(filmList[index].indexOf[_movieName] > -1){
                console.log("true");
            }else{
                console.log("false");
            }
        }
    }

}
// console.log(searchMemberByMovie(academyMembers, "A"));

searchMemberByMovie(academyMembers, "A");