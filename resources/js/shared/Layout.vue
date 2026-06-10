<!-- Layout.vue -->
<template>
    <div class="container mx-auto">
        <header>Навигация</header>
        <ul>
            <li> 
                <!--Переход по ссылке без перезагрузки, загрузка Vue-компонента -->
                <Link :href="route('home')">
                    Home 
                </Link>
            </li>

              <li> 
                <Link :href="route('about')">
                    About
                </Link>
            </li>
        </ul>
        <main>
            <slot /> <!-- Сюда подставляется конкретная страница -->
        </main>
        <footer>Подвал</footer>
    </div>
</template>

<script>
// добавим элемент из библиотеки
import{Link} from '@inertiajs/vue3'

// регистрируем
export default {
    components: {
        Link
    }
};
</script>