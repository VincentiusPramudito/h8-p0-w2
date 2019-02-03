var nama ='Jon';
var peran ='';

if (nama === ''){
  console.log('Silahkan isi namamu');
}
else if (peran ===''){
  console.log('Halo',nama+ ' Pilih karaktermu untuk memulai game');
}
else {
  console.log ('Selamat datang di dunia Goib');

  if (peran ==='Hunter'){
  console.log('Halo Hunter ' + nama +' , kamu bisa berburu dengan panah saktimu');
  }
  else if (peran ==='Elf'){
  console.log('Halo Elf ' + nama +' , kamu bisa melindungi temanmu dengan mantra ajaibmu');
  }
  else if (peran ==='Magician'){
  console.log('Halo Magician ' + nama +' , kamu bisa menyembuhkan dengan tongkat sihirmu');
  }
  else if (peran ==='Fighter'){
  console.log('Halo Fighter ' + nama +' , kamu bisa menyerang dengan pedang hebatmu');
  }
  else if (nama === ''){
  console.log ('Halo',nama+ ' Pilih karaktermu untuk memulai game');
  }
  else {
    console.log('Karaktermu diluar pilihan yang ada');
  }
}
