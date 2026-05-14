<template>
  <div class="demo-card">
    <div class="demo-card-header">
      <span class="demo-card-title">{{ title }}</span>
      <span class="demo-card-badge">{{ badge || 'Komponente' }}</span>
    </div>

    <div class="tab-strip">
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'preview' }"
        @click="activeTab = 'preview'"
      >
        <i class="pi pi-eye" style="margin-right:5px;font-size:0.75rem"></i>
        Vorschau
      </button>
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'code' }"
        @click="activeTab = 'code'"
      >
        <i class="pi pi-code" style="margin-right:5px;font-size:0.75rem"></i>
        Code
      </button>
      <button
        v-if="setupCode"
        class="tab-btn"
        :class="{ active: activeTab === 'setup' }"
        @click="activeTab = 'setup'"
      >
        <i class="pi pi-cog" style="margin-right:5px;font-size:0.75rem"></i>
        Setup
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="activeTab === 'preview'" key="preview" class="preview-area">
        <slot />
      </div>
      <CodeBlock v-else-if="activeTab === 'code'" key="code" :code="code" language="html" />
      <CodeBlock v-else-if="activeTab === 'setup'" key="setup" :code="setupCode" language="javascript" />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeBlock from './CodeBlock.vue'

defineProps({
  title: { type: String, required: true },
  badge: { type: String, default: '' },
  code: { type: String, required: true },
  setupCode: { type: String, default: '' }
})

const activeTab = ref('preview')
</script>
