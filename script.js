const outputContainer = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");

function createProfileCard() {
  //create profile card container.
  const profileCard = document.createElement("div");
  //create classes
  profileCard.className = "profilr-card";
  //image
  const profileImage = document.createElement("img");
  profileImage.src = "./images/profileImage.jpg";
  profileImage.alt = "Profile Image";
  profileImage.id = "profileImage";
  const profileName = document.createElement("h3");
  profileName.textContent = "Rishad P Ahamed";
  const profileDescr = document.createElement("p");
  profileDescr.textContent =
    "A passionate web developer with experience in JavaScript and React";
  profileCard.appendChild(profileImage);
  profileCard.appendChild(profileName);
  profileCard.appendChild(profileDescr);
  outputContainer.appendChild(profileCard);
}

generateBtn.addEventListener("click", createProfileCard);
