document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    let rangeLabel = document.getElementById("intervals");
    let rangeInput = document.getElementById("paymentIntervals");
    let radioButtons = document.querySelectorAll(".form-check-input");
    //let rangeInput = document.querySelector('input');
    //calculateMonthlyPayment();
    //rangeInput.addEventListener("input", updateMonpayment);

    for (let radioButton of radioButtons) {
        radioButton.addEventListener("click", toggleRadioButtons);
    }

    for (let button of buttons) {
        button.addEventListener("click", calculateTerms);
    }
    // configure range slider events

    rangeInput.addEventListener("input", function () {
        rangeLabel.innerText = rangeInput.value;
        updateMonPayment();
    });



})

function toggleRadioButtons(e) {

    let radioButtons = document.querySelectorAll(".form-check-input");
    // const element = e.currentTarget;
    // alert(element);

    // const element1 = e.target.id;
    // alert(element1);

    for (let radioButton of radioButtons) {
        if (radioButton.checked && (e.target !== radioButton)) {
            radioButton.checked = false;
        }
    }

}

function updateMonPayment() {
    //alert("working");
    // e.preventDefault();
    let PV = parseFloat(document.getElementById("finance-amount").value);
    let rangeLabel = document.getElementById("intervals");
    let paymentIntervals = rangeLabel.innerText;
    let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);
    let monthlyPayment = document.getElementById("max-mon-payment");


    let A = PV * ((1 + (.01 * annualInterestRate / paymentIntervals)) ** (paymentIntervals)) / paymentIntervals;
    monthlyPayment.value = A.toFixed(2);

    //let paymentIntervalsElement = document.getElementById("calculatedIntervals");
    //paymentIntervalsElement.innerText = rangeLabel.innerText;

}

function adjustPaymentScheduleUp() {
    //alert("working");
    // e.preventDefault();
    let PV = parseFloat(document.getElementById("finance-amount").value);
    let rangeLabel = document.getElementById("intervals");
    //let paymentIntervals = rangeLabel.innerText;
    let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);
    let monthlyPayment = document.getElementById("max-mon-payment");
    let rangeSliderBar = document.getElementById("paymentIntervals");
    // let paymentIntervals = document.getElementById("calculatedIntervals").innerText;
    //let paymentIntervals = rangeLabel.innerText;
    let paymentIntervals = rangeSliderBar.value;

    if (paymentIntervals % 12 === 0) {
        paymentIntervals = ((paymentIntervals / 12) + 1) * 12;

    } else {
        paymentIntervals = (Math.ceil(paymentIntervals / 12)) * 12;
    }
    //paymentIntervals = (Math.floor(paymentIntervals / 12) + 1) * 12;

    rangeSliderBar.value = paymentIntervals;
    rangeLabel.innerText = paymentIntervals;
    let paymentIntervalsElement = document.getElementById("calculatedIntervals");
    paymentIntervalsElement.innerText = rangeLabel.innerText;

    let A = PV * ((1 + (.01 * annualInterestRate / paymentIntervals)) ** (paymentIntervals)) / paymentIntervals;
    monthlyPayment.value = A.toFixed(2);

    //update range attributes and labels

    rangeSliderBar.setAttribute('value', rangeLabel.innerText);

    let rangeMin = Math.floor((parseFloat(paymentIntervals)) / 12 - 1) * 12;

    rangeSliderBar.setAttribute('min', rangeMin);

    let rangeMax = ((rangeMin / 12) + 3) * 12;
    rangeSliderBar.setAttribute('max', rangeMax);

    let rangeMinLabel = document.getElementById("min-value");
    rangeMinLabel.innerText = rangeMin;

    let rangeMaxLabel = document.getElementById("max-value");
    rangeMaxLabel.innerText = rangeMax;


}

function adjustPaymentScheduleDown() {
    //alert("working");
    // e.preventDefault();
    let PV = parseFloat(document.getElementById("finance-amount").value);
    let rangeLabel = document.getElementById("intervals");
    //let paymentIntervals = rangeLabel.innerText;
    let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);
    let monthlyPayment = document.getElementById("max-mon-payment");
    let rangeSliderBar = document.getElementById("paymentIntervals");
    //let paymentIntervals = document.getElementById("calculatedIntervals").innerText;
    let paymentIntervals = rangeSliderBar.value;

    if (paymentIntervals % 12 === 0) {
        paymentIntervals = (Math.floor(paymentIntervals / 12) - 1) * 12;

    } else {
        paymentIntervals = (Math.floor(paymentIntervals / 12)) * 12;
    }



    rangeSliderBar.value = paymentIntervals;
    rangeLabel.innerText = paymentIntervals;
    let paymentIntervalsElement = document.getElementById("calculatedIntervals");
    paymentIntervalsElement.innerText = rangeLabel.innerText;

    let A = PV * ((1 + (.01 * annualInterestRate / paymentIntervals)) ** (paymentIntervals)) / paymentIntervals;
    monthlyPayment.value = A.toFixed(2);

    //update range attributes and labels

    rangeSliderBar.setAttribute('value', rangeLabel.innerText);

    let rangeMin = Math.floor((parseFloat(paymentIntervals)) / 12 - 1) * 12;

    if (rangeMin < 12) {
        rangeMin = 12;
    }
    rangeSliderBar.setAttribute('min', rangeMin);

    let rangeMax = ((rangeMin / 12) + 3) * 12;
    rangeSliderBar.setAttribute('max', rangeMax);

    let rangeMinLabel = document.getElementById("min-value");
    rangeMinLabel.innerText = rangeMin;

    let rangeMaxLabel = document.getElementById("max-value");
    rangeMaxLabel.innerText = rangeMax;



}




