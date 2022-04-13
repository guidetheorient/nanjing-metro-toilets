import { createApp } from 'vue'
import Router from './router'
import App from './App.vue'

import _ from '../src/util/index'
window._ = _

createApp(App).use(Router).mount('#app')
