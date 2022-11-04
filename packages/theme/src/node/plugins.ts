import { autoFrontmatterPlugin } from '@vuepress-plume/vuepress-plugin-auto-frontmatter'
import { baiduTongjiPlugin } from '@vuepress-plume/vuepress-plugin-baidu-tongji'
import { blogDataPlugin } from '@vuepress-plume/vuepress-plugin-blog-data'
import { caniusePlugin } from '@vuepress-plume/vuepress-plugin-caniuse'
import { copyCodePlugin } from '@vuepress-plume/vuepress-plugin-copy-code'
import { windiCSSPlugin } from '@vuepress-plume/vuepress-plugin-windicss'
import type { App, PluginConfig } from '@vuepress/core'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { gitPlugin } from '@vuepress/plugin-git'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { palettePlugin } from '@vuepress/plugin-palette'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { searchPlugin } from '@vuepress/plugin-search'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { getDirname, path } from '@vuepress/utils'
import { commentPlugin } from 'vuepress-plugin-comment2'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import type {
  PlumeThemeLocaleOptions,
  PlumeThemePluginOptions,
} from '../shared/index.js'
import autoFrontmatter from './autoFrontmatter.js'

const __dirname = getDirname(import.meta.url)

export const setupPlugins = (
  app: App,
  options: PlumeThemePluginOptions,
  localeOptions: PlumeThemeLocaleOptions
): PluginConfig => {
  const isProd = !app.env.isDev

  return [
    palettePlugin({ preset: 'sass' }),
    windiCSSPlugin(path.resolve(__dirname, '../client/windi.config.js')),
    themeDataPlugin({ themeData: localeOptions }),
    autoFrontmatterPlugin(autoFrontmatter(app, localeOptions)),
    blogDataPlugin({
      include: ['**/*.md'],
      exclude: ['**/{README,index}.md', 'notes/**'],
    }),
    activeHeaderLinksPlugin({
      headerLinkSelector: 'a.theme-plume-toc-link',
      headerAnchorSelector: '.header-anchor',
      delay: 200,
      offset: 20,
    }),

    options.nprogress !== false ? nprogressPlugin() : [],

    options.git !== false
      ? gitPlugin({
          createdTime: true,
          updatedTime: true,
          contributors: false,
        })
      : [],

    options.mediumZoom !== false
      ? mediumZoomPlugin({
          selector: '.page-content > img, .page-content :not(a) > img',
          zoomOptions: {
            background: 'var(--c-bg)',
          },
          delay: 300,
        })
      : [],

    options.caniuse !== false
      ? caniusePlugin(
          options.caniuse || {
            mode: 'embed',
          }
        )
      : [],

    options.externalLinkIcon !== false
      ? externalLinkIconPlugin({
          locales: Object.entries(localeOptions.locales || {}).reduce(
            (result: Record<string, any>, [key, value]) => {
              result[key] = {
                openInNewWindow:
                  value.openInNewWindow ?? localeOptions.openInNewWindow,
              }
              return result
            },
            {}
          ),
        })
      : [],

    options.search !== false ? searchPlugin(options.search) : [],
    options.docsearch !== false && !options.search
      ? docsearchPlugin(options.docsearch!)
      : [],
    options.prismjs !== false ? prismjsPlugin() : [],
    options.copyCode !== false
      ? copyCodePlugin({
          selector: '.page-content div[class*="language-"] pre',
          locales: {
            '/': {
              copy: '复制成功',
              hint: '复制代码',
            },
          },
          ...options.copyCode,
        })
      : [],

    options.markdownEnhance !== false
      ? mdEnhancePlugin(
          Object.assign(
            {
              container: true, // info note tip warning danger details
              codetabs: true,
              tabs: true,
              align: true,
              mark: true,
              tasklist: true,
              demo: true,
              attrs: true,
            },
            options.markdownEnhance || {}
          )
        )
      : [],

    options.comment !== false ? commentPlugin(options.comment || {}) : [],

    options.baiduTongji !== false && options.baiduTongji?.key
      ? baiduTongjiPlugin(options.baiduTongji)
      : [],

    options.sitemap !== false && localeOptions.hostname && isProd
      ? sitemapPlugin({
          hostname: localeOptions.hostname,
        })
      : [],
    options.seo !== false && localeOptions.hostname && isProd
      ? seoPlugin({
          hostname: localeOptions.hostname || '',
          author: localeOptions.avatar?.name,
        })
      : [],
  ]
}
