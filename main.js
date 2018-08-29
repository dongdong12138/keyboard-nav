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
    'Q': 'www.qq.com/',
    'W': 'weibo.com/',
    'E': 'mail.163.com/',
    'R': 'www.renren.com/',
    'T': 'www.taptap.com/',
    'Y': 'www.yahoo.com/',
    'U': 'www.uc.cn/',
    'I': 'www.iqiyi.com/',
    'O': 'www.oppo.com/cn/',
    'P': 'www.apple.com/',
    'A': 'www.alibaba.com/',
    'S': 'www.suning.com/',
    'D': 'book.dangdang.com/',
    'F': 'www.ifeng.com/',
    'G': 'github.com/',
    'H': 'www.firefox.com.cn/',
    'J': 'www.jd.com/',
    'K': 'www.kugou.com/',
    'L': 'lol.qq.com/',
    'Z': 'www.zhihu.com/',
    'X': 'www.panda.tv/',
    'C': 'cf.qq.com/',
    'V': 'code.visualstudio.com/',
    'B': 'www.bilibili.com/',
    'N': 'www.nipic.com/',
    'M': 'www.imooc.com/'
};

// 取出localStorage中的zzz对应的hash，并存到hash中
var hashInlocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');
if (hashInlocalStorage) {
    hash = hashInlocalStorage;
}

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
    var kbd = document.createElement('kbd');    // 生成kbd

    // 创建img
    var img = document.createElement('img');
    
    span.textContent = newArr[i]['text'];
    if (newArr[i]['text2']) {
        kbd.textContent += newArr[i]['text2'];
    }

    li.appendChild(span);
    li.appendChild(kbd);

    // 把字母按键的kbd替换成img
    if (i >= 15 && i <= 24 || i >= 29 && i <= 37 || i >= 42 && i <= 48) {
        
        li.replaceChild(img, kbd);
        var txt = img.previousElementSibling.textContent;
        if (hash[txt]) {
            img.src = 'http://' + hash[txt] + 'favicon.ico';
        } else {
            img.src = '//i.loli.net/2018/08/29/5b863395bca68.png';
        }
        img.onerror = function (event) {
            event.target.src = '//i.loli.net/2018/08/29/5b863395bca68.png';
        };


        var button = document.createElement('button');
        button.textContent = '编辑';
        button.id = li.firstElementChild.textContent;
        button.onclick = function (event) {

            

            var button2 = event['target'];
            var img2 = button2.previousSibling;
            var key = button2['id'];
            var webSite = prompt('请输入网址');
            hash[key] = webSite;    // hash 变更
            
            img2.src = 'http://' + webSite + '/favicon.ico';
            img2.onerror = function (event) {
                event.target.src = '//i.loli.net/2018/08/29/5b863395bca68.png';
                
            };
            localStorage.setItem('zzz', JSON.stringify(hash)); 

            
            

        // img2.src = 'http://' + webSite + '/favicon.ico';
        };
        li.appendChild(button);
        

        
        // img.src = 'http://' + hash[txt] + 'favicon.ico';
        
    }
    
    
    ol.appendChild(li);

    

}





main.appendChild(ol);

document.onkeypress = function (event) {
    // hash[event['key']] 按键对应的网址
    console.log(event);
    var key = event['key'];
    key = key.toUpperCase();
    window.open('http://' + hash[key], '_blank');
};