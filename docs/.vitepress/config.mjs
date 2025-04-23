import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "ANI-RSS",
    titleTemplate: ":title - ANI-RSS 自动追番、订阅、下载 蜜柑RSS动漫",
    description: "ANI-RSS 自动追番、订阅、下载 蜜柑RSS动漫",
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {
            src: '/icon.svg',
            alt: 'logo',
        },
        nav: [
            {text: '首页', link: '/'},
            {text: '快速开始', link: '/start'},
            {text: '功能说明', link: '/add-rss'},
            {text: '更新历史', link: '/history'},
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
                    {
                        text: '下载设置',
                        link: '/config/download',
                        items: [
                            {text: 'qBittorrent', link: '/config/download/qbittorrent'},
                            {text: 'AList', link: '/config/download/alist'},
                        ]
                    },
                    {
                        text: '基本设置',
                        items: [
                            {text: '页面设置', link: '/config/basic/page'},
                            {text: '添加订阅', link: '/config/basic/add'},
                            {text: '重命名设置', link: '/config/basic/rename'},
                            {text: 'RSS设置', link: '/config/basic/rss'},
                            {text: 'Trackers', link: '/config/basic/trackers'},
                            {text: '其他', link: '/config/basic/other'},
                        ]
                    },
                    {text: '代理设置', link: '/config/proxy'},
                    {text: '登录设置', link: '/config/login'},
                    {text: '通知', link: '/config/message'}
                ]
            },
            {
                items: [
                    {
                        text: '参与开发',
                        items: [
                            {text: '基本流程', link: '/dev/basic'},
                            {text: '环境配置', link: '/dev/env'},
                            {text: '开始开发', link: '/dev/start'},
                            {text: '本地编译', link: '/dev/build'},
                        ]
                    },
                    {text: '常见问题', link: '/faq'},
                    {text: '更新历史', link: '/history'},
                    {text: '其他', link: '/other'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/wushuo894/ani-rss'},
            {
                icon: {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7l-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1l114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4l-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" fill="currentColor"></path></svg>`
                },
                link: "https://t.me/ani_rss"
            }
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
            pattern: 'https://github.com/wushuo894/ani-rss-docs/edit/master/docs/:path',
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
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-NDNNT54HQM', async: true}],
        ['script', {src: '/custom.js'}],
    ],
    lastUpdated: true,
    markdown: {
        image: {
            lazyLoading: false
        }
    }
})
