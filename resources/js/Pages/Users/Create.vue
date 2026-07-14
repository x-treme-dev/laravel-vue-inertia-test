<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Добавить пользователя</h5>
                        <Link :href="route('users.index')" class="btn btn-primary btn-sm">
                            Вернуться назад
                        </Link>
                    </div>
                    
                    <div class="card-body">
                        <form @submit.prevent="store">
                            <!-- Имя -->
                            <div class="mb-3">
                                <label for="name" class="form-label">Имя</label>
                                <input 
                                    id="name"
                                    v-model="form.name" 
                                    type="text" 
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.name }"
                                    placeholder="Введите имя"
                                />
                                <div v-if="form.errors.name" class="invalid-feedback">
                                    {{ form.errors.name }}
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input 
                                    id="email"
                                    v-model="form.email" 
                                    type="email" 
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.email }"
                                    placeholder="Введите email"
                                />
                                <div v-if="form.errors.email" class="invalid-feedback">
                                    {{ form.errors.email }}
                                </div>
                            </div>

                            <!-- Пароль -->
                            <div class="mb-3">
                                <label for="password" class="form-label">Пароль</label>
                                <input 
                                    id="password"
                                    v-model="form.password" 
                                    type="password" 
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.password }"
                                    placeholder="Введите пароль"
                                />
                                <div v-if="form.errors.password" class="invalid-feedback">
                                    {{ form.errors.password }}
                                </div>
                            </div>

                            <!-- Кнопки -->
                            <div class="d-flex gap-2">
                                <button 
                                    type="submit" 
                                    class="btn btn-primary"
                                    :disabled="form.processing"
                                >
                                    <span v-if="form.processing" class="spinner-border spinner-border-sm me-2"></span>
                                    Сохранить
                                </button>
                                <Link href="/users" class="btn btn-secondary">
                                    Отмена
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link, useForm } from '@inertiajs/vue3';

export default {
    components: {
        Link
    },
    setup() {
        const form = useForm({
            name: '',
            email: '',
            password: ''
        });

        function store() {
            form.post(route('users.store'));
        }

        return {
            form,
            store
        };
    }
};
</script>