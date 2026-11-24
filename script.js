function setBudget() {
    const userInput = document.getElementById('input').value
    const displayArea = document.getElementById('display')
    document.getElementById('display').innerHTML = `<p>${userInput}</p>`
    if (userInput.length >= 4 && !isNaN(userInput)) {
        document.getElementById('display').innerHTML = `<label>Amount To Spend:</label> <p>${userInput}</p>`
        document.getElementById('input').value = ""
    } else {
        alert('Kindly specify The Amount to Spend')
        document.getElementById('display').innerHTML = ''
    }

}
function addItem() {
    const userInput2 = document.getElementById('input2').value
    const userInput3 = document.getElementById('input3').value
    const displayArea2 = document.getElementById('display2')


    document.getElementById('input2').value = ""
    document.getElementById('input3').value = ""
    if (userInput2 !== '' && userInput3 !== '') {
        document.getElementById('display2').innerHTML += `<p>${userInput2} ${userInput3}</p>`
    } else if (userInput2 !== '' && userInput3 === '') {
        alert('Kindly Specify Your Budget Price for Item')
        document.getElementById('input2').value = ""
    } else if (userInput2 === '' && userInput3 !== "") {
        alert('Kindly Specify Your Budget Item')
        document.getElementById('input3').value = ""
    } else {
        alert('Kindly Specify Your Item and Item Price')
    }
}