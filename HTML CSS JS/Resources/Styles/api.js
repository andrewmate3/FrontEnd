// const { response } = require("express");

const url = "http://localhost:3000/six-nations-scores";

fetch(url)
.then(response => {
    if(!response.ok){
        throw new Error('Response not ok')
    }
    return response.json();
})
.then(data => {
    console.log(data);
    let rows = '';
    data.sixNationsScores.forEach(sixNationsScores => {
    rows += `<tr><td>${sixNationsScores.date}</td><td>${sixNationsScores.match}</td><td>${sixNationsScores.score}</td></tr>`;
    });
    document.getElementById('rows').innerHTML = rows;
})
.catch(error => {
    console.error('There was a problem', error);
})

