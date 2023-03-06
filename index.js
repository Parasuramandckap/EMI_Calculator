const loan = document.querySelector(".loani")
const rate = document.querySelector(".ratei")
//console.log(rate)
const peroid = document.querySelector(".ini")
const calculate = document.querySelector(".cal")
const select = document.querySelector("#select")
//console.log(select.value)
let button = document.querySelectorAll("button")

let mnbtn = document.querySelector("#month")
let yrbtn = document.querySelector("#year")

mnbtn.addEventListener("click", () => {
    mnbtn.classList.add("show")
    yrbtn.classList.remove("show")
})

yrbtn.addEventListener("click", () => {
    yrbtn.classList.add("show")
    mnbtn.classList.remove("show")
})

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
        if (e.target.matches("#month")) {
            let p = peroid.value * 12;
            peroid.value = p

        }
        else if (e.target.matches("#year")) {
            let p = peroid.value
            if (p > 1) {
                let k = peroid.value / 12
                peroid.value = k

            }

        }
    })
}
calculate.addEventListener("click", () => {
    if (loan.value !== " " && rate.value !== "" && peroid.value !== "") {
        //console.log(select.value)
        if (rate.value == 0 || peroid.value == 0) {
            alert("please enter the value greater than 0")
        }
        else {
            if (mnbtn.classList.contains("show")) {

                let amount = loan.value;
                let rate_percentage = rate.value / 1200;
                let period_value = peroid.value
                let emi = amount * rate_percentage * (Math.pow((1 + rate_percentage), period_value) / (Math.pow((1 + rate_percentage), period_value) - 1));
                let real_value = Math.round(emi)
                let original_emi = Math.round(emi * period_value)
                let original_rate = Math.round(original_emi - amount);
                document.querySelector(".loan-emi").innerText = `${real_value}`
                document.querySelector(".total-payment").innerText = `${original_emi}`
                document.querySelector(".intersert-display").innerText = `${original_rate}`



            } else {
                let period_value = peroid.value * 12
                let amount = loan.value;
                let rate_percentage = rate.value / 1200;

                let emi = amount * rate_percentage * (Math.pow((1 + rate_percentage), period_value) / (Math.pow((1 + rate_percentage), period_value) - 1));
                let real_value = Math.round(emi)
                let original_emi = Math.round(emi * period_value)
                let original_rate = Math.round(original_emi - amount);
                document.querySelector(".loan-emi").innerText = `${real_value}`
                document.querySelector(".total-payment").innerText = `${original_emi}`
                document.querySelector(".intersert-display").innerText = `${original_rate}`
            }


        }

    }



    else {
        alert("please input the value")
    }





})

