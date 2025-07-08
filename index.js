/****** CONST ******/
const URL = "https://carambar-back-akss.onrender.com"


/****** MAIN ******/

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

