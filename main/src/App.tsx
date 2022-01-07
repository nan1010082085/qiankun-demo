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
        <router-link to='/v2/'>v2-app</router-link>
        <br />
        <router-link to='/v3/'>v3-app</router-link>
        <br />
        路由加载
        <router-view />
        {/* 手动加载 */}
        <div>local app</div>
        <div id='load-micro-app-container'></div>
      </div>
    );
  }
}
