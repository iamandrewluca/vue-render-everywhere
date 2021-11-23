import { compile, defineComponent } from "vue";

// ADDED
export default defineComponent({
  render: compile('#template-in-script-with-compile-id')
})