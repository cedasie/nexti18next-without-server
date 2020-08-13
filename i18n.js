const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths,
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
    caches: ['cookie'],
    excludeCacheFor: ['cimode'],
  },
  localePath: path.resolve('./public/static/locales'),
});
