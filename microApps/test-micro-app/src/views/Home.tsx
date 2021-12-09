import { CreateElement, VNode } from 'vue/types';
import { Vue, Component } from 'vue-property-decorator';
import '@/assets/style/app.scss';
import HelloWorld from '@/components/HelloWorld.vue';
import _ from 'lodash';
@Component({
  name: 'Home',
  components: { HelloWorld }
})
export default class Home extends Vue {
  data = [2, 4, 1, 5, 7, 2, 3, 4, 5];
  newData: any = [];
  mounted() {
    console.log('micro app lodash [uniq]', _.uniq);
  }

  render(h: CreateElement): VNode {
    return (
      <div>
        <hello-world msg={'The is Micro App'} />
        <div>
          <div>{this.data.length}</div>
          {/* {this.newData.map((n: number) => {
            return <span>{n}</span>;
          })} */}
        </div>
      </div>
    );
  }
}
