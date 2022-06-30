<template>

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <h3>{{isCollapse ?'流量':' 流量监控管理'}}</h3>
<!--    1.遍历没有子菜单的信息，并遍历出来
        2.给出一个@click点击事件通过name来识别 -->
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildern" :index="item.path" :key="item.path">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildern" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group  v-for="(subItem,subIndex) in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Commonaside",
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/sellpage',
          name: 'sellpage',
          label: '总流量',
          icon: 'video-play',
          url: 'MallMange/MallMange'
        },{
          path: '/oneIpcountpage',
          name: 'oneIpcountpage',
          label: '分布流量',
          icon: 'user',
          url: 'UserMange/UserMange'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/badmanpage',
              name: 'badmanpage',
              label: '黑名单',
              icon: 'setting',
              url: 'Other/PageOne'
            },  {
              path: '/badwordpage',
              name: 'badwordpage',
              label: '敏感词',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        },
        {
          label: '访问次数',
          icon:'location',
          children: [
            {
              path: '/oneApicountpage',
              name:'oneApicountpage',
              label: 'Api的访问次数'
            }
          ]
        }
      ]
    };
  },
  //element-ui粘贴过来的
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      //进行页面跳转的方法
      this.$router.push({
        name:item.name
      })
    }
  }, //判断是否有子菜单
  computed: {
    noChildern() {
      return this.menu.filter(item => !item.children)
    },
    hasChildern() {
      return this.menu.filter(item => item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100%;
  border: none;
  h3{
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>
