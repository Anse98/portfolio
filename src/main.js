import { createApp } from 'vue'
import './style/main.css'
import App from './App.vue'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faCompassDrafting, faAngleDown, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'


library.add(faLaptopCode, faCompassDrafting, faAngleDown, faLightbulb, faGraduationCap)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')



