let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burawala", "Shekhupura", "Kashmir"]

// storing element in a variable 
let documents = document.getElementById("output")


// clear output button 
function clearOutput() {
    documents.innerHTML = " "
}

// simple alert 
function simpleAlert() {
    alert("alert button is clicked")
    documents.innerHTML = "alert button is clicked"
}

// print my name 
function printName() {
    let userName = document.getElementById("inputField").value;
    documents.innerHTML = userName;
}

// print all cities 
function printAllCities() {
    documents.innerHTML = " "
    for (let i = 0; i < cities.length; i++) {
        documents.innerHTML += i + 1 + ") " + cities[i] + "<br />"
    }
}

// add city in list 
function addCity() {
    documents.innerHTML = " "
    let newCity = document.getElementById("inputField").value;
    console.log(newCity)
    cities.push(newCity)

    for (let i = 0; i < cities.length; i++) {
        documents.innerHTML += i + 1 + ") " + cities[i] + "<br />"
    }
}

// generate table 
function generateTable() {
    let tableNumber = document.getElementById("inputField").value;
    if(!tableNumber){
        alert("please enter some value in input field")
        return
    }
    documents.innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for (let i = 1; i < 11; i++) {
        let table = tableNumber + " * " + i + " = " + tableNumber * i + "<br />"
        documents.innerHTML += table;
    }
}