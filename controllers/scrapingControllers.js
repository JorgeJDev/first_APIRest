// const puppeteer = require("puppeteer");

// async function searchGoogle() {
//   // Se abre el chromium.
//   const browser = await puppeteer.launch();

//   // Abre una nueva página/pestaña en el navegador.
//   const page = await browser.newPage();

//   // Para ir a una página en concreto.
//   await page.goto("https://www.metacritic.com/");

//   // Para hacer click al mensaje de cookies.
//   await page.click("#onetrust-accept-btn-han.dler");

//   //Acceder al buscador de amazon por su selector. ('Selector','Búsqueda').
//   await page.type("#primary_search_box", "zelda");

//   //Click del botón de la búsqueda.
//   await page.click("#primary_menu_item_search input");

//   //Esperamos que se cargue la página, ya que sino no encuentra nada.
//   await page.waitForNavigation();

//   //Recogemos en un array de las imágenes de los libros.
//   const urlImg = await page.$$eval("img.s-image", (urlImg) =>
//     urlImg.map((img) => img.src)
//   );

//   //Recogemos en un array los títulos.
//   const titulos = await page.$$eval("h2 span", (titles) =>
//     titles.map((title) => title.innerHTML)
//   );

//   //Recogemos en un array el precio.
//   const precios = await page.$$eval(".a-price-whole", (precios) =>
//     precios.map((precio) => precio.innerHTML)
//   );

//   const arrayLibros = [];
//   for (let i = 0; i < precios.length; i++) {
//     const datosLibro = {
//       titulo: titulos[i],
//       img: urlImg[i],
//       precio: precios[i],
//     };
//     arrayLibros.push(datosLibro);
//   }
//   console.log(arrayLibros);

//   //Se cierra el navegador.
//   await browser.close();
// }
// searchGoogle();