/*
    HazMatt
*/

document.addEventListener('DOMContentLoaded', ()=>{
    // Ending Cases
    let end = false;
    let stand_c = false;
    let debug = false;

    // Range of Random numbers
    const min = 1;
    const max = 10;

    // Player
    let player1 = Math.floor(Math.random()*(max - min + 1) + min);
    let player2 = Math.floor(Math.random()*(max - min + 1) + min);
    let player = player1 + player2;

    // CPU
    const risk_min = 1;
    const risk_max = 4;
    const risk_factor = Math.floor(Math.random()*(risk_max - risk_min + 1) + risk_min);
    let cpu1 = Math.floor(Math.random()*(max - min + 1) + min);
    let cpu2 = Math.floor(Math.random()*(max - min + 1) + min);
    let cpu = cpu1 + cpu2;

    // Buttons and Displays
    let hit = document.querySelector('button[id="hit"]');
    let stand = document.querySelector('button[id="stand"]');
    let player_p = document.querySelector('input[id="player"]');
    let cpu_p = document.querySelector('input[id="cpu"]');
    let WoL = document.querySelector('p[id="WoL"]');
    let retry = document.querySelector('button[id="retry"]');

    // Functions
    function end_game(a){
        end == true;
        WoL.innerText = a;
    };

    // Other
    player_p.value = player;
    cpu_p.value = cpu1;

    // If debug mode is on
    if (debug == true) {
        let risk_p = document.querySelector('p[id="risk"]');
        let cpu_total = document.querySelector('p[id="cpu_total"]');

        risk_p.innerText = "CPU Risk Factor: " + risk_factor;
        cpu_total.innerText = "CPU Total: " + cpu;
    };

    // Code
    // ---- If Hit gets clicked
    hit.onclick = function(){
        // If the game is has not ended, and the stand buttong hadn't been clicked...
        if (end == false && stand_c == false) {
            
            // Pull an extra card and add it to the player's hand, the number ranging from 1 to 10
            let extra = Math.floor(Math.random()*(max - min + 1) + min);
            player += extra;

            // Display the new number on the screen
            player_p.value = player;

            // Checks if the player has cards that in total are greater than 21. If the player does, he loses the game.
            if (player > 21) {
                end = true;
                WoL.innerText = "You Lost!";
            };
        };
    };

    // ---- If Stand gets clicked
    stand.onclick = function(){
        stand_c = true;
        if (stand_c = true && end == false) {
            
            // Functions

            // If the cpu has a number in total less than a certain number, it continues picking cards until he has over that number
            function add_cpu(a){
                while (cpu < a){
                    cpu += extra;
                };
            };

            // Declaring the extra variable to allow for the bot to pick another card
            let extra = Math.floor(Math.random()*(max - min + 1) + min);

            // Checks for the risk factor from 1 to 4. The higher it is, the more daring the CPU gets
            switch (risk_factor) {
                case 1: {
                    add_cpu(8);
                    break;
                }
                case 2: {
                    add_cpu(12);
                    break;
                }
                case 3: {
                    add_cpu(16);
                    break;
                }
                case 4: {
                    add_cpu(player);
                    break;
                }
            };

            // Once hit stand, the screen *should* print out the full cpu score, + the extra cards it pulled
            cpu_p.value = cpu;

            // Once hit stand, the game checks if you've won or not, depending on your score compared to the CPU's
            if (cpu < player || cpu > 21){
                end_game("You Won!");
            }
            else if (cpu > player) {
                end_game("You Lost!");
            }
            else if (cpu == player) {
                end_game("It's a draw!");
            };
        };
    };

    // ---- If Retry gets clicked
    retry.onclick = function(){

        // Refreshes the page
        window.location.reload();
    };
})
