<template>
    <v-select
            v-model="val"
            taggable
            label="Name"
            :options="teachers"
            :reduce="teacher => teacher.Id"
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
                fetch(`${API_BASE}/teachers`)
                    .then(response => response.json())
                    .then(data => this.teachers = data);
            },
            createTeacher(label) {
                return {
                    Id: 0,
                    Name: label,
                };
            },
        },
    }
</script>
