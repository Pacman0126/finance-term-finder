document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", calculateTerms);
    }
    // configure range slider events
    let rangeLabel = document.getElementById("intervals");
    let rangeInput = document.getElementById("payment-intervals");
    rangeInput.addEventListener("input", function () {
        rangeLabel.innerText = rangeInput.value;
        calculateMonthlyPayment();
    }, false);

})


function calculateTerms(e) {

    e.preventDefault();
    let computeAction = this.getAttribute("data-type");
    let rangeLabel = document.getElementById("intervals");
    let paymentIntervals = document.getElementById("calculatedIntervals");
    let rangeSliderBar = document.getElementById("payment-intervals");

    switch (computeAction) {
        case "calcOnUserSelection":
            rangeLabel.innerText = calculateNumberOfPayments();
            paymentIntervals.innerText = rangeLabel.innerText;
            rangeSliderBar.setAttribute('value', rangeLabel.innerText);
            let rangeMin = Math.floor((parseFloat(paymentIntervals.innerText)) / 12) * 12;
            rangeSliderBar.setAttribute('min', rangeMin);
            let rangeMax = ((rangeMin / 12) + 2) * 12;
            rangeSliderBar.setAttribute('max', rangeMax);
            let rangeMinLabel = document.getElementById("min-value");
            rangeMinLabel.innerText = rangeMin;
            let rangeMaxLabel = document.getElementById("max-value");
            rangeMaxLabel.innerText = rangeMax;



            break;
        case "adjustMaxMonPmt":
            // code block
            break;
        default:
        // code block
    }

}
function calculateMonthlyPayment() {

    let PV = parseFloat(document.getElementById("finance-amount").value);
    let rangeLabel = document.getElementById("intervals");
    let paymentIntervals = rangeLabel.innerText;
    let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);
    let monthlyPayment = document.getElementById("max-mon-payment");

    let A = PV * ((1 + (.01 * annualInterestRate / paymentIntervals)) ** (paymentIntervals)) / paymentIntervals;
    monthlyPayment.value = A.toFixed(2);


}



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


            return paymentIntervals + 1

        }
    }

}
