let page_1_Interaval = 0;   // setInterval 함수 종료설정
let max_page = 17;          // 배열 크기 조절


const page1_Image_Array = [
    "url('../imageFile/01.png')",
    "url('../imageFile/02.jpg')",
    "url('../imageFile/03.jpg')",
    "url('../imageFile/04.jpg')",
    "url('../imageFile/05.jpg')",
    "url('../imageFile/06.jpg')",
    "url('../imageFile/07.jpg')",
    "url('../imageFile/08.jpg')",
    "url('../imageFile/09.jpg')",
    "url('../imageFile/10.jpg')",
    "url('../imageFile/11.jpg')",
    "url('../imageFile/12.jpg')",
    "url('../imageFile/13.jpg')",
    "url('../imageFile/14.jpg')",
    "url('../imageFile/15.jpg')",
    "url('../imageFile/16.png')"
];

function page1_Call() {
    class_Make();
    settings_Page();

    page_1_Interaval = setInterval(story_scrolling, 4000);
}

// class 설정
function class_Make() 
{
    for (let index = 0; index < max_page; index++) {
        const foDiv = document.createElement('div');    // div 추가
        foDiv.classList.add('ps_' + index.toString());  // class 추가
        class_initial(foDiv);                           // 각 뷰들 초기화
        if (index < (max_page - 1)) {
            foDiv.style.backgroundImage = page1_Image_Array[page1_Image_Array.length - 1 - index];
        }
        newDiv.push(foDiv);                             // newDiv 배열에 추가
    }

    // newDiv 배열 요소들을 .page1 클래스에 삽입
    newDiv.forEach(elementDiv => {
        contentDiv.appendChild(elementDiv);
    });
}

// 뷰 자동 스크롤
let scroll_index = 0;
const delete_Div = [];

function story_scrolling()
{
    // 2페이지 시작
    if (scroll_index == (max_page - 2)) {
        page_count = 2;
        watch_Count_Page();
    }

    if (scroll_index == (max_page - 1)) {
        content_body.style.backgroundImage = 'none';
    }

    // 페이지 초기화
    if (scroll_index == max_page) {
        scroll_index = 0;
        clearInterval(page_1_Interaval);    // 1페이지 스크롤 중지
        
        delete_Div.forEach(element => {
            element.remove();
        });
    }

    // 슬라이드 이동
    if (newDiv.length != 0) {
        const dele_div = newDiv.pop();
        dele_div.style.transform = 'translateX(-100%)';
        // 오류 방지 및 다음 div 미리 스크롤
        if (newDiv.length > 0) {
            newDiv[newDiv.length - 1].style.transform = 'translateX(0%)';
            setTimeout(() => {
                change_Color(newDiv[newDiv.length - 1]);
            }, 2000);
        }
        delete_Div.push(dele_div);

        scroll_index++;
    }
}

// 뷰 기본 상태 지정
function class_initial(temporary_div)
{
    temporary_div.style.width = '100%';
    temporary_div.style.height = '100%';

    temporary_div.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    temporary_div.style.position = 'absolute';
    temporary_div.style.transform = 'translateX(100%)';
    temporary_div.style.transition = 'transform 2.0s ease-in-out';
    temporary_div.style.backgroundSize = '60% 100%';
    temporary_div.style.backgroundRepeat = 'no-repeat';
    temporary_div.style.backgroundPosition = 'right top';

    temporary_div.style.color = 'rgba(0,0,0,0)';

    const preface = document.createElement('div');
    preface.classList.add('preface');
    const infor = document.createElement('div');
    infor.classList.add('infor');
    const page = document.createElement('div');
    page.classList.add('minipage');
    temporary_div.appendChild(preface);
    temporary_div.appendChild(infor);
    temporary_div.appendChild(page);
}

