// funtion with no parameters
var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

// favorite cookie
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie()); //oops!
console.log(favoriteCookie("oatmeal cookie"));

// function with two parameters
var introduce = function (name, occupation) {
  return `My name is ${name} and I am ${occupation}.`;
};
console.log(introduce("Olivia", "full stack developer"));
console.log(introduce("Mommy", "full stack developer"));

// funtion called hydrationFeedback
var hydrationFeedback = funtion () {
  var numGlasses = number (
    prompt ( " How many glasses of water did you have today?" )
  ),
  if (numGlasses >=8) {
    console.log("Amazing! Your doing great."); 
  } else if (numGlasses < 8) { 
    console.log("Let's try and drink a little more. ");
  }
};
hydrationFeedback ()
