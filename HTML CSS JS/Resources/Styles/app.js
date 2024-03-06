
var countdownDate = new Date("2024-03-09").getTime();


var cntDwn = setInterval(function() {

    var date = new Date().getTime();
    var interval = countdownDate - date;

    var days = Math.floor(interval / (1000 * 60 * 60 * 24))
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((interval % (1000 * 60)) / 1000); 
    
    document.getElementById("days").innerHTML = String(days).padStart(2, "0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");

    if(interval < 0){
        clearInterval(cntDwn);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("minutes").innerHTML = ""
        document.getElementById("seconds").innerHTML = ""
        alert("Time for the match")
    }
}, 1000)





var data = window.location.search;
var params = new URLSearchParams(data)
console.log(params)

var name = params.get("fname")
var support = params.get("support")
var email = params.get("email")

var getData = "Name: " + name + "<br>";
getData += "Team supported: " + support + "<br>";
getData += "Email: " + email + "<br>"

document.getElementById("res").innerHTML = getData;






