<template>
  <div>
    <Layout class-prefix="layout">
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
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>

      <!-- 3.支出和收入 -->
      <div class="">
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>

      <!-- 2.备注部分 -->
      <div class="">
        <label for="" class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="在这里输入备注" />
        </label>
      </div>

      <!-- 1.输入部分 -->
      <div class="tags">
        <div class="new">
          <button>新增标签</button>
        </div>
        <ul class="current">
          <li>衣服</li>
          <li>食物</li>
          <li>住宿</li>
          <li>出行</li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<script lang="ts">
export default {
  name: 'Money'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/helper.scss';
// 键盘部分
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background-color: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background-color: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background-color: darken($bg, 4 * 2%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background-color: darken($bg, 4 * 3%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background-color: darken($bg, 4 * 4%);
      }
      &:nth-child(14) {
        background-color: darken($bg, 4 * 5%);
      }
      &:nth-child(12) {
        background-color: darken($bg, 4 * 6%);
      }
    }
  }
}
// 支出和收入部分
.types {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
// 备注部分
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
// 输入内容显示部分
.tags {
  border: 1px red solid;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    > li {
      background-color: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
