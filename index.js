const loan = document.querySelector(".loani")
const rate = document.querySelector(".ratei")
//console.log(rate)
const peroid = document.querySelector(".ini")
const calculate = document.querySelector(".cal")
const select = document.querySelector("#select")
console.log(select.value)
calculate.addEventListener("click", () => {
    if (loan.value !== " " && rate.value !== "" && peroid.value !== "") {
        if (select.value == "Month") {
            console.log(select.value)
            let amount = loan.value;
            let rate_percentage = rate.value / 1200;
            let period_value = peroid.value

            if(amount && rate_percentage && period_value){
                let emi = Math.round(amount * rate_percentage * (Math.pow((1 + rate_percentage), period_value) / (Math.pow((1 + rate_percentage), period_value) - 1)))
                let original_emi = Math.round(emi * period_value)
                let original_rate = Math.round(original_emi - amount);
                document.querySelector(".emi-display").innerText = `${original_emi}`
                document.querySelector(".emi-mont").innerText = `${emi}`
                // document.querySelector(".amount-display").innerText = `${amount}`
                document.querySelector(".intersert-display").innerText = `${original_rate}`
    
                // loan.value = ""
                // rate.value = ""
                // peroid.value = ""
            }


        }
        else if (select.value == "Year") {
            let amount = loan.value;
            let rate_percentage = rate.value / 1200;
            let period_value = peroid.value * 12;

            if(amount && rate_percentage && period_value){
                let emi = amount * rate_percentage * (Math.pow((1 + rate_percentage), period_value) / (Math.pow((1 + rate_percentage), period_value) - 1))
                let original_emi = Math.round(emi * period_value)
                let original_rate = Math.round(original_emi - amount);
                document.querySelector(".emi-display").innerText = `${original_emi}`
                // document.querySelector(".amount-display").innerText = `${amount}`
                document.querySelector(".intersert-display").innerText = `${original_rate}`
    
                // loan.value = ""
                // rate.value = ""
                // peroid.value = ""
            }


        }
        else {
            alert("please select month or year")
        }

    }
    else {
        alert("please input the value")
    }





})

