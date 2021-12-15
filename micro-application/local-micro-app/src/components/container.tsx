import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Container',
  setup() {
    return () => {
      return <router-view />;
    };
  }
});
