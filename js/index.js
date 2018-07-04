//const link = document.querySelector('a');
//link.textContent = 'MDN';
//link.href = 'https://developer.mozilla.org';

//const links = document.querySelectorAll('a');
//links.forEach( link => {
//    link.textContent = 'MDN';
//    link.href = 'https://developer.mozilla.org';
//} )

const links1 = document.querySelectorAll('a');
links1[0].textContent = 'MDN';
links1[0].href = 'https://developer.mozilla.org';
links1[1].textContent = 'Google';
links1[1].href = 'https://developer.mozilla.org';
links1[2].textContent = 'Microsoft';
links1[2].href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');
for (let i = 0; i < 100; i++){
    const para = document.createElement('p');
    para.textContent = 'Some text' + i;
    sect.appendChild(para);
}
const text = document.createTextNode('- the premier source for web development knowledge');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

//linkPara.parentNode.removeChild(linkPara);

//linkPara.style.color = 'white';
//linkPara.style.backgroundColor = 'black';
// linkPara.style.padding = '10px';
// linkPara.style.width = '250px';
// linkPara.style.textAlign = 'center';
linkPara.classList.add('selected');