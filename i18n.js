const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  strictMode: true,
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  browserLanguageDetection: true,
  detection: {
    lookupCookie: 'language',
    order: ['cookie', 'header', 'querystring'],
    // order: ['navigator', 'localStorage', 'cookie', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'],
  },
  keySeparator: false,
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});
