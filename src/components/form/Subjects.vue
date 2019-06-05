<template>
    <v-select
            v-model="val"
            taggable
            label="Name"
            :options="subjects"
            :reduce="subject => subject.Id"
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
                fetch(`${API_BASE}/subjects`)
                    .then(response => response.json())
                    .then(data => this.subjects = data);
            },
            createSubject(label) {
                return {
                    Id: 0,
                    Name: label,
                };
            },
        },
    }
</script>
