const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
    caches: ['cookie'],
    excludeCacheFor: ['cimode'],
  },
  keySeparator: false,

  localeSubpaths,

  localePath: path.resolve('./public/static/locales'),
});
