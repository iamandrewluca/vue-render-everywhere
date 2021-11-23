import { h, defineComponent } from "vue";

// ADDED
export default defineComponent({
  setup() {
    return () => h('li', 'Rendering using setup and element factory')
  }
})