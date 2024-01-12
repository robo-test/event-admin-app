<template>
  <div>
    <a class="text-blueGray-500 py-1 px-3" href="#pablo" ref="btnDropdownRef" v-on:click="toggleDropdown($event)">
      <i class="fas fa-ellipsis-v"></i>
    </a>
    <div ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }">
      <a v-for="(action, index) in ['view', 'edit', 'delete']" :key="index" href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        {{ action }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { createPopper, type VirtualElement } from "@popperjs/core";

export default {
    data() {
        return {
            dropdownPopoverShow: false,
        };
    },
    methods: {
        toggleDropdown: function (event: any) {
            event.preventDefault();
            if (this.dropdownPopoverShow) {
                this.dropdownPopoverShow = false;
            } else {
                this.dropdownPopoverShow = true;
                createPopper(this.$refs.btnDropdownRef as VirtualElement|Element, this.$refs.popoverDropdownRe as HTMLElement, {
                    placement: "bottom-start",
                });
            }
        },
    },
};
</script>
