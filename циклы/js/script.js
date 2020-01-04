document.querySelector('.b1').onclick = function () {
    let out = document.querySelector('.out');
    let res = '';
    let k = 10;
    for (let i = 0; i <= 21; i++) {
        if (i % 2 == 0) {
            res += i / 2;
        } else {
            while (k >= 0) {
                res += `_${k}_`;
                k--;
                break;
            }
        }
    }
    out.innerHTML = res;
    console.log(res);
}

document.querySelector('.b2').onclick = function () {
    let out = document.querySelector('.out');
    let res = '';
    for (let i = 0, k = 10; i <= 10 && k >= 0; i++ , k--) {
        res += `${i}-${k}-`;
    }
    out.innerHTML = res;
    console.log(res);
}

