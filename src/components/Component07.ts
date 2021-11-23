import { defineComponent, compile } from "vue";

// ADDED
export default defineComponent({
  setup() {
    return compile('<li>Rendering using setup and vue compile</li>')
  }
})