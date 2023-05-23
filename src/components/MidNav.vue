<script>
import ListIcon from "./icons/list.vue";
import DownIcon from "./icons/DownIcon.vue";
export default {
    name: "MidNav",
    components: {
        ListIcon,
        DownIcon,
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
};
</script>

<template>
    <div class="bg-white py-6">
        <div class="flex justify-between max-w-[1320px] container px-2 lg:px-6 2xl:px-0">
            <div class="flex gap-2 lg:gap-5">
                <!-- Category Button -->
                <div class="lg:w-[148px] my-auto" @click="isShowed = !isShowed">
                    <a-button
                        class="flex lg:hidden menuBtn border border-[#58B32B] items-center gap-[11px] hover:border-primary hover:text-primary rounded-md justify-center transition duration-300 h-[48px]">
                        <ListIcon />
                        Menu
                    </a-button>
                    <a-dropdown>
                        <span
                            class="ant-dropdown-link items-center gap-[11px] border hover:border-primary hover:text-primary rounded-md justify-center categoryBtn transition duration-300 hidden lg:flex">
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
                    <div :class="isShowed ? 'top-[100px] opacity-100 left-0 translate-x-0' : 'top-[100px] opacity-0 -translate-x-[300px]'"
                        class="flex flex-col fixed py-14 rounded-tr-md rounded-br-md bg-[#F1F5F0] z-[999] px-10 gap-10 lg:static lg:flex-row items-center lg:gap-5 lg:py-0 lg:px-0 lg:bg-inherit transition-all duration-500">
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
                </nav>
            </div>
            <a-button class="llBtn py-[11px] px-[17px] h-auto hidden lg:flex">
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