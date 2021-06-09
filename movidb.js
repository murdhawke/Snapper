const  puppeteer = require('puppeteer') //  Import Puppeteer libratry
const urls =  [
    {siteName:'Amos Cheruiyot', siteUrl:'https://practical-banach-93b4d1.netlify.app/' },
    { siteName:'Movidb', siteUrl:'https://festive-visvesvaraya-313350.netlify.app/'}
    
]
var i=0

    const screenshot =  async (i)=> {        //  Declare function to take the screenshot
        const browser =  await puppeteer.launch()           // Launch headless puppeteer
        const page =  await browser.newPage()           // Open a browser tab
        await page.goto(urls[i].siteUrl, {                           //Open the defined url
            waitUntil:"load",                           // Wait until all page content has loaded
            timeout:0                                   // Do not timeout the request
        })                
        await page.screenshot({                 //  Take a screenshot of the page
            path:'./'+urls[i].siteName+ '.png',                // Define params
            width:1024,
            height:768,
            fullPage:true

    })
    console.log('Screenshot  ' + urls[i].siteName + '  saved')
    await browser.close() 
}


while (i<urls.length) {
    screenshot(i)
    i++
}

