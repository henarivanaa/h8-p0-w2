var hari = 44
var bulan = 14
var tahun = 2300

if (hari < 1 || hari > 31) {
  console.log('Input Hari Salah!')
} else if (tahun < 1900 || tahun > 2200) {
  console.log('Input Tahun Salah!')
} else if (bulan < 1 || bulan > 12) {
  console.log('Input Bulan Salah!')
} else {

switch (bulan) {
  case 1:
  console.log(`${hari} Januari ${tahun}`);
  break;

  case 2:
  console.log(`${hari} Februari ${tahun}`);
  break;

  case 3:
  console.log(`${hari} Maret ${tahun}`);
  break;

  case 4:
  console.log(`${hari} April ${tahun}`);
  break;

  case 5:
  console.log(`${hari} Mei ${tahun}`);
  break;

  case 6:
  console.log(`${hari} Juni ${tahun}`);
  break;

  case 7:
  console.log(`${hari} Juli ${tahun}`);
  break;

  case 8:
  console.log(`${hari} Agustus ${tahun}`);
  break;

  case 9:
  console.log(`${hari} September ${tahun}`);
  break;

  case 10:
  console.log(`${hari} Oktober ${tahun}`);
  break;

  case 11:
  console.log(`${hari} November ${tahun}`);
  break;

  case 12:
  console.log(`${hari} Desember ${tahun}`);
  break;


}
}
