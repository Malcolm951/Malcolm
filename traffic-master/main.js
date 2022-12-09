import App from './App'
import i18n from './lang/i18n'

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// uni.$u.config.unit = 'rpx'

const app = new Vue({
	i18n,
	...App
})
app.$mount()

