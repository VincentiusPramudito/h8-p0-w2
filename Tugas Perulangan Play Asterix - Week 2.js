//1. Menyusun barisan bintang//
var rows1 = 5;

for (var i = 0; i < rows1; i++){
  console.log('*');
}

//2. Menyusun barisan bintang dengan nested looping//
var rows2= 5; // input the number of rows

for (i = 0; i < rows2; i++){
  var bintang = '';
  for (j = 0; j < rows2; j++){
    bintang += '*';
  }
  console.log(bintang);
}

//jika memakai function
function star(num){
    var result = '';
    for(var i = 0; i < num; i++){
        for(var j = 0; j < num; j++){
            result += '*'
        }
        result +='\n'
    }
    return result
}

console.log(star(5));

//3. Menyusun barisan tangga dengan nested looping//
var rows3 = 5;

for (i = 0; i < rows3; i++){
  var bintang ='';
  for (j = 0; j <= i; j++){
    bintang += '*';
  }
  console.log(bintang);
}

//jika memakai function
function star(num){
    var result = '';
    for(var i = 0; i < num; i++){
        for(var j = 0; j <= i; j++){
            result += '*'
        }
        result +='\n'
    }
    return result
}

console.log(star(5));
