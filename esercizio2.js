// Classe Pet per gestire animali domestici
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

// Creazione dinamica degli oggetti Pet dal form
document.addEventListener("DOMContentLoaded", () => {
  const petForm = document.getElementById("petForm");
  const petList = document.getElementById("petList");
  const pets = [];

  petForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);

    const petItem = document.createElement("li");
    petItem.textContent = `${petName} (${species}, ${breed}) - Proprietario: ${ownerName}`;
    petList.appendChild(petItem);
    console.log("Nuovo animale aggiunto:", newPet);

    if (pets.length > 1) {
      for (let i = 0; i < pets.length - 1; i++) {
        console.log(
          `Confronto tra ${newPet.petName} e ${pets[i].petName}: `,
          newPet.sameOwner(pets[i])
            ? "Hanno lo stesso proprietario."
            : "Hanno proprietari diversi."
        );
      }
    }

    petForm.reset();
  });
});
