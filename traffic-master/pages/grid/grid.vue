<template>
	<view class="warp">
		<!-- #ifdef APP-PLUS -->
		<status-bar />
		<!-- #endif -->
		
		<!-- banner -->
    <uni-swiper-dot class="uni-swiper-dot-box" @clickItem="clickItem"
      :current="current" field="content">
      <swiper class="swiper-box" @change="changeSwiper" :current="swiperDotIndex">
        <swiper-item v-for="(item, index) in imgUrls" :key="item._id">
          <view class="swiper-item" @click="clickBannerItem(item)">
            <image class="banner-image" :src="item" mode="scaleToFill" :draggable="false" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>

	<!-- 宫格 -->
		<uni-section title="服务" style="margin: 0;" type="line"></uni-section>
    <view class="section">
      <view class="section-item" v-for="item,k in icons" :key='k' @click="navitons(item.tap)">
        <image :src="item.url" style="width: 100rpx;height: 100rpx;margin-right: 20rpx;"></image>
        <text>{{item.text}}</text>
      </view>
    </view>
    
    <uni-section title="附近" style="margin: 0;" type="line"></uni-section>
    <view class="section">
      <view class="section-bottom" v-for="item,k in nearby" :key='k' @click="navitons(item.tap)">
        <image :src="item.url" style="width: 100rpx;height: 100rpx;margin-bottom: 20rpx;"></image>
        <text>{{item.text}}</text>
      </view>
    </view>
    
    <uni-section title="更多" style="margin: 0;" type="line"></uni-section>
    
	</view>
</template>

<script>
	import statusBar from "@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar";
	export default {
		components: {
			statusBar
		},
		data() {
			return {
        imgUrls: [
          'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/jtb_banner1%402x.png',
          'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/jtb_banner2%402x.png',
          'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/jtb_banner3%402x.png'
        ],
        icons: [
          {
            url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_handle%402x.png',
            text: '事故处理',
            tap: '/pages/operation/form-first/form-first'
          },
          {
            url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_report@2x.png',
            text: '违法举报',
            tap: 'toWfjb'
          },
          {
            url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_move@2x.png',
            text: '夜间出行'
          },
          {
            url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_inquiry@2x.png',
            text: '违法查询'
          },
          // {
          //   url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_road@2x.png',
          //   text: '路况服务'
          // },
          // {
          //   url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_rescue@2x.png',
          //   text: '救援服务'
          // },
          // {
          //   url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_news@2x.png',
          //   text: '交通新闻'
          // },
          // {
          //   url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_stop@2x.png',
          //   text: '停停找找'
          // },
        ],
       nearby: [
          {
            url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_parking@2x.png',
            text: '停车场',
            tap:'/pages/operation/stoping/stoping'
          },
          {
            url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_gas@2x.png',
            text: '加油站'
          },
          {
            url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_repair@2x.png',
            text: '维修点'
          },
          {
            url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_charge@2x.png',
            text: '充电桩'
          },
          // {
          //   url: 'http://jtb-1253661417.cossh.myqcloud.com/images/%E9%A6%96%E9%A1%B5/icons/jtb_icn_station@2x.png',
          //   text: '交管服务'
          // },
        ],
				gridList: [],
				current: 0,
				swiperDotIndex: 0,
				hasLogin:false
			}
		},
		onShow() {
			this.hasLogin = uniCloud.getCurrentUserInfo().tokenExpired > Date.now()
		},
		onLoad() {
			// let gridList = []
			// for (var i = 0; i < 3; i++) {
			// 	gridList.push( this.$t('grid.visibleToAll') )
			// }
			// for (var i = 0; i < 3; i++) {
			// 	gridList.push( this.$t('grid.invisibleToTourists') )
			// }
			// for (var i = 0; i < 3; i++) {
			// 	gridList.push( this.$t('grid.adminVisible') )
			// }
			// this.gridList = gridList
		},
		methods: {
			change(e) {
				uni.showToast({
					title:this.$t('grid.clickTip') + " " + `${e.detail.index + 1}` + " " + this.$t('grid.clickTipGrid'),
					icon: 'none'
				})
			},
			/**
			 * banner加载后触发的回调
			 */
			onqueryload() {
			},
			changeSwiper(e) {
				this.current = e.detail.current
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			/**
			 * 点击banner的处理
			 */
			clickBannerItem(item) {
				// 有外部链接-跳转url
				if (item.open_url) {
					uni.navigateTo({
						url: '/pages/common/webview/webview?url=' + item.open_url + '&title=' + item.title,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
				// 其余业务处理
			},
      navitons(url){
        console.log(url)
        uni.navigateTo({
          url:url
        })
      }
		}
	}
</script>

<style>
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff;
		min-height: 100%;
		height: auto;
	}
	view {
		font-size: 14px;
		line-height: inherit;
	}
  .item {
    width: 25%;
    height: 140rpx;
    padding-top: 20rpx;
  }
  
  .section {
      background-color: #fff;
      margin-top: 20rpx;
      padding: 0 30rpx;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
  }
  
  .section-item {
    width:45%;
    height: 100rpx;
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    margin-right: 30rpx;
  }
  .section-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
  }
  
  
  
  
  
  
  
  
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}
	/* #endif */

	/* #ifdef APP-NVUE */
	.warp {
		background-color: #fff;
	}
	/* #endif */

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.image {
		width: 50rpx;
		height: 50rpx;
	}
	
	.big-number{
		font-size: 50rpx;
		font-weight: 700;
		font-stretch: condensed;
		font-style:oblique;
	}
	
	.text {
		text-align: center;
		font-size: 26rpx;
		margin-top: 10rpx;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.grid-item-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.banner-image {
		width: 750rpx;
		height: 300rpx;
	}

	.swiper-box {
		height: 300rpx;
	}

	.search-icons {
		padding: 16rpx;
	}

	.search-container-bar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		z-index: 10;
		background-color: #fff;
	}

	/* #ifndef APP-NVUE || VUE3*/
	::v-deep
	/* #endif */
	.uni-searchbar__box {
		border-width: 0;
	}

	/* #ifndef APP-NVUE || VUE3 */
	::v-deep
	/* #endif */
	.uni-input-placeholder {
		font-size: 28rpx;
	}
</style>
