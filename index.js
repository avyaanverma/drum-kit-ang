
for(var i = 0; i < document.querySelectorAll(".drum").length; i++ ){
    
    document.querySelectorAll("button")[i].addEventListener("click", function (){

        this.style.color = "white"
        var buttonClicked = this.innerHTML

        switch(buttonClicked) {
            case "w": // kick-bass
                var kickBass = new Audio('sounds/kick-bass.mp3')
                kickBass.play()
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
                    // code block
                var snare = new Audio('sounds/snare.mp3')
                snare.play()
                break;
            case "k":
              // code block
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
        
    });
}

// document.addEventListener("keypress", function(event) {
//     alert('key was pressed')
// })



