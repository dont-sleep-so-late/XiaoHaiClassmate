// pages/attendance-detail/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        infoRef: [
            {
              key: 'classroom',
              title: '教室'
            },
            {
              key: 'date',
              title: '时间'
            },
            {
              key: 'teacher',
              title: '老师'
            },
            {
              key: 'section',
              title: '节数'
            },
            {
              key: 'week',
              title: '周数'
            },
            {
                key: 'reason',
                title: '原因'
              },
            {
                key: 'mark',
                title: '备注'
              },
          ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let info = options.info || ''
        if (info == '') {
          wx.showToast({
            title: '页面不存在',
            icon: 'none'
          })
          setTimeout(() => {
            wx.navigateBack({
              delta: 1,
            })
          }, 1500);
          return
        }
        info = JSON.parse(info)
        this.setData({
          info
        })
      },
    
})