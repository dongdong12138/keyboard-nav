// 初始化
var hashA = init();
var keyboard = hashA['keyboard']
var hash = hashA['hash']

// 将所有按键数据放到一个新的数组中
var newArr = createNewArray()

// 生成键盘
var ol = document.createElement('ol');  // 生成ol
ol.className = 'keyboard';

for (var i = 0; i < 64; i++) {
    // 生成64个li
    var li = document.createElement('li');  

    // 判断 li
    decideLi()

    // 生成span
    var span = document.createElement('span');    
    span.textContent = newArr[i]['text'];

    // 生成kbd
    var kbd = document.createElement('kbd');    

    if (newArr[i]['text2']) {
        kbd.textContent += newArr[i]['text2'];
    }

    li.appendChild(span);
    li.appendChild(kbd);

    // 创建img
    var img = document.createElement('img');
    // 把字母按键的kbd替换成img
    if (i >= 15 && i <= 24 || i >= 29 && i <= 37 || i >= 42 && i <= 48) {

        li.replaceChild(img, kbd);
        var txt = img.previousElementSibling.textContent;
        if (hash[txt]) {
            img.src = 'http://www.' + hash[txt] + '/favicon.ico';
        } else {
            img.src = '//i.loli.net/2018/08/29/5b863395bca68.png';
        }
        img.onerror = function (event) {
            event.target.src = '//i.loli.net/2018/08/29/5b863395bca68.png';
        };

        // 创建 button
        var button = createButton('button')

        li.appendChild(button);
    }

    ol.appendChild(li);
}

main.appendChild(ol);

// 跳转到我的知乎
linktoZhihu('a')

// 按下按键跳转到相应网站
addPress()

// 给按键增加鼠标点击事件
addClick('li > img')




// 工具函数
function init() {
    // 保存键盘原始数据
    var keyboard = {
        '0': [
            { text: '~', text2: '`', keyCode: '0' },
            { text: '!', text2: '1', keyCode: '1' },
            { text: '@', text2: '2', keyCode: '2' },
            { text: '#', text2: '3', keyCode: '3' },
            { text: '$', text2: '4', keyCode: '4' },
            { text: '%', text2: '5', keyCode: '5' },
            { text: '^', text2: '6', keyCode: '6' },
            { text: '&', text2: '7', keyCode: '7' },
            { text: '*', text2: '8', keyCode: '8' },
            { text: '(', text2: '9', keyCode: '9' },
            { text: ')', text2: '0', keyCode: '10' },
            { text: '_', text2: '-', keyCode: '11' },
            { text: '+', text2: '=', keyCode: '12' },
            { text: 'Backspace', keyCode: '13' }
        ],
        '1': [
            { text: 'Tab', keyCode: '14' },
            { text: 'Q', keyCode: '15' },
            { text: 'W', keyCode: '16' },
            { text: 'E', keyCode: '17' },
            { text: 'R', keyCode: '18' },
            { text: 'T', keyCode: '19' },
            { text: 'Y', keyCode: '20' },
            { text: 'U', keyCode: '21' },
            { text: 'I', keyCode: '22' },
            { text: 'O', keyCode: '23' },
            { text: 'P', keyCode: '24' },
            { text: '{', text2: '[', keyCode: '25' },
            { text: '}', text2: ']', keyCode: '26' },
            { text: '|', text2: '\\', keyCode: '27' }
        ],
        '2': [
            { text: 'Caps lock', keyCode: '28' },
            { text: 'A', keyCode: '29' },
            { text: 'S', keyCode: '30' },
            { text: 'D', keyCode: '31' },
            { text: 'F', keyCode: '32' },
            { text: 'G', keyCode: '33' },
            { text: 'H', keyCode: '34' },
            { text: 'J', keyCode: '35' },
            { text: 'K', keyCode: '36' },
            { text: 'L', keyCode: '37' },
            { text: ':', text2: ';', keyCode: '38' },
            { text: '"', text2: '\'', keyCode: '39' },
            { text: 'Enter', keyCode: '40' }
        ],
        '3': [
            { text: 'Shift', keyCode: '41' },
            { text: 'Z', keyCode: '42' },
            { text: 'X', keyCode: '43' },
            { text: 'C', keyCode: '44' },
            { text: 'V', keyCode: '45' },
            { text: 'B', keyCode: '46' },
            { text: 'N', keyCode: '47' },
            { text: 'M', keyCode: '48' },
            { text: '<', text2: ',', keyCode: '49' },
            { text: '>', text2: '.', keyCode: '50' },
            { text: '?', text2: '/', keyCode: '51' },
            { text: 'Shift', keyCode: '52' }
        ],
        '4': [
            { text: 'Ctrl', keyCode: '53' },
            { text: 'Fn', keyCode: '54' },
            { text: 'Win', keyCode: '55' },
            { text: 'Alt', keyCode: '56' },
            { text: 'Space', keyCode: '57' },
            { text: 'Alt', keyCode: '58' },
            { text: 'Ctrl', keyCode: '59' },
            { text: '↑', keyCode: '60' },
            { text: '←', keyCode: '61' },
            { text: '↓', keyCode: '62' },
            { text: '→', keyCode: '63' }
        ],
        'length': 5
    };
    // 保存按键对应的网址
    var hash = {
        'Q': 'qq.com',
        'W': 'weibo.com',
        'E': '163.com',
        'R': 'renren.com',
        'T': 'taptap.com',
        'Y': 'yahoo.com',
        'U': 'uc.cn',
        'I': 'iqiyi.com',
        'O': 'oppo.com/cn',
        'P': 'apple.com',
        'A': 'alibaba.com',
        'S': 'suning.com',
        'D': 'book.dangdang.com',
        'F': 'ifeng.com',
        'G': 'gaokao.com',
        'H': 'firefox.com.cn',
        'J': 'jd.com',
        'K': 'kugou.com',
        'L': 'lol.qq.com',
        'Z': 'zhihu.com',
        'X': 'panda.tv',
        'C': 'cf.qq.com',
        'V': 'code.visualstudio.com',
        'B': 'bilibili.com',
        'N': 'nipic.com',
        'M': 'imooc.com'
    };
    // 取出localStorage中的zzz对应的hash，并存到hash中
    var hashInlocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');
    if (hashInlocalStorage) {
        hash = hashInlocalStorage;
    }
    return {
        'keyboard': keyboard,
        'hash': hash
    }
}

