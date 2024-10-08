

let product = Number(prompt('Ürünün fiyatını giriniz:'));

let discount = Number(prompt("Ürüne yapılıcak olan indirim oranını giriniz. (İndirim oranını, '%' işaretini kullanmadan sadece sayı olarak yazınız.)"));

let newprice = product - (product * discount / 100);

alert('İndirimli fiyat: ' + newprice);





let vize = Number(prompt('Vize notunuzu giriniz.'));

let final = Number(prompt('Final notunuzu giriniz.'));

let average = ((vize * 40 / 100) + (final * 60 / 100));

if(average > 50) {
  alert('Not ortalamanız: ' + average + ' geçtiniz, tebrikler!');
} else if(average < 50 && average > 40) {
  alert('Not ortalamanız: ' + average + ' şartlı geçtiniz.');
} else if(average < 40) {
  alert('Not ortalamanız: ' + average + ' kaldınız.');
}





let sayi1 = Number(prompt("Birinci sayıyı girin:"));
let sayi2 = Number(prompt("İkinci sayıyı girin:"));
let sayi3 = Number(prompt("Üçüncü sayıyı girin:"));


let enBuyuk = Math.max(sayi1, sayi2, sayi3);

alert("En büyük sayı: " + enBuyuk);




let saniye = Number(prompt('Herhangi bir saniye cinsinden değer giriniz'));









let calisilanSaat = Number(prompt('Çalıştığınız saat sayısını (sayı olarak) giriniz.'));

let saatlikUcret = Number(prompt('Saatlik ücretinizi TL cinsinden sayı olarak giriniz.'));

let maas = calisilanSaat * saatlikUcret;

alert('Toplam kazanç: ' + maas);






let krediToplam = Number(prompt('Toplam kredi miktarınızı giriniz.'));

let taksitSayisi = Number(prompt('Taksit sayınızı giriniz.'));

let faizOrani = Number(prompt('Faiz oranını giriniz.'));

let aylikOdeme = (krediToplam * (faizOrani * (1 + faizOrani))) * taksitSayisi / (1 + faizOrani) * (taksitSayisi - 1)
// kredi tutarı*(faiz*(1+faiz) taksit sayısı/(1+faiz) taksit sayısı-1) 







let kullaniciAdi = prompt('Kullanıcı adınızı belirleyiniz.');

let sifre = prompt('Sifrenizi belirleyiniz.');

if(kullaniciAdi === admin && sifre === 1234) {
  alert('Giriş başarılı.');
} else {
  alert('Kullanıcı adı veya şifre hatalı.');
}







let satisBedeli = Number(prompt("Satış bedelini girin."));
let maliyet = Number(prompt("Maliyeti girin (0 olabilir)."));

const kdvOrani = 0.20; 
const gelirVergisiOrani = 0.25; 

let kdvDahilToplam = satisBedeli * (1 + kdvOrani);

let brutKar = satisBedeli - maliyet;

let gelirVergisi = brutKar * gelirVergisiOrani;

let netKar = brutKar - gelirVergisi;

alert("KDV dahil toplam satış bedeli: " + kdvDahilToplam + " TL\nNet kar: " + netKar + " TL");
