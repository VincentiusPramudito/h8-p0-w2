var nama ='Tom';
var peran ='Fighter';

if (nama && peran ==='Fighter'){
  console.log('Selamat datang di dunia Goib,',nama)
  console.log('Halo',peran + nama +', kamu bisa menyerang dengan pedang hebatmu');
}
else if (nama && peran === '') {
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else if (nama && peran ==='Magician'){
  console.log('Selamat datang di dunia Goib,',nama)
  console.log('Halo',peran + nama +', kamu bisa menyembuhkan dengan tongkat sihirmu');
}
else if (nama && peran === '') {
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else if (nama && peran ==='Hunter'){
  console.log('Selamat datang di dunia Goib,',nama)
  console.log('Halo',peran + nama +', kamu bisa berburu dengan panah saktimu');
}
else if (nama && peran === '') {
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else if (nama && peran ==='Elf'){
  console.log('Selamat datang di dunia Goib,',nama)
  console.log('Halo',peran + nama +', kamu bisa melindungi temanmu dengan mantra ajaibmu');
}
else if (nama && peran === '') {
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else {
  console.log('Nama dan peran harus diisi dengan benar');
}
