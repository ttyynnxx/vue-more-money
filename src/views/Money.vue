<template>
  <div>
    <Layout>
      <!-- 输入部分 -->
      <div class="tags">
        <ul class="current">
          <li>衣服</li>
          <li>食物</li>
          <li>住宿</li>
          <li>出行</li>
        </ul>
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>

      <!-- 备注部分 -->
      <div class="notes">
        <label for="" class="">
          <span class="name">备注</span>
          <input type="text" />
        </label>
      </div>

      <!-- 支出和收入 -->
      <div class="">
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>

      <!-- 键盘 -->
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Money'
}
</script>

<style lang="scss" scoped>
</style>
