const randSayi = Math.floor(Math.random()*100)+1; 
console.log(randSayi);

const sonuc = document.querySelector("#sonuc");
const btn = document.getElementById("check");
const guess = document.getElementById("guess");
const inputArea = document.getElementById("num");
const resetbutton = document.getElementById("reset");
let guessCount = 1;


inputArea.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
    
})

function checkNumber(){
        const enterNum = parseInt(inputArea.value.trim());
        if (enterNum === randSayi ){
            sonuc.textContent="You Won!";
            sonuc.style.color="green";
            stopProgress();
        }else if(enterNum<randSayi){
            sonuc.textContent="Up!!";
            guessCount += 1
        }else if( enterNum> randSayi){
            sonuc.textContent="Down";
            guessCount += 1
        } else {
            sonuc.textContent="Only Numbers!"
        } 
    }

  

function stopProgress(){
    btn.disabled = true;
    inputArea.disabled = true;
    guess.textContent = guessCount;
    resetbutton.style.visibility = "visible";
    btn.style.opacity = 0.7;


}

function reset() {
    guessCount = 1;
    location.reload();

}


    

      


        

   
        
        
          


         
    




