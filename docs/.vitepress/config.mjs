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
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/start'}
        ],
        sidebar: [
            {
                text: 'Examples',
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
        outline: {
            level: 'deep'
        }
    },
    lastUpdated: true
})
