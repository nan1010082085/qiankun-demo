import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  props: {
    widgetData: {},
    widgetSize: {}
  },
  setup(props) {
    console.log(props);
    const router = useRouter();

    const routePath = (path: string) => {
      router.push({ path: `${path}` });
    };

    return () => {
      return (
        <>
          <div id='nav'>
            <button onClick={() => routePath('local-home')}>local home</button>
            <button onClick={() => routePath('local-about')}>local about</button>
          </div>
          <router-view />
        </>
      );
    };
  }
});
