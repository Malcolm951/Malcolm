<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="code_name" label="代码名称" required>
        <input placeholder="代码名称" @input="binddata('code_name', $event.detail.value)" class="uni-input-border" v-model="formData.code_name" trim="both" />
      </uni-forms-item>
      <uni-forms-item name="code_value" label="代码值" required>
        <input placeholder="代码值" @input="binddata('code_value', $event.detail.value)" class="uni-input-border" v-model="formData.code_value" trim="both"></input>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">{{$t('common.button.submit')}}</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
            <button class="uni-button" style="width: 100px;">{{$t('common.button.back')}}</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'sys_code';

  export default {
    data() {
      let formData = {
        "code_name": "",
        "code_value": ""
      }
      return {
        formData,
        formOptions: {},
        rules: {
        }
      }
    },
    onLoad(e) {
      if (e.id) {
        const id = e.id
        this.formDataId = id
        this.getDetail(id)
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      /**
       * 触发表单提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          this.submitForm(res)
        }).catch(() => {
          uni.hideLoading()
        })
      },

      submitForm(value) {
        uni.showLoading({
        	title: '提交中...',
        	mask: true
        })
        // 使用 uni-clientDB 提交数据
        db.collection(dbCollectionName).add(value).then((res) => {
        	uni.showToast({
        		title: '新增成功'
        	})
        	this.getOpenerEventChannel().emit('refreshData')
        	setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
        	uni.showModal({
        		content: err.message || '请求服务失败',
        		showCancel: false
        	})
        }).finally(() => {
        	uni.hideLoading()
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field("permission_id,permission_name,comment").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>

<style>
::v-deep .uni-forms-item__label {
	width: 90px !important;
}
</style>