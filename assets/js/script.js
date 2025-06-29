document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            let computeAction = this.getAttribute("data-type");
            calculateTerms(computeAction);

        })
    }
})
function calculateTerms(selectComputeAction) {

    switch (selectComputeAction) {
        case "calcOnUserSelection":
            calculateNumberOfPayments();
            break;
        case "adjustMaxMonPmt":
            // code block
            break;
        default:
        // code block
    }

}
/**
 * PV = present value i.e. principal
 * A = monthly payment
 * annualInterestRate = lender's annaul interest rate
 * paymentIntervals = number of payments
 */
function calculateNumberOfPayments() {

    let PV = parseFloat(document.getElementById("finance-amount").value);
    let A = parseFloat(document.getElementById("max-mon-payment").value);
    let annualInterestRate = parseFloat(document.getElementById("annual-interest").value);

    let targetPtoARatio = Math.log(PV / A);

    let paymentIntervals = 2;
    let PtoARatio = Math.log(paymentIntervals) - Math.log(1 + ((annualInterestRate * .01) / paymentIntervals));

    while (PtoARatio <= targetPtoARatio) {
        paymentIntervals++;
        PtoARatio = Math.log(paymentIntervals) - Math.log(1 + ((annualInterestRate * .01) / paymentIntervals));

        if (PtoARatio >= targetPtoARatio) {
            return paymentIntervals

        }
    }

}
