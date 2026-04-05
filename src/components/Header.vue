<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
    isDark.value = !isDark.value
    const htmlClass = document.documentElement.classList
    if (isDark.value) {
        htmlClass.add('dark')
        localStorage.theme = 'dark'
    } else {
        htmlClass.remove('dark')
        localStorage.theme = 'light'
    }
}

onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    }
})
</script>
<template>
    <!-- 导航栏区块：支持毛玻璃效果和固定顶部 -->
    <header class="border-b border-stone-200 dark:border-stone-700 backdrop-blur-sm sticky top-0 z-10">
        <div class="bg-white/70 dark:bg-stone-900/80">
            <div class="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

                <div class="flex items-center gap-3">
                    <img src="../assets/vite.svg" alt=""
                        class="w-10 h-10 rounded-lg shadow-sm dark:shadow-stone-800/50">
                    <span class="font-medium text-xl tracking-tight text-stone-800 dark:text-stone-100">北欧家具</span>
                </div>


                <nav class="hidden md:flex items-center gap-8 text-stone-700 dark:text-stone-300 font-medium">
                    <div class="relative group">
                        <button
                            class="flex items-center gap-1 hover:text-amber-800 dark:hover:text-amber-400 transition py-2">
                            产品系列
                            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7">
                                </path>
                            </svg>
                        </button>
                        <div
                            class="absolute left-0 mt-1 w-56 bg-white/95 dark:bg-stone-800/95 backdrop-blur-sm rounded-xl shadow-lg border border-stone-200 dark:border-stone-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                            <div class="py-2">
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">客厅系列</a>
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">餐厅系列</a>
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">卧室系列</a>
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">书房/办公</a>
                                <hr class="my-1 border-stone-100 dark:border-stone-700">
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">定制专属</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="hover:text-amber-800 dark:hover:text-amber-400 transition py-2">关于我们</a>
                    <div class="relative group">
                        <button
                            class="flex items-center gap-1 hover:text-amber-800 dark:hover:text-amber-400 transition py-2">
                            服务支持
                            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7">
                                </path>
                            </svg>
                        </button>
                        <div
                            class="absolute left-0 mt-1 w-56 bg-white/95 dark:bg-stone-800/95 backdrop-blur-sm rounded-xl shadow-lg border border-stone-200 dark:border-stone-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                            <div class="py-2">
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">预约展厅</a>
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">售后服务</a>
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">常见问题</a>
                                <a href="#"
                                    class="block px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-400 transition">木材保养指南</a>
                            </div>
                        </div>
                    </div>
                </nav>


                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-4">
                        <button @click="toggleTheme"
                            class="w-10 p-2 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition active:scale-95">
                            <i :class="isDark ? 'fas fa-moon' : 'fas fa-sun'"
                                class="text-stone-700 dark:text-stone-300"></i>
                        </button>
                    </div>


                    <a href="#contact"
                        class="hidden md:inline-block bg-amber-800 hover:bg-amber-900 dark:bg-amber-700 dark:hover:bg-amber-600 text-stone-50 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition">获取灵感</a>


                    <button id="mobile-menu-open" aria-label="打开菜单"
                        class="md:hidden p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition active:scale-95">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>