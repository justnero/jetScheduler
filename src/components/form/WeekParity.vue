<template>
    <v-select
            v-model="val"
            label="Name"
            :reduce="option => option.Id"
            :options="options"
            placeholder="Чет/нечет"
    />
</template>

<script>
    import {PARITY_OPTIONS} from '@/util/consts';

    export default {
        name: 'WeekParity',
        props: ['value'],
        data: () => ({
            options: PARITY_OPTIONS,
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
    }
</script>
