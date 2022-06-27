export default {
    state:{
        isCollapse:false
    },
    //在这里定义方法
    mutations:{
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        }
}
}