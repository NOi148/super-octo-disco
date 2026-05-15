function completeSignup() {
    // 1. 계정 정보 가져오기
    const id = document.getElementById('newId').value;
    const pw = document.getElementById('newPw').value;

    // 2. 건강 질문 답변 가져오기 (예시)
    const aid = document.querySelector('input[name="aid"]:checked')?.value;
    const pain = document.getElementById('painPoint').value;
    const contact = document.getElementById('emergencyContact').value;

    if (!id || !pw) {
        alert("아이디와 비밀번호는 필수입니다.");
        return;
    }

    // 3. 데이터를 하나의 객체로 묶어서 저장 (이게 상업용 서비스의 기본!)
    const userData = {
        userId: id,
        userPw: pw,
        healthInfo: {
            mobilityAid: aid,
            painPoint: pain,
            emergency: contact
        }
    };

    // 로컬 스토리지에 저장 (아이디/비번은 로그인 확인용으로 따로 저장)
    localStorage.setItem('onGil_ID', id);
    localStorage.setItem('onGil_PW', pw);
    localStorage.setItem('onGil_UserData', JSON.stringify(userData));

    alert("반가워요! 회원가입이 완료되었습니다.");
    location.href = 'index.html'; // 다시 로그인 화면으로
}
