let currentPin = "";
    const targetPin = "992006"; // Thay bằng ngày sinh đúng dạng DDMMYYYY

    function pressNum(num) {
      if (currentPin.length < targetPin.length) {
        currentPin += num;
        updateDisplay();
        
      }
    }

    function clearPin() {
      currentPin = "";
      updateDisplay();
    }

    function deleteLast() {
      currentPin = currentPin.slice(0, -1);
      updateDisplay();
    }

    function updateDisplay() {
      const maxLen = targetPin.length;
      const currentLen = currentPin.length;

      const percentage = (currentLen / maxLen) * 100;

      document.getElementById("progress-bar").style.width = percentage + "%";
    }
    function submitPin() {
  // Kiểm tra nếu người dùng chưa nhập đủ số
       if (currentPin.length < targetPin.length) {
    alert("Nhập đủ số vào nha!");
    return;
  }

  // Kiểm tra mật khẩu
       if (currentPin === targetPin) {
    alert("Mật khẩu chính xác! Chúc công chúa một ngày vui vẻ ❤️");
    // Chuyển hướng hoặc mở hộp quà tại đây:
    // window.location.href = "qua-tang.html";
    } else {
    alert("Gợi ý 6 số và cũng là ngày đặc biệt đối với em hôm nay!");
    clearPin(); // Reset lại thanh tiến trình nếu nhập sai
    }
}
    // JS tạo hiệu ứng trái tim trôi phía sau
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '♥';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 3 + 4 + 's';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 7000);
    }

    setInterval(createHeart, 400);