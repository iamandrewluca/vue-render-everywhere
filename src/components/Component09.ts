import { compile, defineComponent, h } from "vue";

// ADDED
export default defineComponent({
  render: compile(document.querySelector<HTMLElement>('#template-in-script-with-compile')!)
})