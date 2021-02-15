const div = document.createElement('div');
div.style.textAlign = 'center';
div.style.marginTop = '100px'
document.body.append(div);

const start = document.createElement('button');
start.className = 'button';
start.innerHTML = 'Start';
start.style.marginRight = '20px';
start.onclick = clockStart;

const stop = document.createElement('button');
stop.className = 'button';
stop.innerHTML = 'Stop';
div.append(start, stop);
stop.onclick = clockStop;

let button = document.querySelectorAll('button');
button.forEach((item) => {item.style.fontSize = '30px'})

let h2 = document.createElement('h2');
h2.style.textAlign = 'center';
h2.style.fontSize = '40px'
document.body.append(h2);

function clock () {
     let data = new Date();
     let seconds = data.getSeconds();
     let minutes = data.getMinutes();
     let hours = data.getHours();
     seconds = chekTime(seconds);
     minutes = chekTime(minutes);
     hours = chekTime(hours)
     let time = hours + ':' + minutes + ':' + seconds;

     document.querySelector('h2').innerHTML = 'Время: ' + time;
}

function chekTime (value) {
     if (value < 10) {
          value = '0' + value;
     }
     return value;
}

let changeTime = setInterval(clock, 1000);

function clockStart () {
     changeTime = setInterval(clock, 1000);
}

function clockStop() {
     clearInterval(changeTime);
}




