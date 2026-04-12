<script setup lang="ts">
/**
 * 16Personalities 风格的 GitHub Star 按钮组件
 */
const props = defineProps<{
  theme?: 'primary' | 'secondary' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}>();

const GITHUB_REPO = 'https://github.com/TX/ACGTI'; // 假设仓库路径，用户可根据实际情况修改
</script>

<template>
  <a 
    :href="GITHUB_REPO" 
    target="_blank" 
    rel="noopener noreferrer" 
    class="github-star-btn"
    :class="[theme || 'secondary', size || 'md']"
  >
    <svg viewBox="0 0 16 16" class="github-icon" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
    <span class="btn-text">给个 Star 吧</span>
  </a>
</template>

<style scoped>
.github-star-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 700;
  border-radius: 50px;
  transition: all 0.2s ease;
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
}

.github-icon {
  width: 1.2em;
  height: 1.2em;
  fill: currentColor;
}

/* Themes */
.primary {
  background-color: #33a474;
  color: white;
}

.primary:hover {
  background-color: #2d9267;
  transform: translateY(-1px);
}

.secondary {
  background-color: #f2f4f5;
  color: #4298b4;
  border: 2px solid #e2e8eb;
}

.secondary:hover {
  background-color: #e2e8eb;
  border-color: #d1d9dd;
  transform: translateY(-1px);
}

.light {
  background-color: white;
  color: #333;
  border: 1px solid #ddd;
}

.light:hover {
  background-color: #f9f9f9;
  transform: translateY(-1px);
}

.dark {
  background-color: #24292e;
  color: white;
}

.dark:hover {
  background-color: #1b1f23;
  transform: translateY(-1px);
}

/* Sizes */
.sm {
  padding: 6px 16px;
  font-size: 13px;
}

.md {
  padding: 10px 24px;
  font-size: 15px;
}

.lg {
  padding: 14px 32px;
  font-size: 18px;
}
</style>