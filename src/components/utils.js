/**
 * 激活焦点陷阱（兼容 ES5/ES6 所有环境）
 * @param {HTMLElement} container 需要锁定焦点的容器元素
 */
/**
 * 激活焦点陷阱（兼容 ES5/ES6 所有环境）
 * 特性：先聚焦容器本身，再锁定 Tab 键在容器内循环
 * @param {HTMLElement} container 需要锁定焦点的容器元素
 * @returns {Function} 清理函数，调用后可移除事件监听
 */
function activateFocusTrap(container) {
  // 1. 定义可聚焦元素的选择器（使用最基础的 CSS 选择器，确保兼容性）
  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',')

  // 2. 获取所有可聚焦元素
  const focusableElements = Array.from(container.querySelectorAll(focusableSelector))

  // 3. 键盘事件处理函数（锁定 Tab 键循环）
  const handleKeyDown = (e) => {
    // 只处理 Tab 键
    if (e.key !== 'Tab') return

    // 如果容器内没有可聚焦元素，直接阻止 Tab 默认行为，避免焦点跳出
    if (focusableElements.length === 0) {
      e.preventDefault()
      return
    }

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Shift + Tab：当焦点在第一个元素时，跳转到最后一个元素
    if (e.shiftKey) {
      if (document.activeElement === firstElement || document.activeElement === container) {
        e.preventDefault()
        lastElement.focus()
      }
    }
    // Tab：当焦点在最后一个元素时，跳转到第一个元素
    else {
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  container.focus()

  // 5. 添加事件监听
  container.addEventListener('keydown', handleKeyDown)

  // 6. 返回清理函数
  return () => {
    container.removeEventListener('keydown', handleKeyDown)
  }
}

export { activateFocusTrap }
