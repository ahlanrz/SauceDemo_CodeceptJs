Feature('add_to_cart');

Scenario('TCC002-Add to Cart',  async ({ I }) => {

    // Menggunakan sesi login yang sama tanpa login ulang
    // I.useSession('user_valid_session', async () => {
    I.amOnPage('https://www.saucedemo.com/inventory.html');  // Langsung ke halaman produk
    I.seeElement('.inventory_list');  // Pastikan halaman produk terlihat

    I.click('#add-to-cart-sauce-labs-backpack'); //pilih item pertama
    I.click('#add-to-cart-sauce-labs-bike-light'); //pilih item kedua
    I.click('//*[@id="shopping_cart_container"]/a'); //click icon keranjang
    I.see('Your Cart');

    
});
// });