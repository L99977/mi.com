let swiperimg = document.querySelectorAll('.swiperimg');
let pointArr = document.querySelectorAll('.point li');
console.log(swiperimg);
let index = 0;

// 自动轮播
function changeOpacity() {
    swiperimg[index].style.opacity = '0';
    pointArr[index].style.borderColor = 'hsla(0,0%,100%,.3)';
    pointArr[index].style.background = 'rgba(0,0,0,.4)';
    index++;
    if (index == 5) {
        index = 0;
    }
    swiperimg[index].style.opacity = '1';
    pointArr[index].style.borderColor = 'rgba(0,0,0,.4)';
    pointArr[index].style.background = 'hsla(0,0%,100%,.4)';
}
let timer = setInterval(changeOpacity, 4000)

// 点击切换
let pre = document.querySelector('.pre');
let next = document.querySelector('.next');
next.onclick = changeOpacity;
pre.onclick = function () {
    swiperimg[index].style.opacity = '0';
    pointArr[index].style.borderColor = 'hsla(0,0%,100%,.3)';
    pointArr[index].style.background = 'rgba(0,0,0,.4)';
    index--;
    if (index == -1) {
        index = 4;
    }
    swiperimg[index].style.opacity = '1';
    pointArr[index].style.borderColor = 'rgba(0,0,0,.4)';
    pointArr[index].style.background = 'hsla(0,0%,100%,.4)';
}

// 点击小圆点切换 
pointArr.forEach((item) => {
    item.onclick = function () {
        let newIndex = this.dataset.index;
        swiperimg[newIndex].style.opacity = '1';
        pointArr[newIndex].style.borderColor = 'rgba(0,0,0,.4)';
        pointArr[newIndex].style.background = 'hsla(0,0%,100%,.4)';
        swiperimg[index].style.opacity = '0';
        pointArr[index].style.borderColor = 'hsla(0,0%,100%,.3)';
        pointArr[index].style.background = 'rgba(0,0,0,.4)';
        index = newIndex;
    }
})

// 鼠标移入移出 
let arr = [];
arr.push(pre);
arr.push(next);
console.log(arr);
arr.forEach(item => {
    handleTimer(item);
})

swiperimg.forEach(item => {
    handleTimer(item);
})

function handleTimer(item) {
    item.onmouseover = function () {
        clearInterval(timer);
        console.log('停止自动轮播');
    }
    item.onmouseout = function () {
        timer = setInterval(changeOpacity, 4000);
        console.log('开始自动轮播');
    }
}