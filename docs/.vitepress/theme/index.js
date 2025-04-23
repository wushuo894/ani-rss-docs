// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';

import Layout from './Layout.vue';

// 引入 Element Plus
import ElementPlus from 'element-plus';
import "element-plus/dist/index.css";
import {zhCn} from "element-plus/es/locale/index";
// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'

import './custom.css';

/** @type {import('vitepress').Theme} */
export default {
    Layout,
    extends: DefaultTheme,
    enhanceApp({app}) {
        app.use(ElementPlus, {
            locale: zhCn,
        })
    }
};