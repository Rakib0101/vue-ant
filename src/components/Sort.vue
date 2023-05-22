<template>
    <a-space>
        <a-select ref="select" v-model:value="value1"
            class="flex items-center gap-[88px] border border-[#DEE6DC] w-fit px-[18px] py-3 rounded-[6px] sort">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
    </a-space>
</template>
<script lang="ts">
import type { SelectProps } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const options1 = ref<SelectProps['options']>([
            {
                value: 'jack',
                label: 'Jack',
            },
            {
                value: 'lucy',
                label: 'Lucy',
            },
            {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
            },
            {
                value: 'yiminghe',
                label: 'Yiminghe',
            },
        ]);
        return {
            value1: ref('lucy'),
            options1,
        };
    },
});
</script>
<style>
.sort {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #636a60;
}
</style>

