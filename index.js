/*------- Variables -------*/
const URL = "https://carambar-back-akss.onrender.com"
const cont = document.querySelector('#cont')
const select = document.querySelector('select')
const display_btn = document.querySelector('#display_btn')


/*--------- Class ---------*/

class Blague {
  #id
  #question
  #reponse
  constructor (id, question, reponse) {
    this.#id = id
    this.#question = question
    this.#reponse = reponse
  }

  toString() {
    const blague_section = document.createElement("section")
    blague_section.innerHTML = `
      <p>${this.#id}. ${this.#question}</p>
      <ul>
        <li>${this.#reponse}</li>
      </ul>
    `
    return blague_section
  }
}


/*--------- Fetch ---------*/

async function fetchAll() {
  const response = await fetch(URL+"/blagues", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function fetchById(id) {
  const response = await fetch(URL+"/blagues/"+id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function fetchRandom() {
  const response = await fetch(URL+"/blagues/random", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function postNew() {
  const response = await fetch(URL+"/blagues", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: "test question", reponse: "test reponse" })
  });
  return response.json();
}


/*--------- Main ---------*/

function displayData(button, id=null) {
  if (cont.innerHTML !== "") {cont.innerHTML = ""}
  if (button === "random") {
    fetchRandom().then((data) => {
      const joke = new Blague(data.id, data.question, data.reponse)
      cont.appendChild(joke.toString())
    })
  } else if (button === "id") {
    fetchById(id).then((data) => {
      const joke = new Blague(data.id, data.question, data.reponse)
      cont.appendChild(joke.toString())
    })
  } else if (button === "all") {
    fetchAll().then((data) => {
      data.forEach (blague => {
        const joke = new Blague(blague.id, blague.question, blague.reponse)
        cont.appendChild(joke.toString())
      })
    })
  } else {console.log("button type not found")}
}

function displayIdInput() {

}

display_btn.addEventListener("click", () => displayData(select.value))


/*--------- Init ---------*/

displayData("all")