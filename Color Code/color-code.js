let colorGenerator= () =>{
    let color=Math.floor(Math.random()*16777215);
    let code="#" + color.toString(16);
    document.body.style.backgroundColor = code;
    document.getElementsByTagName('h4')[0].innerText = code;
    navigator.clipboard.writeText(code);
    
};
document.getElementById("btn").addEventListener("click",colorGenerator);
colorGenerator();