function createNewArray() {
    var newArr = [];
    // 遍历原始数据
    for (var key in keyboard) {
        for (var j = 0; j < keyboard[key].length; j++) {
            newArr.push(keyboard[key][j]);
        }
    }
    return newArr
}

function stopBubble(e) {
    //如果提供了事件对象，则这是一个非IE浏览器 
    if (e && e.stopPropagation)
        //因此它支持W3C的stopPropagation()方法 
        e.stopPropagation();
    else
        //否则，我们需要使用IE的方式来取消事件冒泡 
        window.event.cancelBubble = true;
}

function addClick(element) {
    var imgArr = document.querySelectorAll(element)
    for (var i = 0; i < imgArr.length; i++) {
        imgArr[i].parentElement.onclick = function () {
            var key = this.firstElementChild.textContent
            window.open('http://' + hash[key], '_blank')
        }
    }
}

function addPress() {
    document.onkeypress = function (event) {
        var key = event['key'];
        key = key.toUpperCase();
        window.open('http://' + hash[key], '_blank');
    };
}

function linktoZhihu(element) {
    var zhihu = document.createElement(element);
    zhihu.textContent = '知 乎';
    zhihu.href = 'https://www.zhihu.com/people/dongdong12138/posts';
    zhihu.target = '_blank';
    zhihu.title = '前往我的知乎';
    header.appendChild(zhihu);
}

function createButton(element) {
    var button = document.createElement(element);
    button.textContent = '编辑';
    button.id = li.firstElementChild.textContent;
    button.onclick = function (event) {
        var button2 = event['target'];
        var img2 = button2.previousSibling;
        var key = button2['id'];
        var webSite = prompt('请输入新网址，如："qq.com"');
        if (webSite !== null && webSite !== '') {
            hash[key] = webSite;    // hash 变更
            img2.src = 'http://www.' + webSite + '/favicon.ico';
            img2.onerror = function (event) {
                event.target.src = '//i.loli.net/2018/08/29/5b863395bca68.png';

            };
        }
        localStorage.setItem('zzz', JSON.stringify(hash));
        stopBubble(this)
    };
    return button
}

function decideLi() {
    if (i === 13 || i >= 53 && i <= 59) {
        li.className = 'special';
    }
    if (i === 14) {
        li.className = 'special tab';
    }
    if (i === 28) {
        li.className = 'special caps';
    }
    if (i === 40) {
        li.className = 'special enter';
    }
    if (i === 41 || i === 52) {
        li.className = 'special shift';
    }
    if (i >= 53 && i <= 59) {
        li.className = 'special tall';
    }
    if (i === 56 || i === 58) {
        li.className = 'special tall alt';
    }
    if (i === 57) {
        li.className = 'special tall space';
    }
    if (i >= 60 && i <= 63) {
        li.className = 'arrow';
    }
    if (i === 60) {
        li.className = 'arrow up';
    }
    if (i === 62) {
        li.className = 'arrow down';
    }
}