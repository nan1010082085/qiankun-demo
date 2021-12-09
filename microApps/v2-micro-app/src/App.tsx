import { CreateElement, VNode } from 'vue';
import { Vue, Component } from 'vue-property-decorator';
import '@/assets/style/app.scss';

@Component({
  name: 'App'
})
export default class App extends Vue {
  routePath(path: string) {
    this.$router.push({ path: `${path}` });
  }

  render(h: CreateElement): VNode {
    return (
      <div id='app'>
        <button on-click={() => this.routePath('home')}>home</button>
        <button on-click={() => this.routePath('about')}>about</button>
        <router-view />
      </div>
    );
  }
}
