const store = require('../../utils/store');

Page({
  data: {
    name: '',
    roles: ['Teacher', 'Admin', 'Finance'],
    roleIndex: 0,
    currentUser: null
  },

  onShow() {
    this.setData({ currentUser: store.getUser() });
  },

  onNameInput(e) {
    this.setData({ name: e.detail.value });
  },

  onRoleChange(e) {
    this.setData({ roleIndex: Number(e.detail.value) });
  },

  onSignIn() {
    const { name, roles, roleIndex } = this.data;

    if (!name.trim()) {
      wx.showToast({ title: 'Please enter a name', icon: 'none' });
      return;
    }

    const user = {
      name: name.trim(),
      role: roles[roleIndex],
      signedAt: new Date().toLocaleString()
    };

    store.saveUser(user);
    this.setData({ currentUser: user, name: '' });
    wx.showToast({ title: 'Signed in', icon: 'success' });
    wx.switchTab({ url: '/pages/dashboard/index' });
  }
});
