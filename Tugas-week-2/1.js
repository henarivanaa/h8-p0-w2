/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terKecil
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terKecil adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
/* Create a lostNumbers function
	Function "lostNumbers" with the parameter of first, second, and third.

	Steps below is inside the "lostNumbers" function
 * Create an array from input 
		store "arr" with first,second,third
 * Sort the "arr" array to make the calculation easier
	 	For i = 0 to 3(length of the "arr") 
		 Run For j = 0 to ( 2(length of the "arr") - i )
			 If arr[j] is bigger than arr[j+1] 
				Store "simpenan" with arr[j]
				replace arr[j] with arr[j+1]
				replace arr[j+1] with "simpenan"
 * Exclude an the sorted array with no numbers in between them
		Store "sortedArray" with "arr"
		If sortedArray[2] - sortedArray[1] < 2 && sortedArray[1] - sortedArray[0] < 2 
			Display "Tidak ada angka sama sekali"
 * Displaying the number in between the sorted array 
		Store "hasil" with empty array([])
		For i = sortedArray[0] + 1 to sortedArray[2] 
			If i not equals sortedArray[1] 
				Store "hasil" with i 

		Display "hasil"
 
 */

function lostNumbers(first, second, third) {
	var arr = [first,second,third]
	
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length-i-1; j++) {
			if (arr[j] > arr[j+1]) {
				var simpenan = arr[j]
				arr[j] = arr[j+1]
				arr [j+1] = simpenan
			}
		}
	}

  var sortedArray = arr
  if (sortedArray[2] - sortedArray[1] < 2 && sortedArray[1] - sortedArray[0] < 2 ) {
	  return "Tidak ada angka sama sekali"
  }
  var hasil = []
  for (i = sortedArray[0]+1; i < sortedArray[2]; i++) {
	  if (i !== sortedArray[1]) {
		  hasil.push(i)
	  }
  }
  return hasil
}


console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali
