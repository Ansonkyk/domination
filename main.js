// Part One
//1
function strikethrough(){
    const list = document.querySelectorAll('#arguments li');
    list[0].style.textDecoration = 'line-through';

}
//2
strikethrough()
//3. 
function images (id, url){
    const target = document.querySelector('#' + id);
    target.src = url;
}
//4. 
images ('image-1', 'https://images4.alphacoders.com/123/thumb-1920-123128.jpg')
    
images ('image-2', 'https://images2.alphacoders.com/257/257822.jpg')
    
images ('image-3', 'https://images.idgesg.net/images/article/2019/03/c-plus-plus_code-100790020-large.jpg?auto=webp&quality=85,70')
    
function slash (){
    document.querySelector('#lines').style.textDecoration = 'line-through';
}
slash(); 
    
//5.
function removal(){
    let list = document.querySelector('#arguments')
    
    if (list.hasChildNodes()) {
    list.removeChild(list.lastElementChild);
      }
}
//6.
removal();
removal();
//7.
function twoStrings(sizeOfFont,id){
    const target = document.querySelector('#' + id);
    return target.style.fontSize = sizeOfFont;
}
//8.
twoStrings('60px', 'lines');


// Part Two - DOM Elements as Function Parameters
//1.
function imgAdder(element){
    document.querySelector('#arguments').appendChild(element);
}
//2.
const image = document.createElement('img');
image.src = 'https://www.tailorbrands.com/wp-content/uploads/2021/01/apple-evolution-thumbnail-1024x640.jpg'
    
imgAdder(image);
//3.  
function thirtypixImage(imageElement){
    const pic = document.querySelector(imageElement);
    pic.style.height = '30px';
}
//4.
thirtypixImage('#image-2');
//5.
function makeClass (element){
    const anyElement = document.querySelector(element);
    anyElement.classList.add("invisible");
}
//6.
makeClass ('#p1');
    
//
//Part Three - Creating DOM Elements
    
    
function words (text){
    const ele = document.createElement('li')
    imgAdder(ele)
    return ele.innerText = text
}
words ('Testinggggggg');
    
function head (headSize, words){
    const newHeader = document.createElement('h3')
    imgAdder(newHeader)
    newHeader.style.fontSize = headSize
    newHeader.innerText = words
    return newHeader
}
    
head('50px', 'Done!!!!');
    
    