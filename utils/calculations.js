/**
 * Placeholder formulas to be replaced by real Excel logic later.
 */

function calculateStudentTuition(student) {
  const totalHours = Number(student.totalHours || 0);
  const ratePerHour = Number(student.ratePerHour || 0);
  const discount = Number(student.discount || 0);

  const grossFee = totalHours * ratePerHour;
  const netFee = Math.max(grossFee - discount, 0);

  return {
    grossFee,
    netFee
  };
}

function calculateTeacherSalary(teacher) {
  const taughtHours = Number(teacher.taughtHours || 0);
  const baseRate = Number(teacher.baseRate || 0);
  const attendanceBonus = Number(teacher.attendanceBonus || 0);

  const baseSalary = taughtHours * baseRate;
  const totalSalary = baseSalary + attendanceBonus;

  return {
    baseSalary,
    totalSalary
  };
}

module.exports = {
  calculateStudentTuition,
  calculateTeacherSalary
};
