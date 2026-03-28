// 私有变量
let count = 0;

// 导出公共API
export default {
  increment(amount = 1) {
    count += amount;
    return count;
  },
  decrement(amount = 1) {
    count = Math.max(0, count - amount);
    return count;
  },
  reset() {
    count = 0;
    return 0;
  },
  get() {
    return count;
  },
  set(value) {
    count = Math.max(0, value);
    return count;
  }
};
