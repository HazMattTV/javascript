/*
    HazMatt
*/

document.addEventListener('DOMContentLoaded',() => {
    function way1() {
        let radioBtns = document.querySelectorAll('input[name="Fruit"]');
        let result = document.getElementById("result");

        let findSelected = () => {
            let selected = document.querySelector('input[name="Fruit"]:checked').value;
            result.textContent = `>Fruit value: ${selected}`;
        };

        radioBtns.forEach(radioBtn => {
            radioBtn.addEventListener("change", findSelected);
        });

        findSelected();
    };
    // way1();

    function way2() {
        let radioBtns = document.querySelectorAll('input[name="Fruit"]');
        let result = document.getElementById("result");

        let findSelected = () => {
            let selected = document.querySelector('input[name="Fruit"]:checked').value;
            result.textContent = `>Fruit value: ${selected}`;
        };

        document.getElementById('btn').onclick = function() {
            findSelected();
        };
    };
    way2();
});