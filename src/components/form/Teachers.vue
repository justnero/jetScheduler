<template>
    <v-select
            v-model="val"
            taggable
            label="Name"
            :options="teachers"
            :create-option="createTeacher"
            placeholder="Преподаватель"
    />
</template>

<script>
    import {API_BASE} from '@/util/consts';

    export default {
        name: 'Teachers',
        props: ['value'],
        data: () => ({
            teachers: [],
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
                fetch(`${API_BASE}/teachers`, {credentials: 'include'})
                    .then(response => response.json())
                    .then(data => this.teachers = data);
            },
            createTeacher(label) {
                const option = {
                    Name: label,
                };

                fetch(`${API_BASE}/teachers`, {
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
