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
            rawValue() {
                if (typeof this.value !== 'object') {
                    return this.options.find(el => el.Id === this.value);
                }
                return this.value;
            },
            val: {
                get() {
                    return this.rawValue;
                },
                set(value) {
                    this.$emit('input', value);
                },
            },
        },
        watch: {
            value() {

            },
        },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                fetch(`${API_BASE}/scheduletimes?housingId=${this.housing.Id}`, {credentials: 'include'})
                    .then(response => response.json())
                    .then(data => this.options = data);
            },
        },
    }
</script>
