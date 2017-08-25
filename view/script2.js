function init() {
    setInterval(function () {
        applicationCache.update()
    },5000)
}

applicationCache.addEventListener('updateready',function(){
    if(confirm('本地缓存已经被更新,需要刷新页面')) {
        applicationCache.swapCache();
        location.reload()
    }
},true)