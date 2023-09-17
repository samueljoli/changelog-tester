module.exports = {
  interface(flag) {
    return flag ? 1 : 0
  },
  implementation(flag) {
    return flag ? 1 : 0
  },
  speak() {
    return 'Hello'
  },
  wave() {
    return 'Goodbye'
  },
  see() {
    return 'See you'
  }
}
