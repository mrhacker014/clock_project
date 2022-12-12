setInterval(() => {
     let hours = document.getElementById('hours');
     let minute = document.getElementById('minute');
     let secoend = document.getElementById('secoend');
     let ampm = document.getElementById('ampm');

     let hr = new Date().getHours();
     let min = new Date().getMinutes();
     let sec = new Date().getSeconds();

     /*---- AM & PM setting  ----*/
     if(hr >= 12){
          ampm.innerHTML = "PM";
     }
     else{
          ampm.innerHTML = "AM"
     }

     /*----- 12 hour clock ----*/
     if (hr > 12){
          hr = hr-12;
     }
     
     /*------ 0 added before single number----- */
     if(hr < 10){
          hr = "0" + hr;
     }
     if(min < 10){
          min = "0" + min;
     }
     if(sec < 10){
          sec = "0" + sec;
     }
 
     hours.innerHTML = hr;
     minute.innerHTML = min;
     secoend.innerHTML = sec
});

/*----- full screen ------*/

let myDocument = document.documentElement;
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () =>{
     if(btn2.innerHTML == "FullScreen on"){
          if(myDocument.requestFullscreen){
               myDocument.requestFullscreen();
          }
          btn2.innerHTML = "FullScreen off";
     }
     else{
          if(document.exitFullscreen){
               document.exitFullscreen();
          }
          btn2.innerHTML = "FullScreen on";
     }
});

/*------ Dark mode -----*/
let btn1 = document.getElementById("btn1");
let body = document.querySelector('body');
let div1 = document.getElementById("hours");
let div2 = document.getElementById("minute");
let div3 = document.getElementById("secoend");
let div4 = document.getElementById("ampm");
let snap1 = document.getElementById("snap1");
let snap2 = document.getElementById("snap2");

btn1.addEventListener("click", () =>{
     if(btn1.innerHTML == "DarkMode on"){
          btn1.innerHTML = "DarkMode off";
          body.style.background = 'black';
          div1.style.background = 'black';
          div1.style.color = 'white';
          div1.style.boxShadow = '0 5px 25px rgba(100, 100, 101, 0.5)';
          div2.style.background = 'black';
          div2.style.color = 'white';
          div2.style.boxShadow = '0 5px 25px rgba(100, 100, 101, 0.5)';
          div3.style.background = 'black';
          div3.style.color = 'white';
          div3.style.boxShadow = '0 5px 25px rgba(100, 100, 101, 0.5)';
          div4.style.background = 'black';
          div4.style.color = 'white';
          div4.style.boxShadow = '0 5px 25px rgba(100, 100, 101, 0.5)';
          snap1.style.color = 'white';
          snap2.style.color = 'white';
          btn1.style.background = 'black';
          btn2.style.background = 'black';
          btn1.style.color = 'white';
          btn2.style.color = 'white';
          btn1.style.boxShadow = '0 5px 20px rgba(100, 100, 101, 0.5)';
          btn2.style.boxShadow = '0 5px 20px rgba(100, 100, 101, 0.5)';
     }
     else{
          btn1.innerHTML = "DarkMode on";
          body.style.background = 'white';
          div1.style.background = 'white';
          div1.style.color = 'black';
          div1.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
          div2.style.background = 'white';
          div2.style.color = 'black';
          div2.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
          div3.style.background = 'white';
          div3.style.color = 'black';
          div3.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
          div4.style.background = 'white';
          div4.style.color = 'black';
          div4.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
          snap1.style.color = 'black';
          snap2.style.color = 'black';
          btn1.style.background = 'white';
          btn2.style.background = 'white';
          btn1.style.color = 'black';
          btn2.style.color = 'black';
          btn1.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
          btn2.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
     }
});