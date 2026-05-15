/**
 * 온길 회원가입 및 건강 정보 등록 로직
 */

// 1. 가입 완료 버튼 클릭 시 실행
function completeSignup() {
    // [기본 정보 추출]
    const id = document.getElementById('newId').value.trim();
    const pw = document.getElementById('newPw').value.trim();

    // [건강 정보 추출]
    const aid = document.querySelector('input[name="aid"]:checked')?.value;
    const painPoint = document.querySelector('select')?.value;
    const emergencyContact = document.getElementById('emergencyContact')?.value || "미입력";

    // [유효성 검사] - 앱에서 필수적인 단계!
    if (!id) {
        alert("아이디를 입력해주세요.");
        document.getElementById('newId').focus();
        return;
    }
    if (!pw || pw.length < 4) {
        alert("비밀번호를 4자리 이상 입력해주세요.");
        document.getElementById('newPw').focus();
        return;
    }
    if (!aid) {
        alert("보조기구 사용 여부를 선택해주세요.");
        return;
    }

    // [데이터 통합 객체 생성]
    // 나중에 서버(DB)로 보낼 때 이 형태 그대로 보냅니다.
    const fullUserData = {
        auth: {
            userId: id,
            userPw: pw
        },
        health: {
            mobilityAid: aid,
            painPoint: painPoint,
            emergency: emergencyContact,
            regDate: new Date().toISOString() // 등록 날짜 추가
        },
        settings: {
            isFirstRun: false,
            theme: 'green'
        }
    };

    // [로컬 저장소에 저장]
    // 로그인 체크용 간편 데이터
    localStorage.setItem('onGil_ID', id);
    localStorage.setItem('onGil_PW', pw);
    
    // 전체 상세 정보 데이터 (JSON 문자열로 변환해서 저장)
    localStorage.setItem('onGil_FullUser', JSON.stringify(fullUserData));

    // [앱스러운 연출: 로딩 효과 후 이동]
    const btn = document.querySelector('.btn-primary-large');
    btn.innerText = "처리 중...";
    btn.disabled = true;

    setTimeout(() => {
        alert("온길의 가족이 되신 것을 환영합니다! \n이제 로그인을 진행해주세요.");
        location.href = './index.html';
    }, 800);
}

// 2. 프로그레스 바 제어 (입력할 때마다 조금씩 차오르는 효과 - 선택사항)
// 입력을 시작하면 상단 바가 움직이게 하고 싶다면 이 로직을 확장하면 됩니다.
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        const progressBar = document.querySelector('.progress-bar');
        if(progressBar) progressBar.style.width = "100%"; // 예시로 단순화
    });
});
