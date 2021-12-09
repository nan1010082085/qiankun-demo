import { CreateElement, VNode } from 'vue/types';
import { Vue, Component } from 'vue-property-decorator';
import '@/assets/style/app.scss';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'About',
  components: { HelloWorld }
})
export default class About extends Vue {
  render(h: CreateElement): VNode {
    return (
      <div class='about'>
        <h1>This is an about page</h1>
      </div>
    );
  }
}
