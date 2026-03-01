const store = require('../../utils/store');

Page({
  data: {
    teacherName: '',
    statuses: ['Present', 'Late', 'Absent'],
    statusIndex: 0,
    records: []
  },

  onShow() {
    this.setData({ records: store.getAttendance() });
  },

  onTeacherInput(e) {
    this.setData({ teacherName: e.detail.value });
  },

  onStatusChange(e) {
    this.setData({ statusIndex: Number(e.detail.value) });
  },

  saveRecord() {
    const { teacherName, statuses, statusIndex, records } = this.data;
    if (!teacherName.trim()) {
      wx.showToast({ title: 'Please enter teacher name', icon: 'none' });
      return;
    }

    const newRecord = {
      id: Date.now(),
      teacherName: teacherName.trim(),
      status: statuses[statusIndex],
      time: new Date().toLocaleString()
    };

    const newRecords = [newRecord, ...records];
    store.saveAttendance(newRecords);

    this.setData({
      records: newRecords,
      teacherName: '',
      statusIndex: 0
    });
    wx.showToast({ title: 'Saved', icon: 'success' });
  }
});
