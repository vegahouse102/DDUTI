const image_path = {
    QR_IMAGE: "../imageFile/QR_test.png",
    PHONE: "../imageFile/phone.png",
    RED_ARROW: "../imageFile/Red_Arrow.png"
}



function page3_Call() {
    setTimeout(() => {
        page3_Create();
    }, 1500);
}



// page3 생성
function page3_Create() {
    const page3_Div = document.createElement('div');
    page3_Div.classList.add('QR_class');

    page3_Div.style.left = '100%';
    setTimeout(() => {
        page3_Div.style.transition = 'left 2.0s ease-in-out';
        page3_Div.style.left = '0%';
    }, 100);

    page3_Text1(page3_Div);
    page3_Text2(page3_Div);
    page3_Image1(page3_Div);
    page3_Image2(page3_Div);
    page3_Image3(page3_Div);

    contentDiv_3.appendChild(page3_Div);

    setTimeout(() => {
        page3_Div.style.left = '-100%';
        setTimeout(() => {
            page3_Div.remove();
        }, 2000);

        page_count = 4;
        watch_Count_Page();
    }, 12000);
}

// page3 첫번째 텍스트
function page3_Text1(m_div) {
    const page3_Text = document.createElement('div');
    page3_Text.classList.add('page3_Text_1');

    page3_Text.innerHTML = '빵가게 내부 맵과 다양한 빵 메뉴를 즉시 확인하세요!';

    m_div.appendChild(page3_Text);
}

// page3 두번째 테스트
function page3_Text2(m_div) {
    const page3_Text = document.createElement('div');
    page3_Text.classList.add('page3_Text_2');

    page3_Text.innerHTML = 'QR코드를 활용하여 더 많은 정보를 얻어보세요.';

    m_div.appendChild(page3_Text);
}

// 첫번째 이미지
function page3_Image1(m_div) {
    const page3_class = document.createElement('div');
    page3_class.classList.add('page3_Image_1');

    const new_Image = new Image();
    new_Image.src = image_path.QR_IMAGE;
    new_Image.style.width = '30%';
    new_Image.style.height = 'auto';
    new_Image.style.textAlign = 'center';

    page3_class.appendChild(new_Image);

    m_div.appendChild(page3_class);
}

// 두번째 이미지
function page3_Image2(m_div) {
    const page3_class = document.createElement('div');
    page3_class.classList.add('page3_Image_2');

    const new_Image = new Image();
    new_Image.src = image_path.RED_ARROW;

    page3_class.appendChild(new_Image);

    m_div.appendChild(page3_class);
}

// 세번째 이미지
function page3_Image3(m_div) {
    const page3_class = document.createElement('div');
    page3_class.classList.add('page3_Image_3');

    const new_Image = new Image();
    new_Image.src = image_path.PHONE;

    page3_class.appendChild(new_Image);

    m_div.appendChild(page3_class);
}