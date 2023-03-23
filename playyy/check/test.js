const { chromium } = require('playwright');

async function testFunction() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  const title = await page.title();
  console.log(`Title of the page is ${title}`);
  await browser.close();
}

module.exports = { testFunction };
