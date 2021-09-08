const puppeteer = require('puppeteer');
const tfile = require("./tutorial_file.js");



describe("Setup Testing",()=>{

    //beforeAll(() => jest.setTimeout(600000));

    // it("Home landing page",async()=>{
    //     //jest.setTimeout(600000);
    //     const browser = await puppeteer.launch({
    //         headless: false,
    //         defaultViewport: null,
    //         //executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    //         args: ["--start-maximized"],
    //     }); //browser is launched

    //     var page = await browser.newPage(); // a new page is created

    //     //when headless=true
    //     //   await page.setViewport({
    //     //     width: 1920,
    //     //     height: 1080,
    //     //     deviceScaleFactor: 1,
    //     //   });

    //     // Configure the navigation timeout
    //     await page.setDefaultNavigationTimeout(0);
    //     await page.goto("https://tailwinduikit.com/");
    //     await page.waitForTimeout(3000); // delay for 3 second for website to load

    //     await browser.close();
    // });//end of it

        it("file export", async () => {
            //jest.useFakeTimers();
            console.log(tfile.testing());
           
        });

});