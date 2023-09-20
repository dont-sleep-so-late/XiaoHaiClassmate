import {
    getAttendanceListRequest
} from '../../api/main'
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
        const that = this
        getAttendanceListRequest().then(res => {
            console.log(res.data);
            that.setData({
                list:res.data
            })
        })
    },
    changeTerm(e) {
        const termIndex = e.detail.value
        this.setData({
          termIndex
        })
      }
})