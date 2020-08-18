const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  // strictMode: true,
  // defaultLanguage: 'en',
  otherLanguages: ['de', 'fr'],
  browserLanguageDetection: true,
  detection: {
    lookupCookie: 'language',
    lookupQuerystring: 'lng',
    lookupLocalStorage: 'lang',
    lookupSessionStorage: 'languages',
    order: [
      'cookie',
      'localStorage',
      'querystring',
      'sessionStorage',
      'navigator',
      'htmlTag',
      'path',
      'subdomain',
    ],
    // order: ['navigator', 'localStorage', 'cookie', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie'],
    // excludeCacheFor: ['cimode'],
  },
  // keySeparator: false,
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});
