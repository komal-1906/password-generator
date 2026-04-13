const btn = document.getElementById("btn")
const newPass = document.getElementById("newPass")
const range = document.getElementById("range")
const rangeVal = document.getElementById("rangeVal")

const upper = document.getElementById("upper")
const lower = document.getElementById("lower")
const number = document.getElementById("numbers")
const symbol = document.getElementById("symbols")
const copybtn = document.getElementById("copy-btn")

rangeVal.innerText = range.value

range.addEventListener('input', (e) => {
    rangeVal.innerText = e.target.value
})

btn.addEventListener('click', () => {

    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let symbols = '`~!@#$%^&*()?/'

    let finalstr = '';

    if(upper.checked){
        finalstr += upperCase
    }

    if(lower.checked){
        finalstr += lowerCase
    }

    if(number.checked){
        finalstr += numbers
    }

    if(symbol.checked){
        finalstr += symbols
    }

    if(finalstr === ''){
        alert("Please select atleast 1 field")
        return;
    }

    let latestPass = ''

    for(let i=0; i <range.value; i++){
        let randNum = Math.floor(Math.random() * finalstr.length)
        latestPass += finalstr[randNum]  
    } 

    newPass.innerText = `${latestPass}`
})

copybtn.addEventListener('click', () => {
    window.navigator.clipboard.writeText(newPass.innerText)
})

const copyBtn = document.getElementById("copy-btn");
const password = document.getElementById("newPass");
const copyMsg = document.getElementById("copyMsg");

copyBtn.addEventListener("click", () => {
    if (password.innerText !== "") {
        navigator.clipboard.writeText(password.innerText);

        // Show message
        copyMsg.classList.add("show");

        // Hide after 2 seconds
        setTimeout(() => {
            copyMsg.classList.remove("show");
        }, 2000);
    }
});