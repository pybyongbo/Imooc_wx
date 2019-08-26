var postsData = require("../../data/posts-data.js");
Page({
  data: {
    date: "Sep 18 2017"
    //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    //而这个动作A的执行，是在onLoad事件执行之后发生的。
  },
  onLoad: function(options) {
    //页面初始化options为页面跳转所带来的参数

    //this.data.posts_key = postsData.postList;
    this.setData({
      posts_key: postsData.postList
    });

    console.log("onload");
  },

  onReady: function(option) { 
    console.log("ready");
  },

  onShow: function() {
    console.log("onshow");
  },

  onHide: function() {
    //页面影藏
    console.log("onhide");
  },

  onUnload: function() {
    console.log("onunload");
  }
});
