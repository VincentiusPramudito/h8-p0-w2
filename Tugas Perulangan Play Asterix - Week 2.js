//1. Menyusun barisan bintang//
var rows1=2;
var i=rows1;

for (i=''; i < rows1; i++){
  console.log('*');
}

//2. Menyusun barisan bintang dengan nested looping//
var rows2= 5; // input the number of rows

// do loops to display asterisks in the console.
for (i = 0; i < rows2; i++){
  var bintang = '';
  for (j = 0; j < rows2; j++){
    bintang = bintang + '*';
  }
  console.log(bintang);
}

//3. Menyusun barisan tangga dengan nested looping//
var rows3 = 5; // input the number of rows

// do loops to display asterisks in the console.
for (i = 0; i < rows3; i++){
  var bintang ='';
  for (j = 0; j <= i; j++){
    bintang = bintang + '*';
  }
  console.log(bintang);
}
