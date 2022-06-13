/*
console.dir(document);
// this will log the domain of the webpage to the console
console.log(document.domain);
// // this will log the URL of the webpage to the console, slightly different from document.domain
console.log(document.URL); 
//document object can be used to reference many elements
console.log(document.title); //pulls the title from our head section of the html
console.log(document.doctype); //references our doctype in the first line of code on our html
console.log(document.head); //contains the information in our header tag
console.log(document.body); //contains the information in our body tag
console.log(document.all); //pulls content from all our document elements
console.log(document.all[10]); //targeting the 10th item in our document
document.all[10].textContent = "I just changed the header!"; //modifying the content of our 10th element of the document
//scaning for elements
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//GetElementById can be used to target an element by it's ID
console.log(document.getElementById('header-title'));
// Creating a variable associated with the element with an ID of header-title
let headerTitle = document.getElementById('header-title');
// we can access the variable we just created and changes its properties
headerTitle.textContent = "Im Changing the Header";
headerTitle.innerText = "I Am Changing It Again.";
headerTitle.style.color = 'hotpink'; 
*/
/*
//We can also access the document tree with className
var items = document.getElementsByClassName('list-group-item');
//We can log the items we can just obtain in the console
console.log(items);
console.log(items[1]); //targeting the second item of our items array

// Styling Property Attributes through the variable.
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'pink';
items[1].textContent = 'The best preparation for tomorrow is doing your best today';
items[1].style.color = 'black';

items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'red';
items[0].textContent = 'We know what we are, but know not what we may be.';
items[0].style.color = 'white';

items[3].style.fontWeight = 'bold';
items[3].style.backgroundColor = 'green';
items[3].textContent = 'No act of kindness, no matter how small, is ever wasted.';
items[3].style.color = 'white';

items[4].style.fontWeight = 'bold';
items[4].style.backgroundColor = 'yellow';
items[4].textContent = "Believe you can and you're halfway there.";
items[4].style.color = 'black';

items[5].style.fontWeight = 'bold';
items[5].style.backgroundColor = 'purple';
items[5].textContent = 'There is nothing impossible to him who will try.';
items[5].style.color = 'white';

items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'blue';
items[2].textContent = 'It is never too late to be what you might have been.';
items[2].style.color = 'white';

items[6].style.fontWeight = 'bold';
items[6].style.backgroundColor = 'gold';
items[6].textContent = 'Try to be like the turtle - at ease in your own shell.';
items[6].style.color = 'black';

items[7].style.fontWeight = 'bold';
items[7].style.backgroundColor = 'grey';
items[7].textContent = 'Out of difficulties grow miracles.';
items[7].style.color = 'white';
*/

/*
// This is a counter which loops all the way until 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);

}
//counting by 2s util we reach 20
for (let i = 0; i <=20; i +=2) {
     console.log(i);
     }
//countdown down from 100 to 0 by 2s
for (let i = 100; i >= 0; i -=2) {

     console.log(i);

 }

//manipulating the items variable with for loops
for (var i = 0; i < items.length; i++) {

     items[i].style.backgroundColor = 'grey';
     items[i].textContent = 'I Changed The List';
     items[i].style.color = 'green';

 }
 */
/*
// 
//We use brackets [] to create an array of items for our variable myDiamonds
const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];
//We can use foor loops to go through each item of our array
for(let i = 0; i < myDiamonds.length; i++){

     console.log(i, myDiamonds[i]);

}
*/

//We can also access the document tree with TagName, similar to className
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
//Same behavior as our items tag that we pulled by className
li[1].textContent = "Hello 2";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'crimson';
li[1].style.color = 'white';

//using for loops to loop through our li items 
for(var i = 0; i < li.length; i++){

     li[i].style.backgroundColor = 'lightgrey';
     li[i].textContent = 'Changed Text'; 

}

//querySelectors are another way to access elements. They grab the first element that matches our value 
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px hotpink';
//grabing our first input tag and changing the vlaue 
var input = document.querySelector('input');
input.value = "Changed The Input Box Text";
//grabbing our first input with the type submit and changing the value
var submit = document.querySelector("input[type='submit']");
submit.value = "SEND"; 
//grabbing our first class with the value of - list-group-item and changing the font color to red
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
//grabbing the last item of our list-group-item 
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'coral';