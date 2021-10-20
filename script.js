const names = document.querySelectorAll('.name img')
let CurrentUser = names[0];
chatMenu = document.querySelector('.chat')
CurrentUser.style.border = "3px solid #fff";



let Egor = [];
let Egor_count = Number(localStorage.getItem('Egor_count'));
let Nasty = [];
let Nasty_count = Number(localStorage.getItem('Nasty_count'));
let Elisey = [];
let Elisey_count = Number(localStorage.getItem('Elisey_count'));
let Sasha = [];
let Sasha_count = Number(localStorage.getItem('Sasha_count'));
let Lesha = [];
let Lesha_count = Number(localStorage.getItem('Lesha_count'));
getLocal();
//Загрузка первого дурака
loadCurrentUser();
function sendMessage()
{
    let new_message = createMessage()
    if(new_message.innerHTML.length <= 30 && new_message.innerHTML !== "")
    {
        let img = createImage();
        chatMenu.appendChild(img);
        chatMenu.appendChild(new_message);
        //storageInput = messageCounter;
        addToCurrentUser(new_message.innerHTML);
        console.log(Egor_count);
    }
}
//Считывание текста и очищения поля с текстом
function readMessage()
{
    let gotMessage = document.querySelector('.message');
    let string = gotMessage.value;
    gotMessage.value = "";
    return string;
}

//Выбор пользователя нажатием мыши
names.forEach(name => name.addEventListener("click", click));
function click(e)
{
    CurrentUser.style.border = "3px solid #2c2c2c"
    clearCurrentScreen()
    CurrentUser = this;
    loadCurrentUser();
    this.style.border ="3px solid #fff";
}
//Отправление сообщения через Enter
document.getElementsByName('message-text')[0].addEventListener('keyup', function (data) {
    if (data.key === 'Enter') {
        sendMessage();
    }
})
//
function getLocal()
{
    if (Egor_count)
    {
        for(let i = 0; i < Egor_count; i++)
        {
            Egor.push(localStorage.getItem("Egor" + i.toString()));
        }
    }
    if (Lesha_count)
    {
        for(let i = 0; i < Lesha_count; i++)
        {
            Lesha.push(localStorage.getItem("Lesha" + i.toString()));
        }
    }
    if (Nasty_count)
    {
        for(let i = 0; i < Nasty_count; i++)
        {
            Nasty.push(localStorage.getItem("Nasty" + i.toString()));
        }
    }
    if (Elisey_count)
    {
        for(let i = 0; i < Elisey_count; i++)
        {
            Elisey.push(localStorage.getItem("Elisey" + i.toString()));
        }
    }
    if (Sasha_count)
    {
        for(let i = 0; i < Sasha_count; i++)
        {
            Sasha.push(localStorage.getItem("Sasha" + i.toString()));
        }
    }
}
//Очистить все сообщения
function clearAll()
{
    localStorage.clear();
    while (chatMenu.firstChild) {
        chatMenu.removeChild(chatMenu.lastChild);
    }
    Egor_count = 0;
    Lesha_count = 0;
    Nasty_count = 0;
    Sasha_count = 0;
    Elisey_count = 0;
    Egor = [];
    Lesha = [];
    Sasha = [];
    Elisey = [];
    Nasty = [];
}
function clearCurrentScreen() {
    while (chatMenu.firstChild) {
        chatMenu.removeChild(chatMenu.lastChild);
    }
}
function loadCurrentUser()
{
    switch (CurrentUser.alt)
    {
        case "Nasty": load(Nasty);
            break;
        case "Elisey": load(Elisey);
            break;
        case "Sasha": load(Sasha);
            break;
        case "Lesha": load(Lesha);
            break;
        case "Egor": load(Egor);
            break;
    }
}
function load(user){
    for(let i = 0; i < user.length; i++)
    {
        let img = createImage()
        let string = user[i];
        let new_message = document.createElement("div");
        new_message.setAttribute("class", "send_message");
        new_message.innerHTML = string;
        chatMenu.appendChild(img);
        chatMenu.appendChild(new_message);
    }
}
function createMessage()
{
    let new_message = document.createElement("div");
    new_message.setAttribute("class", "send_message")
    new_message.innerHTML = readMessage();
    return new_message;
}
function createImage()
{
    let img = document.createElement("img");
    img.setAttribute("src", "img/iam.jpg");
    img.setAttribute("class", "pict");
    return img;
}
function addToCurrentUser(text)
{
    switch (CurrentUser.alt)
    {
        case "Egor":
            Egor.push(text);
            localStorage.setItem("Egor" + Egor_count.toString(), text);
            Egor_count++;
            localStorage.setItem("Egor_count",Egor_count.toString());
            break;
        case "Nasty":
            Nasty.push(text);
            localStorage.setItem("Nasty" + Nasty_count.toString(), text);
            Nasty_count++;
            localStorage.setItem("Nasty_count",Nasty_count.toString());
            break;
        case "Elisey":
            Elisey.push(text);
            localStorage.setItem("Elisey" + Elisey_count.toString(), text);
            Elisey_count++;
            localStorage.setItem("Elisey_count", Elisey_count.toString());
            break;
        case "Sasha":
            Sasha.push(text);
            localStorage.setItem("Sasha" + Sasha_count.toString(), text);
            Sasha_count++;
            localStorage.setItem("Sasha_count", Sasha_count.toString());
            break;
        case "Lesha":
            Lesha.push(text);
            localStorage.setItem("Lesha" + Lesha_count.toString(), text);
            Lesha_count++;
            localStorage.setItem("Lesha_count", Lesha_count.toString());
            break;
    }
}