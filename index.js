const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
var destructivelyAppendKitten=(name)=>{kittens.push(name);return kittens;}
var destructivelyPrependKitten=(name)=>{kittens.unshift(name);return kittens;}
var destructivelyRemoveLastKitten=()=>{kittens.pop();return kittens;}
var destructivelyRemoveFirstKitten=()=>{kittens.shift();return kittens;}
var appendKitten=(name)=>[kittens, ...name]
var prependKitten=(name)=>[...name, kittens]



//   describe('appendKitten(name)', function() {
//     it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

//   describe('prependKitten(name)', function() {
//     it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

//   describe('removeLastKitten()', function() {
//     it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       expect(removeLastKitten()).toEqual(["Milo", "Otis"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

//   describe('removeFirstKitten()', function() {
//     it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

// })