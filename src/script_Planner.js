const body = document.querySelector('body');
const destination = document.querySelector('#destination');
const security = document.querySelector('#security');
const gears = document.querySelector('#gears');


destination.addEventListener('click', () => {
    if (screen.width > 700) {
        window.location.href = 'destination2.html';
    }
    else {
        window.location.href = 'destination.html';
    }
})


security.addEventListener('click', () => {
    window.location.href = 'security.html';
})


let gearsDiv = document.createElement('div');
gearsDiv.style.height = '40vh';
gearsDiv.style.width = '60vw';
gearsDiv.style.position = 'absolute';
gearsDiv.style.top = '15vh';
gearsDiv.style.left = '30vw';
gearsDiv.style.padding = '15px';


gearsDiv.innerHTML = `
<h1 style='font-size: 22px; font-weight: 600;'>Gears Info</h1>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">

  
  <tr>
    <th style="border: 1px solid black; padding: 8px; text-align: left;  background-color: #D8E2EA; text-align: center;">Type</th>
    <th style="border: 1px solid black; padding: 8px; text-align: left;  background-color: #D8E2EA; text-align: center;">Products I use for normal hiking or longer hikes</th>
    <th style="border: 1px solid black; padding: 8px; text-align: left;  background-color: #D8E2EA; text-align: center;">URL</th>
  </tr>


  <tr>
    <td style="border: 1px solid black; padding: 8px;">Rygsæk</td>
    <td style="border: 1px solid black; padding: 8px;">Mystery Ranch Terraframe 3-Zip 50</td>
    <td style="border: 1px solid black; padding: 8px;"><a href="https://www.friluftsland.dk/mystery-ranch-terraframe-3-zip-50" target="_blank" style='color: blue; text-decoration: underline;'>Mystery Ranch Terraframe 3-Zip 50</a></td>
  </tr>

  <tr>
    <td style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;">Sovepose</td>
    <td style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;">Western Mountaineering - Badger MF 200CM</td>
    <td style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;"><a href="https://www.bergfreunde.eu/western-mountaineering-badger-mf-down-sleeping-bag/" target="_blank" style='color: blue; text-decoration: underline;'>Western Mountaineering</a></td>
  </tr>

  <tr>
    <td style="border: 1px solid black; padding: 8px;">Liggeunderlag</td>
    <td style="border: 1px solid black; padding: 8px;">Sea To Summit Comfort Plus ASC MAT - Large - Liggeunderlag - GRA</td>
    <td style="border: 1px solid black; padding: 8px;"><a href="https://spejdergear.dk/shop/sea-to-summit-comfort-plus-asc-mat---large---liggeunderlag---graa-11098p.html" target="_blank" style='color: blue; text-decoration: underline;'>Sea To Summit Comfort Plus</a></td>
  </tr>

  <tr>
    <td style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;">Sleepingbag Liner</td>
    <td style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;">Sea To Summit Silk Travel Liner - LONG - Silkelagenpose med stretch paneler</td>
    <td style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;"><a href="https://spejdergear.dk/shop/sea-to-summit-silk-travel-liner---long---silkelagenpose-med-stretch-paneler-8813p.html" target="_blank" style='color: blue; text-decoration: underline;'>Sea To Summit Silk Travel Liner</a></td>
  </tr>

  <tr>
    <td style="border: 1px solid black; padding: 8px;">Reflective Underlag</td>
    <td style="border: 1px solid black; padding: 8px;">Liggeunderlag aluminium 60 x 190</td>
    <td style="border: 1px solid black; padding: 8px;"><a href="https://scandihills.dk/produkter/297-liggeunderlag-aluminium/16336-liggeunderlag-aluminium-60-x-190/" target="_blank" style='color: blue; text-decoration: underline;'>Liggeunderlag aluminium 60 x 190</a></td>
  </tr>


</table>

`;



gearsDiv.style.cssText += `
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 15px 0;
    }
    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
`;


let gearsClick = 1;

gears.addEventListener('click', () => {
    if(gearsClick == 1){
        body.appendChild(gearsDiv);
        gearsClick = 0;
    }
    else{
        body.removeChild(gearsDiv);
        gearsClick = 1;
    }
    
})