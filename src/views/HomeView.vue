<script setup>
import Card from '../components/Card.vue';
import Tag from "../components/icons/card-icons/PriceTag.vue"
import Filter from "../components/icons/filterIcon.vue"
import { defineComponent } from "vue"
import DownIcon from '../components/icons/DownIcon.vue';
import Tab from "../components/Tab.vue"
</script>

<script>
export default defineComponent({
  components: {
    DownIcon
  },
  data() {
    return {
      count: 0,
      filters: []
    }
  }
})

</script>

<template>
  <main class="max-w-[1320px] mx-auto pt-6">

    <section class="flex gap-6">
      <div class="w-[319px] h-screen border border-pink-400 flex-grow-0">
        <Tag />
      </div>
      <div class="flex-grow space-y-6">
        <div class="flex items-center justify-between">
          <a-button
            class="flex items-center gap-2 filter-button px-5 h-[48px] border-[#32b32b] border-2 rounded-[6px] hover:bg-[#32b32b] hover:text-white">
            <Filter /> filter <div v-show="count > 0"
              class="text-white bg-[#32b32b] p-1 rounded-full w-5 h-5 notification">{{ count
              }}</div>
          </a-button>
          <div class="flex items-center justify-between gap-3">
            <!-- dropdown -->
            <a-dropdown>
              <a class="ant-dropdown-link flex items-center gap-[88px] border border-[#DEE6DC]  w-fit px-[18px] py-3 rounded-[6px] sort"
                @click.prevent>
                Sort By:
                <DownIcon />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">Ascending</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">Descending</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <!-- dropdown -->
            <div class="tab">
              <Tab />
            </div>
          </div>
        </div>
        <div class="bg-[#F3F5F2] rounded-md">
          <p v-show="filters.length" class="activeFilters py-[14px] px-[18px]">Active Filters : {{ filters }}</p>
        </div>
        <Card />
      </div>
    </section>
  </main>
</template>
<style>
.filter-button {
  font-family: 'IBM Plex Sans' !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  line-height: 48px !important;
  letter-spacing: -0.01em !important;
  text-transform: uppercase !important;
  color: #58B32B !important;
}

.ant-btn:hover .notification {
  background-color: #fff !important;
  color: #58B32B !important;
}

.notification {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  transition: all .4s linear;
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
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #636A60;
}

.activeFilters {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #171E15;
}
</style>