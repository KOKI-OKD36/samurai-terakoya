//======== 前略 ========

// HTML要素をCSSセレクタで取得し、中身を出力する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// HTML要素をCSSセレクタで取得し、中身を出力する（すべて）
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

const li =document.createElement('li');

li.textContent = 'JavaScriptで新しく作成したリスト3';

document.querySelector('ul').appendChild(li);