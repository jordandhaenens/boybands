var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var currentBand = "";
var currentVeggie = "";
var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");
bands.push("Sam Smith", "Ed Sheeran", "Elton John");

for (var i = 0; i < bands.length; i++) {
	currentBand = "<li>" + bands[i] + "</li>";
	bandElement.innerHTML += currentBand;
}
for (var i = 0; i < vegetables.length; i++) {
		currentVeggie = "<li>" + vegetables[i] + "</li>";
		veggieElement.innerHTML += currentVeggie;
	}