<template>
    <v-select
            v-model="val"
            :get-option-label="option => `${option.Start.substr(0,5)}-${option.End.substr(0,5)}`"
            :options="options"
            placeholder="Время"
    />
</template>

<script>
    import {API_BASE} from '@/util/consts';

    export default {
        name: 'ScheduleTime',
        props: ['value', 'housing'],
        data: () => ({
            options: [],
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
                fetch(`${API_BASE}/scheduletimes?housingId=${this.housing.Id}`)
                    .then(response => response.json())
                    .then(data => this.options = data);
            },
        },
    }
</script>
