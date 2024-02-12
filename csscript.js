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
const colorPannel = document.querySelectorAll('#myform2 .color-m');
const content = document.getElementById('content');
const boxContent = document.getElementById('box-content');
const keywordColors = document.getElementById('keyword-colors');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
//backgroung
const backgroundOptions = document.getElementById('background');
const useBachground = document.getElementById('use-background');
const backgroundModes = document.querySelectorAll('#myform2 .background-m');
const bgUrl = document.getElementById('bg-url');
const lgAngle = document.getElementById("lg-angle");
const lgColors = Array.from(document.querySelectorAll('.lg-cs'));
const colorCount = document.getElementById('color-count');
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
    backgroundModes.forEach(item => item.style.display = "none");
    if (useBachground.checked) {
        applyBackground(backgroundOptions.value);
    }
}
const keyword = () => {
    box.style.backgroundColor = keywordColors.value;
}
const rgb = () => {
    box.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}
const applyBackground = (backMode) => {
    
    document.getElementById(backMode).style.display = "block";
    switch (backMode) {
        case "url":
            url();
            break;
        case "linear-gradient":
            linearGradient(Number(colorCount.value));
            break;
    }
}
const url = () => {
    if (!bgUrl.value == ""){
        box.style.background = 'yellow'//bgUrl.value;
    }
}
const linearGradient = (clrs) => {
    
    lgColors.forEach(item => item.style.display = "none");
    document.querySelectorAll('.lg-color').forEach(item => {
       item.style.display = "none"; 
    });
    for (let i = 0; i < clrs; i++) {
        lgColors[i].style.display = "block";
        let myMode = document.getElementById(`lg-clr-mode${String(i + 1)}`).value;
        document.getElementById(myMode + String(i + 1)).style.display = "block";
        
    }
    applyLg(clrs);
}
const applyLg = (cls) => {
    let colors = "";
    for (let j = 0; j < cls; j++) {
        let myColor = document.getElementById('lg-kw-clr' + String(j + 1)).value;
        colors += ", ";
        colors += myColor;
    }
    box.style.background = `linear-gradient(${lgAngle.value}deg${colors}`;//document.getElementById("lg-kw-clr1").value}, ${document.getElementById('lg-kw-clr2').value})`;
}

myform.onchange = renderChanges;
myform2.onchange = renderChanges;

renderChanges();