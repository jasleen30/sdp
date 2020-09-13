//declare array
let fruits = ["Apple", "Orange", "Plum"];




// add item

fruits[3] = 'Lemon';
fruits.push("Pear"); //add at the end
fruits.unshift('Apple'); //Add the element to the beginning of the array:

// delete item
fruits.pop(); // remove the last element and returns
fruits.shift(); //remove/extratc the first element of array 

// add at particular index
fruits[5] = 'peach';


// delete from particular index

fruits.splice(2,1); //at index 2 and one element will be delete

delete fruits[1];