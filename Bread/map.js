const main_Content = document.querySelector('.sungsim_map');
const body_Content = document.body;

const content_Button = [];

const content_BreadImage = {
    BOMUNSAN: "../imageFile/bomunsan_echo.jpg",
    ECHO: "../imageFile/echo.jpg",
    FRIED_SOBORO: "../imageFile/fried_soboro.png",
    LEEK_BREAD: "../imageFile/leek_bread.png",
    SOBORO: "../imageFile/soboro.jpg",
    SWEET_BREAD: "../imageFile/sweetbread.png",
    SALTED_BREAD: "../imageFile/SaltedBread.jpg",
    SALTED_CROISSANTS: "../imageFile/SaltedCroissants.jpg",
    QR_TEST: "../imageFile/QR_test.png",
    POLLOCK_ROE_BAGUETTE: "../imageFile/Pollock Roe Baguette.png",
    CURRY_CROQUETTES: "../imageFile/CurryCroquettes.jpg",
    GLUTINOUS_RICE_BALLS: "../imageFile/GlutinousRiceBalls.jpg",
    GLUTINOUS_RICE_DONUT: "../imageFile/GlutinousRiceDonut.jpg",
    POLLOCK_ROE_BAGUETTE: "../imageFile/Pollock Roe Baguette.png",
    SHRIMP_OCTOPUS: "../imageFile/ShrimpOctopus.png",
    TUSOGUMA: "../imageFile/Tusoguma.png",
    VEGETABLE_CROQUETTES: "../imageFile/VegetableCroquettes.jpg",
    ZAMBONVOR: "../imageFile/Zambonvor.jpg",
    ITALIAN_SANDWICH: "../imageFile/Italian Sandwich.jpg",
    OLVIE_SANDWICH: "../imageFile/Olive Sandwich.jpg",
    MOZZIMOZZI_BREAD: "../imageFile/Mozzimozzi Bread.jpg",
    PURE_MILK_BREAD: "../imageFile/Pure Milk Bread.jpg",
    CREAM_BREAD: "../imageFile/Cream Bread.jpg",
    CROISSANTS: "../imageFile/Croissants.jpg",
    INK_BAT: "../imageFile/Ink Bat.png",
    KAKAO_GENUINE: "../imageFile/Kakao Genuine.png",
    SATURDAY_BREAD: "../imageFile/Saturday Bread.png",
    PRINCESS_ALMOND_BREAD: "../imageFile/Princess Almond Bread.jpg",
    SARADA_BREAD: "../imageFile/Sarada Bread.jpg",
    SAUSAGE_BREAD: "../imageFile/Sausage Bread.jpg",
    NOAH_REZEN: "../imageFile/Noah Rezen.jpg",
    FEVERFEW: "../imageFile/Feverfew.jpg",
    CIABATTA: "../imageFile/Olive ciabatta.jpg",
    WHOLE_WHEAT_BREAD: "../imageFile/Whole wheat bread.jpg",
    PAIMANJU: "../imageFile/Paimanju.jpg",
    ENABLER: "../imageFile/Enabler.png",
    TOUCH: "../imageFile/Touch.png",
    CAMERA: "../imageFile/Camera.png"
};

// 배열 넘버링 쉽게 접근하기 위한 열거형 생성
const bread_Enum = {
    Salt: 0,
    Croquettes: 1,
    Sandwich: 2,
    Gift: 3,
    Bread: 4,
    Soboro: 5,
    Pie: 6,
    Normal: 7,
    Cooking: 8,
    Fried: 9,
    Health: 10,
    Bomunsan: 11,
    Cool: 12
};

// 뷰포트 가로, 세로 길이
const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);



// 더 긴 쪽을 판별하여 변수에 저장
let longerWidth;
if (viewportWidth > viewportHeight) {
  longerWidth = true;
}
else if (viewportWidth < viewportHeight) {
  longerWidth = false;
}
else {
    longerWidth = true;
}

// View 기준 설정
function ViewPoint_Setting() {
    body_Content.style.height = viewportHeight + 'px';
    body_Content.style.maxHeight = viewportHeight + 'px';
    body_Content.style.width = viewportWidth + 'px';
    body_Content.style.maxWidth = viewportWidth + 'px';

    if (longerWidth) {
        main_Content.style.width = viewportWidth + 'px';
        main_Content.style.height = viewportHeight + 'px';
        main_Content.style.maxWidth = viewportWidth + 'px';
        main_Content.style.maxHeight = viewportHeight + 'px';
        main_Content.style.backgroundSize = `${viewportWidth * 0.9}px ${viewportHeight * 0.85}px`;
    }
    else {
        viewportHeight = viewportHeight/2;
        
        main_Content.style.width = viewportWidth + 'px';
        main_Content.style.height = viewportHeight + 'px';
        main_Content.style.maxWidth = viewportWidth + 'px';
        main_Content.style.maxHeight = viewportHeight + 'px';
        main_Content.style.backgroundSize = `${viewportWidth * 0.9}px ${viewportHeight * 0.85}px`;
    }
}
ViewPoint_Setting();

