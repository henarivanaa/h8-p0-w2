// Tugas 1 : MELAKUKAN LOOPING MENGGUNAKAN WHILE

console.log("LOOPING PERTAMA")
var i = 2;
while(i < 21) {
    console.log(`${i} - I love coding`);
    i+=2
} 

console.log("LOOPING KEDUA")
var i = 20;
while(i > 0) {
    console.log(`${i} - I love coding`);
    i-=2
}
console.log()
// Tugas 2 : MELAKUKAN LOOPING MENGGUNAKAN FOR

console.log("LOOPING PERTAMA")
for(i = 1; i < 21; i++) {
    console.log(`${i} - I love coding`);
    
} 

console.log("LOOPING KEDUA")
for(i = 20; i > 0; i--) {
    console.log(`${i} - I will become full stack developer`);
    
}
console.log()
// Tugas 3 : Angka Ganjil dan Genap

console.log("LOOPING PERTAMA")
for(i = 1; i < 101; i++) {
    if(i%2 === 0) {
        console.log(`counter sekarang = ${i} merupakan bilangan GENAP`)
    } else {
        console.log(`counter sekarang = ${i} merupakan bilangan GANJIL`)
    }
}
console.log()

console.log("LOOPING KEDUA")
for(i = 1; i < 101; i+=2) {
    if(i%3 === 0) {
        console.log(`counter sekarang: ${i}`)
        console.log(`${i} kelipatan 3`)
    } else {
        console.log('""')
    }
    console.log()
}

console.log("LOOPING KETIGA")
for(i = 1; i < 101; i+=5) {
    if(i%6 === 0) {
        console.log(`counter sekarang: ${i}`)
        console.log(`${i} kelipatan 6`)
    } else {
        console.log(`counter sekarang: ${i}`)
        console.log('""')
    }
    console.log()
}

console.log("LOOPING KEEMPAT")
for(i = 1; i < 101; i+=9) {
    if(i%10 === 0) {
        console.log(`counter sekarang: ${i}`)
        console.log(`${i} kelipatan 10`)
    } else {
        console.log(`counter sekarang: ${i}`)
        console.log('""')
    }
    console.log()
}




