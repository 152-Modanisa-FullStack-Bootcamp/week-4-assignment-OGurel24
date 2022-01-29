const {Then, When, Given} = require("cucumber");
const puppeteer = require('puppeteer');
const assert = require("assert");

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    const browser = await puppeteer.launch()
    this.page = await browser.newPage();
    await this.page.goto('http://192.168.1.240:8080/');
});

When(/^page is loaded$/, async function () {
    await this.page.waitForNavigation();

});
Then(/^User can see some of videos' title like$/, function () {
    this.videos = this.page.$$('.video-content')
    this.assert(videos.length > 0)
});

Given(/^that User is on Video Site Project's HomePage$/, async function () {
    const browser = await puppeteer.launch()
    this.page = await browser.newPage();
    await this.page.goto('http://192.168.1.240:8080/');
});
When(/^User clicks "([^"]*)" video$/, async function () {
    const videos = this.page.$$('.video-content')
    await videos[0].click()
});
Then(/^User should see watch url correctly$/, function () {
    const url = this.page.url()
    this.assert(url.includes('-video-')) // Video link should contain -video- substring
});
When(/^User hovers "([^"]*)" video$/, async function (videoName) {
    const videoElement = await this.page.$('#')
    await videoElement.click()
});
Then(/^User should see hovered image$/, async function () {
    const image = await this.page.$$('.videoImage')
    assert(image.length === 1)
});