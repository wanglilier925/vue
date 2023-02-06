Vue.filter('orderFilter', function(status) {
    return [ "未确认", "已确认", "已取消", "无效", "退货"][status]
})