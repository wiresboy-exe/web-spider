var Spider = require('node-spider');
var express = require('express');
const { URL } = require("url");
var app = express();
var fs = require('fs');

let base = ["google.com", "facebook.com", "amazon.com", "imdb.com", "apple.com", "merriam-webster.com", "pinterest.com", "dictionary.com", "tripadvisor.com", "yahoo.com", "yelp.com", "linkedin.com", "britannica.com", "microsoft.com", "espn.com", "weather.com", "healthline.com", "craigslist.org", "webmd.com", "homedepot.com", "cambridge.org", "cricbuzz.com", "whatsapp.com", "bbc.com", "walmart.com", "thefreedictionary.com", "espncricinfo.com", "wiktionary.org", "ytmp3.cc", "gsmarena.com", "timeanddate.com", "rottentomatoes.com", "mayoclinic.org", "netflix.com", "thesaurus.com", "xnxx.com", "livescore.com", "investopedia.com", "indeed.com", "indiatimes.com", "bestbuy.com", "spanishdict.com", "ebay.com", "dominos.com", "cdc.gov", "thepiratebay.org", "flashscore.com", "about.google", "samsung.com", "about.fb.com", "nih.gov", "cnn.com", "ndtv.com", "speedtest.net", "roblox.com", "unsplash.com", "theguardian.com", "steampowered.com", "marketwatch.com", "techradar.com", "playstation.com", "cnet.com", "blog.google", "yourdictionary.com", "adobe.com", "mcdonalds.com", "expedia.com", "booking.com", "goodhousekeeping.com", "globo.com", "spotify.com", "premierleague.com", "tiktok.com", "friv.com", "lowes.com", "bloomberg.com", "soundcloud.com", "twitch.tv", "github.com", "usnews.com", "caranddriver.com", "nba.com", "xe.com", "vocabulary.com", "nintendo.com", "nordstrom.com", "reverso.net", "wellsfargo.com", "deepl.com", "kayak.com", "santanderbank.com", "allrecipes.com", "businessinsider.com", "goodreads.com", "forbes.com", "usps.com", "airbnb.com", "geology.com"]

let sites = []
 
var spider = new Spider({
    // How many requests can be run in parallel
    concurrent: 10,
    // How long to wait after each request
    delay: 0,
    // A stream to where internal logs are sent, optional
    logs: process.stderr,
    // Re-visit visited URLs, false by default
    allowDuplicates: false,
    // If `true` all queued handlers will be try-catch'd, errors go to `error` callback
    catchErrors: true,
    // If `true` the spider will set the Referer header automatically on subsequent requests
    addReferrer: false,
    // If `true` adds the X-Requested-With:XMLHttpRequest header
    xhr: false,
    // If `true` adds the Connection:keep-alive header and forever option on request module
    keepAlive: false,
    // Called when there's an error, throw will be used if none is provided
    error: function(err, url) {
    },
    // Called when there are no more requests
    done: function() {
    },
 
    //- All options are passed to `request` module, for example:
    headers: { 'user-agent': 'node-spider' },
    encoding: 'utf8'
});
 
var handleRequest = function(doc) {
    // new page crawled
    //console.log(doc.res); // response object
    console.log(doc.url);
    sites.push(doc.url) // page url
    // uses cheerio, check its docs for more info
    doc.$('a').each(function(i, elem) {
        // do stuff with element
        var href = doc.$(elem).attr('href').split('#')[0];
        var url = doc.resolve(href);
        // crawl more
        spider.queue(url, handleRequest);
    });
};
 
