<template>
  <div class="content">
    <div class="content-left">
         <ul>
             <li>我是假的左菜单</li>
             <li>我是假的左菜单</li>
             <li>我是假的左菜单</li>
             <li>我是假的左菜单</li>
             <li>我是假的左菜单</li>
             <li>我是假的左菜单</li>
             <li>我是假的左菜单</li>
         </ul>
    </div>
    <div class="content-right">
         <nuxt />
    </div>
  </div>
</template>

<style  >
    .content{
        display: flex;
    }
    .content-left{
        border: 1px solid #666;
        margin-right: 20px;
        padding: 0 20px;
    }
    ul{
        padding: 0;
        list-style: none;
    }
    .content-right{
        flex: 1;
        border: 1px solid #666;
        padding: 0 20px;
        
    }
</style>
