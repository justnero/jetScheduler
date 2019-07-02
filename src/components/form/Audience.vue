<template>
    <v-select
            v-model="val"
            taggable
            label="Name"
            :options="audiences"
            :create-option="createAudience"
            placeholder="Аудитория"
    />
</template>

<script>
    import {API_BASE} from '@/util/consts';

    export default {
        name: 'Audience',
        props: ['value', 'housing'],
        data: () => ({
            audiences: [],
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
                fetch(`${API_BASE}/audiences`, {credentials: 'include'})
                    .then(response => response.json())
                    .then(data => this.audiences = data);
            },
            createAudience(label) {
                const option = {
                    Name: label,
                    HousingId: this.housing.Id,
                };

                fetch(`${API_BASE}/audiences`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(option),
                })
                    .then(response => response.json())
                    .then(response => {
                        option.Id = response.Id;
                        this.$emit('option:created', option);
                    });

                return option;
            },
        },
    }
</script>
