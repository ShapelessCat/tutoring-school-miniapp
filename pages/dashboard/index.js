const store = require('../../utils/store');

Page({
  data: {
    currentUser: null
  },

  onShow() {
    this.setData({ currentUser: store.getUser() });
  },

  goToSignIn() {
    wx.navigateTo({ url: '/pages/signin/index' });
  },

  goAttendance() {
    wx.switchTab({ url: '/pages/attendance/index' });
  },

  goFinance() {
    wx.switchTab({ url: '/pages/finance/index' });
  }
});
