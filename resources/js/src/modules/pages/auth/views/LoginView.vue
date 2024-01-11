<script setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const showPassword = ref(false);
const form = reactive({
    email: "luisfernandosalgadomiguez@gmail.com",
    password: "Password123$",
});
const { login } = authStore;
const loading = ref(false);

const submitLogin = async () => {
    loading.value = true;

    try {
        await login(form);

        router.push({ name: "admin.dashboard" });
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <v-row>
        <v-col cols="12" md="4" offset-md="4">
            <v-card class="mx-auto" max-width="460">
                <v-card-title>
                    <span class="text-h5">Login</span>
                </v-card-title>

                <v-card-text>
                    <v-form
                        autocomplete="off"
                        :disabled="loading"
                        @submit.prevent="submitLogin"
                    >
                        <v-text-field
                            v-model="form.email"
                            label="Email"
                            name="email"
                            type="email"
                            required
                            clearable
                        />

                        <v-text-field
                            v-model="form.password"
                            label="Password"
                            name="password"
                            :type="showPassword ? 'text' : 'password'"
                            required
                            :append-inner-icon="
                                showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            clearable
                            @click:append-inner="showPassword = !showPassword"
                        />

                        <v-btn type="submit" color="primary" :loading="loading">
                            Login
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
