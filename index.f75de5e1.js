"use strict";
const clickHandler = (e)=>{
    e.preventDefault();
    const largeImg = document.getElementById("largeImg");
    if (e.target.tagName === "IMG") largeImg.src = e.target.parentElement.href;
    if (e.target.tagName === "A") largeImg.src = e.target.href;
};
const smallImg = document.getElementById("thumbs");
smallImg.addEventListener("click", clickHandler);

//# sourceMappingURL=index.f75de5e1.js.map
