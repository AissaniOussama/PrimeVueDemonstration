<template>
  <div class="code-block-wrapper">
    <button class="copy-btn" :class="{ copied }" @click="copyCode">
      <i :class="copied ? 'pi pi-check' : 'pi pi-copy'"></i>
      {{ copied ? 'Kopiert!' : 'Kopieren' }}
    </button>
    <pre><code v-html="highlighted"></code></pre>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

const props = defineProps({
  code: { type: String, required: true },
  language: { type: String, default: 'html' }
})

const copied = ref(false)

const highlighted = computed(() => {
  try {
    return Prism.highlight(
      props.code.trim(),
      Prism.languages[props.language] || Prism.languages.markup,
      props.language
    )
  } catch {
    return props.code
  }
})

async function copyCode() {
  await navigator.clipboard.writeText(props.code.trim())
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>
