/*
    HazMatt
*/

document.addEventListener('DOMContentLoaded',()=>{
    const answer = Math.floor(Math.random() * 100 + 1);
    // console.log(answer.toFixed(0));
    let guesses = 0;
    console.log(answer)

    document.getElementById("btn").onclick = function(){
        let guess = document.getElementById('guessField').value;
        guess = Number(guess);

        if (guess > 100 || guess < 1){
            console.log('The user tried inserting a number higher than 100 or lower than 1')
            alert("The number cannot be lower than 1 or higher than 100");
        }
        else if (guess == answer){
            console.log('The user guessed the right number')
            alert("You guessed right!")
            document.getElementById('alert').innerHTML = `You guessed right in ${guesses} guesses!`;
            guesses += 1;
        }
        else if (guess > answer){
            console.log('The user guessed a number higher than the answer')
            document.getElementById('alert').innerHTML = 'The number is lower!';
            guesses += 1;
        }
        else {
            console.log('The user guessed a number lower than the answer')
            document.getElementById('alert').innerHTML = 'The number is higher!';
            guesses += 1;
        };
    }
});
