const { calculateStudentTuition, calculateTeacherSalary } = require('../../utils/calculations');

Page({
  data: {
    studentForm: {
      totalHours: '',
      ratePerHour: '',
      discount: ''
    },
    teacherForm: {
      taughtHours: '',
      baseRate: '',
      attendanceBonus: ''
    },
    studentResult: null,
    teacherResult: null
  },

  onStudentInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [`studentForm.${field}`]: e.detail.value
    });
  },

  onTeacherInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [`teacherForm.${field}`]: e.detail.value
    });
  },

  calcTuition() {
    const result = calculateStudentTuition(this.data.studentForm);
    this.setData({ studentResult: result });
  },

  calcSalary() {
    const result = calculateTeacherSalary(this.data.teacherForm);
    this.setData({ teacherResult: result });
  }
});
