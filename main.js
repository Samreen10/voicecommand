x = 0;
y = 0;

draw_apple = "";

screen_width = 0;
screen_height = 0;

speak_data = "";

to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  loadimage()
  
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);
    if (Number.isInteger(to_number))
    {
      document.getElementById("status").innerHTML = "Start drawing apple ";
      draw_apple = "set" 
    }
    else
    {
      document.getElementById("status").innerHTML = "The speech has not recognized a number"; 

    }

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


