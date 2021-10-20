const names = document.querySelectorAll('.name img')
let CurrentUser = names[0];
chatMenu = document.querySelector('.chat')
CurrentUser.style.border = "3px solid #fff";
function sendMessage()
{
    let new_message = document.createElement("div");
    new_message.setAttribute("class", "send_message")
    new_message.innerHTML = readMessage();
    chatMenu.appendChild(new_message);
}
//Считывание сообщений
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
    CurrentUser = this;
    console.log(CurrentUser);
    this.style.border ="3px solid #fff";
}
//Отправление сообщения через Enter
document.getElementsByName('message-text')[0].addEventListener('keyup', function (data) {
    if (data.key === 'Enter') {
        sendMessage();
    }
})