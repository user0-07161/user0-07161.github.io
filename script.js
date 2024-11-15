var i = 0;
var txt = 'Congrats. You\'ve found the secret part of this Website. Now enjoy the Nyan Cat...';
var speed = 100;
const imageElement = document.createElement('img');
var nyancats = ['https://www.nyan.cat/cats/original.gif', 'https://www.nyan.cat/images/thumbs/dub.gif', 'https://www.nyan.cat/images/thumbs/GB.gif', 'https://www.nyan.cat/images/thumbs/nyandoge.gif'];
function newtab(url) {
    window.open(url);
};
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
};
function nya() {
    document.getElementById('nya').style.display = "block";
    document.getElementsByTagName("body")[0].classList.add('hidden');
    nyantext()
};
function nyantext() {
    const imageElement = document.createElement('img');
    if (i < txt.length) {
        document.getElementById("nyantext").innerHTML += txt.charAt(i);
        i++;
        setTimeout(nyantext, speed);
    } else {
        document.getElementById("nyantext").innerHTML = "";
        imageElement.src = nyancats[Math.floor(Math.random() * nyancats.length)];
        document.getElementById('nya').appendChild(imageElement);
    }
};
function typingAnimation() {
    document.getElementById('typing-text').classList.remove("noanimation");
    let index = 0;
    const interval = setInterval(function(){
        if(index === typeText.length){
            clearInterval(interval);
            return;
        }

        if (typeText.charAt(index) === '<') {
            index += 3;
            document.getElementById('typing-text').innerHTML += "<br>"
        }
        
        else {
            document.getElementById('typing-text').innerHTML += typeText.charAt(index);
        }
        index++;
        // Trigger animation or transition for slide-in elements
        document.querySelectorAll('.slide-in-element').forEach((element) => {
            element.classList.add('slide-in');
        });
    }, 15);
};

