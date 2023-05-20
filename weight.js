/*
    HazMatt
*/

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn1").onclick = function(){
        // Declaring both values
        let kg = document.getElementById("kg").value;
        let cm = document.getElementById("cm").value;

        // Converting said values into Numbers
        kg = Number(kg);
        cm = Number(cm);
        
        // Doing some math for answers
        let lbs = kg * 2.2046;
        let full_inch = (cm / 2.54).toFixed(0);
        ft = (full_inch / 12).toFixed(1);
        inch = (full_inch % 12).toFixed(0);
        let BMI = kg / cm ** 2;
        
        // Fixing the ft variable
        ft = String(ft);
        ft = ft.slice(0,2);
        ft = Number(ft);

        // Chaining feet and inches variables together
        full_inch = `${ft}'${inch}`;

        // Fixing the BMI variable
        BMI = String(BMI);
        BMI1 = BMI.slice(4, 6);
        BMI2 = BMI.slice(6, 8);
        BMI = `${BMI1}.${BMI2}`;

        // Printing out the answers
        document.getElementById("result_lbs").innerHTML = `Your weight in lbs: ${lbs.toFixed(2)} lbs`;
        document.getElementById("result_inch").innerHTML = `Your height in ft: ${full_inch} ft`;
        document.getElementById("BMI1").innerHTML = `Your BMI is: ${BMI}`;
    };

    document.getElementById("btn2").onclick = function(){
        // Declaring both values
        let lbs = document.getElementById("lbs").value;
        let ft = document.getElementById("ft").value;
        let inch = document.getElementById("inch").value;
        
        // Converting said values into Numbers
        ft = Number(ft);
        inch = Number(inch);

        // Summing up the feet and inches together for equations
        full_inch = (ft * 12) + inch;

        // Doing some math
        let kg = lbs / 2.2046;
        let cm = full_inch * 2.54;
        let BMI = kg / cm ** 2;

        // Fixing up the BMI variable
        BMI = String(BMI);
        BMI1 = BMI.slice(4, 6);
        BMI2 = BMI.slice(6, 8);
        BMI = `${BMI1}.${BMI2}`;

        // Printing out the answers
        document.getElementById("result_kg").innerHTML = `Your weight in kg: ${kg.toFixed(2)} kg`;
        document.getElementById("result_cm").innerHTML = `Your height in cm: ${cm.toFixed(2)} cm`;
        document.getElementById("BMI2").innerHTML = `Your BMI is: ${BMI}`;
    };
});