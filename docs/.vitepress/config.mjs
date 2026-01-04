import {defineConfig} from 'vitepress'
import compression from 'vite-plugin-compression'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "ANI-RSS",
    titleTemplate: ":title - ANI-RSS 基于RSS自动追番、订阅、下载、刮削",
    description: "ANI-RSS 基于RSS自动追番、订阅、下载、刮削",
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {
            src: '/icon.svg',
            alt: 'logo',
        },
        nav: [
            {text: '首页', link: '/'},
            {
                text: '部署',
                items: [
                    {text: '部署程序', link: '/deploy/deploy'},
                    {text: 'Docker 部署', link: '/deploy/docker'},
                    {text: 'Windows 部署', link: '/deploy/windows'},
                    {text: '群晖 NAS 部署', link: '/deploy/dsm'},
                ]
            },
            {
                text: '功能说明',
                items: [
                    {text: '添加订阅', link: '/add-rss'},
                    {text: '下载设置', link: '/config/download'},
                    {text: '基本设置', link: '/config/basic/page'},
                    {text: '代理设置', link: '/config/proxy'},
                    {text: '登录设置', link: '/config/login'},
                    {text: '通知', link: '/config/notification'},
                ]
            },
            {
                text: '参与开发',
                items: [
                    {text: '基本流程', link: '/dev/basic'},
                    {text: '环境配置', link: '/dev/env'},
                    {text: '开始开发', link: '/dev/start'},
                    {text: '本地编译', link: '/dev/build'},
                ]
            },
            {text: '更新历史', link: '/history'},
            {text: '常见问题', link: '/faq'}
        ],
        sidebar: [
            {
                text: '部署',
                items: [
                    {text: '部署程序', link: '/deploy/deploy'},
                    {text: 'Docker 部署', link: '/deploy/docker'},
                    {text: 'Windows 部署', link: '/deploy/windows'},
                    {text: '群晖 NAS 部署', link: '/deploy/dsm'},
                ]
            },
            {
                text: '功能说明',
                items: [
                    {
                        text: '添加订阅',
                        link: '/add-rss',
                        items: [
                            {
                                text: '自定义集数匹配规则',
                                link: '/custom-episode'
                            }
                        ]
                    },
                    {
                        text: '下载设置',
                        link: '/config/download',
                        items: [
                            {text: 'qBittorrent', link: '/config/download/qbittorrent'},
                            {text: 'OpenList', link: '/config/download/openlist'},
                        ]
                    },
                    {
                        text: '基本设置',
                        items: [
                            {text: '页面设置', link: '/config/basic/page'},
                            {text: '添加订阅', link: '/config/basic/add'},
                            {text: '重命名设置', link: '/config/basic/rename'},
                            {text: 'RSS 设置', link: '/config/basic/rss'},
                            {text: 'Trackers', link: '/config/basic/trackers'},
                            {text: '其他', link: '/config/basic/other'},
                        ]
                    },
                    {text: '代理设置', link: '/config/proxy'},
                    {text: '登录设置', link: '/config/login'},
                    {text: '通知', link: '/config/notification'}
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
                    {text: '忘记密码', link: '/change-the-password'},
                    {text: '其他', link: '/other'}
                ]
            }
        ],
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/wushuo894/ani-rss'
            },
            {
                icon: 'telegram',
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
                                    navigateText: '切换',
                                    closeText: '关闭'
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
        },
        footer: {
            message: '基于 GPL-2.0 许可发布',
            copyright: 'Copyright © 2024-2025 wushuo894'
        },
        notFound: {
            quote: '页面不存在, 将在3秒后自动跳转到首页',
            linkText: '回到首页'
        }
    },
    head: [
        [
            "meta",
            {
                name: "author", content: "wushuo894,wushuo894@outlook.com"
            },
        ],
        [
            "meta",
            {
                name: "keywords",
                content: "ani-rss,ass,rss,动漫,动漫下载,qBittorrent"
            },
        ],
        // Open Graph
        ["meta", {property: "og:type", content: "website"}],
        ["meta", {property: "og:title", content: "ANI-RSS - 基于RSS自动追番、订阅、下载、刮削"}],
        ["meta", {property: "og:description", content: "ANI-RSS 基于RSS自动追番、订阅、下载、刮削"}],
        ["meta", {property: "og:url", content: "https://docs.wushuo.top"}],
        ["meta", {property: "og:site_name", content: "ANI-RSS"}],
        [
            "meta",
            {
                property: "og:image",
                content: "https://docs.wushuo.top/ani-rss.webp"
            },
        ],
        ["meta", {property: "og:image:width", content: "1280"}],
        ["meta", {property: "og:image:height", content: "640"}],
        ["meta", {property: "og:locale", content: "zh_CN"}],

        // Twitter Cards
        ["meta", {name: "twitter:card", content: "summary_large_image"}],
        ["meta", {name: "twitter:title", content: "ANI-RSS - 基于RSS自动追番、订阅、下载、刮削"}],
        ["meta", {name: "twitter:description", content: "ANI-RSS 基于RSS自动追番、订阅、下载、刮削"}],
        [
            "meta",
            {
                name: "twitter:image",
                content: "https://docs.wushuo.top/ani-rss.webp"
            },
        ],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-NDNNT54HQM', async: true}],
        ['script', {src: '/custom.js'}],
        ['meta', {name: "theme-color", id: "themeColorMeta", content: "#ffffff"}],
    ],
    lastUpdated: true,
    markdown: {
        image: {
            lazyLoading: false
        }
    },
    sitemap: {
        hostname: 'https://docs.wushuo.top'
    },
    vite: {
        plugins: [
            compression({
                // 输出压缩日志
                verbose: true,
                // 是否禁用压缩
                disable: false,
                // 对超过10KB的文件进行压缩
                threshold: 10240,
                // 使用gzip压缩
                algorithm: 'gzip',
                // 压缩后文件的扩展名
                ext: '.gz'
            }),
        ]
    }
})
