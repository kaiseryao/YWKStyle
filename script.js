function startTime() {
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);


    document.getElementById("date").innerHTML=date+"."+" "+month+" "+year+", "+h+":"+m+":"+s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


var currentTime = new Date().getHours();
if (document.getElementById("timeicon")) {
    if (8 <= currentTime && currentTime < 20) {
        document.getElementById("timeicon").className = "bx bxs-sun bx-lg left";

    }
    else if (20 <= currentTime && currentTime < 2) {
      document.getElementById("timeicon").className = "bx bxs-moon bx-lg left";
      document.getElementById("online").style.display = "block"
      document.getElementById("offline").style.display = "none"
    }
    else if (0 <= currentTime && currentTime < 2) {
      document.getElementById("timeicon").className = "bx bxs-moon bx-lg left";
    }
    else {
        document.getElementById("timeicon").className = "bx bxs-bed bx-lg left";
        document.getElementById("online").style.display = "none"
        document.getElementById("offline").style.display = "block"
    }
}