function calculateTerms(e) {

    e.preventDefault();
    let computeAction = this.getAttribute("data-type");
    let rangeLabel = document.getElementById("intervals");
    let paymentIntervals = document.getElementById("calculatedIntervals");


    switch (computeAction) {
        case "calcOnUserSelection":
            let rangeSliderBar = document.getElementById("paymentIntervals");
            rangeLabel.innerText = calculateNumberOfPayments();
            paymentIntervals.innerText = rangeLabel.innerText;


            let rangeMin = Math.floor((parseFloat(paymentIntervals.innerText)) / 12 - 1) * 12;
            rangeSliderBar.setAttribute('min', rangeMin);

            let rangeMax = ((rangeMin / 12) + 3) * 12;
            rangeSliderBar.setAttribute('max', rangeMax);

            let rangeMinLabel = document.getElementById("min-value");
            rangeMinLabel.innerText = rangeMin;

            let rangeMaxLabel = document.getElementById("max-value");
            rangeMaxLabel.innerText = rangeMax;

            rangeSliderBar.setAttribute('value', rangeLabel.innerText);
            rangeSliderBar.value = parseInt(rangeLabel.innerText);

            break;
        case "adjustMaxMonPmt":
            // code block
            switch (true) {

                case document.getElementById("adjustPmtOnUserSelection").checked:

                    updateMonPayment();

                    //paymentIntervals.innerText = rangeLabel.innerText;


                    //update slider bar 
                    let rangeSliderBar = document.getElementById("paymentIntervals");
                    //rangeLabel.innerText = calculateNumberOfPayments();
                    paymentIntervals.innerText = rangeLabel.innerText;


                    let rangeMin = Math.floor((parseFloat(paymentIntervals.innerText)) / 12 - 1) * 12;
                    rangeSliderBar.setAttribute('min', rangeMin);

                    let rangeMax = ((rangeMin / 12) + 3) * 12;
                    rangeSliderBar.setAttribute('max', rangeMax);

                    let rangeMinLabel = document.getElementById("min-value");
                    rangeMinLabel.innerText = rangeMin;

                    let rangeMaxLabel = document.getElementById("max-value");
                    rangeMaxLabel.innerText = rangeMax;

                    rangeSliderBar.setAttribute('value', rangeLabel.innerText);
                    rangeSliderBar.value = parseInt(rangeLabel.innerText);

                    break;
                case document.getElementById("adjustPmtIntervalsDown").checked:
                    adjustPaymentScheduleDown();
                    break;

                case document.getElementById("adjustPmtIntervalsUp").checked:

                    adjustPaymentScheduleUp();

                    break;



            }


            break;
        default:
        // code block


    }

    // function calculateMonthlyPayment() {
    //     // e.preventDefault();
    //     let PV = parseFloat(document.getElementById("finance-amount").value);
    //     let rangeLabel = document.getElementById("intervals");
    //     let paymentIntervals = rangeLabel.innerText;
    //     let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);
    //     let monthlyPayment = document.getElementById("max-mon-payment");

    //     let A = PV * ((1 + (.01 * annualInterestRate / paymentIntervals)) ** (paymentIntervals)) / paymentIntervals;
    //     monthlyPayment.value = A.toFixed(2);

    //     //return;

    // }



    /**
     * PV = present value i.e. principal
     * A = monthly payment
     * annualInterestRate = lender's annaul interest rate
     * paymentIntervals = number of payments
     * based on formula FV = PV(1+i)^n
     */
    function calculateNumberOfPayments() {

        let PV = parseFloat(document.getElementById("finance-amount").value);
        let A = parseFloat(document.getElementById("max-mon-payment").value);
        let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);

        let targetPtoARatio = Math.log(PV / A); //rearrange financial equation and target this ratio of principal to monthly payment

        let paymentIntervals = 2;
        let PtoARatio = Math.log(paymentIntervals) - Math.log(1 + ((annualInterestRate * .01) / paymentIntervals));

        while (PtoARatio <= targetPtoARatio) {
            paymentIntervals++;
            PtoARatio = Math.log(paymentIntervals) - Math.log(1 + ((annualInterestRate * .01) / paymentIntervals));

            if (PtoARatio >= targetPtoARatio) {


                return paymentIntervals + 1;

            }
        }




    }


}