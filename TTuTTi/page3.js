const image_path = {
    QR_IMAGE: "../imageFile/May_I_QR.png",
    PHONE: "../imageFile/phone.png",
    RED_ARROW: "../imageFile/Red_Arrow.png",
    BORDER: "../imageFile/Border.png",
    SUNGSIMI: "../imageFile/SungSimi.png",
    LOGO_BLACK: "../imageFile/Logo_Black.png"
}



function page3_Call() {
    setTimeout(() => {
        page3_Create();
    }, 700);
}



// page3 생성
function page3_Create() {
    const page3_Div = document.createElement('div');
    page3_Div.classList.add('QR_class');

    page3_Div.style.left = '100%';
    setTimeout(() => {
        page3_Div.style.transition = 'left 1.2s ease-in-out';
        page3_Div.style.left = '0%';
    }, 100);

    page3_Text1(page3_Div);
    page3_Image1(page3_Div);
    page3_Image2(page3_Div);
    page3_Border(page3_Div);
    page3_Image3(page3_Div);

    contentDiv_3.appendChild(page3_Div);
}

// page3 첫번째 텍스트
function page3_Text1(m_div) {
    const page3_Text = document.createElement('div');
    page3_Text.classList.add('page3_Text_1');

    page3_Text.innerHTML = '궁금한 점은 아래 QR MAY I 챗봇에게 문의하세요!';

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
    // 2개의 이미지 넣을 자리 생성
    const page3_class = [];
    for (let index = 0; index < 2; index++) {
        const element = document.createElement('div');
        element.classList.add('page3_Image_2');

        const image = new Image();
        image.src = image_path.SUNGSIMI;
        element.appendChild(image);

        m_div.appendChild(element);
        page3_class.push(element);
    }

    // 왼쪽
    page3_class[0].style.marginLeft = '15%';
    page3_class[0].style.marginTop = '-12%';

    const text2_1 = document.createElement('div');
    text2_1.classList.add('page3_Text_2');
    text2_1.innerHTML = '영상보기';
    page3_class[0].appendChild(text2_1);

    text2_1.addEventListener('click', function() {
        text2_1.style.backgroundColor = 'black';
        text2_1.style.color = 'white';
        
        m_div.style.left = '-100%';
        setTimeout(() => {
            m_div.remove();
            page_count = 4;
            watch_Count_Page();
        }, 1200);
    });

    // 오른쪽
    page3_class[1].style.marginLeft = '73%';
    page3_class[1].style.marginTop = '-12%';

    const text2_2 = document.createElement('div');
    text2_2.classList.add('page3_Text_2');
    text2_2.innerHTML = '게임하기';
    page3_class[1].appendChild(text2_2);

    text2_2.addEventListener('click', function() {
        text2_2.style.backgroundColor = 'black';
        text2_2.style.color = 'white';
        
        m_div.style.left = '-100%';
        setTimeout(() => {
            m_div.remove();
            page_count = 2;
            watch_Count_Page();
        }, 1200);
    });

}

// 보더
function page3_Border(m_div) {
    const border = document.createElement('div');
    border.classList.add('page3_Border_Image');

    const image = new Image();
    image.src = image_path.BORDER;
    border.appendChild(image);

    m_div.appendChild(border);
}

// 세번째 이미지
function page3_Image3(m_div) {
    const page3_image = document.createElement('div');
    page3_image.classList.add('page3_Image_3');

    const image = new Image();
    image.src = image_path.LOGO_BLACK;
    page3_image.appendChild(image);

    m_div.appendChild(page3_image);
}