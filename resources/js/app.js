// app.js
import 'bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css' // 👈 Добавьте импорт CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // 👈 Добавьте импорт JS
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import Layout from './shared/Layout.vue';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
    resolve: name => {
        //const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        // Убираем автоматическое добавление Layout
        //return pages[`./Pages/${name}.vue`]
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        const page = pages[`./Pages/${name}.vue`]
        page.default.layout = Layout  // Добавляем Layout к компоненту
        return page

    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            // будет работать в скриптах и шаблонах .vue
            .mixin({methods:{route:window.route}})
            .mount(el)
    },
})