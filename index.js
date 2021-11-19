var timer = document.querySelector(".timer");

function updateTimer() {
    future = Date.parse("nov 26, 2021 00:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);
   
    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    s=s<10 ? '0'+s : s;
    m=m<10 ? '0'+m : m;
    h=h<10 ? '0'+h : h;

    timer.innerHTML = '0'+d+':'+h+':'+m+':'+ s;
  }
  setInterval("updateTimer()", 1000);