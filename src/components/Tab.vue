<template>
  <div>
    <a-radio-group v-model:value="value" class="flex gap-[8px] border-2 border-[#32B32B]  w-fit p-[6px] rounded-[6px]">
      <a-radio-button @click="listOrgrid" class="p-2 rounded border-none tab" value="list">
        <Row />
      </a-radio-button>
      <a-radio-button @click="listOrgrid" class="p-2 rounded border-none tab" value="grid">
        <Grid />
      </a-radio-button>
    </a-radio-group>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import Row from './icons/card-icons/row.vue';
import Grid from './icons/card-icons/grid.vue';
export default defineComponent({
  setup() {
    const value = ref('list')
    return {
      value

    };
  },
  methods: {
    listOrgrid() {
      const View = this.value
      this.$emit('view', View);
    }
  },
  components: { Row, Grid }
});
</script>
<style>
.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-checked).tab:hover {
  color: #58B32B !important;
}

.ant-radio-button-wrapper::before {
  display: none !important;
}

.ant-radio-button-wrapper-checked:not(.tabActive) {
  color: aliceblue !important;
}


.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  background-color: #58B32B !important;
  color: white !important;
  display: flex;
  align-items: center;
}
</style>

