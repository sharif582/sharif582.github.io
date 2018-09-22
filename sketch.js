var url = "https://app.spire.io/api/v2/streaks?access_token=85544b69aa3c0893e31503fb915d0b0f62d6247a6a227e5899eb601905e9c8d7";
var data = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
function setup() {
  noCanvas();
  loadJSON(url, data, 'jsonp');
print(data);
  
}


  
