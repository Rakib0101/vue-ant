<template>
  <div class="bg-[#F3F5F2]">
    <div class="max-w-[1320px] items-center flex justify-between mx-auto">
      <div class="flex lg:flex-row justify-center items-center my-[24px]">
        <span class="mr-[11.67px]">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6562 2.99473C21.4157 2.87448 21.2955 2.81436 21.1693 2.79069C21.0576 2.76974 20.943 2.76974 20.8313 2.79069C20.7051 2.81436 20.5849 2.87448 20.3444 2.99473L2.66696 11.8334L20.3444 20.6722C20.5849 20.7924 20.7051 20.8525 20.8313 20.8762C20.943 20.8972 21.0576 20.8972 21.1693 20.8762C21.2955 20.8525 21.4157 20.7924 21.6562 20.6722L39.3336 11.8334L21.6562 2.99473Z"
              fill="#58B32B"
            />
            <path
              d="M11.8336 16.4168L2.66696 21.0001L20.3444 29.8388C20.5849 29.9591 20.7051 30.0192 20.8313 30.0429C20.943 30.0638 21.0576 30.0638 21.1693 30.0429C21.2955 30.0192 21.4157 29.9591 21.6562 29.8388L39.3336 21.0001L30.167 16.4168M11.8336 25.5834L2.66696 30.1668L20.3444 39.0055C20.5849 39.1257 20.7051 39.1859 20.8313 39.2095C20.943 39.2305 21.0576 39.2305 21.1693 39.2095C21.2955 39.1859 21.4157 39.1257 21.6562 39.0055L39.3336 30.1668L30.167 25.5834M2.66696 11.8334L20.3444 2.99473C20.5849 2.87448 20.7051 2.81436 20.8313 2.79069C20.943 2.76974 21.0576 2.76974 21.1693 2.79069C21.2955 2.81436 21.4157 2.87448 21.6562 2.99473L39.3336 11.8334L21.6562 20.6722C21.4157 20.7924 21.2955 20.8525 21.1693 20.8762C21.0576 20.8972 20.943 20.8972 20.8313 20.8762C20.7051 20.8525 20.5849 20.7924 20.3444 20.6722L2.66696 11.8334Z"
              stroke="#58B32B"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <p class="mr-[16px] navbar-name my-auto hidden lg:flex">Adriver</p>
        <!-- search start -->
        <span v-on:click="show" class="lg:hidden font-bold">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
              stroke="#58b32b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <!-- search end -->
        <!-- {{ isTrue }} -->
        <!-- label start -->
        <label v-show="isTrue" class="lg:flex hidden top-navbar-label">
          <!-- :class="['flex', 'top-navbar-label', isTrue ? 'flex-col' : 'hidden']" -->
          <div class="flex items-center justify-center !pl-[18px]">
            <div class="flex justify-between">
              <div class="flex items-center justify-center">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                    stroke="#171E15"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 21C13 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 5 17 9 21Z"
                    stroke="#171E15"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a-input placeholder="Location" class="location-field" />
              </div>
              <span class="!pr-[22px] flex items-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 11H17M5 11H1M11 5V1M11 21V17M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11ZM14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11Z"
                    stroke="#58B32B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <span class="!pr-[21px]">
            <svg
              width="1"
              height="32"
              viewBox="0 0 1 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="32"
                stroke="#DEE6DC"
              />
            </svg>
          </span>

          <div class="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="#171E15"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a-input
              placeholder="Search for anything..."
              class="search-field"
            />
          </div>
        </label>
        <!-- label end -->
      </div>
      <div class="flex items-center justify-center gap-[12px]">
        <a-button class="!p-0 h-fit">
          <div
            class="h-[48px] not-italic font-semibold text-[15px] uppercase py-0 px-[20px] leading-[48px] font-['IBM_Plex_Sans'] tracking-[-0.01em] rounded-lg text-[#58b32b] border-2 border-[#58b32b] hover:border-[#356b1a]"
          >
            Sign In
          </div>
        </a-button>
        <a-button class="!p-0 h-fit">
          <div class="nav-btn-right flex items-center justify-center">
            <span class="!pr-[10px]"><PlusIcon></PlusIcon></span>
            Post Your Ad
          </div></a-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import environmentOutlined from "@ant-design/icons-vue";
import PlusIcon from "./PlusIcon.vue";
export default {
  name: "Navbar",
  components: {
    PlusIcon,
    environmentOutlined,
  },
  data() {
    return {
      isTrue: true,
    };
  },
  methods: {
    show() {
      this.isTrue = !this.isTrue;
    },
  },
  mounted() {
    this.show();
  },
};
</script>
<style>
.navbar-name {
  font-family: "IBM Plex Sans" !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 36px !important;
  line-height: 48px !important;
  text-transform: uppercase !important;
  color: #171e15 !important;
}
.top-navbar-label {
  box-sizing: border-box;
  align-items: center;
  padding: 0px;
  width: 656px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #dee6dc;
  box-shadow: 0px 3px 14px rgba(23, 30, 21, 0.03);
  border-radius: 6px;
}
.top-navbar-label:has(input:focus) {
  border: 2px solid #58b32b;
}

.nav-btn-left-mobile-device {
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 34px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  padding: 0px 10px;
  border-radius: 6px;
  color: #58b32b;
  border: 2px solid #58b32b;
}

.nav-btn-right {
  background: #58b32b;
  /* Primary/500 */
  font-family: "IBM Plex Sans" !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  line-height: 48px !important;
  letter-spacing: -0.01em !important;
  text-transform: uppercase !important;
  color: #ffffff !important;
  height: auto !important;
  border-radius: 8px !important;
  padding: 0px 20px;
}
.ant-btn {
  border: none !important;
}
.nav-btn-right:hover {
  background: #356b1a !important;
}
.plus-btn {
  position: absolute !important;
  left: 22px !important;
  top: 16px !important;
}
.location-field {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
.ant-input .location-field:focus {
  outline: none !important;
  border: none;
  box-shadow: none !important;
}
.search-field {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
.ant-input .search-field:focus {
  outline: none !important;
  border: none;
  box-shadow: none !important;
}
</style>
