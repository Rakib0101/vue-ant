<template>
    <a-card v-for="(card, i) in  cards " hoverable style="width: fit-content"
        class="!border-[#DEE5DC] !border !rounded-[9px]" :key="i">
        <div class="grid grid-cols-1 xl:grid-cols-3">
            <!-- 1st column -->
            <div class="border-4 rounded border-blue-500">
                <div class="relative overflow-hidden">
                    <img :alt="card.productAlt" :src="card.productImage" class="w-full" />
                    <div class="absolute top-[12px] left-[12px] space-x-[6px]">
                        <span v-show="card.isFeat"
                            class="feat bg-[#E8903B] py-1 px-[10px] border border-white rounded">featured</span>
                        <span v-show="card.isUrgent"
                            class="urgent bg-[#CC3E42] py-1 px-[10px] border border-white rounded">urgent</span>
                    </div>
                    <a-button @click="fav(i)" :class="{ 'bg-[#58b32b] loved': card.isLoved }"
                        class="md:hidden flex absolute top-[5px] right-[5px] border-2 border-[#58B32B] w-fit h-fit rounded-full p-2 justify-center items-center">
                        <heart />
                    </a-button>
                    <span v-show="card.isTop"
                        class="top-flag absolute bottom-[5px] -left-[30px] bg-[#1F85E2] pt-1 pb-[6px] px-8 rotate-45">top</span>
                </div>
            </div>
            <!-- 2nd column -->
            <div class="p-4 sm:p-6 flex flex-col justify-between border-r border-[#DEE5DC]">
                <!-- upper section -->
                <div class="space-y-5 sm:space-y-[6px] ">
                    <div class="icon-button pricing-conditions">
                        <PriceTag />
                        for sale
                    </div>
                    <div class="">
                        <p class="product-heading">{{ card.productHeading }}</p>
                        <p class="location-text">{{ card.location }} </p>
                    </div>
                </div>
                <!-- lower section -->
                <div class="space-y-[8px]">
                    <div class="currency-text icon-button">
                        <Currency /> negotiable: {{ card.isNegotiable ? "fixed" : "negotiable" }}
                    </div>
                    <div class="authenticity-text icon-button">
                        <List /> authenticity: {{ card.authenticity }}
                    </div>
                </div>
            </div>
            <!-- 3rd column -->
            <div class="p-6 flex flex-row items-center xl:items-stretch xl:justify-between xl:flex-col justify-between">
                <div class="flex justify-between md:w-1/2 xl:w-full">
                    <div class="space-y-1">
                        <p class="price">${{ card.price }}</p>
                        <p class="currency">{{ card.currency }}</p>
                    </div>
                    <div>
                        <a-button @click="fav(i)" :class="{ 'bg-[#58b32b] loved': card.isLoved }"
                            class="hidden md:flex border-2 border-[#58B32B] w-fit h-fit rounded-full p-3 justify-center items-center">
                            <heart />
                        </a-button>
                    </div>
                </div>
                <a-button style="height: auto; padding: 0; border-radius: 6px; border: none;"
                    class="w-1/2 md:w-1/3 xl:w-full">
                    <div
                        class="cardBtn border border-[#58b32b] hover:border-transparent  hover:text-white rounded-[6px] hover:bg-[#58b32b] transition-colors duration-200">
                        view details
                    </div>
                </a-button>
            </div>
        </div>
    </a-card>
</template>

<script>
import PriceTag from "./icons/card-icons/PriceTag.vue"
import Currency from "./icons/card-icons/currencyTag.vue"
import List from "./icons/ListIcon.vue"
import heart from "./icons/heart.vue"
import image1 from "../assets/images/card-assets/Image.png"
import image2 from "../assets/images/card-assets/Image 1.png"
import image3 from "../assets/images/card-assets/Image 2.png"
import image4 from "../assets/images/card-assets/Image 3.png"
import image5 from "../assets/images/card-assets/Image 4.png"
import { defineComponent } from 'vue';
export default defineComponent({
    components: { PriceTag, Currency, List, heart },
    setup() {
        return {
            cards: [
                {
                    productImage: image1,
                    productAlt: "Old Car",
                    productHeading: "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum, semper.",
                    sellingCondition: "for sale",
                    location: "Buxar, Bihar, India",
                    authenticity: "Used",
                    price: "70",
                    currency: "usd",
                    isNegotiable: true,
                    isFeat: true,
                    isUrgent: true,
                    isTop: true,
                    isLoved: false
                },
                {
                    productImage: image2,
                    productAlt: "Old Ipad",
                    productHeading: "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum, semper.",
                    sellingCondition: "for sale",
                    location: "vijayawada, Andra Pradesh, India",
                    authenticity: "Used",
                    price: "250",
                    currency: "usd",
                    isNegotiable: true,
                    isFeat: true,
                    isUrgent: false,
                    isTop: false,
                    isLoved: true
                },
                {
                    productImage: image3,
                    productAlt: "Old Car",
                    productHeading: "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum, semper.",
                    sellingCondition: "for sale",
                    location: "Kavali, Andra Pradesh, India",
                    authenticity: "Brand New",
                    price: "560",
                    currency: "usd",
                    isNegotiable: true,
                    isFeat: false,
                    isUrgent: true,
                    isTop: true,
                    isLoved: false
                },
            ],
            fav(i) {
                this.cards[i].isLoved = !this.cards[i].isLoved
                console.log(i, this.cards[i].isLoved);
            },
        }
    },
});
</script>
<style>
.ant-card-body {
    padding: 0px !important;
}

.pricing-conditions {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    text-transform: uppercase;
    color: #58B32B;
}

.product-heading {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #171E15;
}

.location-text,
.currency {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #636A60;
}

.currency-text,
.authenticity-text {
    font-family: 'IBM Plex Sans';
    text-transform: capitalize;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #3A4138;
}

.price {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    text-transform: uppercase;
    color: #E8903B;
    margin-bottom: 0px;
}

.cardBtn {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 48px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #58b32b;
}

.feat,
.urgent {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
}

.top-flag {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
}

.loved svg {
    fill: #fff !important;
    stroke: #fff !important;
}

.notLoved>svg {
    fill: #58B32B;
    stroke: white;
}
</style>