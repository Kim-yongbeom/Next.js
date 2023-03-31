/** @type {import('next-sitemap').IConfig} */
// package.json 에 "postbuild": "next-sitemap", 추가
module.exports = {
    siteUrl: 'http://localhost:3000/',
    generateRobotsTxt: true
}