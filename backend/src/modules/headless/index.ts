import puppeteer from "puppeteer";

interface ScreenshotOptions {
  url: string;
  width: number;
  height: number;
  preview?: boolean;
  sleep?: number;
}

export const generateScreenshot = async ({
  url,
  width,
  height,
  sleep,
  preview,
}: ScreenshotOptions): Promise<string> => {
  try {
    // initialize
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // set viewport
    await page.setViewport({
      width: preview ? width * 0.2 : width,
      height: preview ? height * 0.2 : height,
    });

    // navigate to url
    await page.goto(url);

    // idle if sleep
    if (sleep && sleep > 0) {
      await page.waitFor(sleep);
    }

    // capture screenshot as base64
    const base64 = await page.screenshot({
      encoding: "base64",
      type: preview ? "jpeg" : "png",
      quality: preview ? 50 : undefined,
    });

    // close browser instance
    await browser.close();

    return Promise.resolve(base64);
  } catch (e) {
    return Promise.reject(e);
  }
};

/*
generateScreenshot({
  height: 720,
  width: 1280,
  url: "https://www.jsaari.com/",
  preview: true,
});
*/
