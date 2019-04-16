var nama = 'John';
var peran = 'Tabib';


if(!nama){
  console.log('Nama harus diisi!')
}else if(!peran){
  console.log('Halo', nama, ', pilih peranmu untuk memulai game!')
}else{
  console.log('Selamat datang di dunia Proxytia, ',nama)
  if(peran.toLowerCase() === 'ksatria'){
    console.log('Halo Ksatria ',nama, ', kamu dapat menyerang dengan senjatamu!')
  }else if(peran.toLowerCase() === 'tabib'){
    console.log('Halo Tabib ',nama, ', kamu akan membantu temanmu yang terluka.')
  }else if(peran.toLowerCase() === 'penyihir'){
    console.log('Halo Penyihir ',nama, ', ciptakan keajaiban yang membantu kemenanganmu!"')
  }else{
    console.log('Maaf, karakter yang kami pilih tidak tersedia. Silahkan pilih karakter Ksatria, Tabib, atau Penyihir!')
  }
}
