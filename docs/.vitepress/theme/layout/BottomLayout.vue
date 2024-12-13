<!--.vitepress/theme/layout/BottomLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #layout-bottom>
            <div class="text-center w-full text-sm/6 font-medium text-[--vp-c-text-2] p-8 border-t border-[#8d8b8b]">
                <div class="message">基于 MIT 许可证发布</div>
                <div class="copyright">
                    版权所有 © 2024
                    <a href="https://github.com/Torter">Torther</a>
                </div>
                <div><a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2021017838号</a></div>
            </div>
        </template>
    </Layout>
</template>