const box = document.getElementById('box');
const bwidth = document.getElementById('width');
const bheight = document.getElementById('height');
const borWidth = document.getElementById('bor-width');
const myform = document.getElementById('myform');
const myform2 = document.getElementById('myform2');
const boxSizing = document.getElementById('box-sizing');
const colorModeOptions = document.getElementById('color-mode-options');
const padding = document.getElementById('padding');
//more
const colorPannel = document.querySelectorAll('#myform2 div');

const content = document.getElementById('content');
const boxContent = document.getElementById('box-content');
const keywordColors = document.getElementById('keyword-colors');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
//units
const wUnit = document.getElementById('w-unit');
const hUnit = document.getElementById('h-unit');
const bwUnit = document.getElementById('bw-unit');
const pUnit = document.getElementById('p-unit');

const renderChanges = () => {
    const colorMode = document.getElementById(colorModeOptions.value);
    box.style.width = bwidth.value + wUnit.value;
    box.style.height = bheight.value + hUnit.value;
    //box.style.borderWidth = borWidth.value + bwUnit.value;
    box.style.padding = padding.value + pUnit.value;
    box.style.border = `${borWidth.value + bwUnit.value} solid`;
    box.style.boxSizing = boxSizing.value;
    //const formDiv =formDiv ;
    colorPannel.forEach((item) => {item.style.display = "none"});
    colorMode.style.display = "block";
    switch(colorModeOptions.value) {
        case "keyword" :
            keyword();
            break;
        case "rgb" :
            rgb();
            break;
    }
    content.style.display = "none";
    if (boxContent.checked) {
        content.style.display = "block";
    }
}
const keyword = () => {
    box.style.backgroundColor = keywordColors.value;
}
const rgb = () => {
    box.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}
myform.onchange = renderChanges;
myform2.onchange = renderChanges;

renderChanges();
/*const az = () => {
    box.style.width = "90px";
    box.style.height = "90px";
    box.style.borderColor = "red";
    box.style.border = ``;
}
az();*/