//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onTap: function() {
        // console.log("test");
        // wx.navigateTo({
        //     url: '../posts/post'
        // });
        wx.redirectTo({
            url: '../posts/post'
        })


    }
})