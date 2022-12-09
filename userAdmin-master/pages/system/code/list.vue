<template>
<view class="">
  <view class="uni-header">
  	<uni-stat-breadcrumb class="uni-stat-breadcrumb-on-phone"/>
    <view class="uni-group">
      <button class="uni-button" type="primary" size="mini" @click="navigateTo('./add')">新增</button>
      <button class="uni-button hide-on-phone" type="default" size="mini"	@click="search">查询</button>
    </view>
  </view>
  <unicloud-db ref="udb" @load="onqueryload" collection="sys_code" :options="options"
  			 :where="where" page-data="replace" :getcount="true"
  			 :page-size="options.pageSize"
  			 :page-current="options.pageCurrent" v-slot:default="{data,pagination,loading,error}">
        <uni-table ref="table" :loading="loading" :emptyText="error.message || $t('common.empty')" border stripe
         	type="selection">
          <uni-tr>
          	<uni-th align="center" >代码名</uni-th>
          	<uni-th align="center" >代码值</uni-th>
          	<uni-th align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
          	<uni-td align="center">{{item.code_name}}</uni-td>
          	<uni-td align="center">{{item.code_value}}</uni-td>
          	<uni-td align="center">
          		<view class="uni-group">
          			<button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini"
          				type="primary">{{$t('common.button.edit')}}</button>
          			<button @click="confirmDelete(item._id)" class="uni-button" size="mini"
          				type="warn">{{$t('common.button.delete')}}</button>
          		</view>
          	</uni-td>
          </uni-tr>
        </uni-table>
  </unicloud-db>
</view>
</template>

<script>
export default {
  data(){
    return {
      where: '',
      options: {
      	pageSize:1,
      	pageCurrent:20
      },
    }
  },
  methods:{
    onqueryload(){
      
    },
    loadData(clear = true){
      this.$refs.udb.loadData({
      	clear
      })
    },
    search(){
      this.$nextTick(() => {
      	this.loadData()
      })
    },
    navigateTo(url){
      uni.navigateTo({
      	url:url,
        events: {
        	refreshData: () => {
        		this.loadData(clear)
        	}
        }
      })
    }
  },
  onLoad() {
  	this.search()
  },
}
</script>

<style>
</style>