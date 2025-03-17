class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età.`;
    }
  }
}

// Creazione di oggetti e test del confronto tra età
const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luigi", "Verdi", 25, "Milano");
const user3 = new User("Anna", "Bianchi", 30, "Napoli");

console.log(user1.compareAge(user2)); // Mario è più vecchio di Luigi.
console.log(user2.compareAge(user1)); // Luigi è più giovane di Mario.
console.log(user1.compareAge(user3)); // Mario e Anna hanno la stessa età.
