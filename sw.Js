/* =========================
   TalkLink - Basic JS (Fixed)
   ========================= */ 

/* عناصر الصفحة */
const nameInput = document.querySelector('input[type="text"]');
const messageInput = document.querySelector('textarea');
const sendButton = document.querySelector('button');
const messagesBox = document.getElementById('messages');

/* تخزين الاسم */
let username = localStorage.getItem("talklink_name");

if (username) {
  nameInput.value = username;
}

/* عند الضغط على زر Send */
sendButton.addEventListener("click", function () {

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || message === "") {
    alert("Please enter your name and a message");
    return;
  }

  /* حفظ الاسم */
  localStorage.setItem("talklink_name", name);

  /* إنشاء رسالة */
  const msgDiv = document.createElement("div");
  const msgP = document.createElement("p");

  msgP.innerHTML = `<strong>${name}:</strong> ${message}`;

  msgDiv.appendChild(msgP);
  messagesBox.appendChild(msgDiv);

  /* تفريغ خانة الرسالة */
  messageInput.value = "";
});
