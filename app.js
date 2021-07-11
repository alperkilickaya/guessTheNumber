const randSayi = Math.floor(Math.random()*100)+1; 
console.log(randSayi);

const sonuc = document.querySelector("#sonuc");
const btn = document.getElementById("check");
const guess = document.getElementById("guess");
const inputArea = document.getElementById("num")
const resetbutton = document.getElementById("reset")
let guessCount = 1;


function checkNumber(){
        const enterNum = parseInt(inputArea.value.trim());
        if (enterNum === randSayi ){
            sonuc.textContent="Bildiniz!";
            sonuc.style.color="green";
            stopProgress();
            resetbutton.style.visibility = "visible";
        }else if(enterNum<randSayi){
            sonuc.textContent="Biraz Yukarı!";
            guessCount += 1
        }else if( enterNum> randSayi){
            sonuc.textContent="Biraz Aşağı!";
            guessCount += 1
        } else {
            sonuc.textContent="Lütfen Sayı Giriniz!"
        } 
    }

function stopProgress(){
    btn.disabled = true;
    inputArea.disabled = true;
    guess.textContent = guessCount;

}

function reset() {
    guessCount = 1;
    location.reload();

}


    

      


        

   
        
        
          


         
    




