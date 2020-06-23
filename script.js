document.getElementById("OpenTheStand").addEventListener("click", start);
document.getElementById("opopopopopo").addEventListener("click", gum);
var random = Math.floor(Math.random() * 4);
var diy = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["raining-orange-juice", "snowing", "volcano-Eruption", "cloudy-and-foggy", "sunny", "raining", "Tornado"]
var max = 100
var Min = 20
var cost_lemon = 0.5
var daily_temp = []

function gum() {
 document.getElementById("5DayWeather").innerHTML = ""
  for (var i = 0; i < diy.length; i++) {
    var weatherToday = weather[Math.floor(Math.random() * weather.length)]
    var tempToday = Math.floor(Math.random() * (100 - 20) + 20);
    document.getElementById("5DayWeather").innerHTML += "<div id = '" + diy[i] + "' class='" + weatherToday + "'><b>Forecast for " + diy[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";

    daily_temp[i] = tempToday

  }
}

function start() {
  document.getElementById("result").innerHTML = ""
  var sold = 0
  var total = 0
  var remaining = 0

  var numGlasses = Number(document.getElementById("numGlasses").value)
  var price = Number(document.getElementById("glassPrice").value)
  for (var coop = 0; coop < diy.length; coop++) {
    sold = Math.floor(daily_temp[coop] / price)
    remaining = numGlasses - total
    if (sold > remaining) {

      sold = remaining

    }
    total = total + sold

    document.getElementById("result").innerHTML += "<p>" + diy[coop] + ", you sold " + sold + " glasses of lemonade.</p>";

  }

  beta(numGlasses, price, total)
}
gum()



function beta(inventory, price, glasses) {


  var expenses = 0.5 * inventory
  var revenue = price * glasses
  var left = inventory - glasses
  document.getElementById("result").innerHTML += "<p> you have " + left + " glasses of lemonade left over<\p>";




  document.getElementById("result").innerHTML += "<p> your profit was a whopping " + (revenue - expenses) + " dollars!!!;<\p>"


}