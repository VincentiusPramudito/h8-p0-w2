//Tugas 1//
 function shoutOut(){
   return 'Halo Function!'
 }


console.log(shoutOut()) // Menampilkan "Halo Function!" di console
================================================================================
//Tugas 2//
function calculateMultiply(bil1, bil2){
  return bil1*bil2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30
================================================================================
//Tugas 3//

function processSentence(nama, umur, alamat, hobby){
  var kata1 = 'Nama saya ' + nama + ', ';
  var kata2 = kata1 + 'umur saya ' + umur + ' tahun, ';
  var kata3 = kata2 + 'alamat saya di ' + alamat + ', ';
  var kata4 = kata3 + "dan saya punya hobby yaitu "+ hobby + "!";
  return kata4;
}

var name = "Jojon";
var age = 21;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming dan baca buku";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
