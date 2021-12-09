import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RouterViewMain',
  setup() {
    return () => {
      return <router-view />;
    };
  }
});