// 백그라운드 이미지 세팅
function content_BackGroundSettings() {
    main_Content.style.backgroundImage = "url('../imageFile/map.png')";
}
content_BackGroundSettings();



// content 실행
function content_Call() {
    button_Create();
}
content_Call();

// 문구 부분
function Phrase_Part() {
    const phrase = document.createElement('div');
    phrase.classList.add('Phrase_Part');

    if (longerWidth) {
        phrase.style.fontSize = '2vw';
        phrase.style.top = `${viewportHeight * 0.9}px`;
        phrase.style.left = '15vw';
        phrase.style.height = `${viewportHeight * 0.1}px`;
    }
    else {
        phrase.style.fontSize = `${viewportHeight * 0.03}px`
        phrase.style.top = `${viewportHeight * 0.9}px`;
        phrase.style.height = `${viewportHeight * 0.12}px`;
        phrase.style.left = '13vw';
    }

    const image_Element = document.createElement('img');
    image_Element.src = content_BreadImage.TOUCH
    image_Element.style.height = '60%';
    image_Element.style.aspectRatio = '1/1';
    image_Element.style.marginLeft = '-1.5%';

    phrase.innerHTML = '원하는 지점을 선택하여 해당 위치에 있는 빵의 종류와 정보를 확인하세요!'
    phrase.appendChild(image_Element);

    main_Content.appendChild(phrase);
}
Phrase_Part();



// button 클릭 시 이벤트 발동
function Button_Click_Behavior(event_button) {
    // 클릭한 button에 class이름 불러오기
    const clickButton = event_button.target;
    const parentDiv = clickButton.closest('div');
    const parentName = parentDiv.className;
    // class 이름에 숫자부분만 추출
    const classNumber = parentName.replace('button', '');

    // 새로운 창 생성 및 css 세팅
    const infor_window = document.createElement('div');
    infor_window.style.width = '100vw';
    infor_window.style.height = '100vh';
    infor_window.style.zIndex = '10';
    infor_window.style.position = 'relative';

    // infor_window에 background 부분 생성
    const inwin_BG = document.createElement('div');
    inwin_BG.style.backgroundColor = 'rgba(0,0,0,0.6)';
    inwin_BG.style.width = '100vw';
    inwin_BG.style.height = '0';
    inwin_BG.style.top = '100vh';
    inwin_BG.style.position = 'absolute';
    inwin_BG.style.zIndex = '4';
    inwin_BG.style.transition = 'height 0.5s ease-out, top 0.5s ease-out';
    // 애니메이션
    setTimeout(() => {
        inwin_BG.style.height = '100vh';
        inwin_BG.style.top = '0vh';
    }, 50);

    // 세부 세팅
    Window_Setting(infor_window, parseInt(classNumber));

    main_Content.appendChild(infor_window, classNumber);
    infor_window.appendChild(inwin_BG);
    content_Button.push(infor_window);

    // 창 소멸
    inwin_BG.addEventListener('click', function() {
        inwin_BG.style.height = '0vh';
        inwin_BG.style.top = '100vh';
        const childDiv = infor_window.querySelector('.white_window');
        if (childDiv) {
            childDiv.style.transform = 'translateY(150vh)';
        }
        setTimeout(() => {
            infor_window.remove();
        }, 700);
    });
}

