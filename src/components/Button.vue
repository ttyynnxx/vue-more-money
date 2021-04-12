<template>
    <div>
        <button class="button" @click="$emit('click',$event)">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.button{
  background-color: #3D7EFF;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
}
</style>