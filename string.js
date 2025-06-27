/*
let name = 'Himani'
let name2 = 'Bihana'
console.log(name.length); 
console.log(name.concat(" ",name2)); 


//split
let str = "apple,banana,orange";
console.log(str.split(","))
*/

//indexof
/*
let str = "Himani Bihana"
console.log(str.indexOf("Himani"))
*/

//replace
 /*let str = "I Love Pizza"
console.log(str.replace("Pizza","Pasta"))*/

//touppercase
/*let str = "Himani Bihana"
console.log(str.toUpperCase())*/

//trim
/*let str = "   Hello World   ";
console.log(str)
console.log(str.trim());*/

//includes
/*let str = "Hello JS";
console.log(str.includes("JS"));
console.log(str.includes("Hi"));*/

// use of count in function
 const fruits = [
    {Name: "Apple", count:3},
    {Name: "Banana", count:5},
    {Name: "Mango", count:7},
    {Name: "Banana", count:2},]
    
  console.log("Simple Array:",fruits)

  function addfruits(FruitAdd){
    const fruitfind = fruits.find(item => item.Name === FruitAdd.Name);
    if (fruitfind){
        fruitfind.count += 1
    }
    else {
        fruits.push(FruitAdd)
    }
  }

  addfruits({Name: "Litchi", count:1})
  addfruits({Name: "Watermelon", count:1})
  addfruits({Name: "Mango", count:1})
  addfruits({Name: "Apple", count:1})
  console.log(fruits)