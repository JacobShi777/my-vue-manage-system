<template>
    <div class="login_page">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm login_form">
            <p>后台管理系统</p>
            <el-form-item label="" prop="username">
                <i class="el-icon-user"></i>
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
                <i class="el-icon-lock"></i>
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleLogin('ruleForm')">登录</el-button>
            </el-form-item>
            <span>Tips : 用户名和密码随便填。</span>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!value || value.length < 5) {
        return callback(new Error('用户名长度不少于5位'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '' || value.length < 6) {
        callback(new Error('密码长度不少于6位'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        pass: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin (formName) {
      this.$refs[formName].validate((valid, errs) => {
        if (valid) {
          alert('submit!')
        } else {
          for (const key in this.ruleForm) {
            alert(errs[key])
          }
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">

    .login_page{
        // unknow: 这个为什么不好用
        // .el-form-item:first-child{
        //     margin-top: 40px;
        // }
        .el-form-item__content{
            // tips-ns
            margin: auto !important;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 290px;
            .el-input__inner{
                height: 30px;
                // width: 245px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            .el-form-item__error{
                margin-left: 47px;
            }
        }
        .el-button{
            width: 290px;
            height: 37px;
        }
    }

</style>

<style lang="scss" scoped>
    .login_page{
        height: 100%;
        width: 100%;
        background-image: url('@/assets/img/login-bg.jpg');
        background-size: 100%;
        display: flex;
        justify-content: space-evenly;
        // unknow: 这里margin-top用不了，应该是跟marin传递什么有关
        // margin-top: 260px;
        align-items: center;
    }

    .login_form{
        // 上面的align-items加上这里向上移动50，就跟模板项目一样了
        position: relative;
        top: -50px;
        width: 350px;
        height: 280px;
        background-color: rgba($color: #c5b1b1c9, $alpha: 0.5);
        border-radius: 3px;
        p{
            height: 50px;
            line-height: 50px;
            color: #FFFFFF;
            text-align: center;
            font-size: 17px;
            font-weight: bold;
            border-bottom: 1px #ffffff3e solid;
            margin-bottom: 30px;
        }
        i{
            font-size: 15px;
            height: 30px;
            line-height: 30px;
            width: 47px;
            text-align: center;
            background-color: #F3F6F9;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
        }
        span{
            width: 290px;
            margin-left: 30px;
            font-size: 10px;
            color: #FFFFFF;
        }
    }
</style>
