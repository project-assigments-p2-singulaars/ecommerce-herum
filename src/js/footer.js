// const { createExpect } = require("vitest");

function generateFooter () {
    const bodyElement = document.body;

    let footerElement = document.createElement("footer");

    let footerTitle = document.createElement("p");
    footerTitle.textContent = "HERUM";
    footerTitle.id = "footer-herum";

    footerElement.appendChild(footerTitle);

    let footerContainer = document.createElement("div");
    footerContainer.id = "footer-herum-general";

    let footerLeftContainer = document.createElement("div");
    footerLeftContainer.id = "footer-herum-fb-instagram";
    footerLeftContainer.classList.add("footer-contact-section");

    let socialMediaTitle = document.createElement("p");
    socialMediaTitle.textContent = "Social Media";

    let socialMediaLine = document.createElement("hr");

    footerLeftContainer.append(socialMediaTitle, socialMediaLine);

    
    // Social Links
    //Instagram
    let footerInstagramContainer = document.createElement("div");
    footerInstagramContainer.classList.add("footer-social-container");

    let instagramLogo = document.createElement("img");
    instagramLogo.src = "../img/instagram 2.svg";
    instagramLogo.alt = "Instagram logo";

    let instagramLink = document.createElement("a");
    instagramLink.href = "";
    instagramLink.textContent = "@herum";

    footerInstagramContainer.append(instagramLogo, instagramLink);

    //Facebook
    let footerFacebookContainer = document.createElement("div");
    footerFacebookContainer.classList.add("footer-social-container");

    let facebookLogo = document.createElement("img");
    facebookLogo.src = "../img/facebook1.svg";
    facebookLogo.alt = "Facebook logo";

    let facebookLink = document.createElement("a");
    facebookLink.href = "";
    facebookLink.textContent = "@herum";

    footerFacebookContainer.append(facebookLogo, facebookLink);

    footerLeftContainer.append(footerInstagramContainer, footerFacebookContainer);

    //Right Container
    let footerRightContainer = document.createElement("div");
    footerRightContainer.id = "footer-location";
    footerRightContainer.classList.add = "footer-contact-section";

    let findUsTitle = document.createElement("p");
    findUsTitle.textContent = "Find us";

    let findUsLine = document.createElement("hr");

    footerRightContainer.appendChild(findUsTitle);
    footerRightContainer.appendChild(findUsLine);

    // Location container
    let locationContainer = document.createElement("div");
    locationContainer.id = "footer-right";
    locationContainer.classList.add = "footer-social-container";

    let locationLogo = document.createElement("img");
    locationLogo.src = "../img/Vector.svg";
    locationLogo.alt = "Logo localizacion";
    
    let locationLink = document.createElement("a");
    locationLink.href = "";
    locationLink.textContent = "Geolocation";

    locationContainer.appendChild(locationLogo);
    locationContainer.appendChild(locationLink);
    
    let footerBottomLine = document.createElement("hr");

    footerRightContainer.appendChild(locationContainer);

    footerContainer.append(footerLeftContainer, footerRightContainer);

    footerElement.append(footerContainer, footerBottomLine)
    
    
    bodyElement.appendChild(footerElement);

}

generateFooter();



