/*
    HazMatt
*/

document.addEventListener('DOMContentLoaded',()=>{
    var result = [
        "rock",
        "paper",
        "scissors"
    ];
    
    document.getElementById('btn').onclick = function (){
        // Declaring variables
        let cpu = Math.floor(Math.random()*result.length);
        let player = document.getElementById('player').value;

        // Fixing up the player variable
        player = player.toLowerCase();
        
        // Printing out the CPU result
        document.getElementById('CPU').innerHTML = result[cpu];

        // Printing out the game result
        if ((player == "rock" && result[cpu] == "scissors") || (player == "paper" && result[cpu] == "rock") || (player == "scissors" && result[cpu] == "paper")) {
            document.getElementById('WoL').innerHTML = 'You win!';
        }
        else if (player == result[cpu]) {
            document.getElementById('WoL').innerHTML = "It's a draw!";
        }
        else if ((player == "rock" && result[cpu] == "paper") || (player == "scissors" && result[cpu] == "rock") || (player == "paper" && result[cpu] == "scissors")) {
            document.getElementById('WoL').innerHTML = 'You lose!';
        };
    };

    document.getElementById('reset').onclick = function(){
        location.reload();
    };
})