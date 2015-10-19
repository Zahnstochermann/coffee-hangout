var name1;
var name2;
var name_array = [
  "Christian",
  "Robert",
  "Elena",
  "Rene",
  "Aurel",
  "Jochen",
  "Marlene",
  "Svenja",
  "Sebastian",
  "Timo",
  "Jan",
  "Axel",
  "Tobi",
  "Christoph"];

var generate_names = function(){
  name1 = name_array[Math.floor(Math.random()*name_array.length)];
  name2 = name_array[Math.floor(Math.random()*name_array.length)];

  if(name1 != name2){
    document.getElementById("name1").innerHTML= name1 + ' und ';
    document.getElementById("name2").innerHTML= name2;
    document.getElementById("cover").innerHTML= 'Es treffen sich bei der Kaffeemaschine:';
  }
  else{
    generate_names();
  }
}