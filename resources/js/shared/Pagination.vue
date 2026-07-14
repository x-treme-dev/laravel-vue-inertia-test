<template>
    <div>
        <!-- Отображение пользователей -->
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>

        <!-- Пагинация -->
        <nav v-if="links.length > 3">
            <ul class="pagination">
                <li 
                    v-for="(link, k) in links" 
                    :key="k"
                    class="page-item"
                    :class="{ active: link.active, disabled: !link.url }"
                >
                    <button
                        v-if="link.url"
                        class="page-link"
                        @click="() => router.visit(link.url)"
                        v-html="link.label"
                    />
                    <span v-else class="page-link" v-html="link.label" />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { router } from '@inertiajs/vue3'

const props = defineProps({
    users: Array,
    links: Array,
    meta: Object
})

// Для отладки
console.log('Users:', props.users?.length)
console.log('Links:', props.links)
console.log('Meta:', props.meta)
</script>


 