<template>
    <v-select
            v-model="val"
            label="Name"
            :reduce="option => option.Id"
            :options="options"
            placeholder="День недели"
    />
</template>

<script>
    import {DAY_OPTIONS} from '@/util/consts';

    export default {
        name: 'Day',
        props: ['value'],
        data: () => ({
            options: DAY_OPTIONS,
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
