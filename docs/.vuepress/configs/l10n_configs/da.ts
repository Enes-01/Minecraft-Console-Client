/* This file is automatically generated by "gen_configs.py" */
import type { SiteLocaleData  } from '@vuepress/shared'
import type { DefaultThemeLocaleData } from '@vuepress/theme-default'
import { headConfig } from '../head.js'

const Translation = require('../../translations/da.json')

export const mainConfig_da: SiteLocaleData  = {
    lang: 'da',
    title: Translation.title,
    description: Translation.description,
    head: headConfig
}

export const defaultThemeConfig_da: DefaultThemeLocaleData = {
    selectLanguageName: "Dansk",
    selectLanguageText: Translation.theme.selectLanguageText,
    selectLanguageAriaLabel: Translation.theme.selectLanguageAriaLabel,

    navbar: [
        {
            text: Translation.navbar.AboutAndFeatures,
            link: "/l10n/da/guide/",
        },
        
        {
            text: Translation.navbar.Installation,
            link: "/l10n/da/guide/installation.md",
        },
      
        {
            text: Translation.navbar.Usage,
            link: "/l10n/da/guide/usage.md",
        },
      
        {
            text: Translation.navbar.Configuration,
            link: "/l10n/da/guide/configuration.md",
        },
      
        {
            text: Translation.navbar.ChatBots,
            link: "/l10n/da/guide/chat-bots.md",
        },
    ],

    sidebar: [
        "/l10n/da/guide/README.md", 
        "/l10n/da/guide/installation.md", 
        "/l10n/da/guide/usage.md", 
        "/l10n/da/guide/configuration.md", 
        "/l10n/da/guide/chat-bots.md", 
        "/l10n/da/guide/creating-bots.md", 
        "/l10n/da/guide/contibuting.md"
    ],

    // page meta
    editLinkText: Translation.theme.editLinkText,
    lastUpdatedText: Translation.theme.lastUpdatedText,
    contributorsText: Translation.theme.contributorsText,

    // custom containers
    tip: Translation.theme.tip,
    warning: Translation.theme.warning,
    danger: Translation.theme.danger,

    // 404 page
    notFound: Translation.theme.notFound,
    backToHome: Translation.theme.backToHome,

    // a11y
    openInNewWindow: Translation.theme.openInNewWindow,
    toggleColorMode: Translation.theme.toggleColorMode,
    toggleSidebar: Translation.theme.toggleSidebar,
}
