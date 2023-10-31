// JSON

let person;

const apiUrl = 'https://randomuser.me/api/';

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    person = data
  });

async function fetchData() {
  try {
    const res = await fetch(apiUrl)
    if (res.ok) {
      person = await res.json();
    } else {
      console.error('error' + res.status)
    }
  } catch (error) {
    console.error('error' + error)
  }
}


fetchData().then(() => {
  // let newgender
  console.log("Essa eh uma pessoa: " + person)
  for (let i in person) {
    console.log(person[i])

    // if (i === 0) {
    //   newgender = person[i]
    // }
    // console.log(newgender)
  }
})


