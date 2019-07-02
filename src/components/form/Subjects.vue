<template>
    <v-select
            v-model="val"
            taggable
            label="Name"
            :options="subjects"
            :create-option="createSubject"
            placeholder="Предмет"
    />
</template>

<script>
    import {API_BASE} from '@/util/consts';

    export default {
        name: 'Subjects',
        props: ['value'],
        data: () => ({
            subjects: [],
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
                fetch(`${API_BASE}/subjects`, {credentials: 'include'})
                    .then(response => response.json())
                    .then(data => this.subjects = data);
            },
            createSubject(label) {
                const option = {
                    Name: label,
                };

                fetch(`${API_BASE}/subjects`, {
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
