const contacts = new Map();


contacts.set("Samuel", {phone_numbre: "86988768032", adress: "THE"})

let msg = contacts.has("Samuel");
console.log(contacts.get("Samuel"));
console.log(msg);

contacts.set("Maria", {phone_numbre: "123456789", adress: "PE"});

console.log(contacts.size);

contacts.groupBy()

// contacts.clear()

console.log(contacts.get("Maria"))