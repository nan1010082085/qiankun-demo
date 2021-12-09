import { CreateElement, VNode } from 'vue/types';
import { Vue, Component } from 'vue-property-decorator';
import Container from './components/Container';
import '@/assets/style/app.scss';
@Component({
  name: 'App',
  components: { Container }
})
export default class App extends Vue {

  render(h: CreateElement): VNode {
    return (
      <div id='app'>
        <router-link to='/login'>login</router-link>
        <br />
        <router-link to='/test/'>development test-app</router-link>
        <router-link to='/v3/'>development v3-app</router-link>
        <router-view />
      </div>
    );
  }
}
