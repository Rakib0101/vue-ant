<script>
import ListIcon from "./icons/list.vue";
import DownIcon from "./icons/DownIcon.vue";

import { CloseOutlined } from "@ant-design/icons-vue"
import { defineComponent } from "vue";
export default defineComponent({
    name: "MidNav",
    components: {
        ListIcon,
        DownIcon,
        CloseOutlined
    },
    data() {

        return {
            categories: [
                {
                    link: "/",
                    item: "1st item",
                },
                {
                    link: "/",
                    item: "2nd item",
                },
                {
                    link: "/",
                    item: "3rd item",
                },
            ],
            menus: [
                {
                    link: "/",
                    item: "1st item",
                },
                {
                    link: "/",
                    item: "2nd item",
                },
            ],
            isShowed: false,
        };
    },
    methods: {
        showMenu() {
            this.isShowed = !this.isShowed;
        },
    },
});
</script>

<template>
    <div class="bg-white py-6">
        <div class="flex justify-between max-w-[1320px] container px-2 lg:px-6 2xl:px-0">
            <div class="flex gap-2 lg:gap-5">
                <!-- Category Button -->
                <div class="md:w-[148px] my-auto" @click="isShowed = !isShowed">
                    <a-button
                        class="flex md:hidden menuBtn border border-[#58B32B] items-center gap-[11px] hover:border-primary hover:text-primary rounded-md justify-center transition duration-300 h-[48px]">
                        <ListIcon />
                        Menu
                    </a-button>
                    <a-dropdown>
                        <span
                            class="ant-dropdown-link items-center gap-[11px] border hover:border-primary hover:text-primary rounded-md justify-center categoryBtn transition duration-300 hidden md:flex">
                            <ListIcon />
                            Category
                        </span>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item v-for="category in categories" :key="category.item">
                                    <a :href="category.item">{{ category.item }}</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
                <!-- Category-Button End -->
                <nav class="flex items-center lg:justify-between">
                    <!-- Desktop Nav -->
                    <div class="hidden md:flex items-center md:gap-5 lg:py-0 lg:px-0 lg:bg-inherit ">
                        <a href="">Home</a>
                        <a href="">Browse Listing</a>
                        <a href="">Pricing Plan</a>
                        <a-dropdown>
                            <a href="" class="ant-dropdown-link flex items-center gap-[5px]">
                                Testing Dropdown
                                <DownIcon />
                            </a>
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item v-for="menu in menus" :key="menu.item">
                                        <a :href="menu.link">{{ menu.item }}</a>
                                    </a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                        <a href="">Blog</a>
                    </div>
                    <!-- Mobile Nav -->
                    <div :class="isShowed ? 'top-[50px] opacity-100 translate-x-[-280px]' : 'top-[100px] opacity-1 translate-x-[-3000px]'"
                        class="fixed rounded-tr-md rounded-br-md z-[999] lg:hidden transition-all duration-500 px-40">
                        <a-button @click="isShowed = !isShowed" type="button"
                            class="relative text-lg font-bold text-[#58B32B] top-10 left-80 bg-transparent z-[9999] flex justify-center items-center"><close-outlined /></a-button>
                        <div class="flex flex-col fixed py-14 bg-[#F1F5F0] items-center z-[999] gap-10 w-full">
                            <a href="">Home</a>
                            <a href="">Browse Listing</a>
                            <a href="">Pricing Plan</a>
                            <a-dropdown>
                                <a href="" class=" ant-dropdown-link flex items-center gap-[5px]">
                                    Testing Dropdown
                                    <DownIcon />
                                </a>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item v-for="menu in menus" :key="menu.item">
                                            <a :href="menu.link">{{ menu.item }}</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                            <a href="">Blog</a>
                        </div>
                    </div>

                </nav>
            </div>
            <a-button class="llBtn py-[11px] px-[17px] h-auto hidden md:flex">
                EN,USD
            </a-button>
        </div>
    </div>
</template>

<style>
.categoryBtn {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 48px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #171e15;
}

nav a {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #7a8178;
    transition: color 0.1s ease-in;
}

nav a:hover {
    color: #58b32b;
}

.ant-btn.llBtn {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #636a60;
    border-radius: 6px;
    box-shadow: 0px 3px 14px rgba(23, 30, 21, 0.02);
    border: 1px solid #dee6dc !important;
}

.ant-btn.llBtn:hover,
.ant-btn.llBtn:focus {
    border-color: #58b32b;
    color: #58b32b;
}

.ant-btn.menuBtn {
    border: 1px solid #58b32b !important;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #636a60;
    border-radius: 6px;
    box-shadow: 0px 3px 14px rgba(23, 30, 21, 0.02);
    border: 1px solid #dee6dc !important;
}

.notShowed {
    transform: translateX(-50%) !important;
    opacity: 0 !important;
    transition: all 0.3s ease-in !important;
}
</style>