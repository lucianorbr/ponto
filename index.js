const puppeteer = require('puppeteer');
const user = require("./user.json");

const CronJob = require('cron').CronJob

const job = new CronJob('* * * * *', () => {

    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('http://portaldoconsultor.altran.com.br/login');
        await page.waitFor('input[name="user_session[email]"]');
        await page.type('input[name="user_session[email]"]', ('user.login'), {delay: 100});
        await page.type('input[name="user_session[password]"]', ('user.password'), {delay: 100});
        await page.keyboard.press('Enter', {delay: 200});

        await browser.close({delay: 500})

    })();
},null, true, 'America/Sao_Paulo')
