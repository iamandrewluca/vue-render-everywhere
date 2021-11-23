import { compile, defineComponent } from "vue";

// ADDED
export default defineComponent({
  render: compile('<li>Rendering using vue compile</li>')
})