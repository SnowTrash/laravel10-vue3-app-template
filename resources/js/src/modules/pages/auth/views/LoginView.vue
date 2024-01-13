<script setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const authStore = useAuthStore();
const router = useRouter();

const showPassword = ref(false);
const form = reactive({
    email: "",
    password: "",
});
const { login } = authStore;
const loading = ref(false);
const rules = {
    email: { required, email },
    password: { required },
};

const v$ = useVuelidate(rules, form, { $autoDirty: true, $lazy: true });

const submitLogin = async () => {
    const isValid = await v$.value.$validate();

    if (!isValid) {
        return;
    }

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
                            v-model="v$.email.$model"
                            class="mb-2"
                            label="Email"
                            name="email"
                            type="email"
                            required
                            clearable
                            :error-messages="
                                v$.email.$errors.map((error) => error.$message)
                            "
                        />

                        <v-text-field
                            v-model="v$.password.$model"
                            class="mb-2"
                            label="Password"
                            name="password"
                            :type="showPassword ? 'text' : 'password'"
                            required
                            :append-inner-icon="
                                showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            clearable
                            :error-messages="
                                v$.password.$errors.map(
                                    (error) => error.$message,
                                )
                            "
                            @click:append-inner="showPassword = !showPassword"
                        />

                        <v-btn type="submit" color="primary" :loading="loading">
                            Login
                        </v-btn>

                        <v-divider class="my-4" />

                        <v-responsive class="text-center">
                            <v-btn
                                color="primary"
                                variant="text"
                                size="small"
                                :to="{ name: 'inicio' }"
                            >
                                Ir a la página principal
                            </v-btn>
                        </v-responsive>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
