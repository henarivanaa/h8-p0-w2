// Tugas 1 : MENYUSUN BARISAN BINTANG
console.log("LOOPING PERTAMA")
var rows1 = 5
for (i=1; i <= rows1; i++) {
    console.log('*')
}

// Tugas 2 : MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING
console.log("LOOPING KEDUA")
var rows2 = 5
var x = ''
for (i=1; i <= rows2; i++) {
    for (j=1; j <= rows2; j++) {
        x = x + '*'
    } 
    
  console.log(x)
  x = ''  
} 

// Tugas 3 : MENYUSUN BARISAN TANGGA BINTANG DENGAN NESTED LOOPING 
console.log("LOOPING KETIGA")
var rows3 = 5
var x = ''
for (i=1; i<= rows3; i++) {
    for(j=1; j <i+1; j++) {
        x = x + '*'
    }
    console.log(x)
    x = ''
} 