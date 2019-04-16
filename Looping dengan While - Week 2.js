//1. looping dengan While//
var loop1 = 2;
var loop2 = 20;

console.log('Looping pertama');
while (loop1 <= 20) {
  console.log (loop1 + ' - I love coding');
  loop1 += +2;
}

console.log('Looping kedua');
while (loop2 >= 0) {
  console.log (loop2 + ' - I will become fullstack developer');
  loop2 += -2;
}
=============================================================================
//2. looping dengan for//
console.log('Looping pertama');
for (var loop1 = 2; loop1 <= 20; loop1++){
  console.log(loop1 + ' - I love coding');
}
console.log('Looping kedua');
for (var loop2 = 20; loop2 >=0; loop2--){
  console.log(loop2 + ' - I will become fullstack developer');
}
=================================================================================================================
//3a. Ganjil genap//

for (angka=1; angka<=100; angka++){
  
  if (angka%2==0) {
    console.log ('Genap');
  }
  else {
    console.log ('Ganjil');
  }
}
//==================================================//
//3b. kelipatan 3 dengan pertambahan 2//

for (angka=1; angka<=100; angka+=2){

  if (angka%3==0) {
    console.log (angka+ ' kelipatan '+ '3');
  }
  else {
    console.log ('');
  }
}
//==================================================//
//3c. kelipatan 6 dengan pertambahan 5//

for (angka=1; angka<=100; angka+=5){

  if (angka%6==0) {
    console.log (angka+ ' kelipatan '+ '6');
  }
  else {
    console.log ('');
  }
}
//==================================================
//3d. kelipatan 3 dengan pertambahan 9//

for (angka=1; angka<=100; angka+=9){

  if (angka%10==0) {
    console.log (angka+ ' kelipatan '+ '10');
  }
  else {
    console.log ('');
  }
}
