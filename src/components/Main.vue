<template>
    <main>
        <!-- Hero 区块：首屏视觉大图与核心品牌词 -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div
                class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div class="flex-1 text-center lg:text-left">
                    <h1
                        class="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 dark:text-stone-100 leading-tight">
                        斯堪的纳维亚的呼吸<br>把森林请进家里</h1>
                    <p class="text-lg md:text-xl text-stone-600 dark:text-stone-400 mt-6 max-w-2xl lg:mx-0 mx-auto">
                        纯手工橡木家具，每一条纹理都记录着北纬60°的阳光与风雪。环保涂层，耐用五十年。</p>
                    <p class="text-stone-500 dark:text-stone-400 mt-2">从奥斯陆到哥本哈根，北欧设计事务所共同研发</p>
                    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
                        <a href="#"
                            class="w-full sm:w-auto text-center bg-amber-800 hover:bg-amber-900 dark:bg-amber-700 dark:hover:bg-amber-600 text-white font-medium px-8 py-3.5 rounded-full shadow-md transition">探索系列</a>
                        <a href="#"
                            class="w-full sm:w-auto text-center border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 font-medium px-8 py-3.5 rounded-full transition">预约展厅</a>
                    </div>
                </div>
                <div class="flex-1">
                    <img src="https://images.unsplash.com/photo-1560185009-5bf9f2849488?q=60&w=900&auto=format&fit=crop"
                        alt="北欧客厅橡木家具"
                        class="rounded-3xl shadow-xl object-cover w-full h-auto border-8 border-white/50 dark:border-stone-700/50 transition-shadow duration-300 hover:shadow-2xl">
                </div>
            </div>
        </section>

        <!-- 图文内容区块 1：工艺细节展示 (榫卯技术) -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="bg-white/60 dark:bg-stone-800/40">
                <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=30&w=900&h=600&auto=format&fit=crop"
                            alt="榫卯工艺细节" loading="lazy"
                            class="rounded-2xl shadow-sm object-cover w-full h-auto border-4 border-white dark:border-stone-700 transition-shadow duration-300 hover:shadow-2xl">
                    </div>
                    <div>
                        <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">每处榫卯，皆不言而喻</h2>
                        <p class="text-stone-600 dark:text-stone-400 mt-5 text-lg leading-relaxed">
                            传承自北欧细木作工坊，无钉结构经得起数十年热胀冷缩。桌面保留手工凿痕，触感如森林树皮。</p>
                        <div class="flex flex-wrap gap-3 mt-6">
                            <span
                                class="bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 text-sm px-4 py-2 rounded-full flex items-center gap-1"><span
                                    class="text-base">🪚</span> 燕尾榫</span>
                            <span
                                class="bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 text-sm px-4 py-2 rounded-full flex items-center gap-1"><span
                                    class="text-base">🧴</span> 有机木蜡油</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 图文内容区块 2：产品功能展示 (收纳系统) -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
                <div class="order-2 md:order-1">
                    <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">隐藏收纳，与墙共生</h2>
                    <p class="text-stone-600 dark:text-stone-400 mt-5 text-lg">
                        模块化边柜系统，自由组合高度，预留电线孔位。让北欧极简告别杂乱，每一件器物都有它的归属。</p>
                    <div class="flex flex-wrap gap-3 mt-6">
                        <span
                            class="bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-sm px-4 py-2 rounded-full">🪴
                            植物架兼容</span>
                        <span
                            class="bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-sm px-4 py-2 rounded-full">🔌
                            隐藏插座仓</span>
                    </div>
                </div>
                <div class="order-1 md:order-2">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=30&w=900&h=600&auto=format&fit=crop"
                        alt="北欧客厅收纳柜" loading="lazy"
                        class="rounded-2xl shadow-sm object-cover w-full h-auto border-4 border-white dark:border-stone-700 transition-shadow duration-300 hover:shadow-2xl">
                </div>
            </div>
        </section>

        <!-- 产品焦点区块：核心单品展示 (卧室床架) -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="bg-stone-100 dark:bg-stone-800/60">
                <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
                    <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">静谧睡眠 · 全桦木床架</h2>
                    <p class="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mt-4">
                        芬兰多层桦木胶合板，高承重排骨架，翻身无声。搭配天然椰棕床垫，透气防潮。</p>
                    <div class="mt-10">
                        <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=60&w=900&auto=format&fit=crop"
                            alt="北欧极简卧室木床" loading="lazy"
                            class="rounded-3xl shadow-sm object-cover w-full h-auto max-h-[500px] border-8 border-white dark:border-stone-700 transition-shadow duration-300 hover:shadow-2xl">
                    </div>
                </div>
            </div>
        </section>

        <!-- 品牌视频区块：品牌背景与故事介绍 -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="bg-white dark:bg-stone-800/30">
                <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="relative rounded-2xl shadow-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
                            style="aspect-ratio: 3/2;">
                            <video class="w-full h-full object-cover"
                                src="https://www.apple.com.cn/105/media/cn/apple-vision-pro/2025/fda8750c-030b-40f2-a0f7-60ba2db6b547/anim/experience-entertainment/large.mp4"
                                poster="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=60&w=800&h=600&auto=format&fit=crop"
                                controls preload="metadata" playsinline>您的浏览器不支持 video 标签。</video>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">始于1930 · 三代人的木作信仰
                        </h2>
                        <p class="text-stone-600 dark:text-stone-400 mt-5 leading-relaxed">Nordic Haus
                            的起源可以追溯到芬兰中部的一个小镇工坊。三代匠人用双手传承北欧细木作工艺，每一件家具都承载着对自然的敬畏与对耐用之美的执着。</p>
                        <p class="text-stone-600 dark:text-stone-400 mt-3 leading-relaxed">
                            今天，我们带着这份匠心来到中国，让更多家庭拥有经得起时间考验的实木家具。从森林到客厅，每一步都可追溯。</p>
                        <div class="mt-6 flex flex-wrap gap-4">
                            <span class="flex items-center gap-2 text-stone-600 dark:text-stone-400 text-sm">🏭
                                赫尔辛基总部</span>
                            <span class="flex items-center gap-2 text-stone-600 dark:text-stone-400 text-sm">🪑
                                自有工坊</span>
                            <span class="flex items-center gap-2 text-stone-600 dark:text-stone-400 text-sm">🌍
                                全球配送</span>
                        </div>
                        <a href="#"
                            class="inline-block mt-8 text-amber-800 dark:text-amber-400 font-medium border-b border-amber-800 dark:border-amber-400 hover:gap-2 transition-all">了解更多品牌故事
                            →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 特色优势区块：品牌哲学与环保认证 -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
                <div class="text-center max-w-2xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">北欧呼吸 · 实木哲学</h2>
                    <p class="text-stone-600 dark:text-stone-400 mt-3">每一块木材都来自FSC认证森林，环保与耐用兼得</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    <div
                        class="bg-white/70 dark:bg-stone-800/60 p-6 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                        <div class="text-5xl mb-4">🌲</div>
                        <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">FSC™ 认证橡木</h3>
                        <p class="text-stone-600 dark:text-stone-400 mt-2">从欧洲原始森林直采，树龄均超80年，无结疤</p>
                    </div>
                    <div
                        class="bg-white/70 dark:bg-stone-800/60 p-6 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                        <div class="text-5xl mb-4">🧼</div>
                        <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">德国OSMO木蜡油</h3>
                        <p class="text-stone-600 dark:text-stone-400 mt-2">食品级表面涂装，可接触婴儿肌肤，只留木香</p>
                    </div>
                    <div
                        class="bg-white/70 dark:bg-stone-800/60 p-6 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                        <div class="text-5xl mb-4">🔧</div>
                        <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">30年结构质保</h3>
                        <p class="text-stone-600 dark:text-stone-400 mt-2">传统燕尾榫加现代五金，终身不松动</p>
                    </div>
                    <div
                        class="bg-white/70 dark:bg-stone-800/60 p-6 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                        <div class="text-5xl mb-4">🌍</div>
                        <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">碳中和工厂</h3>
                        <p class="text-stone-600 dark:text-stone-400 mt-2">生产全程使用绿电，每售出一件植树一棵</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 团队成员区块：主创设计师展示 -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="bg-white dark:bg-stone-800/40">
                <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
                    <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100 text-center">
                        斯堪的纳维亚设计工作室
                    </h2>
                    <p class="text-stone-600 dark:text-stone-400 text-center mt-2">赫尔辛基 / 哥本哈根 · 三代家具匠人</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                        <div
                            class="text-center bg-white dark:bg-stone-800/60 rounded-2xl p-6 shadow-sm border border-stone-200 dark:border-stone-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=30&w=400&auto=format&fit=crop"
                                alt="Lars Eriksen" loading="lazy"
                                class="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-stone-600 shadow-md transition-shadow duration-300 hover:shadow-xl">
                            <h3 class="text-xl font-medium mt-4 text-stone-800 dark:text-stone-200">Lars Eriksen</h3>
                            <p class="text-amber-700 dark:text-amber-400">首席木作大师</p>
                            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">前丹麦皇家家具公司30年经验</p>
                        </div>
                        <div
                            class="text-center bg-white dark:bg-stone-800/60 rounded-2xl p-6 shadow-sm border border-stone-200 dark:border-stone-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="https://images.unsplash.com/photo-1713456047285-52a8d18d1912?q=30&w=400&auto=format&fit=crop"
                                alt="Ingrid Sørensen" loading="lazy"
                                class="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-stone-600 shadow-md transition-shadow duration-300 hover:shadow-xl">
                            <h3 class="text-xl font-medium mt-4 text-stone-800 dark:text-stone-200">Ingrid Sørensen</h3>
                            <p class="text-amber-700 dark:text-amber-400">创意总监</p>
                            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">宜家北欧系列前设计师</p>
                        </div>
                        <div
                            class="text-center bg-white dark:bg-stone-800/60 rounded-2xl p-6 shadow-sm border border-stone-200 dark:border-stone-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=30&w=400&auto=format&fit=crop"
                                alt="Olav Koskela" loading="lazy"
                                class="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-stone-600 shadow-md transition-shadow duration-300 hover:shadow-xl">
                            <h3 class="text-xl font-medium mt-4 text-stone-800 dark:text-stone-200">Olav Koskela</h3>
                            <p class="text-amber-700 dark:text-amber-400">结构工程师</p>
                            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">芬兰木结构协会顾问</p>
                        </div>
                        <div
                            class="text-center bg-white dark:bg-stone-800/60 rounded-2xl p-6 shadow-sm border border-stone-200 dark:border-stone-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=30&w=400&auto=format&fit=crop"
                                alt="Maja Lindström" loading="lazy"
                                class="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-stone-600 shadow-md transition-shadow duration-300 hover:shadow-xl">
                            <h3 class="text-xl font-medium mt-4 text-stone-800 dark:text-stone-200">Maja Lindström</h3>
                            <p class="text-amber-700 dark:text-amber-400">色彩与材质专家</p>
                            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">NCS自然色彩系统认证</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 数据统计区块：品牌实力衡量指标 -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="bg-amber-900/5 dark:bg-amber-900/10">
                <div class="max-w-7xl mx-auto px-6 md:px-10 py-16">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div class="text-4xl md:text-5xl font-light text-amber-900 dark:text-amber-400">60+</div>
                            <div class="text-stone-600 dark:text-stone-400 uppercase tracking-wide text-sm mt-2">北欧设计师
                            </div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-light text-amber-900 dark:text-amber-400">30年</div>
                            <div class="text-stone-600 dark:text-stone-400 uppercase tracking-wide text-sm mt-2">工艺传承
                            </div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-light text-amber-900 dark:text-amber-400">8k+</div>
                            <div class="text-stone-600 dark:text-stone-400 uppercase tracking-wide text-sm mt-2">家庭选择
                            </div>
                        </div>
                        <div>
                            <div class="text-4xl md:text-5xl font-light text-amber-900 dark:text-amber-400">100%</div>
                            <div class="text-stone-600 dark:text-stone-400 uppercase tracking-wide text-sm mt-2">FSC认证
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 价格方案区块：产品套餐方案与定价 -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
                <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100 text-center">让家拥有北欧灵魂</h2>
                <p class="text-stone-600 dark:text-stone-400 text-center mt-2">套餐灵感 · 可按需定制</p>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
                    <div
                        class="bg-stone-50 dark:bg-stone-800 p-8 rounded-3xl border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                        <h3 class="text-2xl font-light text-stone-800 dark:text-stone-200">小户型系列</h3>
                        <p class="text-stone-500 dark:text-stone-400 mt-2">灵活组合</p>
                        <div class="mt-4"><span
                                class="text-3xl lg:text-4xl font-light text-amber-900 dark:text-amber-400">¥1.9w</span><span
                                class="text-stone-500 dark:text-stone-400">/套</span></div>
                        <ul class="mt-6 space-y-3 text-stone-600 dark:text-stone-400">
                            <li>✓ 橡木餐桌(1.4m)</li>
                            <li>✓ 餐椅*4</li>
                            <li>✓ 边柜(1.2m)</li>
                        </ul>
                        <a href="#"
                            class="block text-center border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 font-medium px-4 py-3 rounded-full mt-8 transition">查看详情</a>
                    </div>
                    <div
                        class="bg-stone-50 dark:bg-stone-800 p-8 rounded-3xl border-2 border-amber-700 dark:border-amber-500 relative shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                        <span
                            class="absolute top-0 right-8 bg-amber-800 dark:bg-amber-600 text-white text-sm px-3 py-1 rounded-b-full">⋆
                            最多推荐 ⋆</span>
                        <h3 class="text-2xl font-light text-stone-800 dark:text-stone-200">经典全屋系列</h3>
                        <p class="text-stone-500 dark:text-stone-400 mt-2">客餐卧+书房</p>
                        <div class="mt-4"><span
                                class="text-3xl lg:text-4xl font-light text-amber-900 dark:text-amber-400">¥4.8w</span><span
                                class="text-stone-500 dark:text-stone-400">/整套</span></div>
                        <ul class="mt-6 space-y-3 text-stone-600 dark:text-stone-400">
                            <li>✓ 沙发/电视柜/茶几</li>
                            <li>✓ 餐桌椅+餐边柜</li>
                            <li>✓ 双人床+床头柜*2</li>
                            <li>✓ 书桌+书架</li>
                        </ul>
                        <a href="#"
                            class="block text-center bg-amber-800 hover:bg-amber-900 dark:bg-amber-700 dark:hover:bg-amber-600 text-white font-medium px-4 py-3 rounded-full mt-8 transition shadow-md">获取方案</a>
                    </div>
                    <div
                        class="bg-stone-50 dark:bg-stone-800 p-8 rounded-3xl border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                        <h3 class="text-2xl font-light text-stone-800 dark:text-stone-200">设计师共创</h3>
                        <p class="text-stone-500 dark:text-stone-400 mt-2">一对一量身定制</p>
                        <div class="mt-4"><span
                                class="text-3xl lg:text-4xl font-light text-amber-900 dark:text-amber-400">定制</span>
                        </div>
                        <ul class="mt-6 space-y-3 text-stone-600 dark:text-stone-400">
                            <li>✓ 北欧设计师上门量尺</li>
                            <li>✓ 稀有木材/颜色可选</li>
                            <li>✓ 专属五金刻字</li>
                            <li>✓ 终身保养</li>
                        </ul>
                        <a href="#"
                            class="block text-center border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 font-medium px-4 py-3 rounded-full mt-8 transition">预约咨询</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 新闻列表区块 -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="bg-stone-50/60 dark:bg-stone-800/30">
                <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
                    <div class="text-center max-w-2xl mx-auto">
                        <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">北欧家居·新动态</h2>
                        <p class="text-stone-600 dark:text-stone-400 mt-3">灵感资讯与设计展会直击</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <article
                            class="bg-white dark:bg-stone-800 rounded-2xl shadow-sm overflow-hidden border border-stone-100 dark:border-stone-700 hover:shadow-md transition">
                            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=30&w=600&auto=format&fit=crop"
                                loading="lazy" class="aspect-[16/9] w-full object-cover">
                            <div class="p-6">
                                <div class="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400"><span>📅
                                        2025.04.12</span><span>•</span><span>🏷️ 展会直击</span></div>
                                <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200 mt-2">Nordic Haus
                                    亮相米兰国际家具展</h3>
                                <p class="text-stone-600 dark:text-stone-400 mt-2 text-sm">全新「极光系列」首次发布，将芬兰云杉与智能灯光融合。
                                </p><a href="#"
                                    class="inline-flex items-center gap-1 text-amber-800 dark:text-amber-400 font-medium mt-4 text-sm hover:gap-2">阅读全文
                                    →</a>
                            </div>
                        </article>
                        <article
                            class="bg-white dark:bg-stone-800 rounded-2xl shadow-sm overflow-hidden border border-stone-100 dark:border-stone-700 hover:shadow-md transition">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=30&w=600&auto=format&fit=crop"
                                loading="lazy" class="aspect-[16/9] w-full object-cover">
                            <div class="p-6">
                                <div class="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400"><span>📅
                                        2025.03.28</span><span>•</span><span>🌲 可持续</span></div>
                                <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200 mt-2">碳中和工厂获得北欧生态标签
                                </h3>
                                <p class="text-stone-600 dark:text-stone-400 mt-2 text-sm">所有产品碳足迹降低42%，每件家具附带"气候护照"。
                                </p><a href="#"
                                    class="inline-flex items-center gap-1 text-amber-800 dark:text-amber-400 font-medium mt-4 text-sm hover:gap-2">阅读全文
                                    →</a>
                            </div>
                        </article>
                        <article
                            class="bg-white dark:bg-stone-800 rounded-2xl shadow-sm overflow-hidden border border-stone-100 dark:border-stone-700 hover:shadow-md transition">
                            <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=30&w=600&auto=format&fit=crop"
                                loading="lazy" class="aspect-[16/9] w-full object-cover">
                            <div class="p-6">
                                <div class="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400"><span>📅
                                        2025.03.15</span><span>•</span><span>🪚 工坊故事</span></div>
                                <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200 mt-2">赫尔辛基工坊开放日：体验榫卯木作
                                </h3>
                                <p class="text-stone-600 dark:text-stone-400 mt-2 text-sm">用户可亲手组装燕尾榫边桌，Lars Eriksen
                                    现场指导。
                                </p><a href="#"
                                    class="inline-flex items-center gap-1 text-amber-800 dark:text-amber-400 font-medium mt-4 text-sm hover:gap-2">预约体验
                                    →</a>
                            </div>
                        </article>
                    </div>
                    <div class="text-center mt-12"><a href="#"
                            class="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 px-6 py-3 rounded-full transition">查看全部动态
                            →</a></div>
                </div>
            </div>
        </section>

        <!-- 合作伙伴区块：认证机构与合作品牌 -->
        <section class="bg-white dark:bg-stone-900">
            <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
                <div class="text-center max-w-2xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">全球信赖 · 北欧设计联盟</h2>
                    <p class="text-stone-600 dark:text-stone-400 mt-3">与顶尖机构携手，打造可持续家居生态</p>
                </div>
                <div
                    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-16 items-center justify-items-center">
                    <div
                        class="opacity-70 hover:opacity-100 transition-all duration-300 hover:shadow-lg rounded-lg p-2">
                        <img src="https://placehold.co/200x80/e2e8f0/475569?text=FSC" alt="FSC 森林认证" loading="lazy"
                            class="h-12 w-auto dark:brightness-90">
                    </div>
                    <div
                        class="opacity-70 hover:opacity-100 transition-all duration-300 hover:shadow-lg rounded-lg p-2">
                        <img src="https://placehold.co/200x80/e2e8f0/475569?text=OSMO" alt="OSMO 木蜡油" loading="lazy"
                            class="h-12 w-auto dark:brightness-90">
                    </div>
                    <div
                        class="opacity-70 hover:opacity-100 transition-all duration-300 hover:shadow-lg rounded-lg p-2">
                        <img src="https://placehold.co/200x80/e2e8f0/475569?text=Danish+Design" alt="丹麦设计协会"
                            loading="lazy" class="h-12 w-auto dark:brightness-90">
                    </div>
                    <div
                        class="opacity-70 hover:opacity-100 transition-all duration-300 hover:shadow-lg rounded-lg p-2">
                        <img src="https://placehold.co/200x80/e2e8f0/475569?text=IKEA+Former" alt="宜家前创新实验室"
                            loading="lazy" class="h-12 w-auto dark:brightness-90">
                    </div>
                    <div
                        class="opacity-70 hover:opacity-100 transition-all duration-300 hover:shadow-lg rounded-lg p-2">
                        <img src="https://placehold.co/200x80/e2e8f0/475569?text=NCS+Color" alt="NCS 自然色彩系统"
                            loading="lazy" class="h-12 w-auto dark:brightness-90">
                    </div>
                    <div
                        class="opacity-70 hover:opacity-100 transition-all duration-300 hover:shadow-lg rounded-lg p-2">
                        <img src="https://placehold.co/200x80/e2e8f0/475569?text=Helsinki+Wood" alt="赫尔辛基木工学校"
                            loading="lazy" class="h-12 w-auto dark:brightness-90">
                    </div>
                </div>
            </div>
        </section>

        <!-- 用户评价区块：真实用户体验反馈 -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="bg-stone-50 dark:bg-stone-800/30">
                <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
                    <div class="text-center max-w-2xl mx-auto">
                        <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">他们说 · 真实的北欧温度
                        </h2>
                        <p class="text-stone-600 dark:text-stone-400 mt-3">来自真实用户的家居体验分享</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div
                            class="bg-white dark:bg-stone-800 p-6 rounded-2xl border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                            <div class="flex items-center gap-1 text-amber-500 mb-3">★★★★★</div>
                            <p class="text-stone-600 dark:text-stone-400 italic">
                                “餐桌的木纹太美了，每一道纹理都不一样。送货师傅很专业，安装完还帮忙清理了包装。”
                            </p>
                            <div
                                class="flex items-center gap-3 mt-4 pt-3 border-t border-stone-200 dark:border-stone-700">
                                <div class="w-10 h-10 rounded-full bg-stone-300 dark:bg-stone-600 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=30&w=100&auto=format&fit=crop"
                                        alt="用户头像" loading="lazy" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <p class="font-medium text-stone-800 dark:text-stone-200">陈女士 · 上海</p>
                                    <p class="text-xs text-stone-500 dark:text-stone-400">购入：橡木餐桌+餐椅</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-white dark:bg-stone-800 p-6 rounded-2xl border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                            <div class="flex items-center gap-1 text-amber-500 mb-3">★★★★★</div>
                            <p class="text-stone-600 dark:text-stone-400 italic">“床架非常稳，翻身完全没有声音。木蜡油的质感温润，比油漆家具舒服太多了。”
                            </p>
                            <div
                                class="flex items-center gap-3 mt-4 pt-3 border-t border-stone-200 dark:border-stone-700">
                                <div class="w-10 h-10 rounded-full bg-stone-300 dark:bg-stone-600 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=30&w=100&auto=format&fit=crop"
                                        alt="用户头像" loading="lazy" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <p class="font-medium text-stone-800 dark:text-stone-200">李先生 · 杭州</p>
                                    <p class="text-xs text-stone-500 dark:text-stone-400">购入：全桦木床架+床头柜</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-white dark:bg-stone-800 p-6 rounded-2xl border border-stone-200 dark:border-stone-700 transition-shadow duration-300 hover:shadow-xl">
                            <div class="flex items-center gap-1 text-amber-500 mb-3">★★★★★</div>
                            <p class="text-stone-600 dark:text-stone-400 italic">
                                “设计师非常耐心，上门量尺后给出了两版方案。最后定制了整面墙的书架，完美契合！”
                            </p>
                            <div
                                class="flex items-center gap-3 mt-4 pt-3 border-t border-stone-200 dark:border-stone-700">
                                <div class="w-10 h-10 rounded-full bg-stone-300 dark:bg-stone-600 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=30&w=100&auto=format&fit=crop"
                                        alt="用户头像" loading="lazy" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <p class="font-medium text-stone-800 dark:text-stone-200">王女士 · 成都</p>
                                    <p class="text-xs text-stone-500 dark:text-stone-400">购入：全屋定制系列</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-10"><a href="#"
                            class="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 px-6 py-3 rounded-full transition">查看全部评价
                            →</a></div>
                </div>
            </div>
        </section>

        <!-- 展厅查询区块：线下实体店及预约 -->
        <section class="bg-white dark:bg-stone-900">
            <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
                <div class="text-center max-w-2xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100">欢迎来到北欧生活空间</h2>
                    <p class="text-stone-600 dark:text-stone-400 mt-3">全国7城体验展厅 · 预约专属导览</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    <div
                        class="bg-stone-50 dark:bg-stone-800 rounded-xl p-5 border border-stone-200 dark:border-stone-700 hover:shadow-md transition">
                        <div class="text-3xl mb-3">🏛️</div>
                        <h3 class="font-medium text-stone-800 dark:text-stone-200">北京 · 三里屯</h3>
                        <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">朝阳区三里屯太古里北区N3-1F</p>
                        <p class="text-stone-400 dark:text-stone-500 text-xs mt-2">周一至周日 10:00-22:00</p>
                        <a href="#" class="inline-block mt-3 text-amber-800 dark:text-amber-400 text-sm">预约导览 →</a>
                    </div>
                    <div
                        class="bg-stone-50 dark:bg-stone-800 rounded-xl p-5 border border-stone-200 dark:border-stone-700 hover:shadow-md transition">
                        <div class="text-3xl mb-3">🏙️</div>
                        <h3 class="font-medium text-stone-800 dark:text-stone-200">上海 · 新天地</h3>
                        <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">黄浦区马当路245号新天地时尚L2</p>
                        <p class="text-stone-400 dark:text-stone-500 text-xs mt-2">周一至周日 10:00-22:00</p>
                        <a href="#" class="inline-block mt-3 text-amber-800 dark:text-amber-400 text-sm">预约导览 →</a>
                    </div>
                    <div
                        class="bg-stone-50 dark:bg-stone-800 rounded-xl p-5 border border-stone-200 dark:border-stone-700 hover:shadow-md transition">
                        <div class="text-3xl mb-3">🏔️</div>
                        <h3 class="font-medium text-stone-800 dark:text-stone-200">杭州 · 天目里</h3>
                        <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">西湖区天目山路398号天目里12号楼</p>
                        <p class="text-stone-400 dark:text-stone-500 text-xs mt-2">周一至周日 10:00-21:00</p>
                        <a href="#" class="inline-block mt-3 text-amber-800 dark:text-amber-400 text-sm">预约导览 →</a>
                    </div>
                    <div
                        class="bg-stone-50 dark:bg-stone-800 rounded-xl p-5 border border-stone-200 dark:border-stone-700 hover:shadow-md transition">
                        <div class="text-3xl mb-3">🏖️</div>
                        <h3 class="font-medium text-stone-800 dark:text-stone-200">成都 · 太古里</h3>
                        <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">锦江区中纱帽街8号太古里M层</p>
                        <p class="text-stone-400 dark:text-stone-500 text-xs mt-2">周一至周日 10:00-22:00</p>
                        <a href="#" class="inline-block mt-3 text-amber-800 dark:text-amber-400 text-sm">预约导览 →</a>
                    </div>
                </div>
                <div class="text-center mt-10"><a href="#"
                        class="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 px-6 py-3 rounded-full transition">查看全部7城展厅
                        →</a></div>
            </div>
        </section>

        <!-- 常见问题区块：FAQ -->
        <section class="bg-stone-50 dark:bg-stone-900">
            <div class="bg-stone-50/80 dark:bg-stone-800/40">
                <div class="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
                    <h2 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-100 text-center">
                        关于原木家具，您可能想问
                    </h2>
                    <div class="mt-12 space-y-6">
                        <div
                            class="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl">
                            <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">🌡️ 地暖环境可以使用吗？</h3>
                            <p class="text-stone-600 dark:text-stone-400 mt-2">可以。我们采用特殊干燥工艺，含水率控制在6-8%，经过耐地暖测试，不开裂变形。
                            </p>
                        </div>
                        <div
                            class="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl">
                            <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">🧼 如何日常清洁？</h3>
                            <p class="text-stone-600 dark:text-stone-400 mt-2">用微湿棉布顺着木纹擦拭即可，每半年可涂一次木蜡油保养，保持光泽。</p>
                        </div>
                        <div
                            class="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl">
                            <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">📦 发货时间与安装</h3>
                            <p class="text-stone-600 dark:text-stone-400 mt-2">成品家具48小时发货，定制产品约4-6周。全国上门安装，顺丰送货入户。</p>
                        </div>
                        <div
                            class="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl">
                            <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">🪑 可以退换吗？</h3>
                            <p class="text-stone-600 dark:text-stone-400 mt-2">30天无理由退换（定制除外），我们承担运费。木材天然色差属正常现象。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 行动号召区块 -->
        <section class="bg-amber-800 dark:bg-amber-900 py-20">
            <div class="max-w-3xl mx-auto text-center px-6">
                <h2 class="text-3xl md:text-5xl font-light text-stone-50">把北欧美学生活带回家</h2>
                <p class="text-amber-100 text-lg mt-4">预约线下展厅，触摸真实木纹。或在线咨询设计师，免费出布局图。</p>
                <div class="flex flex-wrap gap-4 justify-center mt-8">
                    <a href="#"
                        class="w-full sm:w-auto text-center bg-stone-50 text-amber-900 hover:bg-stone-100 dark:bg-stone-800 dark:text-amber-400 dark:hover:bg-stone-700 font-medium px-8 py-4 rounded-full shadow-lg transition">免费设计咨询</a>
                    <a href="#"
                        class="w-full sm:w-auto text-center border-2 border-stone-50 text-stone-50 hover:bg-amber-700 dark:border-amber-200 dark:text-amber-100 dark:hover:bg-amber-800 font-medium px-8 py-4 rounded-full transition">到店体验</a>
                </div>
            </div>
        </section>
    </main>
</template>