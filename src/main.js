import './rem.js'
import Vue from 'vue'
import App from './App.vue'
import vuerouter from './router/router.js'
import {Col,Row,Button,Icon,Field,Tab,Tabs,
Swipe,SwipeItem,Lazyload,Grid,GridItem,CountDown,
Tabbar,TabbarItem,Sidebar,SidebarItem} from 'vant'


Vue.config.productionTip = false
Vue.use(vuerouter);
Vue.use(Col).
use(Row).
use(Button).use(Icon).use(Field)
.use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Lazyload)
.use(Grid).use(GridItem).use(CountDown ).use(Tabbar).use(TabbarItem )
.use(Sidebar).use(SidebarItem);

new Vue({
  render: h => h(App),
  router:vuerouter
}).$mount('#app')
