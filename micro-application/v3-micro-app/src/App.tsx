import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();
    const routePath = (path: string) => {
      router.push({ path: `${path}` });
    };
    return () => {
      return (
        <>
          <div id='app'>
            <button onClick={() => routePath('home')}>home</button>
            <button onClick={() => routePath('about')}>about</button>
          </div>
          <router-view />
        </>
      );
    };
  }
});
