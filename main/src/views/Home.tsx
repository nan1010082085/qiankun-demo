import { CreateElement, VNode } from 'vue/types';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Home'
})
export default class Home extends Vue {
  render(h: CreateElement): VNode {
    return <div>
      home
    </div>;
  }
}
