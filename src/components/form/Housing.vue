<template>
    <v-select
            v-model="val"
            label="Name"
            :options="housings"
            :reduce="housing => housing.Id"
            placeholder="Корпус"
    />
</template>

<script>
    import {API_BASE} from "@/util/consts";

    export default {
        name: 'Housings',
        props: ['value'],
        data: () => ({
            housings: [],
        }),
        computed: {
            val: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
                },
            },
        },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                fetch(`${API_BASE}/housings`, {credentials: 'include'})
                    .then(response => response.json())
                    .then(data => this.housings = data);
            },
        },
    }
</script>
