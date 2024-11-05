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
            {text: '快速开始', link: '/start'},
            {text: '功能说明', link: '/add-rss'},
            {text: '常见问题', link: '/faq'}
        ],
        sidebar: [
            {
                text: '部署',
                items: [
                    {text: '快速开始', link: '/start'},
                    {text: '部署程序', link: '/deploy/deploy'},
                    {text: 'Docker部署', link: '/deploy/docker'},
                    {text: 'Windows', link: '/deploy/windows'},
                    {text: '群晖NAS', link: '/deploy/dsm'},
                ]
            },
            {
                text: '功能说明',
                items: [
                    {text: '添加订阅', link: '/add-rss'},
                    {text: '下载设置', link: '/config/download'},
                    {text: '基本设置', link: '/config/basic'},
                    {text: '代理设置', link: '/config/proxy'},
                    {text: '登录设置', link: '/config/login'},
                    {text: '通知', link: '/config/message'}
                ]
            },
            {
                items: [
                    {text: '参与开发', link: '/dev'},
                    {text: '常见问题', link: '/faq'},
                    {text: '其他', link: '/other'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/wushuo894/ani-rss'}
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
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
        head: [['link', {rel: 'icon', href: '/favicon.ico'}]]
    },
    lastUpdated: true,
    markdown: {
        image: {
            lazyLoading: true
        }
    }
})
