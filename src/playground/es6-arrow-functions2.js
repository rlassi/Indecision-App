const add = function (a, b) {
    return a+b
}

const user = {
    name: 'Ryan',
    cities: ['Asheville', 'boone'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived())

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
};

console.log(multiplier.multiply())