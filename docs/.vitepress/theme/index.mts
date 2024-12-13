// .vitepress/theme/index.mts
import DefaultTheme from 'vitepress/theme';
import BottomLayout from './layout/BottomLayout.vue';
import "./style.css";
import "./tailwind.css";

export default {
    extends: DefaultTheme,
    // 使用注入插槽的包装组件覆盖 Layout
    Layout: BottomLayout
}