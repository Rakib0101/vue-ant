<script setup>
import SelectProps from 'ant-design-vue';
import Card from "../components/Card.vue";
import Filter from "../components/icons/filterIcon.vue";
import { defineComponent, ref } from "vue";
import DownIcon from "../components/icons/DownIcon.vue";
import Tab from "../components/Tab.vue";
import CategoryCard from "../components/CategoryCard.vue";
</script>

<script>
export default defineComponent({
    components: {
        DownIcon,
        CategoryCard,
    },
    data() {
        const options1 = ref < SelectProps['options'] > ([
            {
                value: 'ascending',
                label: 'Ascending',
            },
            {
                value: 'descending',
                label: 'Descending',
            }])
        return {
            count: 5,
            filters: [],
            value1: ref('Sort By :'),
            options1,
        };
    },
});
</script>

<template>
    <main class="max-w-[1320px] mx-auto pt-6">
        <section class="flex gap-6">
            <div class="w-[319px] flex-grow-0"></div>
            <div class="flex-grow-0 max-w-[984px] space-y-6">
                <div class="flex items-center justify-between">
                    <a-button
                        class="flex items-center gap-2 filter-button px-5 h-[48px] rounded-[6px] hover:bg-[#32b32b] hover:text-white hover:border-transparent">
                        <Filter /> filter
                        <div v-show="count > 0" class="text-white bg-[#32b32b] p-1 rounded-full w-5 h-5 notification">
                            {{ count }}
                        </div>
                    </a-button>
                    <div class="flex items-center justify-between gap-3">
                        <!-- Selected -->
                        <a-select ref="select" v-model:value="value1" class="rounded-md">
                            <a-select-option value="des">Descending</a-select-option>
                            <a-select-option value="asc">Ascending</a-select-option>
                        </a-select>
                        <!-- selected -->
                        <div class="tab">
                            <Tab />
                        </div>
                    </div>
                </div>
                <div class="bg-[#F3F5F2] rounded-md">
                    <p v-show="filters.length" class="activeFilters py-[14px] px-[18px]">
                        Active Filters : {{ filters }}
                    </p>
                </div>
                <Card />
                <category-card></category-card>
            </div>
        </section>
    </main>
</template>
<style>
.ant-btn.filter-button {
    border: 2px solid #58B32B !important;
}

.filter-button {
    font-family: "IBM Plex Sans" !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 15px !important;
    line-height: 48px !important;
    letter-spacing: -0.01em !important;
    text-transform: uppercase !important;
    color: #58b32b !important;
}

.ant-btn,
.filter-button {
    border: 2px solid #58B32B;
}

.ant-btn:hover .notification {
    background-color: #fff !important;
    color: #58b32b !important;
}



.ant-select-selector {
    padding: 12px 18px !important;
    width: 200px !important;
    height: 48px !important;
    display: flex;
    align-items: center;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #636a60;
    border: 1px solid transparent !important;
    border-radius: 6px !important;
}

.ant-select,
.ant-select:hover {
    border: 1px solid #636a60 !important;
    border-radius: 6px !important;
}

.ant-select:not(.ant-select-disabled):hover .ant-select-selector:hover {
    border: 1px solid #636a60 !important;
    border-radius: 6px !important;
    box-shadow: none !important;
}


.notification {
    font-family: "IBM Plex Sans";
    font-style: normal;
    transition: all 0.4s linear;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
}

.ant-dropdown-link {
    box-shadow: 0px 3px 14px rgba(23, 30, 21, 0.02) !important;
}

.sort {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #636a60;
}

.activeFilters {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #171e15;
}
</style>
