const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    otherLanguages: ['sv'],
    localeSubpaths: {
        en: 'en',
        sv: 'sv'
    },
})