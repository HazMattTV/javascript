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
        if (end == false && stand_c == false) {
            let extra = Math.floor(Math.random()*(max - min + 1) + min);
            player += extra;

            player_p.value = player;
            
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
            function add_cpu(a){
                while (cpu < a){
                    cpu += extra;
                };
            };

            // Extra in CPU
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

            // Printing out the result
            cpu_p.value = cpu;

            // Checking if you've won or not
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
        window.location.reload();
    };
})