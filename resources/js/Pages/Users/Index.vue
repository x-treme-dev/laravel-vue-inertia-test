<template>
    <Head>
        <title>{{ title }}</title>
    </Head>
       
    <div class="container mt-5">
        <div class="card shadow-sm">
            <div class="card-header bg-white py-3">
                <div class="d-flex justify-content-between align-items-center">
                    <button class="btn btn-primary btn-sm">
                        <i class="bi bi-person-plus"></i> Добавить пользователя
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div v-if="users.total > 0"  class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                               <th>Имя</th>
                                <th>E-mail</th>
                                <th class="text-center">Действия</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="user in users.data" :key="user.id">
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td class="text-center">
                                    <button class="btn btn-sm btn-outline-primary me-1" title="Редактировать">
                                        Редактировать
                                    </button>
                                    <button class="btn btn-sm btn-outline-danger" title="Удалить">
                                         Удалить
                                    </button>
                                </td>
                            </tr>
            
                        </tbody>
                    </table>
                </div>
                 <div v-else class="card-footer bg-white">
                <small class="text-muted">Пользователей пока нет</small>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'

export default {
    components: {
        Head
    },
    props: {
        title: String,
        users: Array
    }
}
</script>
