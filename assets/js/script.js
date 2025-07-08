document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    let rangeLabel = document.getElementById("intervals");
    let rangeInput = document.getElementById("paymentIntervals");
    let radioButtons = document.querySelectorAll(".form-check-input");
    let adjustPaymentsButton = document.getElementById("adjustMaxMonPmt");
    //  let adjustPaymentsRadioOPtion1 = document.getElementById("adjustPmtOnUserSelection");
    let inputFields = document.querySelectorAll(".form-control");
    //let rangeInput = document.querySelector('input');
    //calculateMonthlyPayment();
    //rangeInput.addEventListener("input", updateMonpayment);

    for (let inputField of inputFields) {
        inputField.addEventListener("mousedown", showHideButtons);
    }


    for (let radioButton of radioButtons) {
        radioButton.addEventListener("click", toggleRadioButtons);
    }

    for (let button of buttons) {
        button.addEventListener("click", calculateTerms);
    }
    // configure range slider events

    rangeInput.disabled = true;

    rangeInput.addEventListener("input", function () {
        rangeLabel.innerText = rangeInput.value;
        updateMonPayment();
    });


    adjustPaymentsButton.style.display = "none";

})

function showHideButtons() {
    let adjustPaymentsButton = document.getElementById("adjustMaxMonPmt");
    let calcPaymentsButton = document.getElementById("calcOnUserSelection");

    
    if (window.getComputedStyle(calcPaymentsButton).display === "block") {
        calcPaymentsButton.style.display = "block";
        adjustPaymentsButton.style.display = "none";

    } else {

        calcPaymentsButton.style.display = "block";
        adjustPaymentsButton.style.display = "none";

    }

}

function toggleRadioButtons(e) {

    let radioButtons = document.querySelectorAll(".form-check-input");
    let adjustPaymentsRadioOPtion1 = document.getElementById("adjustPmtOnUserSelection");
    let rangeInput = document.getElementById("paymentIntervals");


    for (let radioButton of radioButtons) {
        if (radioButton.checked && (e.target !== radioButton)) {
            radioButton.checked = false;
        }
    }

    if (adjustPaymentsRadioOPtion1.checked) {
        rangeInput.disabled = false;
    } else {
        rangeInput.disabled = true;
    }



}

function updateMonPayment() {

    let PV = parseFloat(document.getElementById("finance-amount").value);
    let rangeLabel = document.getElementById("intervals");
    let paymentIntervals = rangeLabel.innerText;
    let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);
    let monthlyPayment = document.getElementById("max-mon-payment");


    let A = PV * ((1 + (.01 * annualInterestRate / paymentIntervals)) ** (paymentIntervals)) / paymentIntervals;
    monthlyPayment.value = A.toFixed(2);

    //updateRange();
    let paymentIntervalsElement = document.getElementById("calculatedIntervals");
    paymentIntervalsElement.innerText = rangeLabel.innerText;

}

function adjustPaymentScheduleUp() {

    let PV = parseFloat(document.getElementById("finance-amount").value);
    let rangeLabel = document.getElementById("intervals");

    let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);
    let monthlyPayment = document.getElementById("max-mon-payment");
    let rangeSliderBar = document.getElementById("paymentIntervals");

    let paymentIntervals = rangeSliderBar.value;

    if (paymentIntervals % 12 === 0) {
        paymentIntervals = ((paymentIntervals / 12) + 1) * 12;

    } else {
        paymentIntervals = (Math.ceil(paymentIntervals / 12)) * 12;
    }

    rangeSliderBar.value = paymentIntervals;
    rangeLabel.innerText = paymentIntervals;
    let paymentIntervalsElement = document.getElementById("calculatedIntervals");
    paymentIntervalsElement.innerText = rangeLabel.innerText;

    let A = PV * ((1 + (.01 * annualInterestRate / paymentIntervals)) ** (paymentIntervals)) / paymentIntervals;
    monthlyPayment.value = A.toFixed(2);

    updateRange();

}

function adjustPaymentScheduleDown() {

    let PV = parseFloat(document.getElementById("finance-amount").value);
    let rangeSliderBar = document.getElementById("paymentIntervals");
    let rangeLabel = document.getElementById("intervals");

    let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);
    let monthlyPayment = document.getElementById("max-mon-payment");

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

    updateRange();

}

function updateRange() {

    //update range attributes and labels
    let rangeSliderBar = document.getElementById("paymentIntervals");
    let rangeLabel = document.getElementById("intervals");
    rangeSliderBar.setAttribute('value', rangeLabel.innerText);

    let paymentIntervals = rangeSliderBar.value;


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

function validateInputFields() {

    let financeAmount = document.getElementById("finance-amount");
    let monthlyPayment = document.getElementById("max-mon-payment");
    let annualInterestRate = document.getElementById("annual-interest");

    let hasEmptyFields = true;
    while (hasEmptyFields === true) {

        if (financeAmount.value === '') {
            financeAmount.focus();
        } else { hasEmptyFields = false }

        if (monthlyPayment.value === '') {
            monthlyPayment.focus();
        } else { hasEmptyFields = false }

        if (annualInterestRate.value === '') {
            annualInterestRate.focus();
        } else { hasEmptyFields = false }


    }



}


function calculateTerms(e) {

    e.preventDefault();
    let computeAction = this.getAttribute("data-type");
    let rangeLabel = document.getElementById("intervals");
    let paymentIntervals = document.getElementById("calculatedIntervals");
    let calcPaymentsButton = document.getElementById("calcOnUserSelection");
    let adjustPaymentsButton = document.getElementById("adjustMaxMonPmt");

    let financeAmount = document.getElementById("finance-amount");
    let monthlyPayment = document.getElementById("max-mon-payment");
    let annualInterestRate = document.getElementById("annual-interest");

    if (financeAmount.value === '') {
        // e.preventDefault();
        financeAmount.focus();
        return;
    }

    if (monthlyPayment.value === '') {
        monthlyPayment.focus();
        return;
    }

    if (annualInterestRate.value === '') {
        annualInterestRate.focus();
        return;
    }

    //validateInputFields();

    switch (computeAction) {
        case "calcOnUserSelection":
            let rangeSliderBar = document.getElementById("paymentIntervals");
            rangeLabel.innerText = calculateNumberOfPayments();
            paymentIntervals.innerText = rangeLabel.innerText;

            updateRange();

            rangeSliderBar.setAttribute('value', rangeLabel.innerText);
            rangeSliderBar.value = parseInt(rangeLabel.innerText);

            calcPaymentsButton.style.display = "none";
            adjustPaymentsButton.style.display = "block";
            break;
        case "adjustMaxMonPmt":

            switch (true) {

                case document.getElementById("adjustPmtOnUserSelection").checked:

                    updateMonPayment();

                    //update slider bar 
                    let rangeSliderBar = document.getElementById("paymentIntervals");

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