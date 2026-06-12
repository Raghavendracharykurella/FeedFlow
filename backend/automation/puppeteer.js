import puppeteer from 'puppeteer';

export async function runAutomation(userId, interests) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://www.instagram.com');
  // login logic here...

  for (const interest of interests) {
    await page.goto(`https://www.instagram.com/explore/tags/${interest}`);
    const posts = await page.$$('article a');
    for (let i = 0; i < 3; i++) {
      await posts[i].click();
      await page.waitForSelector('svg[aria-label="Like"]');
      await page.click('svg[aria-label="Like"]');
      await page.goBack();
    }
  }

  await browser.close();
}
