const outputContainer = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");

function createProfileCard() {
  //create profile card container.
  const profileCard = document.createElement("div");
  //create classes
  profileCard.className = "profilr-card";
  //image
  const profileImage = document.createElement("img");
  profileImage.src =
    "https://imgs.search.brave.com/FtOFcbB-uwhHRdc50cUcU9RBrTpOaYB43DAFZ1v84wQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzQ3Lzg0LzU0/LzM2MF9GXzc0Nzg0/NTQ4M19BVzVZZG9z/b2xia2JpV1lFRGQ4/VHVvaEMwb3pCOFFV/aC5qcGc";
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
