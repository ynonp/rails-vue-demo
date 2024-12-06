import { ref } from 'vue';

export default {
  template: `
    <button @click="count++">{{count}}</button>
  `,
  setup() {
    const count = ref(0)
    return {
      count,
    }
  }
}
