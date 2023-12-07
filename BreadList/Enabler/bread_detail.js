(function () {
    const leftColumns = document.querySelectorAll(".detail-left-font");
    const rightColumns = document.querySelectorAll(".detail-right-font");

    // 초기 높이 값을 저장할 변수
    let maxHeight = [];

    // 각 요소의 높이를 계산하고 가장 큰 높이를 찾음
    leftColumns.forEach((leftColumn, index) => {
        const rightColumn = rightColumns[index];
        const leftHeight = leftColumn.offsetHeight;
        const rightHeight = rightColumn.offsetHeight;

        // 두 열 중에서 높이가 큰 값을 찾음
        const columnMaxHeight = Math.max(leftHeight, rightHeight);

        // 최대 높이 갱신
        maxHeight[index] = columnMaxHeight;
    });

    leftColumns.forEach((leftColumn, index) => {
        leftColumn.style.height = `${maxHeight[index]}px`;
    });
    rightColumns.forEach((rightColumn, index) => {
        rightColumn.style.height = `${maxHeight[index]}px`;
    });
})();