// 새로운 창 세부 세팅
function Window_Setting(infor_win, number) {
    const in_Class = document.createElement('div');
    in_Class.classList.add('white_window');
    Black_Phrase(in_Class);
    
    if (longerWidth) {
        in_Class.style.width = '50vw';
        in_Class.style.height = '80vh';
        in_Class.style.borderRadius = '5vh';
    }
    else {
        in_Class.style.width = '90vw';
        in_Class.style.height = `${viewportHeight * 0.9}px`;
        in_Class.style.borderRadius = '2.5vh';
    }

    in_Class.style.backgroundImage = "url('../imageFile/background.jpg')";
    in_Class.style.position = 'absolute';
    in_Class.style.zIndex = '5';
    in_Class.style.filter = 'drop-shadow(0.7vh 0.7vh 6px rgba(0, 0, 0, 0.8))';
    in_Class.style.transition = 'transform 0.5s ease-out';
    in_Class.style.transform = 'translateY(100vh)';
    in_Class.style.overflow = 'auto';

    // 애니메이션
    setTimeout(() => {
        in_Class.style.transform = 'translateY(0)';
    }, 50);

    // in_Class 내용물 생성
    const breadList = [];
    switch (number) {
        case bread_Enum.Salt:
            for (let index = 0; index < 3; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.SALTED_BREAD, '소금빵', '소금을 톨톨 뿌리고, 감미로운 버터 향으로 가득채운 소금빵', '1,500', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.SALTED_CROISSANTS, '소금크로와상', '프랑스 버터시트로 구운 크로와상에 밥알같은 소금이 톨톨 뿌려져 한입 베어물면 고소한 버터와 소금이 만나 풍미가득한 겉바속촉 소금크로와상', '1,800', content_BreadImage.QR_TEST);
            in_Plus(breadList[2], content_BreadImage.POLLOCK_ROE_BAGUETTE, '명란바게트', '짭쪼롬한 명란과 쫄깃 꼬소한 바게트가 만나 먹을수록 손이 가는 빠사삭 명란바게트', '3,800', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Croquettes:
            for (let index = 0; index < 5; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.VEGETABLE_CROQUETTES, '야채고로게', '빵가루를 묻혀 노릇하게 튀겨내어 바삭하지만 부드러운 빵 안에 야채가 꽉 들어차있어 담백한 포만감을 선물', '2,300', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.SHRIMP_OCTOPUS, '새우를낙지', '쫄깃한 낙지와 통통한 새우가 매콤하게 만난 새우를낙지 고로게', '3,000', content_BreadImage.QR_TEST);
            in_Plus(breadList[2], content_BreadImage.CURRY_CROQUETTES, '카레고로게', '성심당만의 비법으로 직접만든 수제 카레 소스와 쫄깃한 불고기로 걸쭉한 카레 고로게 맛의 진수를 선사', '2,800', content_BreadImage.QR_TEST);
            in_Plus(breadList[3], content_BreadImage.GLUTINOUS_RICE_BALLS, '찹쌀주먹밥', '국내산 찹쌀 100%로 지은 쫀쫀한 밥에 성심당의 비법으로 야채와 햄을 넣고 노릇하게 튀긴 찹쌀주먹밥', '2,300', content_BreadImage.QR_TEST);
            in_Plus(breadList[4], content_BreadImage.GLUTINOUS_RICE_DONUT, '찹쌀도넛', '국산 찹쌀을 사용해 말랑말랑 부드럽고 쫀득한 빵속에 달달한 통팥이 가득', '1,500', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Sandwich:
            for (let index = 0; index < 3; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.ZAMBONVOR, '잠봉뵈르', '바게트를 반으로 잘라 얇게 저민 햄인 잠봉과 버터를 채워 넣은 프랑스 국민 샌드위치', '7,800', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.ITALIAN_SANDWICH, '이탈리안샌드위치', '잠수함처럼 긴 빵을 사용한다고 해서 서브 샌드위치라고도 하는 이탈리아계 미국 음식', '5,500', content_BreadImage.QR_TEST);
            in_Plus(breadList[2], content_BreadImage.OLVIE_SANDWICH, '올리브샌드위치', '올리브와 브리치즈, 토마토, 양상추를 듬뿍 넣어 그리스식 샐러드', '4,500', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Gift:
            for (let index = 0; index < 3; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.FRIED_SOBORO, '튀김소보로', '1980년 탄생 소보로, 앙금빵, 도넛의 3단 합체빵. 하나의 빵으로 3가지 맛을 즐기실 수 있는성심당 No.1 튀김소보로', '1,700', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.TUSOGUMA, '튀소구마', '튀소35주년을 기념하여 탄생한 튀소 동생. 달콤한 고구마 크림으로 속을 가득 채운 튀소구마', '1,700', content_BreadImage.QR_TEST);
            in_Plus(breadList[2], content_BreadImage.LEEK_BREAD, '부추빵', '푸릇푸릇 싱싱한 부추를 계란샐러드, 햄과 함께 직접 버무려 만든 부추향 가득 만두 같은 영양만점 판타롱 부추빵', '2,000', content_BreadImage.QR_TEST);
            break;
        
        case bread_Enum.Bread:
            for (let index = 0; index < 2; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.MOZZIMOZZI_BREAD, '모찌모찌식빵', '결결이 쫄깃한 모찌모찌 식빵은 국내 최초 돌절구 원리를 이용한 수백 번의 방아를 찧어 만든 식빵', '3,500', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.PURE_MILK_BREAD, '순우유식빵', '물 한방울 사용하지 않고 오직 밀가루,우유,버터 만을 사용해 만든 성심당 순우유 식빵', '4,000', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Soboro:
            for (let index = 0; index < 3; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.SWEET_BREAD, '단팥빵', '달콤한 통팥앙금에 살짝살짝 씹히는 호두와 톡톡한 밤 알갱이가 포인트인 매력만점 단팥빵', '1,700', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.SOBORO, '소보로', '고소한 땅콩 버터의 풍미가 가득한 크런치한 비스킷이 올려진 고전적인 소보로', '1,300', content_BreadImage.QR_TEST);
            in_Plus(breadList[2], content_BreadImage.CREAM_BREAD, '크림빵', '달달 부드러운 생크림과 커스터드크림이 믹스된 성심 순 크림빵', '2,500', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Pie:
            for (let index = 0; index < 2; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.ECHO, '작은메아리', '달콤한 버터 맛이 풍미깊은 작은 메아리', '3,000', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.CROISSANTS, '플레인크로와상', '기본에 충실한 성심당 크로와상은 뛰어난 풍미를 지닌 프랑스 버터시트를 사용해 초승달 모양으로 켜켜이 층을 낸 페이스트리', '2,800', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Normal:
            for (let index = 0; index < 4; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.INK_BAT, '먹물방망이', '담백하고 쫀득한 먹물빵 안에 부드러운 크림치즈와 촉촉한 연유크림이 달콤 쫄깃한 먹물방망이', '3,300', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.KAKAO_GENUINE, '카카오순정', '호두와 초콜릿으로 매끈하게 토핑된 카카오순정', '3,000', content_BreadImage.QR_TEST);
            in_Plus(breadList[2], content_BreadImage.SATURDAY_BREAD, '토요빵', '빵 표면은 달달 바삭한 옥수수가루와 연유로 만든 소보로가 코팅되어 크런키하고, 속에는 쫀득한 타피오카가 쫄깃한 토요빵', '3,800', content_BreadImage.QR_TEST);
            in_Plus(breadList[3], content_BreadImage.PRINCESS_ALMOND_BREAD, '공주알밤식빵', '견과류 듬뿍 올라가 건강한 맛으로 탄생한 미니밤식빵', '3,000', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Cooking:
            for (let index = 0; index < 2; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.SARADA_BREAD, '사라다빵', '적절한 계란 마요 소스에 새콤한 맛을 첨가한듯한 대중적인 맛', '3,000', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.SAUSAGE_BREAD, '소세지빵', '담백하고 부드러운 페이스트리에 매콤한 칠리 소스와 짭쪼롬한 치즈를 얹은 맵짠 콜라보', '3,500', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Fried:
            for (let index = 0; index < 3; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.FRIED_SOBORO, '튀김소보로', '1980년 탄생 소보로, 앙금빵, 도넛의 3단 합체빵. 하나의 빵으로 3가지 맛을 즐기실 수 있는성심당 No.1 튀김소보로', '1,700', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.TUSOGUMA, '튀소구마', '튀소35주년을 기념하여 탄생한 튀소 동생. 달콤한 고구마 크림으로 속을 가득 채운 튀소구마', '1,700', content_BreadImage.QR_TEST);
            in_Plus(breadList[2], content_BreadImage.LEEK_BREAD, '부추빵', '푸릇푸릇 싱싱한 부추를 계란샐러드, 햄과 함께 직접 버무려 만든 부추향 가득 만두 같은 영양만점 판타롱 부추빵', '2,000', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Health:
            for (let index = 0; index < 4; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.NOAH_REZEN, '노아레즌', '유기농 밀가루와 호밀을 섞어 만든 반죽에 호두와 건포도를 콕콕 넣어 씹을 수록 고소한 풍미를 자랑', '7,000', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.FEVERFEW, '시월애무화과', '무화과 알갱이와 블루베리가 촘촘히 들어있어 톡톡 터지는 식각이 매력점', '5,000', content_BreadImage.QR_TEST);
            in_Plus(breadList[2], content_BreadImage.CIABATTA, '치아바타', '블랙 앤 그린, 두 가지 올리브가 빵 안 쏙쏙 박혀있는 치아바타', '3,500', content_BreadImage.QR_TEST);
            in_Plus(breadList[3], content_BreadImage.WHOLE_WHEAT_BREAD, '맷돌로갈은통밀빵', '자연을 담은 통밀과 유기농 밀가루를 1:1로 섞어 만든 건강빵', '4,500', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Bomunsan:
            for (let index = 0; index < 2; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.BOMUNSAN, '보문산메아리', '한겹 한겹 보드라운 빵결에 골드럼 시럽이 섬세하게 발려져 있어 깊은 풍미를 느낄 수 있습니다', '6,000', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.PAIMANJU, '파이만쥬', '겉바속촉 파이와 달콤 팥앙금가득 파이만주', '9,600', content_BreadImage.QR_TEST);
            break;

        case bread_Enum.Cool:
            for (let index = 0; index < 2; index++) {
                const acceptDiv = document.createElement('div');
                acceptDiv.classList.add('breadList');
                breadList.push(acceptDiv);
            }

            in_Plus(breadList[0], content_BreadImage.ENABLER, '앙버터', '갓 구운 바게트 빵에 부드러운 버터의 풍미와 톡톡 터지는 국산 통팥앙금의 달달한 조화를 느낄 수 있는 성심앙버터', '4,000', content_BreadImage.QR_TEST);
            in_Plus(breadList[1], content_BreadImage.CREAM_BREAD, '크림빵', '달달 부드러운 생크림과 커스터드크림이 믹스된 성심 순 크림빵', '2,500', content_BreadImage.QR_TEST);
            break;

        default:
            break;
    }

    // 내용물 추가
    breadList.forEach(elem => {
        in_Class.appendChild(elem);
    });

    // 뷰에 추가
    Detail_Information(in_Class);
    infor_win.appendChild(in_Class);
    CenterDiv(in_Class);
}

// 카메라 문구
function Black_Phrase(m_window) {
    const black_Div = document.createElement('div');
    black_Div.classList.add('Black_Phrase');

    if (longerWidth) {
        black_Div.style.height = '100vh';
    }
    else {
        black_Div.style.height = `${viewportHeight * 1}px`;
    }

    const black_Text = document.createElement('div');
    black_Text.style.width = '100%';
    if (longerWidth){
        black_Text.style.fontSize = `${viewportHeight * 0.03}px`
    } 
    else {
        black_Text.style.fontSize = `${viewportHeight * 0.03}px`
    }
    black_Text.innerHTML = '더 세부적인 정보를 원하신다면<br>QR코드를 찍거나, 사진을 눌러주세요!';
    black_Text.style.marginTop = '35%';
    black_Div.appendChild(black_Text);

    const temp_Image = document.createElement('img');
    temp_Image.src = content_BreadImage.CAMERA;
    temp_Image.style.width = '25%';
    temp_Image.style.aspectRatio = '1/1';
    temp_Image.style.backgroundColor = 'rgba(255,255,255,0.6)';
    temp_Image.style.marginTop = '5%';
    black_Div.appendChild(temp_Image);

    m_window.appendChild(black_Div);

    setTimeout(() => {
        black_Div.remove();
    }, 1500);
}

// in_Class 텍스트 설정
function in_Plus(accDiv, imageURL, breadName, breadInfor, breadPrice, breadQR) {
    // image 추가
    const t_img = new Image();
    t_img.src = imageURL;

    t_img.style.height = '90%';
    t_img.style.width = 'auto';
    t_img.style.marginTop = '1.25%';
    t_img.style.marginLeft = '1.25%';
    if (longerWidth) {
        t_img.style.borderRadius = '3vh';
    }
    else {
        t_img.style.borderRadius = '1.5vh';
    }
    t_img.style.backgroundColor = 'rgba(255,255,255,1)';

    Click_Image(t_img, breadName);

    accDiv.appendChild(t_img);

    // Bread Name, Informaton 추가
    const t_Item = document.createElement('div');
    const t_Name = document.createElement('div');
    t_Name.classList.add('t_breadName');
    t_Name.innerHTML = breadName;
    const t_Infor = document.createElement('div');
    t_Infor.classList.add('t_breadInfor');
    t_Infor.innerHTML = breadInfor;
    const t_Price = document.createElement('div');
    t_Price.classList.add('t_breadPrice');
    t_Price.innerHTML = '$ ' + breadPrice;

    t_Item.style.marginTop = '1.25%';
    t_Item.style.marginLeft = '0.8%';
    t_Item.style.borderRadius = '3vh';
    if (longerWidth) {
        t_Item.style.borderRadius = '3vh';
    }
    else {
        t_Item.style.borderRadius = '1.5vh';
    }
    t_Item.style.backgroundColor = 'rgba(255,255,255,0.45)'
    t_Item.style.height = '90%';
    t_Item.style.width = '51%';
    t_Item.style.overflow = 'auto';

    t_Item.appendChild(t_Name);
    t_Item.appendChild(t_Infor);
    t_Item.appendChild(t_Price);
    accDiv.appendChild(t_Item);

    // Bread QR 추가
    const t_QRImg = new Image();
    t_QRImg.src = breadQR;

    t_QRImg.style.height = '90%';
    t_QRImg.style.widows = 'auto';
    t_QRImg.style.marginTop = '1.25%';
    t_QRImg.style.marginLeft = '0.8%';
    t_QRImg.style.borderRadius = '3vh';
    if (longerWidth) {
        t_QRImg.style.borderRadius = '3vh';
    }
    else {
        t_QRImg.style.borderRadius = '1.5vh';
    }

    accDiv.appendChild(t_QRImg);
}

// 이미지 클릭 시 페이지 이동
function Click_Image(m_Image, m_Name) {

    var otherPage_Link;
    switch (m_Name) {
        case '보문산메아리':
            otherPage_Link = '../BreadList/Bomunsan/index.html';
            break;
        case '파이만쥬':
            otherPage_Link = '../BreadList/Paimanju/index.html';
            break;



        case '소금크로와상':
            otherPage_Link = '../BreadList/Salted_Croissants/index.html';
            break;
        case '명란바게트':
            otherPage_Link = '../BreadList/Pollock Roe Baguette/index.html';
            break;



        case '야채고로게':
            otherPage_Link = '../BreadList/Vegetable Croquettes/index.html';
            break;
        case '새우를낙지':
            otherPage_Link = '../BreadList/ShrimpOctopus/index.html';
            break;
        case '카레고로게':
            otherPage_Link = '../BreadList/CurryCroquettes/index.html';
            break;
        case '찹쌀주먹밥':
            otherPage_Link = '../BreadList/GlutinousRiceBalls/index.html';
            break;
        case '찹쌀도넛':
            otherPage_Link = '../BreadList/GlutinousRiceDonut/index.html';
            break;



        case '튀김소보로':
            otherPage_Link = '../BreadList/Fried Soboro/index.html'
            break;
        case '튀소구마':
            otherPage_Link = '../BreadList/Tusoguma/index.html'
            break;
        case '부추빵':
            otherPage_Link = '../BreadList/leek_bread/index.html'
            break;



        case '모찌모찌식빵':
            otherPage_Link = '../BreadList/Mozzimozzi Bread/index.html'
            break;
        case '순우유식빵':
            otherPage_Link = '../BreadList/Pure Milk Bread/index.html'
            break;



        case '단팥빵':
            otherPage_Link = '../BreadList/sweetbread/index.html';
            break;
        case '소보로':
            otherPage_Link = '../BreadList/soboro/index.html';
            break;
        case '크림빵':
            otherPage_Link = '../BreadList/Cream Bread/index.html';
            break;



        case '작은메아리':
            otherPage_Link = '../BreadList/echo/index.html';
            break;
        case '플레인크로와상':
            otherPage_Link = '../BreadList/Croissants/index.html';
            break;



        case '먹물방망이':
            otherPage_Link = '../BreadList/Ink Bat/index.html';
            break;
        case '카카오순정':
            otherPage_Link = '../BreadList/Kakao Genuine/index.html';
            break;
        case '토요빵':
            otherPage_Link = '../BreadList/Saturday Bread/index.html';
            break;



        case '노아레즌':
            otherPage_Link = '../BreadList/Noah Rezen/index.html';
            break;
        case '치아바타':
            otherPage_Link = '../BreadList/Olive ciabatta/index.html';
            break;
        case '맷돌로갈은통밀빵':
            otherPage_Link = '../BreadList/Whole wheat bread/index.html';
            break;



        case '앙버터':
            otherPage_Link = '../BreadList/Enabler/index.html';
            break;
        default:
            break;
    }

    m_Image.addEventListener('click', () => {
        window.location.href = otherPage_Link;
    });
}



// button 생성
function button_Create() {
    for (let index = 0; index < 13; index++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('button' + index.toString());
        // 버튼 생성
        const newButton = document.createElement('button');

        newButton.addEventListener('click', Button_Click_Behavior);
        // div에 버튼 추가
        newDiv.appendChild(newButton);

        class_CSS(newDiv);
        button_CSS(newButton);

        content_Button.push(newDiv);
    }

    content_Button.forEach(elementDiv => {
        main_Content.appendChild(elementDiv);
    });

    button_Settings();
}

// Class CSS 설정
function class_CSS(tempClass) {
    tempClass.style.position = 'absolute';
    tempClass.style.zIndex = '1';
}

// Button CSS 설정
function button_CSS(tempButton) {
    tempButton.style.backgroundColor = 'rgba(0,0,0,0)';
    tempButton.style.zIndex = '2';
    tempButton.style.border = 'none';

    let originalColor = 'rgba(0,0,0,0)';
    // 버튼 클릭 시 색상 변화
    tempButton.addEventListener('click', function() {
        tempButton.style.backgroundColor = 'rgba(0,0,0,0.5)';
        setTimeout(function() {
            tempButton.style.backgroundColor = originalColor;
        }, 100);
    });
}

// 버튼 항목 세팅
function button_Settings() {
    let content_Element;

    // 첫 번째 항목
    content_Button[bread_Enum.Salt].style.left = '7vw';
    if (longerWidth) {
        content_Button[bread_Enum.Salt].style.top = '31vh';
    }
    else {
        content_Button[bread_Enum.Salt].style.top = `${viewportHeight * 0.31}px`
    }

    content_Element = content_Button[bread_Enum.Salt].querySelector('button');
    content_Element.style.width = '8vw';
    if (longerWidth) {
        content_Element.style.height = '32vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.32}px`
    }

    // 두 번째 항목
    content_Button[bread_Enum.Croquettes].style.left = '81.5vw';
    if (longerWidth) {
        content_Button[bread_Enum.Croquettes].style.top = '31vh';
    }
    else {
        content_Button[bread_Enum.Croquettes].style.top = `${viewportHeight * 0.31}px`;
    }

    content_Element = content_Button[bread_Enum.Croquettes].querySelector('button');
    content_Element.style.width = '8.5vw';
    if (longerWidth) {
        content_Element.style.height = '32vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.32}px`;
    }

    // 세 번째 항목
    content_Button[bread_Enum.Sandwich].style.left = '81.5vw';
    if (longerWidth) {
        content_Button[bread_Enum.Sandwich].style.top = '63vh';
    }
    else {
        content_Button[bread_Enum.Sandwich].style.top = `${viewportHeight * 0.63}px`;
    }

    content_Element = content_Button[bread_Enum.Sandwich].querySelector('button');
    content_Element.style.width = '8.5vw';
    if (longerWidth) {
        content_Element.style.height = '26vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.26}px`;
    }

    // 네 번째 항목
    content_Button[bread_Enum.Gift].style.left = '61vw';
    if (longerWidth) {
        content_Button[bread_Enum.Gift].style.top = '11vh';
    }
    else {
        content_Button[bread_Enum.Gift].style.top = `${viewportHeight * 0.11}px`;
    }

    content_Element = content_Button[bread_Enum.Gift].querySelector('button');
    content_Element.style.width = '20.5vw';
    if (longerWidth) {
        content_Element.style.height = '8vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.08}px`;
    }

    // 다섯 번째 항목
    content_Button[bread_Enum.Bread].style.left = '38.5vw';
    if (longerWidth) {
        content_Button[bread_Enum.Bread].style.top = '31.5vh';
    }
    else {
        content_Button[bread_Enum.Bread].style.top = `${viewportHeight * 0.315}px`;
    }

    content_Element = content_Button[bread_Enum.Bread].querySelector('button');
    content_Element.style.width = '16vw';
    if (longerWidth) {
        content_Element.style.height = '15vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.15}px`;
    }

    // 여섯 번째 항목
    content_Button[bread_Enum.Soboro].style.left = '61vw';
    if (longerWidth) {
        content_Button[bread_Enum.Soboro].style.top = '41.5vh';
    }
    else {
        content_Button[bread_Enum.Soboro].style.top = `${viewportHeight * 0.415}px`;
    }

    content_Element = content_Button[bread_Enum.Soboro].querySelector('button');
    content_Element.style.width = '16vw';
    if (longerWidth) {
        content_Element.style.height = '5vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.05}px`;
    }

    // 일곱 번째 항목
    content_Button[bread_Enum.Pie].style.left = '38.7vw';
    if (longerWidth) {
        content_Button[bread_Enum.Pie].style.top = '55.7vh';
    }
    else {
        content_Button[bread_Enum.Pie].style.top = `${viewportHeight * 0.557}px`;
    }

    content_Element = content_Button[bread_Enum.Pie].querySelector('button');
    content_Element.style.width = '10.3vw';
    if (longerWidth) {
        content_Element.style.height = '15.5vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.155}px`;
    }


    // 여덟 번째 항목
    content_Button[bread_Enum.Normal].style.left = '49.4vw';
    if (longerWidth) {
        content_Button[bread_Enum.Normal].style.top = '55.7vh';
    }
    else {
        content_Button[bread_Enum.Normal].style.top = `${viewportHeight * 0.557}px`;
    }

    content_Element = content_Button[bread_Enum.Normal].querySelector('button');
    content_Element.style.width = '17.2vw';
    if (longerWidth) {
        content_Element.style.height = '15.5vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.155}px`;
    }

    // 아홉 번째 항목
    content_Button[bread_Enum.Cooking].style.left = '67vw';
    if (longerWidth) {
        content_Button[bread_Enum.Cooking].style.top = '55.7vh';
    }
    else {
        content_Button[bread_Enum.Cooking].style.top = `${viewportHeight * 0.557}px`;
    }

    content_Element = content_Button[bread_Enum.Cooking].querySelector('button');
    content_Element.style.width = '9.8vw';
    if (longerWidth) {
        content_Element.style.height = '15.5vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.155}px`;
    }

    // 열 번째 항목
    content_Button[bread_Enum.Fried].style.left = '61vw';
    if (longerWidth) {
        content_Button[bread_Enum.Fried].style.top = '31.5vh';
    }
    else {
        content_Button[bread_Enum.Fried].style.top = `${viewportHeight * 0.315}px`;
    }

    content_Element = content_Button[bread_Enum.Fried].querySelector('button');
    content_Element.style.width = '16vw';
    if (longerWidth) {
        content_Element.style.height = '10vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.1}px`;
    }

    // 11 번째 항목
    content_Button[bread_Enum.Health].style.left = '7vw';
    if (longerWidth) {
        content_Button[bread_Enum.Health].style.top = '63vh';
    }
    else {
        content_Button[bread_Enum.Health].style.top = `${viewportHeight * 0.63}px`;
    }

    content_Element = content_Button[bread_Enum.Health].querySelector('button');
    content_Element.style.width = '8vw';
    if (longerWidth) {
        content_Element.style.height = '25.5vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.255}px`;
    }

    // 12 번째 항목
    content_Button[bread_Enum.Bomunsan].style.left = '24vw';
    if (longerWidth) {
        content_Button[bread_Enum.Bomunsan].style.top = '45vh';
    }
    else {
        content_Button[bread_Enum.Bomunsan].style.top = `${viewportHeight * 0.45}px`;
    }

    content_Element = content_Button[bread_Enum.Bomunsan].querySelector('button');
    content_Element.style.width = '11.5vw';
    if (longerWidth) {
        content_Element.style.height = '14vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.14}px`;
    }

    // 13 번째 항목
    content_Button[bread_Enum.Cool].style.left = '58.2vw';
    if (longerWidth) {
        content_Button[bread_Enum.Cool].style.top = '81vh';
    }
    else {
        content_Button[bread_Enum.Cool].style.top = `${viewportHeight * 0.81}px`;
    }

    content_Element = content_Button[bread_Enum.Cool].querySelector('button');
    content_Element.style.width = '23.5vw';
    if (longerWidth) {
        content_Element.style.height = '7vh';
    }
    else {
        content_Element.style.height = `${viewportHeight * 0.07}px`;
    }
}



// 화면 중앙 세팅
function CenterDiv(center) {
    const windowWidth = window.innerWidth; // 브라우저 창의 너비
    const windowHeight = window.innerHeight; // 브라우저 창의 높이
    let divWidth, divHeight;

    if (longerWidth) {
        divWidth = window.innerWidth * 0.5; // div 요소의 너비
        divHeight = window.innerHeight * 0.8; // div 요소의 높이
    }
    else {
        divWidth = window.innerWidth * 0.9; // div 요소의 너비
        divHeight = viewportHeight * 0.9;
    }

    // 화면의 중앙에 위치시키기 위해 left와 top 값을 조정
    let leftPosition = (windowWidth - divWidth) / 2;
    let topPosition;
    if (longerWidth) {
        topPosition = (windowHeight - divHeight) / 2;
    }
    else {
        topPosition = (windowHeight - divHeight) / 2 - (divHeight/2);
    }

    // center의 스타일을 변경하여 화면 중앙에 위치하도록 함
    center.style.left = leftPosition + 'px';
    center.style.top = topPosition + 'px';
}

// 세부 정보 Class Style 설정
function Detail_Information(bread_Array) {
    const bread_List = bread_Array.querySelectorAll('.breadList');
    const t_breadName = bread_Array.querySelectorAll('.t_breadName');
    const t_breadInfor = bread_Array.querySelectorAll('.t_breadInfor');
    const t_breadPrice = bread_Array.querySelectorAll('.t_breadPrice');

    if (!longerWidth) {
        bread_List.forEach(element => {
            element.style.borderBottom = '0.6vh solid rgba(0, 0, 0, 0.2)';
        });
        t_breadName.forEach(element => {
            element.style.fontSize = '1.8vh';
            element.style.paddingTop = '5%';
            element.style.paddingLeft = '8%';
        });
        t_breadInfor.forEach(element => {
            element.style.fontSize = '1.2vh';
            element.style.paddingTop = '5%';
            element.style.paddingLeft = '8%';
            element.style.paddingRight = '8%';
        });
        t_breadPrice.forEach(element => {
            element.style.fontSize = '1.5vh';
            element.style.paddingTop = '5%';
            element.style.paddingLeft = '8%';
            element.style.paddingRight = '8%';
        })
    }
}