// 폰트 색상 일정 시간에 걸쳐 복구
function change_Color(changeDiv) {
    let opacity = 0;
    const increment = 1 / 40;

    const intervalID = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(intervalID);
        }
        else {
            opacity += increment;
            changeDiv.style.color = `rgba(0, 0, 0, ${opacity})`;
        }
    },  25);
}

// 각 성심당 이야기 페이지 설정
let preface;
let infor;
let minipage;
const img_flour = '../imageFile/flour.png';

function settings_Page()
{
    // 1페이지
    div_append(newDiv[max_page - 1]);
    // img 요소를 생성하고 src 속성을 설정합니다.
    const imgElement = document.createElement('img');
    imgElement.src = img_flour;
    preface.appendChild(imgElement);
    imgElement.style.height = '20%';
    imgElement.style.width = 'auto';

    infor.style.textAlign = 'center';
    preface.style.textAlign = 'center';
    minipage.style.textAlign = 'center';
    preface.innerHTML += boldText('<br>성심당이야기');
    infor.innerHTML = normalText('‘모든 이가 다 좋게 여기는 일을 하십시오’ 라는 경영이념으로 대흥동 성당의 오기선 신부님께서 주신 밀가루 두 포대와<br>피난에서 살아가게 되면 남은 일생을 가난한 이웃을 위해 바치겠다는 창업주의 기도를 바탕으로 시작된<br>나눔정신을 실천하는 성심당의 이야기 들어주실래요?');
    minipage.innerHTML = extraText('김태훈 글 &nbsp&nbsp&nbsp박선향 그림 &nbsp&nbsp&nbsp로드스쿨 제작');

    preface.style.marginTop = '7.5%';
    preface.style.paddingBottom = '3%';
    preface.style.alignItems = 'center';
    preface.style.flexDirection = 'column';
    preface.style.display = 'flex';
    infor.style.lineHeight = '1.5';
    preface.style.lineHeight = '1.3';
    minipage.style.marginTop = '5%';
    minipage.style.marginLeft = '0%';
    // 1페이지만 설정
    setTimeout(() => {
        newDiv[max_page - 1].style.transform = 'translateX(0%)';
    }, 100);
    setTimeout(() => {
        change_Color(newDiv[max_page - 1]);
    }, 2100);

    // 2페이지
    div_append(newDiv[max_page - 2]);

    newDiv[max_page - 2].style.backgroundSize = '100% 100%';

    infor.style.textAlign = 'center';
    infor.innerHTML = normalText('정말 추운 겨울이었어요.<br>여름부터 시작된 전쟁이 겨울까지 계속 됐거든요.<br>전쟁 때문에 사람들이 많이 죽고 다쳤어요.<br>동네가 전쟁터가 되어서 고향을 떠나야 하는 사람들도 많았어요.<br>임길순 아저씨가 살았던 함경남도 함주 땅도 그랬어요.<br>아저씨는 원래 과수원을 했어요.<br>아줌마와 네 딸, 이렇게 여섯 식구가 행복하게 살았어요.<br>하지만 전쟁이 모든 것을 빼앗아 갔어요.<br>살기 위해선 고향을 떠날 수밖에 없었어요.');
    minipage.innerHTML = extraText('1/16');

    infor.style.lineHeight = '1.5';
    infor.style.marginTop = '13%';
    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';

    // 3페이지
    div_append(newDiv[max_page - 3]);

    preface.innerHTML = boldText_2('흥남부두로 향하는 피난길');
    infor.innerHTML = normalText('‘슈웅~~~~콰광! 슈웅~~~~ 콰광!’<br>멀리서 들리던 대포 소리가 어느새 동네 가까이 다가오고 있었어요.<br>"애들아, 일어나. 어서 떠나자. 서둘러야 해."<br>아저씨는 새벽부터 서둘렀어요.<br>짐을 제대로 쌀 겨를도 없었어요.<br>피난길 사람들은 모두 동해 바다를 향해 걷고 있었어요.<br>육지 길은 전쟁 때문에 이미 다 막혔기 때문이에요.');
    minipage.innerHTML = extraText('2/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '15%'
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 4페이지
    div_append(newDiv[max_page - 4]);

    preface.innerHTML = boldText_2('피난 마지막 배, 메러디스 빅토리호 승선');
    infor.innerHTML = normalText('힘들게 도착한 흥남부두는 이미 피난민들로 가득 차 있었어요.<br>다행히 군인들이 사용하는 군함과 화물선이 몇 척 남아 있었어요.<br>아저씨네 가족은 마지막 배인 "메러디스 빅토리호"에 올라 탔어요.<br><br>출발하고 얼마 안 있어 흥남부두는 폭파됐어요.<br>아저씨는 불타는 흥남부두를 바라보며 하느님께 맹세했어요.<br>"우리 가족이 살아난다면 평생 가난한 사람들을 위해 살겠습니다.”<br><br>흥남부두를 출발한 배는 이틀간 바다를 달려 크리스마스인<br>12월 25일 거제도에 도착했어요.그래서 "크리스마스의 기적" 이라고<br>부른답니다.');
    minipage.innerHTML = extraText('3/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginTop = '9%';
    preface.style.marginLeft = '6%';
    infor.style.marginTop = '4%';
    infor.style.marginLeft = '6%';

    // 5페이지
    div_append(newDiv[max_page - 5]);

    preface.innerHTML = boldText_2('대전역에 멈춰 선 기차');
    infor.innerHTML = normalText('아저씨네 가족은 거제도를 거쳐 경남 진해에서 잠시 살았어요.<br>전쟁이 끝나고 아들 영진이도 새로 태어났어요.<br>아저씨는 서울로 이사를 가기로 하고 기차를 탔어요.<br>그런데 잘 가던 기차가 그만 대전역에서 고장이 나고 말았답니다.<br><br>그때는 기차가 한 번 고장 나면 고치기가 무척 어려웠어요.<br>언제 다시 출발할지도 몰랐어요.<br>아저씨는 열차에서 내려 대전역 광장으로 나왔어요.<br>사람들도 많았고 분위기도 활기찼어요.<br>아저씨는 대전이 마음에 들었어요.<br><br>“얘들아, 여기가 대전이란 곳인데 어떻니?”<br>“사람도 많고 멋지고 좋아요.”<br>“우리 그럼 여기서 살까?”<br>“좋아요!”<br><br>아저씨는 서울에 가지 않고 대전에서 살기로 마음 먹었어요.');
    minipage.innerHTML = extraText('4/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '3%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 6페이지
    div_append(newDiv[max_page - 6]);

    preface.innerHTML = boldText_2('대흥동 성당에서 받은 밀가루 두 포대');
    infor.innerHTML = normalText('아저씨는 곧바로 목척교를 건너 대흥동 성당을 찾아 갔어요.<br>아저씨의 이야기를 들은 신부님은 밀가루 두 포대를 선물로 주셨어요.<br>집에 돌아온 아저씨는 아줌마와 상의했어요.<br><br>“두 포대면 우리 식구가 제법 오랫동안 먹을 수 있겠죠?”<br>“하지만 언제까지 도움만 받으며 살 순 없잖아요. 이걸로 찐빵 장사라도 합시다.”<br><br>아줌마는 이튿날 빵장사하는 분들을 찾아가 기술을 배웠어요.<br>그리고 며칠 후 대전역 앞에 천막을 치고 찐빵을 쪄서 팔기 시작했습니다.<br>그 천막 기둥에 ‘성심당’ 이라고 적은 팻말이 비스듬히 세워져 있었어요.');
    minipage.innerHTML = extraText('5/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '10%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 7페이지
    div_append(newDiv[max_page - 7]);

    preface.innerHTML = boldText_2('대전역 앞 작은 찐빵집, 성심당의 시작');
    infor.innerHTML = normalText('장사는 잘 됐어요. 맛있다고 소문이 나면서 손님들이 꾸준하게 찾아왔어요.<br>그런데 아저씨는 매일매일 장사를 일찍 끝내고 싶어 했어요.<br>장사하고 남은 찐빵을 싸들고 갈 데가 있었기 때문이에요.<br><br>부리나케 가게문을 나선 아저씨는 빠른 걸음으로 목척교 아래를 찾아갔어요.<br>전쟁 때문에 가난하고 배고픈 사람들이 그곳에 많이 모여 살았어요.<br>아저씨는 그분들에게 남은 찐빵을 매일 나눠주셨답니다.<br><br>“얘들아 안녕? 배고프지? 찐빵 같이 먹자!”<br>“와~ 찐빵 아저씨다~~ 오늘도 오셨어!”<br><br>목척교 아래 사람들은 매일 저녁 아저씨를 기다렸어요.<br>아저씨는 ‘평생 가난한 사람들을 위해 살겠다’고 하느님께<br>약속한 것을 이렇게 실천했답니다.');
    minipage.innerHTML = extraText('6/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '6%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 8페이지
    div_append(newDiv[max_page - 8]);

    preface.innerHTML = boldText_2('튀김소보로 개발');
    infor.innerHTML = normalText('대전역 앞 천막가게 성심당이 커져서 은행동으로 이사를 왔어요.<br>진해에서 태어난 영진이가 어느덧 어른이 되어<br>성심당의 두 번째 사장님이 되었답니다.<br><br>새로 사장님이 된 임영진 아저씨는 새로운 빵을 만들고 싶었어요.<br>아저씨는 단팥빵의 달콤한 맛과 소보로의 고소한 맛,<br>그리고 도너츠의 바삭한 느낌을 한 번에 맛볼 수 있는<br>삼단합체 튀김소보로를 만들어 냈답니다.<br>튀김소보로는 인기가 너무 좋아서 지금까지 8,000만 개가 넘게 팔렸답니다.');
    minipage.innerHTML = extraText('7/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '12%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 9페이지
    div_append(newDiv[max_page - 9]);

    preface.innerHTML = boldText_2('포장빙수 개발');
    infor.innerHTML = normalText('여름철에는 성심당 팥빙수가 인기 최고였어요.<br>하루는 동네 할머니 한 분이 팥빙수를 사가겠다며 냄비를 들고 오셨어요.<br>아저씨는 안타까웠어요.<br>아무리 집이 가까워도 팥빙수를 냄비에 담아가면 금방 녹기 때문이었어요.<br><br>“팥빙수를 집에서도 먹게 하려면 어떻게 해야 할까?”<br><br>그때 아저씨의 머리 속에 병원에서 링거병을 보관하던 스티로폼 박스가 떠올랐어요.<br>그 박스를 구해다가 팥빙수를 포장한 뒤 놀이터 철봉에 매달아 실험을 해봤죠.<br>얼마 동안 팥빙수가 녹지 않을까요? 무려 3시간 동안 팥빙수가 살아 있었어요.<br>성심당 포장빙수는 순식간에 대전의 자랑거리가 됐어요.<br>서울에도 이런 건 없었거든요.');
    minipage.innerHTML = extraText('8/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '8%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 10페이지
    div_append(newDiv[max_page - 10]);

    preface.innerHTML = boldText_2('생크림 케익 개발');
    infor.innerHTML = normalText('우리나라에서 생크림 케이크를 두 번째로 만든 곳도 성심당이에요.<br>옛날 케이크는 모두 버터크림으로 만들었거든요.<br>버터 크림은 예쁜 모양을 만들기는 좋아도 느끼해서 먹을 수는 없었어요.<br>성심당 생크림 케이크는 달콤하고 부드러워서 빵과 함께 먹기가 너무 좋았어요.<br>아저씨는 ‘3분 즉석 케이크’ 라고 이름을 붙이고<br>손님이 보는 앞에서 바로 모양을 내고 포장을 했답니다.<br><br>성심당은 어느새 대전에서 최고로 크고 인기 있는 빵집이 되었어요.<br>튀김소보로와 생크림 케이크, 포장빙수 3총사가 성심당을 이끄는 대표선수였어요.<br>전국의 빵집들도 이런 성심당을 배우려고 대전에 많이 찾아왔어요.');
    minipage.innerHTML = extraText('9/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '11%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 11페이지
    div_append(newDiv[max_page - 11]);

    preface.innerHTML = boldText_2('성심당 화재');
    infor.innerHTML = normalText('그런데 2005년 1월 성심당에 큰 불이 났어요.<br>빵 만드는 공장이 모두 타버려 더 이상 빵을 만들 수 없게 됐어요.<br>성심당의 사장인 임영진 아저씨도 이제 끝이라고 생각할 정도였죠.<br>그런데 이튿날 놀라운 일이 벌어졌어요.<br>성심당 직원들이 모두 복구 작업에 나선 거예요.<br>벽에는 현수막들이 내걸렸어요.<br><br>“잿더미 속의 우리 회사 우리가 일으켜 세우자!”<br><br>모두가 한 마음으로 힘을 합치자 6일만에 다시 빵을 구워낼 수 있었어요.<br>대전시민들도 다시 살아난 성심당에게 응원의 박수를 아끼지 않았아요.');
    minipage.innerHTML = extraText('10/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '10%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 12페이지
    div_append(newDiv[max_page - 12]);

    preface.innerHTML = boldText_2('나눔의 실천');
    infor.innerHTML = normalText('성심당이 이렇게 큰 위기를 넘겨졌지만 임영진 아저씨는<br>임길순 할아버지 때부터 해오던 빵나누기를 멈추지 않았어요.<br>나누는 빵의 양도 계속 많아졌어요.<br><br>하루 장사를 하고 남은 빵은 잘 정리해서 어렵게 사는 이웃들에게 보냈어요.<br>성심당 빵은 유치원에도 가고 노인정에도 가고 대전역 광장에도 갔어요.<br>사랑이 필요한 곳이면 어디든 성심당 빵이 찾아갔답니다.');
    minipage.innerHTML = extraText('11/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '14%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 13페이지
    div_append(newDiv[max_page - 13]);

    preface.innerHTML = boldText_2('서울 롯데백화점 본점 팝업 스토어');
    infor.innerHTML = normalText('한 번은 성심당이 서울 나들이를 갔어요.<br>서울에서 가장 큰 백화점에 임시 매장을 만들고 1주일간 성심당 빵을 열심히 구워냈답니다.<br>처음에는 대전 빵집을 서울 사람들이 얼마나 알까 싶어 걱정도 많았어요.<br>하지만 걱정은 금방 환호성으로 바뀌었어요.<br><br>성심당 튀김소보로를 맛보기 위해 서울 시민들이 줄을 서기 시작한 거예요.<br>그 길이도 놀이공원만큼 길어서 한 시간 반을 넘게 기다려야<br>겨우 튀김소보로를 살 수 있을 정도였답니다.<br>덕분에 성심당은 대전뿐만 아니라 전국에서도 유명한 빵집이 되었어요.');
    minipage.innerHTML = extraText('12/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '13%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 13페이지
    div_append(newDiv[max_page - 14]);

    preface.innerHTML = boldText_2('성심당의 고향, 대전역 입점');
    infor.innerHTML = normalText('대전역에 있는 성심당은 2012년에 문을 열었어요.<br>임길순 할아버지가 대전역 광장에 천막을 치고 성심당을 시작한지 56년만이었어요.<br>임영진 아저씨는 감격했어요.<br><br>돌아가신 임길순 할아버지도 하늘에서 기뻐하실 거라고 믿었어요.<br>대전역 성심당도 처음부터 인기가 많았어요.<br><br>튀김소보로 줄이 길어서 기차 시간을 놓치는 승객도 있었고,<br>KTX를 타고 일부러 대전역에 내려서 성심당에 들렀다 가는 사람들도 많았어요.<br>성심당 빵들은 이렇게 대전역에서 KTX 타고 전국으로 퍼져나갔답니다.');
    minipage.innerHTML = extraText('13/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '10%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 15페이지
    div_append(newDiv[max_page - 15]);

    preface.innerHTML = boldText_2('성심당, 대전의 문화가 되다.');
    infor.innerHTML = normalText('성심당은 어느새 대전시민들이 가장 사랑하는 곳이 되었어요.<br>성심당이라면 어른이든 어린이든 누구나 들어가서 편안하게 시간을 보낼 수 있죠.<br><br>주말이면 다른 도시에서 KTX를 타고 성심당을 찾아오는 사람들도 많아졌어요.<br>1년 중 성심당이 가장 많이 붐비는 날이 바로 성탄절이랍니다.<br><br>이날 손님들은 성심당 케익부띠끄에서 성탄절 케이크를 구입해<br>가족들과 사랑을 나눈답니다.');
    minipage.innerHTML = extraText('14/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '13%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 16페이지
    div_append(newDiv[max_page - 16]);

    preface.innerHTML = boldText_2('교황님의 식탁을 준비하다.');
    infor.innerHTML = normalText('임길순 할아버지가 대전역 광장에서 시작한 성심당은 가톨릭 신앙 위에서 세워졌어요.<br>성심당의 ‘성심’은 거룩한 마음, 즉 예수님의 마음을 뜻한답니다.<br><br>프란치스코 교황 할아버지가 우리나라를 방문했을 때<br>성심당에서 아침과 점심 식사빵을 만들었어요.<br>하늘에 계신 임길순 할아버지가 이 장면을 봤다면 얼마나 기뻐하셨을까요?');
    minipage.innerHTML = extraText('15/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    preface.style.marginLeft = '6%';
    preface.style.marginTop = '18%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '3%';

    // 17페이지
    div_append(newDiv[max_page - 17]);

    newDiv[max_page - 17].style.backgroundSize = '100% 100%';

    infor.innerHTML = normalText('어느덧 성심당은 100년을 바라보는 빵집이 되었어요.<br>1956년 대전역 앞 작은 찐빵집으로 시작해 이제는 대전을 대표하는 큰 회사가 되었지요.<br>시대도 바뀌었고 사람도 많이 바뀌었어요.<br>그러나 그때나 지금이나 한 가지 변하지 않는 것이 있답니다.<br>바로 ‘사랑의 문화’에요.<br>빵을 통해 어려운 이웃을 돕고, 또 모든 사람들과 평화롭게 지내려는 정신입니다.<br>성심당은 오늘도 대전에서 “모든이가 다 좋게 여기는 일” 을 하려고 땀흘리고 있답니다.');
    minipage.innerHTML = extraText('16/16');

    infor.style.lineHeight = '1.5';

    minipage.style.position = 'absolute';
    minipage.style.top = '90%';
    minipage.style.left = '50%';
    infor.style.marginLeft = '6%';
    infor.style.marginTop = '9%';
    infor.style.textAlign = 'center';
}

// class 불러오기
function div_append(teDiv) {
    preface = teDiv.querySelector('.preface');
    infor = teDiv.querySelector('.infor');
    minipage = teDiv.querySelector('.minipage');
}

function normalText(text) {
    return `<span style="font-size: 1.6vw;">${text}</span>`;
}
  
function boldText(text) {
    return `<span style="font-size: 3.2vw; font-family: 'preten-black';">${text}</span>`;
}

function boldText_2(text) {
    return `<span style="font-size: 2.4vw; font-family: 'preten-black';">${text}</span>`;
}

function extraText(text) {
    return `<span style="font-size: 1.3vw; font-family: 'preten-semi';">${text}</span>`;
}