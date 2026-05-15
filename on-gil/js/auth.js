function goPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function handleJoin() {
    alert("계정 생성 성공! 건강 정보를 입력하러 갑니다.");
    location.href = "signup.html";
}

function handleLogin() {
    const id = document.getElementById('loginId').value;
    if(id) {
        alert(id + "님 환영합니다!");
        // 나중에 menu.html로 연결
    } else {
        alert("아이디를 입력하세요.");
    }
}
