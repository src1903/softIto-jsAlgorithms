// 1-) Klavyeden girilen X değerinde N değerine kadar tüm doğal sayıları listeleyen program.

// var x = prompt("Baslangic degerini giriniz:")

// var n = prompt("Bitis degerini giriniz:");

// for (var i= x; i<=n; i++) {
//     console.log(i);
// }


// 2-) Klavyeden girilen N değerine kadar sayıları bulan fibonacci dizisini bulan program.

// var n= prompt("N degerini giriniz:");

// let fibo = new Array();
// fibo[0] = 0; 
// fibo[1] = 1; 

// for (var i = 2; i<=n; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo);

// 3-) Klavyeden girilen bir sayının TÜM tam bölenlerini bulup listeleyen program.

// var x = prompt("Bolen bulmak istediginiz degeri giriniz:");

// for (var i = -x; i<=x; i++) {

//     if (x % i == 0) {
//         console.log(i);
//     }
// }

// 4-) Klavyeden girilen üç sayıdan büyük sıralamasına göre ortadakini bulup ekrana yazdıran program.

// var x = prompt("Birinci degeri giriniz:");
// var y = prompt("İkinci degeri giriniz:");
// var z = prompt("Ucuncu degeri giriniz:");

// if(y>x && y<z || y>z && y<x) console.log("Ortanca Sayi =" ,y);
// else if(x>y && x<z || x>z && x<y) console.log("Ortanca Sayi =" , x);
// else console.log("Ortanca Sayi =" , z);  //  if(z>x && z<y || z>y && z<x )

// 5-) Klavyeden girilen A ve B gibi iki sayının  bölme işlemi kullanmadan sadece toplama ve çıkarma
// kullanarak kalanlı bölme yapan program.

// var a = Number(prompt("A degerini giriniz:")); // 9
// var b = Number(prompt("B degerini giriniz:")); // 4

// var kalan = a;

// var bolum = 0;

// while(kalan>=b) {
//     kalan -= b;
//     bolum++;
// }

// console.log("Kalan:",kalan);
// console.log("Bolum:",bolum);


// 6-) Klavyeden girilen A ve B gibi iki sayının çarpma işlemi kullanmadan sadece toplama ve çıkarma
// kullanarak çarpıp yazdıran program.

// var a = Number(prompt("A degerini giriniz:"));
// var b = Number(prompt("B degerini giriniz:"));

// var toplam = 0;

// for (var index = 1; index <= a; index++) {
   
//    toplam += b; 
// }

// console.log(toplam);

// 7-) Sıfır - 0 girilinceye kadar klavyeden girilen değerlerin ortalamasını hesaplayıp yazdıran program.

// var toplam = 0, sayac = 0;

// do {
//     var i = Number(prompt("sayi giriniz:"));
//     if(i === 0 ) {
//         break; 
//     }     
//         toplam += i;
//         sayac++;

// } while (true);

// console.log(toplam/sayac);

// 8-) Klavyeden girilecek 20 sayının tek olanlarını ayrı çift olanlarını ayrı toplayıp yazdıran program.

// var tekTotal = 0, ciftTotal = 0;

// for (var i = 0; i<20; i++) {
    
//     var sayi = Number(prompt("Deger giriniz:"));

//     if(sayi %2 == 0) {
//         ciftTotal += sayi;
//     }
//     else if(sayi %2 == 1) {
//         tekTotal += sayi;
//     }
// }

// console.log("Ciftlerin toplami=",ciftTotal);
// console.log("Teklerin toplami=",tekTotal);

// 9-) Klavyeden girilecek iki pozitif sayının OBEB ini bulan program.

// var a = Number(prompt("Birinci degeri giriniz:"));
// var b = Number(prompt("İkinci degeri giriniz:"));

// var enb ;

// var toplam = 0;
// if (a >= b) {enb = a;}
// else if(b > a) {enb = b;}


// for (var i = 1; i<= enb; i++) {
//     if(a%i == 0 && b%i == 0) {
//         console.log(i)
//     }
//     toplam+= i;
// }
// console.log("Girilen sayilarin OBEB'i",toplam);

// 10-) Klavyeden girilecek bir sayının tek mi çift mi olduğunu bulan program.

// var sayi = Number(prompt("Bir sayi giriniz:"));

// if(sayi%2 == 0) {
//     console.log(sayi," cift sayidir.");
// }
// else {
//     console.log(sayi,"tek sayidir.");
// }


