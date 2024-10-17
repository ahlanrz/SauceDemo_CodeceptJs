Feature('Login Test');

Scenario('Login valid', async ({ I }) => {

    I.amOnPage('https://www.saucedemo.com/');
    // Mengisi field username dan password dengan data valid
    I.fillField('user-name', 'standard_user');
    I.fillField('password', 'secret_sauce');

    // Klik tombol login
    I.click('#login-button');

    // Verifikasi apakah login berhasil dengan melihat elemen spesifik di halaman berikutnya
    I.seeElement('.inventory_list'); // Misalnya melihat daftar produk sebagai indikasi login sukses

  });

  // });