<script>
import ListIcon from "./icons/list.vue"
import DownIcon from "./icons/DownIcon.vue"
export default {
    name: 'MidNav',
    components: {
        ListIcon, DownIcon
    },
    data() {
        return {
            categories: [
                {
                    link: "/", item: "1st item"
                },
                {
                    link: "/", item: "2nd item"
                },
                {
                    link: "/", item: "3rd item"
                },
            ],
            menus: [
                {
                    link: "/", item: "1st item"
                },
                {
                    link: "/", item: "2nd item"
                },
            ]
        }
    }
}
</script>

<template>
    <div class="bg-white py-6">
        <div class="flex justify-between max-w-[1320px] mx-auto">
            <div class="flex gap-5">
                <!-- Category Button -->
                <div class="w-[148px]">
                    <a-dropdown>
                        <a @click.prevent
                            class="ant-dropdown-link flex items-center gap-[11px] border hover:border-primary hover:text-primary rounded-md justify-center categoryBtn transition duration-300">
                            <ListIcon />
                            Category
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item v-for="category in  categories " :key="category.item">
                                    <a :href="category.item">{{ category.item }}</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
                <!-- Category-Button End -->
                <nav class="flex items-center gap-5">
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
                </nav>
            </div>
            <a-button class="llBtn !py-[11px] !px-[17px] !h-auto">
                EN,USD
            </a-button>
        </div>
    </div>
</template>

<style>
.categoryBtn {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 48px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #171E15;
}

nav a {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #7A8178;
    transition: color .1s ease-in;
}

nav a:hover {
    color: #58B32B;
}

.ant-btn.llBtn {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #636A60;
    border-radius: 6px;
}

.ant-btn.llBtn:hover {
    border-color: #58B32B;
    color: #58B32B;
}
</style>