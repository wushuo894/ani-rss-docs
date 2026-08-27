// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';

import Layout from './Layout.vue';

// 引入 Element Plus
import plugin, {ID_INJECTION_KEY, ZINDEX_INJECTION_KEY} from 'element-plus'
import "element-plus/dist/index.css";
import {zhCn} from "element-plus/es/locale/index";
// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'

import {NProgress} from 'nprogress-v2'
import 'nprogress-v2/dist/index.css'
import {inBrowser} from "vitepress"

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './custom.css';

/** @type {import('vitepress').Theme} */
export default {
    Layout,
    extends: DefaultTheme,
    enhanceApp({app, router}) {
        app.use(plugin, {
            locale: zhCn
        })
        app.provide(ID_INJECTION_KEY, {prefix: 1024, current: 0})
        app.provide(ZINDEX_INJECTION_KEY, {current: 0})

        // 引入图标
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }

        if (inBrowser) {
            NProgress.configure({showSpinner: false})
            router.onBeforeRouteChange = () => {
                NProgress.start()
            }
            router.onAfterRouteChanged = () => {
                NProgress.done()
            }
        }
    }
};
