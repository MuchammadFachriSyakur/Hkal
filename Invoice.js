 // Mengambil data dari sessionStorage
 const namaPelanggan = JSON.parse(sessionStorage.getItem('namaPelanggan'));
 const alamatPengiriman = JSON.parse(sessionStorage.getItem('alamatPengirim'));
 const email = JSON.parse(sessionStorage.getItem('email'));
 const telepon = JSON.parse(sessionStorage.getItem('telepon'));
 let ongkir = JSON.parse(sessionStorage.getItem('ongkir'));
 const bank = JSON.parse(sessionStorage.getItem('bank'));

 let rekeningInfo; // Variabel untuk menyimpan informasi rekening 
 let namaBank;

 switch (bank) {
     case 'bca':
         namaBank = 'Bank BCA';
         rekeningInfo = 'Bank BCA : 342 4435 165 4';
         break;
     case 'bni':
         namaBank = 'Bank BNI';
         rekeningInfo = 'Bank BNI : 2314 6534 876';
         break;
     case 'mandiri':
         namaBank = 'Bank Mandiri'; 
         rekeningInfo = 'Bank Mandiri : 231 543 876 753 2';
         break;
     case 'bri':
         namaBank = 'Bank BRI';
         rekeningInfo = 'Bank BRI : 0069 01 076521 56 0';
         break;
     default:
         namaBank = 'Lainnya';
         rekeningInfo = 'Bank Lain : Nomor Rekening Lain';               
 }

 const norek = JSON.parse(sessionStorage.getItem('norek'));
 const namaRekening = JSON.parse(sessionStorage.getItem('namaRekening'));
 const cabang = JSON.parse(sessionStorage.getItem('cabang'));

 // Menampilkan data di elemen HTML
 document.getElementById('invoice-nama').textContent = namaPelanggan;
 document.getElementById('invoice-alamat').textContent = alamatPengiriman;
 document.getElementById('invoice-email').textContent = email;
 document.getElementById('invoice-telepon').textContent = telepon;
 document.getElementById('invoice-rekening').textContent = rekeningInfo;
 document.getElementById('invoice-bank').textContent = namaBank;
 document.getElementById('invoice-rek').textContent = norek;
 document.getElementById('invoice-pengiriman').textContent = namaRekening;
 document.getElementById('invoice-cabang').textContent = cabang;
 document.getElementById('invoice-ongkir').textContent = `Rp ${ongkir}`;

 // Menampilkan Produk  dari KEranjang Belanja
 // Ambil daftar belanja dari Session Storage
 const keranjangBelanja = JSON.parse(sessionStorage.getItem('keranjangBelanja'));

 //Tampilkan daftar belanja pada halaman
 const daftarKeranjang = document.getElementById('daftar-keranjang');
 const totalBelanjanya = document.getElementById('total-belanjanya');
 let totalBelanja = 0;

 keranjangBelanja.forEach((produk) => {
     const itemProduk = document.createElement('tr'); 
     const seluruhHarga = produk.jumlah * produk.harga;
     itemProduk.innerHTML = `
     <td style='text-align: left; background-color: #fff; color: #000;'>${produk.nama}</td>
     <td style='text-align: center; background-color: #fff; color: #000;'>${produk.jumlah}</td>
     <td style='text-align: right; background-color: #fff; color: #000;'>Rp ${produk.harga.toLocaleString("id-ID")}</td>
     <td style='text-align: right; background-color: #fff; color: #000;'>Rp ${seluruhHarga.toLocaleString("id-ID")}</td>
     `;
     daftarKeranjang.appendChild(itemProduk);
     totalBelanja += (seluruhHarga);
 });

 totalBelanjanya.textContent = `Rp.${totalBelanja.toLocaleString("id-ID")}`;
 const totalBayar = totalBelanja + Number(ongkir);

 console.log(typeof (Number(ongkir.toLocaleString("id-ID"))));
console.log(typeof (totalBelanja.toLocaleString("id-ID")));
console.log(typeof (totalBayar.toLocaleString("id-ID")));

 document.getElementById('invoice-total').textContent = `Rp ${totalBayar.toLocaleString("id-ID")}`;
 document.getElementById('total-bayar').textContent = `Rp ${totalBayar.toLocaleString("id-ID")}`;

 // Fungsi untuk mencetak halaman 
 function cetakInvoice(divName) {
     // window.print();
     var printContents = document.getElementById('divName').innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;
     window.print();

     document.body.innerHTML = originalContents;
 }