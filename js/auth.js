/* '온길' 앱 로직
   1. 로그인 체크
   2. 페이지 간 부드러운 이동 (앱 스타일)
   3. 데이터 저장 (localStorage)
*/

// 1. 로그인 핸들러
function handleLogin() {
    const id = document.getElementById('loginId').value;
    const pw = document.getElementById('loginPw').value;

    // 간단한 유효성 검사
    if (!id || !pw) {
        alert("아이디와 비밀번호를 입력해주세요.");
        return;
    }

    // 로딩 애니메이션 느낌을 주기 위해 0.5초 뒤 실행 (앱스러운 연출)
    console.log("로그인 시도 중...");
    
    // 회원가입 시 저장했던 데이터와 비교
    const savedId = localStorage.getItem('onGil_ID');
    const savedPw = localStorage.getItem('onGil_PW');

    if (id === savedId && pw === savedPw) {
        alert(`${id}님, 안전한 길 안내를 시작합니다!`);
        // 로그인 성공 시 메인 메뉴로 이동 (파일이 있다면)
        // window.location.href = 'main.html'; 
    } else {
        alert("정보가 일치하지 않습니다. 회원가입을 먼저 진행해주세요.");
    }
}

// 2. 하단 네비게이션 버튼 클릭 이벤트
// 앱처럼 각 아이콘을 눌렀을 때 활성화 표시를 바꿔주는 기능입니다.
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // 기존 활성화된 버튼 해제
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        // 클릭한 버튼 활성화
        this.classList.add('active');
        
        // 클릭한 메뉴에 따라 동작 분기 (예시)
        const menuText = this.querySelector('span').innerText;
        console.log(`${menuText} 메뉴로 이동합니다.`);
        
        if(menuText === "지도") {
            // 지도 페이지로 이동하는 로직 등을 여기에 넣으세요
        }
    });
});

// 3. 입력창에서 엔터 키 누르면 바로 로그인 되게 하기 (UX 꿀팁)
document.getElementById('loginPw')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleLogin();
    }
});
