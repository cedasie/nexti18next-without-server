const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  detection: {
    lookupCookie: 'language',
    order: ['localStorage', 'cookie', 'navigator', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'],
  },
  keySeparator: false,
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});
