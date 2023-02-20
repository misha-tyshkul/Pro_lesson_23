class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  apartmentResidents = [];
  addResident(resident) {
    this.apartmentResidents.push(resident);
  }
}

class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }
  addApartment(apartament) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartament);
    } else {
      console.log(`The maximum number of apartments in the house`);
    }
  }
}

const misha = new Human("Misha", "male");
const anna = new Human("Anna", "female");
const ivan = new Human("Ivan", "male");
const lena = new Human("Lena", "female");
const kolya = new Human("Kolya", "male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();
const apartment5 = new Apartment();

apartment1.addResident(misha);
apartment2.addResident(anna);
apartment3.addResident(ivan);
apartment4.addResident(lena);
apartment5.addResident(kolya);

const house = new House(6);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);
house.addApartment(apartment4);
house.addApartment(apartment5);
console.log(house);
