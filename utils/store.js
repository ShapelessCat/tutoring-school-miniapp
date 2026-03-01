const STORAGE_KEYS = {
  USER: 'ts_user',
  ATTENDANCE: 'ts_attendance_records',
  STUDENTS: 'ts_students',
  TEACHERS: 'ts_teachers'
};

function safeRead(key, fallback) {
  try {
    return wx.getStorageSync(key) || fallback;
  } catch (e) {
    return fallback;
  }
}

function saveUser(user) {
  wx.setStorageSync(STORAGE_KEYS.USER, user);
}

function getUser() {
  return safeRead(STORAGE_KEYS.USER, null);
}

function saveAttendance(records) {
  wx.setStorageSync(STORAGE_KEYS.ATTENDANCE, records);
}

function getAttendance() {
  return safeRead(STORAGE_KEYS.ATTENDANCE, []);
}

function saveStudents(students) {
  wx.setStorageSync(STORAGE_KEYS.STUDENTS, students);
}

function getStudents() {
  return safeRead(STORAGE_KEYS.STUDENTS, []);
}

function saveTeachers(teachers) {
  wx.setStorageSync(STORAGE_KEYS.TEACHERS, teachers);
}

function getTeachers() {
  return safeRead(STORAGE_KEYS.TEACHERS, []);
}

module.exports = {
  STORAGE_KEYS,
  saveUser,
  getUser,
  saveAttendance,
  getAttendance,
  saveStudents,
  getStudents,
  saveTeachers,
  getTeachers
};
