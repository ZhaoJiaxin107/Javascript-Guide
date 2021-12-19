<template>
    <div>
        <div v-if="isshow">{{isshow}}</div>
        <button @click="change()">点击</button>
    </div>
</template>
<script>
export default({
  name: '',
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    change: function () {
      this.isshow = !this.isshow
    }
  }
})
</script>
