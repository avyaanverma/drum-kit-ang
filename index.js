// var keyPressed = None;
for(var i = 0; i < document.querySelectorAll(".drum").length; i++ ){
    
    document.querySelectorAll("button")[i].addEventListener("click", function (){

        this.style.color = "white"
        var buttonClicked = this.innerHTML
       
        PlayAudio(buttonClicked);

        buttonAnimation(buttonClicked)
        
    });
}
document.addEventListener("keypress", function(event) {
   PlayAudio(event.key);

   buttonAnimation(event.key);
})
function PlayAudio(key){
    switch(key) {
        case "w": // kick-bass
            var kickBass = new Audio('sounds/kick-bass.mp3')
            kickBass.play();
            break;
        case "a":
              
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
      }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}


