<template>
<view class="content">
  <map id="map" ref="map" class="map" :latitude="latitude" :longitude="longitude"></map>
</view>
</template>

<script>
const img = '/static/stoping.png';
export default {
  data() {
    return {
      // 123.439906,41.799393
      latitude: 41.799393,
      longitude: 123.439906,
      cityCode: '024'
    }
  },
  onReady() {
    this._mapContext = uni.createMapContext("map", this);
    // 仅调用初始化，才会触发 on.("markerClusterCreate", (e) => {})
    this._mapContext.initMarkerCluster({
      enableDefaultStyle: false,
      zoomOnClick: true,
      gridSize: 60,
      complete(res) {
        // console.log('initMarkerCluster', res)
      }
    });
    this._mapContext.on("markerClusterCreate", (e) => {
      // console.log("markerClusterCreate", e);
    });
    this.addMarkers();
  },
  onLoad() {
    // 搜索周边先
    // this.poiSearchNearBy()
    // uni.chooseLocation({
    // 	success: function (res) {
    // 		console.log('位置名称：' + res.name);
    // 		console.log('详细地址：' + res.address);
    // 		console.log('纬度：' + res.latitude);
    // 		console.log('经度：' + res.longitude);
    // 	}
    // });
  },
  methods: {
    inputChange(){
      
    },
    poiSearchNearBy(){
      this.$refs.map.poiSearchNearBy({
        point:{
          latitude:this.latitude,
          longitude:this.longitude
        },
        key:''
      },res=>{
        console.log(res)
      })
    },
    addMarkers() {
      const marker = {
        id: 1,
        iconPath: img,
        width: 50,
        height: 50,
        // joinCluster: true, // 指定了该参数才会参与聚合
      };

      const positions = [{
        latitude: 41.799393,
        longitude: 123.439906,
      }, 
      {
        latitude: 41.799125,
        longitude: 123.438506,
      }, 
      {
        latitude: 41.799585,
        longitude: 123.441806,
      }, {
        latitude: 41.799993,
        longitude: 123.437906,
      }]

      const markers = []

      positions.forEach((p, i) => {
        const newMarker = Object.assign({},marker, p)
        newMarker.id = i + 1
        // newMarker.label.content = `label ${i + 1}`
        markers.push(newMarker)
      })
      this._mapContext.addMarkers({
          markers,
          clear: false,
          complete(res) {
            // console.log('addMarkers', res)
          }
      })
    },
    message(e){
      console.log(e)
    }
  },
}
</script>

<style>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.inputView {
  padding: 20rpx;
  background-color: #fff;
}
.inputBox {
  background-color: #eeeeee;
  border-radius: 64rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10rpx 20rpx;
}
.input {
  font-size: 26rpx;
  margin-left: 20rpx;
  width: calc(100% - 20rpx);
}
.map {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.bottomView {
  background-color: #fff;
  flex: 1;
}
</style>
