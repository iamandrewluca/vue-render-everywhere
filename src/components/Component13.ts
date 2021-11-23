import { compile } from "vue";

const compiled = compile('<li>Rendering using functional and compile</li>')

// JUST AN EXPERIMENT, DO NOT USE
export default function () {
  // @ts-ignore
  return compiled({})
}
