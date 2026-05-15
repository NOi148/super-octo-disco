function completeSignup() {
    const id = document.getElementById('newId').value;
    const pw = document.getElementById('newPw').value;
    const aid = document.querySelector('input[name="aid"]:checked')?.value;

    if (!id || !pw) {
        alert("아이디와 비밀번호를 입력해주세요.");
        return;
    }

    localStorage.setItem('onGil_ID', id);
    localStorage.setItem('onGil_PW', pw);
    localStorage.setItem('onGil_Aid', aid);

    alert("회원가입이 완료되었습니다!");
    location.href = './index.html';
}
