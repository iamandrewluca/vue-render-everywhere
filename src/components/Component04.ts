import { defineComponent, h } from "vue";

// ADDED
export default defineComponent({
  render() {
    return h('li', 'Rendering using render function and element factory')
  }
})