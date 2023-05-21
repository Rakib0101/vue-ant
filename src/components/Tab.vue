<template>
  <div class="flex gap-[6px] border border-[#DEE5DC]  w-fit p-[6px] rounded-[6px]">
    <button :class="{ activeTab: !isActive }" class="p-2 rounded border-none">
      <Row />
    </button>
    <button :class="{ activeTab: isActive }" class="p-2 rounded border-none">
      <Grid />
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Row from './icons/card-icons/row.vue';
import Grid from './icons/card-icons/grid.vue';
export default defineComponent({
  setup() {
    return {
      isActive: true
    };
  },
  components: { Row, Grid }
});
</script>
<style>
.activeTab {
  background-color: #58B32B;
  color: white;
}
</style>

