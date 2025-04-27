function openModal(imgElement) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

const faces = [
    'images/face1.png',
    'images/face2.png',
    'images/face3.png',
    'images/face4.png'
  ];
  
  const messages = [
    "٩(ˊᗜˋ )و",
    "The color 'burgundy' reminds me of burgers! ˙ᴗ˙",
    "Bellpeppers have a strange texture.",
    "Fun fact: There's a caterpillar that has a :3 face, it's called an emperor caterpillar!",
    "Some people sneeze when they walk outside(because of the sun).",
    "I love fried lotus root "
  ];
  const randomFace = Math.floor(Math.random() * faces.length);
const randomMessage = Math.floor(Math.random() * messages.length);

document.getElementById('miniMe').src = faces[randomFace];
document.querySelector('.speech-bubble').textContent = messages[randomMessage];

  