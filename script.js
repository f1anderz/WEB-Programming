let outputField = document.querySelector('.result')
let findButton = document.getElementById('findButton')
findButton.onclick = async function getZeroes() {
    let userFunction = encodeURIComponent(document.getElementById('userFunction').value)
    console.log('https://newton.vercel.app/api/v2/zeroes/' + userFunction)
    const response = await fetch('https://newton.vercel.app/api/v2/zeroes/' + userFunction);
    const zeroes = await response.json();
    let result = "Function zeroes: "
    zeroes.result.forEach((element) => {
        result += element + " "
    })
    outputField.innerHTML = result
}

