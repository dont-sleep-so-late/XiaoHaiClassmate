// pages/login/index.js
import {
    loginRequest
} from "../../api/main"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        stuId:'', //学号
        password:'', //密码
        saveCount: true, // 记住账号，默认选中
    },
    // 切换复选框状态
    switchCheckStatus() {
        this.setData({
            saveCount: !this.data.saveCount
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.initAccount()
    },

    //初始化账号
    initAccount(){
        const accountCache = wx.getStorageSync('account')
        if(accountCache){
            this.setData({
                ...accountCache
            })
        }
    },

    login(){
        const that = this
        const postData = {
            stuId:this.data.stuId,
            password:this.data.password
        }
        wx.showLoading({
          title: '登陆中...',
        })
        loginRequest(postData).then(res =>{
            wx.hideLoading()
            if(res.code == -1){
              wx.showToast({
                title: res.msg,
                icon:'none'
              })
              return
            }
            wx.setStorageSync('token', res.data.cookie)
            if(that.data.saveCount){
                wx.setStorageSync('account',postData)
            }else {
                wx.removeStorageSync('account')
            }
            wx.showToast({
              title: '登陆成功',
              icon:'success'
            })
            setTimeout(() => {
                wx.reLaunch({
                  url: '/pages/index/index',
                })
            }, 1500);
        })


    }
})