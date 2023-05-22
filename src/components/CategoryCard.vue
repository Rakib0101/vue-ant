<template>
  <div class="">
    <div class="w-[1320px] grid grid-cols-3 gap-[24px] mx-auto my-auto">
      <a-card
        v-for="card in cards"
        :key="card.id"
        hoverable
        class="!border-[#DEE5DC] !border !rounded-[9px]"
      >
        <div class="card">
          <div class="">
            <div class="relative">
              <img v-bind:src="card.image" alt="" class="w-full img" />
              <span class="absolute right-6 top-6">
                <svg
                  class=""
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="18" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.9943 12.2798C16.3282 10.332 13.5498 9.80804 11.4623 11.5917C9.37472 13.3753 9.08083 16.3575 10.7202 18.467C12.0832 20.2209 16.2082 23.9201 17.5601 25.1174C17.7114 25.2513 17.787 25.3183 17.8752 25.3446C17.9522 25.3676 18.0364 25.3676 18.1134 25.3446C18.2016 25.3183 18.2773 25.2513 18.4285 25.1174C19.7805 23.9201 23.9054 20.2209 25.2684 18.467C26.9078 16.3575 26.6498 13.3566 24.5264 11.5917C22.4029 9.8268 19.6604 10.332 17.9943 12.2798Z"
                    stroke="#58B32B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <button
                class="absolute left-6 top-6 py-[4px] px-[10px] bg-[#E8903B] border border-[#FFFFFF] rounded text-[#FFFFFF] font-semibold text-sm leading-5"
              >
                Featured
              </button>
              <button
                class="absolute left-28 top-6 py-[4px] px-[10px] bg-[#CC3E42] border border-[#FFFFFF] rounded text-[#FFFFFF] font-semibold text-sm leading-5"
              >
                Urgents
              </button>
              <span class="absolute top-[222px]"
                ><svg
                  width="54"
                  height="53"
                  viewBox="0 0 54 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="87"
                    height="22"
                    transform="translate(-8 0.0917969) rotate(45)"
                    fill="#1F85E2"
                  />
                  <path
                    d="M12.0075 31.4527L7.0775 36.3827L5.95745 35.2626L10.8874 30.3327L9.20731 28.6526L10.2001 27.6598L14.6803 32.1401L13.6875 33.1328L12.0075 31.4527ZM11.6906 41.1995C11.3003 40.8092 11.0118 40.3906 10.8251 39.9437C10.6385 39.4968 10.5621 39.0301 10.596 38.5436C10.6356 38.0628 10.7827 37.5706 11.0373 37.0672C11.2918 36.5637 11.6708 36.0602 12.1743 35.5568C12.6721 35.059 13.1727 34.6828 13.6762 34.4282C14.1853 34.168 14.6803 34.0181 15.1611 33.9785C15.6476 33.9446 16.1143 34.0209 16.5612 34.2076C17.0081 34.3943 17.4267 34.6828 17.817 35.0731C18.2073 35.4634 18.4958 35.882 18.6825 36.3289C18.8692 36.7758 18.9456 37.2425 18.9116 37.729C18.8777 38.2155 18.7278 38.7105 18.4619 39.2139C18.2073 39.7174 17.8312 40.218 17.3334 40.7158C16.8299 41.2193 16.3264 41.5983 15.823 41.8528C15.3252 42.1131 14.833 42.2601 14.3465 42.2941C13.8601 42.328 13.3934 42.2517 12.9465 42.065C12.4996 41.8783 12.081 41.5898 11.6906 41.1995ZM12.6834 40.2067C13.1077 40.631 13.5857 40.8261 14.1174 40.7922C14.6548 40.7639 15.1781 40.4952 15.6872 39.9861L16.6036 39.0697C17.1127 38.5606 17.3814 38.0373 17.4097 37.4999C17.4437 36.9682 17.2485 36.4902 16.8242 36.0659C16.4 35.6416 15.9191 35.4436 15.3817 35.4719C14.85 35.5059 14.3296 35.7774 13.8205 36.2865L12.904 37.2029C12.3949 37.712 12.1234 38.2325 12.0895 38.7642C12.0612 39.3016 12.2592 39.7824 12.6834 40.2067ZM15.5083 44.8135L21.431 38.8908L24.0954 41.5551C24.3669 41.8267 24.5649 42.1152 24.6894 42.4206C24.8251 42.7261 24.8874 43.0372 24.876 43.354C24.8704 43.6651 24.794 43.9734 24.6469 44.2789C24.4999 44.5844 24.2906 44.8729 24.019 45.1444C23.7418 45.4216 23.4505 45.6337 23.145 45.7808C22.8452 45.9222 22.5369 45.9986 22.2202 46.0099C21.909 46.0156 21.5979 45.9533 21.2868 45.8232C20.987 45.6931 20.7013 45.4923 20.4298 45.2208L18.8854 43.6765L16.6284 45.9335L15.5083 44.8135ZM19.8528 42.7091L21.2953 44.1516C21.5102 44.3666 21.7365 44.4797 21.9741 44.491C22.2173 44.4967 22.4464 44.392 22.6614 44.1771L23.0517 43.7868C23.2667 43.5718 23.3685 43.3455 23.3572 43.1079C23.3459 42.8704 23.2327 42.6441 23.0178 42.4291L21.5753 40.9866L19.8528 42.7091Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div class="flex ml-[16px] mt-[16px]">
              <span class="mr-[4px]"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2648_14561)">
                    <path
                      d="M5.33331 5.33301H5.33998M1.33331 3.46634L1.33331 6.44935C1.33331 6.77547 1.33331 6.93853 1.37015 7.09198C1.40282 7.22803 1.45669 7.35809 1.52979 7.47739C1.61225 7.61194 1.72755 7.72724 1.95815 7.95785L7.07057 13.0703C7.8626 13.8623 8.25862 14.2583 8.71528 14.4067C9.11697 14.5372 9.54966 14.5372 9.95135 14.4067C10.408 14.2583 10.804 13.8623 11.5961 13.0703L13.0706 11.5957C13.8626 10.8037 14.2586 10.4077 14.407 9.95104C14.5375 9.54935 14.5375 9.11666 14.407 8.71497C14.2586 8.25832 13.8626 7.8623 13.0706 7.07026L7.95815 1.95785C7.72755 1.72724 7.61225 1.61194 7.47769 1.52949C7.3584 1.45638 7.22834 1.40251 7.09229 1.36985C6.93884 1.33301 6.77578 1.33301 6.44966 1.33301L3.46665 1.33301C2.71991 1.33301 2.34654 1.33301 2.06133 1.47833C1.81044 1.60616 1.60647 1.81014 1.47864 2.06102C1.33331 2.34624 1.33331 2.7196 1.33331 3.46634ZM5.66665 5.33301C5.66665 5.5171 5.51741 5.66634 5.33331 5.66634C5.14922 5.66634 4.99998 5.5171 4.99998 5.33301C4.99998 5.14891 5.14922 4.99967 5.33331 4.99967C5.51741 4.99967 5.66665 5.14891 5.66665 5.33301Z"
                      stroke="#58B32B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2648_14561">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 7.5V10.5M13.5 7.5V10.5M1.5 6.15L1.5 11.85C1.5 12.6901 1.5 13.1101 1.66349 13.431C1.8073 13.7132 2.03677 13.9427 2.31901 14.0865C2.63988 14.25 3.05992 14.25 3.9 14.25L14.1 14.25C14.9401 14.25 15.3601 14.25 15.681 14.0865C15.9632 13.9427 16.1927 13.7132 16.3365 13.431C16.5 13.1101 16.5 12.6901 16.5 11.85V6.15C16.5 5.30992 16.5 4.88988 16.3365 4.56902C16.1927 4.28677 15.9632 4.0573 15.681 3.91349C15.3601 3.75 14.9401 3.75 14.1 3.75L3.9 3.75C3.05992 3.75 2.63988 3.75 2.31901 3.91349C2.03677 4.0573 1.8073 4.28677 1.66349 4.56901C1.5 4.88988 1.5 5.30992 1.5 6.15ZM10.875 9C10.875 10.0355 10.0355 10.875 9 10.875C7.96447 10.875 7.125 10.0355 7.125 9C7.125 7.96447 7.96447 7.125 9 7.125C10.0355 7.125 10.875 7.96447 10.875 9Z"
                      stroke="#3A4138"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p
                  class="not-italic font-normal text-sm leading-5 text-[#3A4138]"
                >
                  Negotaiable: Fixed Price
                </p>
              </div>
              <div class="flex ml-[16px]">
                <span class="mr-[6px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1875 4.5H15.1875"
                      stroke="#3A4138"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.1875 9H15.1875"
                      stroke="#3A4138"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.1875 13.5H15.1875"
                      stroke="#3A4138"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.09375 10.125C3.71507 10.125 4.21875 9.62132 4.21875 9C4.21875 8.37868 3.71507 7.875 3.09375 7.875C2.47243 7.875 1.96875 8.37868 1.96875 9C1.96875 9.62132 2.47243 10.125 3.09375 10.125Z"
                      fill="#3A4138"
                    />
                    <path
                      d="M3.09375 5.625C3.71507 5.625 4.21875 5.12132 4.21875 4.5C4.21875 3.87868 3.71507 3.375 3.09375 3.375C2.47243 3.375 1.96875 3.87868 1.96875 4.5C1.96875 5.12132 2.47243 5.625 3.09375 5.625Z"
                      fill="#3A4138"
                    />
                    <path
                      d="M3.09375 14.625C3.71507 14.625 4.21875 14.1213 4.21875 13.5C4.21875 12.8787 3.71507 12.375 3.09375 12.375C2.47243 12.375 1.96875 12.8787 1.96875 13.5C1.96875 14.1213 2.47243 14.625 3.09375 14.625Z"
                      fill="#3A4138"
                    />
                  </svg>
                </span>
                <p class="not-italic font-normal text-sm text-[#3A4138]">
                  Authenticity: Used
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
                  <span
                    ><svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.0497 14C23.0264 14.1906 23.924 14.6683 24.6277 15.3719C25.3314 16.0756 25.8091 16.9733 25.9997 17.95M22.0497 10C24.0789 10.2254 25.9713 11.1342 27.4159 12.577C28.8606 14.0198 29.7717 15.911 29.9997 17.94M18.2266 21.8631C17.0251 20.6615 16.0763 19.3028 15.3803 17.8532C15.3204 17.7285 15.2905 17.6662 15.2675 17.5873C15.1858 17.3069 15.2445 16.9627 15.4145 16.7253C15.4623 16.6584 15.5195 16.6013 15.6338 16.487C15.9834 16.1374 16.1582 15.9626 16.2725 15.7868C16.7035 15.1239 16.7035 14.2693 16.2725 13.6064C16.1582 13.4307 15.9834 13.2559 15.6338 12.9062L15.4389 12.7114C14.9075 12.1799 14.6417 11.9142 14.3564 11.7699C13.7888 11.4828 13.1185 11.4828 12.551 11.7699C12.2656 11.9142 11.9999 12.1799 11.4684 12.7114L11.3108 12.869C10.7812 13.3986 10.5164 13.6634 10.3141 14.0235C10.0897 14.423 9.92833 15.0435 9.9297 15.5017C9.93092 15.9146 10.011 16.1969 10.1712 16.7613C11.0322 19.7947 12.6567 22.6571 15.0447 25.045C17.4326 27.433 20.295 29.0575 23.3284 29.9185C23.8928 30.0787 24.1751 30.1588 24.588 30.16C25.0462 30.1614 25.6667 30 26.0662 29.7756C26.4263 29.5733 26.6911 29.3085 27.2207 28.7789L27.3783 28.6213C27.9098 28.0898 28.1755 27.8241 28.3198 27.5387C28.6069 26.9712 28.6069 26.3009 28.3198 25.7333C28.1755 25.448 27.9098 25.1822 27.3783 24.6508L27.1835 24.4559C26.8339 24.1063 26.6591 23.9315 26.4833 23.8172C25.8204 23.3862 24.9658 23.3862 24.3029 23.8172C24.1271 23.9315 23.9523 24.1063 23.6027 24.4559C23.4884 24.5702 23.4313 24.6274 23.3644 24.6752C23.127 24.8453 22.7828 24.904 22.5024 24.8222C22.4235 24.7992 22.3612 24.7693 22.2365 24.7094C20.7869 24.0134 19.4282 23.0646 18.2266 21.8631Z"
                        stroke="#58B32B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="38"
                        height="38"
                        rx="4"
                        stroke="#DEF0D5"
                        stroke-width="2"
                      />
                    </svg>
                  </span>
                  <span
                    ><svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.5 26L22.8571 20M17.1429 20L10.5 26M10 15L18.1649 20.7154C18.8261 21.1783 19.1567 21.4097 19.5163 21.4993C19.8339 21.5785 20.1661 21.5785 20.4837 21.4993C20.8433 21.4097 21.1739 21.1783 21.8351 20.7154L30 15M14.8 28H25.2C26.8802 28 27.7202 28 28.362 27.673C28.9265 27.3854 29.3854 26.9265 29.673 26.362C30 25.7202 30 24.8802 30 23.2V16.8C30 15.1198 30 14.2798 29.673 13.638C29.3854 13.0735 28.9265 12.6146 28.362 12.327C27.7202 12 26.8802 12 25.2 12H14.8C13.1198 12 12.2798 12 11.638 12.327C11.0735 12.6146 10.6146 13.0735 10.327 13.638C10 14.2798 10 15.1198 10 16.8V23.2C10 24.8802 10 25.7202 10.327 26.362C10.6146 26.9265 11.0735 27.3854 11.638 27.673C12.2798 28 13.1198 28 14.8 28Z"
                        stroke="#58B32B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="38"
                        height="38"
                        rx="4"
                        stroke="#DEF0D5"
                        stroke-width="2"
                      />
                    </svg>
                  </span>
                  <span
                    ><svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 18.5H15.51M20 18.5H20.01M24.5 18.5H24.51M15 26V28.3355C15 28.8684 15 29.1348 15.1092 29.2716C15.2042 29.3906 15.3483 29.4599 15.5005 29.4597C15.6756 29.4595 15.8837 29.2931 16.2998 28.9602L18.6852 27.0518C19.1725 26.662 19.4162 26.4671 19.6875 26.3285C19.9282 26.2055 20.1844 26.1156 20.4492 26.0613C20.7477 26 21.0597 26 21.6837 26H24.2C25.8802 26 26.7202 26 27.362 25.673C27.9265 25.3854 28.3854 24.9265 28.673 24.362C29 23.7202 29 22.8802 29 21.2V15.8C29 14.1198 29 13.2798 28.673 12.638C28.3854 12.0735 27.9265 11.6146 27.362 11.327C26.7202 11 25.8802 11 24.2 11H15.8C14.1198 11 13.2798 11 12.638 11.327C12.0735 11.6146 11.6146 12.0735 11.327 12.638C11 13.2798 11 14.1198 11 15.8V22C11 22.93 11 23.395 11.1022 23.7765C11.3796 24.8117 12.1883 25.6204 13.2235 25.8978C13.605 26 14.07 26 15 26ZM16 18.5C16 18.7761 15.7761 19 15.5 19C15.2239 19 15 18.7761 15 18.5C15 18.2239 15.2239 18 15.5 18C15.7761 18 16 18.2239 16 18.5ZM20.5 18.5C20.5 18.7761 20.2761 19 20 19C19.7239 19 19.5 18.7761 19.5 18.5C19.5 18.2239 19.7239 18 20 18C20.2761 18 20.5 18.2239 20.5 18.5ZM25 18.5C25 18.7761 24.7761 19 24.5 19C24.2239 19 24 18.7761 24 18.5C24 18.2239 24.2239 18 24.5 18C24.7761 18 25 18.2239 25 18.5Z"
                        stroke="#58B32B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="38"
                        height="38"
                        rx="4"
                        stroke="#DEF0D5"
                        stroke-width="2"
                      />
                    </svg>
                  </span>
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

import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
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
        },
        {
          id: 2,
          image: img2,
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum",
          location: "Vijayawada, Andra Pradesh, India",
          price: "$250",
        },
        {
          id: 3,
          image: img3,
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum",
          location: "Vijayawada, Andra Pradesh, India",
          price: "$1200",
        },
        {
          id: 4,
          image: img1,
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum",
          location: "Buxar, Bihar, India",
          price: "$70",
        },
        {
          id: 5,
          image: img2,
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum",
          location: "Vijayawada, Andra Pradesh, India",
          price: "$250",
        },
        {
          id: 6,
          image: img3,
          description:
            "Lorem ipsum dolor sit amet, adipiscing elit. Morbi mauris ipsum",
          location: "Vijayawada, Andra Pradesh, India",
          price: "$1200",
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
