const body = document.querySelector('body');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

const main = document.querySelector('main');

// for about in the navbar
const aboutDiv = document.createElement('div');

aboutDiv.style.position = 'absolute';

// for light mode
// aboutDiv.style.backgroundColor = '#eeeeee';
// aboutDiv.style.color = '#667a8f';

aboutDiv.style.background = 'linear-gradient(to right, #001f3f, #1a1a1a)';
aboutDiv.style.color = '#fff';

aboutDiv.style.height = '86vh';
aboutDiv.style.width = '40vw';
aboutDiv.style.left = '28vw';
aboutDiv.style.top = '12vh';
aboutDiv.style.borderRadius = "8px";
aboutDiv.style.display = 'flex';
aboutDiv.style.flexDirection = 'column';
aboutDiv.style.justifyContent = 'center';
aboutDiv.style.alignItems = 'center';

aboutDiv.innerHTML = `<img src="about.jpg" alt="about" width="90%" height="40%" style="border-radius: 8px;">
    <p style="padding: 24px;">Founded in 2021, Nordic Couple Camping embodies the spirit of exploration, driven by a deep passion for camping, a commitment to inclusion, and an unending thirst for adventure. <br> <br>
        Our journey began with a group of camping enthusiasts, united by the desire to unlock new destinations, embrace diverse cultures, and create extraordinary experiences. At the heart of our mission is the belief that adventure is a universal right - accessible, inclusive, and enriching for all. We're more than just a camping service; we're a community where every journey becomes a shared adventure, every culture a lesson, and every landscape a canvas for unforgettable memories.</p>`

about.addEventListener('mouseenter', () => {
    body.appendChild(aboutDiv);
    main.style.opacity = "0.8";

});

about.addEventListener('mouseleave', () => {
    body.removeChild(aboutDiv);
    main.style.opacity = "1";

});


// for contact in the navbar

const contactDiv = document.createElement('div');

contactDiv.style.position = 'absolute';

// for light mode
// contactDiv.style.backgroundColor = '#eeeeee';
// contactDiv.style.color = '#667a8f';

contactDiv.style.background = 'linear-gradient(to right, #001f3f, #1a1a1a)';
contactDiv.style.color = '#fff';

contactDiv.style.padding = '0px 40px';
contactDiv.style.height = '80vh';
contactDiv.style.width = '40vw';
contactDiv.style.left = '36vw';
contactDiv.style.top = '12vh';
contactDiv.style.borderRadius = "8px";
contactDiv.style.display = 'flex';
contactDiv.style.flexDirection = 'column';
contactDiv.style.justifyContent = 'space-evenly';
contactDiv.style.alignItems = 'flex-start';


contactDiv.innerHTML = ` <h1 style="color: #83989c; font-size: 30px; font-weight: bold;">Contact Us</h1>

<h2 style="font-size: 22px; color: #6cb6ff;">We respond in 48 hours!</h2>

<p class="style="color: #1b1b1b;">We warmly welcome you to our community! Feel free to drop by <br> and experience our open and friendly atmosphere during our <br> regular business hours.
</p>

<div style="padding: 8px 32px 8px 32px; background-color: #4f6672; display: flex; justify-content: space-between; align-items: center; width: 310px;">
    <img src="whatsapp.png" alt="whatsapp" width="40px" style="border-radius: 6px;">
    <p style="color: white; font-weight: 600;">Message us on WhatsApp</p>
</div>

<h2 style="color: #6cb6ff; font-size: 22px;">Nordic Couple Camping</h2>

<p style="color: #fff;">Suhmsgade, 1125 København, Denmark</p>`;


contact.addEventListener('mouseover', () => {
    body.appendChild(contactDiv);
    main.style.opacity = "0.8";
});


contact.addEventListener('mouseout', () => {
    body.removeChild(contactDiv);
    main.style.opacity = "1";
});

