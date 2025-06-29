document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            let computeAction = this.getAttribute("data-type");
            calculateTerms(computeAction);

        })
    }

    function calculateTerms() {


    }


})