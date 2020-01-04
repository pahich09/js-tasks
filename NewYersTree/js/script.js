document.querySelector('.b1').onclick = function () {
    let out = document.querySelector('.out');
    let res = '';
    let leftSide = 10;
    let rightSide = 10;

    for (let i = 0; i < 10; i++) {
        let randomPos = Math.ceil(Math.random() * 20);

        for (let k = 0; k < 21; k++) {
            if (k < leftSide || k > rightSide) {
                res += '&nbsp;';
            } else if (i == 0) {
                res += 'о';
            } else {
                if (k == randomPos) {
                    res += 'o';
                } else res += '*';
            }
        }
        leftSide--;
        rightSide++;
        res += "<br>"

    }
    out.innerHTML = res;
}

