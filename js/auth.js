// 1. 화면 전환 함수
function goPage(pageId) {
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    // 선택한 페이지 보여주기
    document.getElementById(pageId).classList.add('active');
}

// 2. 회원가입 버튼 클릭 시
function handleJoin() {
    const id = document.getElementById('joinId').value;
    const pw = document.getElementById('joinPw').value;

    if(id && pw) {
        // 아이디와 비번을 브라우저에 임시 저장 (나중에 로그인 확인용)
        localStorage.setItem('tempId', id);
        localStorage.setItem('tempPw', pw);
        
        alert("계정 생성이 완료되었습니다! 상세 정보를 입력해주세요.");
        location.href = "signup.html"; // 건강 정보 입력 페이지로 이동
    } else {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    }
}

// 3. 로그인 버튼 클릭 시
function handleLogin() {
    const id = document.getElementById('loginId').value;
    const pw = document.getElementById('loginPw').value;
    const savedId = localStorage.getItem('tempId');
    const savedPw = localStorage.getItem('tempPw');

    if (id === savedId && pw === savedPw) {
        alert(id + "님, 환영합니다!");
        // 여기서 menu.html로 보내면 됩니다 (나중에 만들 폴더)
        // location.href = "menu.html"; 
    } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
}
