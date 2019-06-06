<template>
    <v-select
            v-model="val"
            label="Name"
            :reduce="option => option.Id"
            :options="options"
            placeholder="Тип занятия"
    />
</template>

<script>
    import {LESSON_OPTIONS} from '@/util/consts';

    export default {
        name: 'LessonType',
        props: ['value'],
        data: () => ({
            options: LESSON_OPTIONS,
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
