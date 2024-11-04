import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "ANI-RSS",
    description: "ANI-RSS",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/mikan-pic.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '快速开始', link: '/start'}
        ],
        sidebar: [
            {
                items: [
                    {text: '快速开始', link: '/start'},
                    {text: 'Docker部署', link: '/docker'},
                    {text: '使用说明', link: '/docs'},
                    {text: '参与开发', link: '/dev'},
                    {text: '常见问题', link: '/faq'},
                    {text: '相关文章', link: '/other'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/wushuo894/ani-rss'}
        ],
        search: {
            provider: 'local'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        editLink: {
            pattern: 'https://github.com/wushuo894/ani-rss-docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        outline: {
            level: 'deep',
            label: '页面导航'
        },
        head: [['link', { rel: 'icon', href: '/favicon.ico' }]]
    },
    lastUpdated: true,
    markdown: {
        image: {
            lazyLoading: true
        }
    }
})
