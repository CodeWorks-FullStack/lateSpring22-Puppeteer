const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.etsy.com/', {
    waitUntil: "networkidle2",
  })
  await page.waitForSelector('#global-enhancements-search-query')
  await page.type('#global-enhancements-search-query', 'Cat Hats')
  await page.click('#gnav-search button:last-child')
  await page.waitForNavigation({ waitUntil: 'networkidle2' })

  await page.screenshot({ path: 'results.png' })




  await browser.close()
})()