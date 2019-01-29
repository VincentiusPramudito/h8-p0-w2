var nama ='Ahmad';
var peran ='Fighter';

if (nama ==='Ahmad' && peran ==='Fighter'){
  console.log('Selamat datang di dunia Goib,',nama)
  console.log('Halo',peran + nama +', kamu bisa menyerang dengan pedang hebatmu');
}
else if (nama==='Ahmad'&& peran === '') {
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else if (nama ==='Budi' && peran ==='Magician'){
  console.log('Selamat datang di dunia Goib,',nama)
  console.log('Halo',peran + nama +', kamu bisa menyembuhkan dengan tongkat sihirmu');
}
else if (nama==='Budi'&& peran === '') {
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else if (nama ==='Charlie' && peran ==='Hunter'){
  console.log('Selamat datang di dunia Goib,',nama)
  console.log('Halo',peran + nama +', kamu bisa berburu dengan panah saktimu');
}
else if (nama==='Charlie'&& peran === '') {
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else if (nama ==='Dodot' && peran ==='Elf'){
  console.log('Selamat datang di dunia Goib,',nama)
  console.log('Halo',peran + nama +', kamu bisa melindungi temanmu dengan mantra ajaibmu');
}
else if (nama==='Dodot'&& peran === '') {
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else {
  console.log('Nama dan peran harus diisi dengan benar');
}
