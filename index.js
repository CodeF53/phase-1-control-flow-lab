/*
      1) gives customers a free sample if the ride is less than or equal to 400 feet
      2) charges 20 dollars for a distance between 400 and 2000 feet
      3) charges 30 dollars for a distance over 2000 feet
      4) does not allow rides over 2500 feet
*/
function scuberGreetingForFeet(feet){
  if (feet<=400) {
    return "This one is on me!"
  } else if (feet<=2000) {
    return "That will be twenty bucks."
  } else if (feet<=2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}


/*
5) returns "Ok, sounds good." when the city is NYC
6) should return "No go." if the destination city is not NYC
*/
function ternaryCheckCity(destination){
  if (destination == "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}


/*
7) should return "Thank you so much." if the tip is generous
8) should return "Thank you." if the tip is not as generous
9) should return "Bye." if anything else
*/
function switchOnCharmFromTip(tip){
  if (tip== "generous") {
    return "Thank you so much."
  } else if(tip == "not as generous") {
    return "Thank you."
  } else {
    return "Bye."
  }
}