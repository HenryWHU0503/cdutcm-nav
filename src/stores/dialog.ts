import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const visible = ref(false)
  const title = ref('')
  const content = ref('')

  const msgs: Record<string, { content?: string; icon?: string; code?: string }> = {
    联系方式: { content: '邮件地址：i@henry.city' },
  }

  function show() {
    visible.value = true
  }

  function close() {
    visible.value = false
    title.value = ''
    content.value = ''
  }

  function showMsg(name: string) {
    const item = msgs[name]
    if (!item) {
      console.warn(`dialog.msgs.${name}不存在`)
      return
    }
    title.value = `<i class="${item.icon || (item.code ? 'fa-solid fa-qrcode' : 'fa-solid fa-comment-dots')} fa-space"></i><span>${name}</span>`
    content.value = `${item.content || ''}${item.code ? `(<strong><a onclick="dialog.phone('${item.code}')">点击直接打开</a></strong>)` : ''}`
    show()
  }

  return { visible, title, content, show, close, showMsg }
})
