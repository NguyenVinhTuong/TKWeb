
function timGiaTriLonNhat(so) {
  let max = so[0];
  for (let i = 1; i < 10; i++) {
    if (max < so[i]) max = so[i];
  }
  return max;
}
// Ví dụ sử dụng
console.log(timGiaTriLonNhat([5, 8, 3, 2, 9])); // Kết quả: 9