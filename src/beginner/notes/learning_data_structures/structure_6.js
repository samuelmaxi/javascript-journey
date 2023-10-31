// JSON

let person;   // DECLARATION VARIABLE

const apiUrl = 'https://randomuser.me/api/';   // API URL

async function fetchData() {   // ASYNC FUNCTION TO CONSUMMER THE API
  try {   // SCOPE OF ATTEMPT
    const res = await fetch(apiUrl);   // DECLARATION RESPONSE VARIABLE
    if (res.ok) {   // CONDITION
      person = await res.json();   // ATTRIBUTING VALUE IN VARIABLE
    } else {   // CONDITION FAILED
      console.error('error' + res.status)   // ERROR VIEWER
    }
  } catch (error) {   // FAILED ATTEMPT SCOPE
    console.error('error' + error)   // ERROR VIEWER
  }
}

fetchData().then(() => {   // CALL THE FUNCTION BY PASSING A SCOPE
  console.log("Essa eh uma pessoa: " + person)    // VIEWER VARIABLE PERSON (TYPE = [OBJECT OBJECT])
  for (let i in person) {   // GOING THROUGH ALL JSON ITEMS
    console.log(person[i]);   // PROPS THE PERSON
  }
})


