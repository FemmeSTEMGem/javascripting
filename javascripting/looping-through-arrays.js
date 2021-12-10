/*
 In that file, define a variable named pets that references this array:  
   
     ['cat', 'dog', 'rat']  
   
  Create a for loop that changes each string in the array so that they are  
  plural.  
   
  You will use a statement like this inside the for loop:  
   
     pets[i] = pets[i] + 's'  
   
  After the for loop, use console.log() to print the pets array to the  
  terminal.  
*/


let pets = ['cat', 'dog', 'rat'];
for (i = 0; i < 3; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);