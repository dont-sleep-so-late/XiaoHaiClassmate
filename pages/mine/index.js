// pages/mine/index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
        userInfo:{
            username:"",
            name:'',
            class:'',
            stuNum:'',
            gender:'',
            avatarUrl:defaultAvatarUrl
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    edit(){
        wx.navigateTo({
          url: '../mine-edit/index',
        })
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            const name = res.userInfo.nickName
            const Url = res.userInfo.avatarUrl
            this.setData({
              'userInfo.username':name,
              'userInfo.avatarUrl':Url
            })
          }
        })
      },
})