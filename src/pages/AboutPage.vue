<script setup lang="ts">
import GithubStar from '../components/GithubStar.vue'
</script>

<template>
  <div class="page-stack compact">
    <section class="hero-panel">
      <p class="eyebrow">关于 ACGTI</p>
      <h1 style="font-weight: 800; line-height: 1.2;">以 MBTI 为骨架，用二次元角色代码给你一个好玩的人格标签。</h1>
      <p class="lead">
        ACGTI（ACG Type Indicator）是一个以 MBTI 为基础的二次元角色原型测试站点。通过回答情境式问题，获得唯一命中的角色代码、维度倾向比例，以及对应的二次元角色原型解析。当前版本为纯静态前端，部署在 Cloudflare Pages 上。
      </p>
      <p class="lead">
        项目完全开源，欢迎大家参与贡献。如果这个项目对你有帮助，或者你觉得这个点子很有意思，欢迎点击下方按钮给项目一个 Star 以示鼓励。
      </p>
      <div style="margin-top: 2rem;">
        <GithubStar theme="primary" size="lg" />
      </div>
    </section>

    <section class="split-grid">
      <article class="panel">
        <h2 class="section-title">当前边界</h2>
        <div class="meta-list">
          <div class="meta-item">
            <span class="label">娱乐定位</span>
            <p class="value">它是角色原型测试，不是专业心理评估，也不用于现实人格定型。</p>
          </div>
          <div class="meta-item">
            <span class="label">技术边界</span>
            <p class="value">暂不引入账号、数据库、排行榜或后台，优先保证体验、内容和维护成本。</p>
          </div>
          <div class="meta-item">
            <span class="label">后续扩展</span>
            <p class="value">后面可以继续扩题库、扩角色库、加隐藏结果、做分享海报或多主题模式。</p>
          </div>
        </div>
      </article>

      <article class="panel">
        <h2 class="section-title">这版实现了什么</h2>
        <div class="timeline-list">
          <div class="timeline-item">
            <span class="label">内容层</span>
            <p class="value">37 道题、8 个原型、22 位已录入角色。</p>
          </div>
          <div class="timeline-item">
            <span class="label">规则层</span>
            <p class="value">先计算 MBTI 四维得分，再做原型映射和唯一角色命中。</p>
          </div>
          <div class="timeline-item">
            <span class="label">表现层</span>
            <p class="value">首页、说明页、测试页、结果页、关于页的完整闭环。</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