// start crawling
spider.queue('https://google.com')  
spider.queue('https://facebook.com')
spider.queue('https://amazon.com')  
spider.queue('https://imdb.com')    
spider.queue('https://apple.com')   
spider.queue('https://merriam-webster.com')
spider.queue('https://pinterest.com')
spider.queue('https://dictionary.com')
spider.queue('https://tripadvisor.com')
spider.queue('https://yahoo.com')
spider.queue('https://yelp.com')
spider.queue('https://linkedin.com')
spider.queue('https://britannica.com')
spider.queue('https://microsoft.com')
spider.queue('https://espn.com')
spider.queue('https://weather.com')
spider.queue('https://healthline.com')
spider.queue('https://craigslist.org')
spider.queue('https://webmd.com')
spider.queue('https://homedepot.com')
spider.queue('https://cambridge.org')
spider.queue('https://cricbuzz.com')
spider.queue('https://whatsapp.com')
spider.queue('https://bbc.com')
spider.queue('https://walmart.com')
spider.queue('https://thefreedictionary.com')
spider.queue('https://espncricinfo.com')
spider.queue('https://wiktionary.org')
spider.queue('https://ytmp3.cc')
spider.queue('https://gsmarena.com')
spider.queue('https://timeanddate.com')
spider.queue('https://rottentomatoes.com')
spider.queue('https://mayoclinic.org')
spider.queue('https://netflix.com')
spider.queue('https://thesaurus.com')
spider.queue('https://xnxx.com')
spider.queue('https://livescore.com')
spider.queue('https://investopedia.com')
spider.queue('https://indeed.com')
spider.queue('https://indiatimes.com')
spider.queue('https://bestbuy.com')
spider.queue('https://spanishdict.com')
spider.queue('https://ebay.com')
spider.queue('https://dominos.com')
spider.queue('https://cdc.gov')
spider.queue('https://thepiratebay.org')
spider.queue('https://flashscore.com')
spider.queue('https://about.google')
spider.queue('https://samsung.com')
spider.queue('https://about.fb.com')
spider.queue('https://nih.gov')
spider.queue('https://cnn.com')
spider.queue('https://ndtv.com')
spider.queue('https://speedtest.net')
spider.queue('https://roblox.com')
spider.queue('https://unsplash.com')
spider.queue('https://theguardian.com')
spider.queue('https://steampowered.com')
spider.queue('https://marketwatch.com')
spider.queue('https://techradar.com')
spider.queue('https://playstation.com')
spider.queue('https://cnet.com')
spider.queue('https://blog.google')
spider.queue('https://yourdictionary.com')
spider.queue('https://adobe.com')
spider.queue('https://mcdonalds.com')
spider.queue('https://expedia.com')
spider.queue('https://booking.com')
spider.queue('https://goodhousekeeping.com')
spider.queue('https://globo.com')
spider.queue('https://spotify.com')
spider.queue('https://premierleague.com')
spider.queue('https://tiktok.com')
spider.queue('https://friv.com')
spider.queue('https://lowes.com')
spider.queue('https://bloomberg.com')
spider.queue('https://soundcloud.com')
spider.queue('https://twitch.tv')
spider.queue('https://github.com')
spider.queue('https://usnews.com')
spider.queue('https://caranddriver.com')
spider.queue('https://nba.com')
spider.queue('https://xe.com')
spider.queue('https://vocabulary.com')
spider.queue('https://nintendo.com')
spider.queue('https://nordstrom.com')
spider.queue('https://reverso.net')
spider.queue('https://wellsfargo.com')
spider.queue('https://deepl.com')
spider.queue('https://kayak.com')
spider.queue('https://santanderbank.com')
spider.queue('https://allrecipes.com')
spider.queue('https://businessinsider.com')
spider.queue('https://goodreads.com')
spider.queue('https://forbes.com')
spider.queue('https://usps.com')
spider.queue('https://airbnb.com')
spider.queue('https://geology.com')

setInterval(function(){
    

    fs.readFile('./sites.json', 'utf8', function(err, data){
        let sites1 = JSON.stringify(sites.concat(JSON.parse(data)));

        fs.writeFile("./sites.json", sites1, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully");
                sites = []
            }
        });
    });
}, 15000)

app.get('/', async function(req, res){
    res.send('<center><h1>ItzWiresDev#6193</h1><hr />This server is part of the <a href="https://wiresdev.ga">wiresdev</a> network</center>')
})

app.get('/api', async function(req, res){
    fs.readFile('./sites.json', 'utf8', function(err, data){
        let sites1 = sites.concat(JSON.parse(data));

        res.json(sites1)
    });
})

app.get('/api/dumped', async function(req, res){
    fs.readFile('./sites.json', 'utf8', function(err, data){
        res.json(JSON.parse(data))
    });
})

app.get('/api/mem', async function(req, res){
    res.json(sites)
})

app.get('/api/addSite', async function(req, res){
    let url = new URL("https://api.wiresdev.ga" + req.url);
    let s = url.searchParams.get("s");

    spider.queue(s, handleRequest);

    res.json({yay: "it worked! (i think)"})
})

app.listen(80)
