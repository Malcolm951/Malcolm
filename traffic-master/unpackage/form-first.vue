<template>
  <view>
    
    <u--form labelPosition="left"  :model="model" :rules="rules" ref="form" labelWidth='80'>
      <uni-section title="事故信息" style="margin: 0;" type="line"></uni-section>
      <view style="margin:0 20px;">
        <u-form-item label="事故地址" prop="name1" :required='true'>
          <view class="item-first">
            <u--input v-model="model.name1" border="surround" clearable></u--input>
          </view>
        </u-form-item>
        <u-form-item label="事故时间" prop="name2" :required='true'>
          <view class="item-first">
            <u--input v-model="model.name2" border="surround" clearable></u--input>
          </view>
        </u-form-item>
        <u-form-item label="事故类型" prop="name3" :required='true'>
          <view class="item-first">
            <u--input v-model="model.name3" border="surround" clearable></u--input>
          </view>
        </u-form-item>
        <u-form-item label="事故责任" prop="type" :required='true'>
          <uni-data-checkbox v-model="model.type" :localdata="style_category"></uni-data-checkbox>
        </u-form-item>
        <u-form-item label="事故情形" prop="remark" :required='true'>
          <view class="item-first">
            <u--textarea v-model="model.remark" placeholder="请输入事故情形"></u--textarea>
          </view>
        </u-form-item>
      </view>
        <uni-section title="图片" style="margin: 0;" type="line"></uni-section>
        <view style="margin:0 20px;">
          <u-upload
              :fileList="fileList1"
              @afterRead="afterRead"
              @delete="deletePic"
              name="1"
              multiple
              :maxCount="5"
            ></u-upload>
        </view>
        
        <uni-section title="报警人信息" style="margin: 0;" type="line"></uni-section>
        <view style="margin:0 20px;">
          <u-form-item label="报警人手机" prop="u_phone" :required='true'>
            <view class="item-first">
            <u--input v-model="model.u_phone" placeholder="请输入报警人手机" border="surround" clearable class='item-first'></u--input>
            </view>
          </u-form-item>
          <u-form-item label="报警人姓名" prop="u_name" :required='true'>
            <view class="item-first">
            <u--input v-model="model.u_name" placeholder="请输入报警人姓名" border="surround" clearable class='item-first'></u--input>
            </view>
          </u-form-item>
          <u-form-item label="报警人车票" prop="u_num" :required='true'>
            <view class="item-first">
            <u--input v-model="model.u_num" placeholder="请输入报警人车票" border="surround" clearable class='item-first'></u--input>
            </view>
          </u-form-item>
        </view>
        
        <uni-section title="甲方信息" style="margin: 0;" type="line"></uni-section>
        <view style="margin:0 20px;">
          <u-form-item label="甲方手机" prop="j_phone" :required='true'>
            <view class="item-first">
            <u--input v-model="model.j_phone" placeholder="请输入甲方手机" border="surround" clearable class='item-first'></u--input>
            </view>
          </u-form-item>
          <u-form-item label="甲方姓名" prop="j_name" :required='true'>
            <view class="item-first">
            <u--input v-model="model.j_name" placeholder="请输入甲方姓名" border="surround" clearable class='item-first'></u--input>
            </view>
          </u-form-item>
          <u-form-item label="甲方车票" prop="j_num" :required='true'>
            <view class="item-first">
            <u--input v-model="model.j_num" placeholder="请输入甲方车票" border="surround" clearable class='item-first'></u--input>
            </view>
          </u-form-item>
        </view>

    </u--form>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        model:{
          
        },
        rules:{
          
        },
        fileList1:[],
        style_category:[
          {value:1, text:'明确'},
          {value:2, text:'不明确'}
        ]
      }
    },
    methods: {
      
    }
  }
</script>

<style>
.item-first {
  border: 1px solid #dadbde;
  border-radius: 4px;
  width: 100%;
}
</style>
