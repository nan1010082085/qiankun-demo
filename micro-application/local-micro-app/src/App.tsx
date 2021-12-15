import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <>
          <div id='nav'>
            <router-link to='/'>Home</router-link> |<router-link to='/about'>About</router-link>
          </div>
          <router-view />
        </>
      );
    };
  }
});
