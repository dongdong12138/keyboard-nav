// 保存键盘原始数据
var keyboard = {
    '0': [
        {text: '~', text2: '`', keyCode: '0'},
        {text: '!', text2: '1', keyCode: '1'},
        {text: '@', text2: '2', keyCode: '2'},
        {text: '#', text2: '3', keyCode: '3'},
        {text: '$', text2: '4', keyCode: '4'},
        {text: '%', text2: '5', keyCode: '5'},
        {text: '^', text2: '6', keyCode: '6'},
        {text: '&', text2: '7', keyCode: '7'},
        {text: '*', text2: '8', keyCode: '8'},
        {text: '(', text2: '9', keyCode: '9'},
        {text: ')', text2: '0', keyCode: '10'},
        {text: '_', text2: '-', keyCode: '11'},
        {text: '+', text2: '=', keyCode: '12'},
        {text: 'Backspace', keyCode: '13'}
    ],
    '1': [
        {text: 'Tab', keyCode: '14'},
        {text: 'Q', keyCode: '15'},
        {text: 'W', keyCode: '16'},
        {text: 'E', keyCode: '17'},
        {text: 'R', keyCode: '18'},
        {text: 'T', keyCode: '19'},
        {text: 'Y', keyCode: '20'},
        {text: 'U', keyCode: '21'},
        {text: 'I', keyCode: '22'},
        {text: 'O', keyCode: '23'},
        {text: 'P', keyCode: '24'},
        {text: '{', text2: '[', keyCode: '25'},
        {text: '}', text2: ']', keyCode: '26'},
        {text: '|', text2: '\\', keyCode: '27'} 
    ],
    '2': [
        {text: 'Caps lock', keyCode: '28'},
        {text: 'A', keyCode: '29'},
        {text: 'S', keyCode: '30'},
        {text: 'D', keyCode: '31'},
        {text: 'F', keyCode: '32'},
        {text: 'G', keyCode: '33'},
        {text: 'H', keyCode: '34'},
        {text: 'J', keyCode: '35'}, 
        {text: 'K', keyCode: '36'},
        {text: 'L', keyCode: '37'},
        {text: ':', text2: ';', keyCode: '38'},
        {text: '"', text2: '\'', keyCode: '39'},
        {text: 'Enter', keyCode: '40'}
    ],
    '3': [
        {text: 'Shift', keyCode: '41'},
        {text: 'Z', keyCode: '42'},
        {text: 'X', keyCode: '43'},
        {text: 'C', keyCode: '44'},
        {text: 'V', keyCode: '45'},
        {text: 'B', keyCode: '46'},
        {text: 'N', keyCode: '47'},
        {text: 'M', keyCode: '48'},
        {text: '<', text2: ',', keyCode: '49'},
        {text: '>', text2: '.', keyCode: '50'},
        {text: '?', text2: '/', keyCode: '51'},
        {text: 'Shift', keyCode: '52'}
    ],
    '4': [
        {text: 'Ctrl', keyCode: '53'},
        {text: 'Fn', keyCode: '54'},
        {text: 'Win', keyCode: '55'},
        {text: 'Alt', keyCode: '56'},
        {text: 'Space', keyCode: '57'},
        {text: 'Alt', keyCode: '58'},
        {text: 'Ctrl', keyCode: '59'},
        {text: '↑', keyCode: '60'},
        {text: '←', keyCode: '61'},
        {text: '↓', keyCode: '62'},
        {text: '→', keyCode: '63'}
    ],
    'length': 5 
};

// 保存按键对应的网址
var hash = {
    'q': 'www.qq.com/',
    'w': 'www.chinaw3c.org/',
    'e': 'www.ele.me/home/',
    'r': '',
    't': 'www.taptap.com/',
    'y': 'www.youku.com/',
    'u': 'www.uc.cn/',
    'i': 'www.iqiyi.com/',
    'o': '',
    'p': '',
    'a': 'www.alibaba.com/',
    's': '',
    'd': '',
    'f': '',
    'g': 'www.google.com.hk/',
    'h': '',
    'j': '',
    'k': '',
    'l': '',
    'z': 'www.zhihu.com/',
    'x': '',
    'c': '',
    'v': '',
    'b': 'www.bilibili.com/',
    'n': '',
    'm': 'www.imooc.com/'
};

// 将所有按键数据放到一个新的数组中
var newArr = [];
// 遍历原始数据
for (var key in keyboard) {
//  console.log(keyboard[key]);
 for (var j = 0; j < keyboard[key].length; j ++) {
    // keyboard[key][j] 每一个按键对象
    // console.log(keyboard[key][j]);
    newArr.push(keyboard[key][j]);
 }       
}



// 生成键盘
var ol = document.createElement('ol');  // 生成ol
ol.className = 'keyboard';


for (var i = 0; i < 64; i ++) {
    var li = document.createElement('li');  // 生成64个li
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
    var span = document.createElement('span');  // 生成span
    var kbd = document.createElement('kbd');
    span.textContent = newArr[i]['text'];
    if (newArr[i]['text2']) {
        kbd.textContent += newArr[i]['text2'];
    }
    li.appendChild(span);
    li.appendChild(kbd);
    
    ol.appendChild(li);

}









main.appendChild(ol);