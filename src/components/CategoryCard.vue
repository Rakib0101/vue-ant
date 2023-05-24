<template>
  <div class="">
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-[24px] mx-auto my-auto">
      <a-card
        v-for="card in cards"
        :key="card.id"
        hoverable
        class="!border-[#DEE5DC] !border !rounded-[9px]"
      >
        <div class="card">
          <div class="">
            <div class="relative overflow-hidden">
              <img v-bind:src="card.image" alt="" class="w-full img" />
              <span class="absolute right-6 top-6">
                <LoveIcon></LoveIcon>
              </span>
              <button
                v-show="card.isFeat"
                class="absolute left-6 top-6 py-[4px] px-[10px] bg-[#E8903B] border border-[#FFFFFF] rounded text-[#FFFFFF] font-semibold text-sm leading-5"
              >
                Featured
              </button>
              <button
                v-show="card.isUrgent"
                class="absolute left-28 top-6 py-[4px] px-[10px] bg-[#CC3E42] border border-[#FFFFFF] rounded text-[#FFFFFF] font-semibold text-sm leading-5"
              >
                Urgents
              </button>
              <span class="absolute top-[222px]">
                <TopIcon></TopIcon>
              </span>
            </div>
            <div class="flex ml-[16px] mt-[16px]">
              <span class="mr-[4px]">
                <ForSaleIcon></ForSaleIcon>
              </span>
              <p
                class="text-[#58B32B] mb-[0px] font-semibold text-sm uppercase for-sale"
              >
                For sale
              </p>
            </div>

            <div>
              <p
                class="pt-[7px] px-[16px] mb-0 font-semibold not-italic text-[16px] leading-6 category-description"
              >
                {{ card.description }}
              </p>
              <p
                class="px-[16px] pt-[6px] pb-[16px] mb-0 category-location not-italic text-[14px] leading-5 font-normal self-stretch"
              >
                {{ card.location }}
              </p>
              <hr class="mb-[16px]" />
              <div class="flex ml-[16px]">
                <span class="mr-[6px]">
                  <Negotaiable></Negotaiable>
                </span>
                <p
                  class="not-italic font-normal text-sm leading-5 text-[#3A4138]"
                >
                  Negotaiable:
                  {{ card.isNegotiable ? "fixed" : "Negotiable" }}
                </p>
              </div>
              <div class="flex ml-[16px]">
                <span class="mr-[6px]">
                  <AuthenticityIcon></AuthenticityIcon>
                </span>
                <p class="not-italic font-normal text-sm text-[#3A4138]">
                  Authenticity: {{ card.authenticity }}
                </p>
              </div>
              <hr />

              <div class="flex justify-between px-[16px] py-[16px]">
                <div>
                  <p
                    class="font-semibold !mb-0 leading-6 text-[20px] uppercase text-[#E8903B]"
                  >
                    {{ card.price }}
                  </p>
                  <span
                    class="not-italic text-[14px] leading-5 font-normal text-[#636A60] self-stretch"
                    >USD</span
                  >
                </div>
                <div class="flex gap-[8px]">
                  <ContactIcon></ContactIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script>
import img1 from "../assets/category/img1.png";
import img2 from "../assets/category/img2.png";
import img3 from "../assets/category/img3.png";
import TopIcon from "./icons/card-icons/TopIcon.vue";
import ContactIcon from "./icons/card-icons/ContactIcon.vue";
import LoveIcon from "./icons/card-icons/LoveIcon.vue";
import ForSaleIcon from "./icons/card-icons/ForSaleIcon.vue";
import Negotaiable from "./icons/card-icons/Negotaiable.vue";
import AuthenticityIcon from "./icons/card-icons/AuthenticityIcon.vue";

import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import ContactIconVue from "./icons/card-icons/ContactIcon.vue";
export default defineComponent({
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    TopIcon,
    ContactIcon,
    LoveIcon,
    ForSaleIcon,
    Negotaiable,
    AuthenticityIcon,
  },

  setup() {
    return {
      cards: [
        {
          id: 1,
          image: img1,
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum",
          location: "Buxar, Bihar, India",
          price: "$70",
          isNegotiable: true,
          authenticity: "Used",
          isFeat: true,
          isUrgent: true,
          isTop: true,
          isLoved: false,
        },
        {
          id: 2,
          image: img2,
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum",
          location: "Vijayawada, Andra Pradesh, India",
          price: "$250",
          isNegotiable: false,
          authenticity: "Used",
          isFeat: true,
          isUrgent: false,
          isTop: true,
          isLoved: false,
        },
        {
          id: 3,
          image: img3,
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum",
          location: "Vijayawada, Andra Pradesh, India",
          price: "$1200",
          isNegotiable: true,
          authenticity: "Used",
          isFeat: false,
          isUrgent: false,
          isTop: true,
          isLoved: false,
        },
      ],
    };
  },
});
</script>
<style>
.card {
  box-sizing: border-box;
  /* Auto layout */
  padding: 0px;
  /* Gray/00 */
  background: #ffffff;
  /* Gray/01 */
  border: 1px solid #dee6dc;
  box-shadow: 0px 8px 24px rgba(23, 30, 21, 0.04);
  border-radius: 9px;
}

.ant-card-body {
  border: none !important;
}

.img {
  border-radius: 9px !important;
  border: 4px solid #1f85e2 !important;
}

.for-sale {
  line-height: 100% !important;
}

.ant-card-body {
  padding: 0 !important;
  border-radius: 9px;
}

.category-description {
  font-family: "IBM Plex Sans" !important;
  line-height: 24px !important;
  color: #171e15 !important;
}

.category-location {
  font-family: "IBM Plex Sans" !important;
  color: #636a60 !important;
}
</style>
