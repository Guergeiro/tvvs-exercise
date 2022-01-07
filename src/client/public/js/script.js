var firstname = "nikhil1"

var lastname = "breno"
var firstname = "salles"
document.getElementById('demo').innerHTML = `Hey i am ${firstname} ${lastname}, My name coming from Javascript`

var a = NaN;

if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // this is dead code
}

function populateDivs(arr) {
  const rows = [];
  for (const {name, url} of arr) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${name}</td><td><a href="${url}">Link</a></td>`
    rows.push(tr);
  }
  const tbody = document.querySelector("table#pokemons tbody")
  for (const row of rows) {
    tbody.appendChild(row)
  }
}

async function getPokemons() {
  fetch("http://0.0.0.0:60000/pokemons").then(res => res.json()).then(json => populateDivs(json))
}

setTimeout(function () {
  getPokemons();
}, 3000);
