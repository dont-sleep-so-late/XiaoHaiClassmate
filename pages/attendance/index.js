import {
    getAttendanceListRequest
} from '../../api/main'
const attendanceCacheKey = "attendance"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        termIndex: 0, // 当前学期索引
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getList()
    },
    getList(){
        console.log();
        const cache = wx.getStorageSync(attendanceCacheKey)
        if (cache) {
            this.setData({
              list: cache,
            })
            return
          }
          this.updata()
    },
    updata(){
        getAttendanceListRequest().then(res => {
            this.setData({
                list:res.data
            })
            wx.setStorageSync(attendanceCacheKey, res.data)
        })
    },
    changeTerm(e) {
        const termIndex = e.detail.value
        this.setData({
          termIndex
        })
      },
      getDetail(e){
        const index = e.currentTarget.dataset.index
        const termIndex = this.data.termIndex
        wx.navigateTo({
            url: `/pages/attendance-detail/index?info=${JSON.stringify(this.data.list[termIndex].attendanceList[index])}`,
          })
      }
})