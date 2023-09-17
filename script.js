//Team Data
const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio:
      "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio:
      "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio:
      "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
  }
];


//Content Selected using ID.
const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */
const getImageElement = (src, alt) => {
  let imgEle = document.createElement("img");
  imgEle.setAttribute("src", src);
  imgEle.setAttribute("alt", alt);
  imgEle.setAttribute("height", 100);
  imgEle.setAttribute("width", 100);
  return imgEle; // return as <img src="src_text" alt="alt_text" height="100px" width="100px" />
};

/**
 * Creates a new card with passed parameters.
 * @param {string} id - Unique id from team data
 * @param {string} fullName - Name of the team member
 * @param {string} jobTitle - Job title of the team memeber
 * @param {string} bio - Description Bio
 * @param {string} avatar - Source of the avatar image.
 * @returns section HTML element with Image and Text
 */
function generateCard(id, fullName, jobTitle, bio, avatar) {
  //1. Create a new "section" element and set the className and id
  let member_section = document.createElement("section");
  member_section.setAttribute("class", "team-member");
  member_section.setAttribute("id", id);

  //2. Generate the image using getImageElement() function
  //Hint - Use fullname as alt for the image.
  let img_tag = getImageElement(avatar, fullName);

  //3. Create a div for text content
  let bio_div = document.createElement("div");

  //4. Create an h2 for fullName
  let member_name = document.createElement("h2");
  member_name.innerHTML = fullName;

  //5. Create an h3 for jobTitle
  let job_title = document.createElement("h3");
  job_title.innerHTML = jobTitle;

  //6. Create a p for bio
  let member_bio = document.createElement("p");
  member_bio.innerHTML = bio;

  //7. Append the fullName, jobTitle, and bio element to the div created for text.
  bio_div.appendChild(member_name);
  bio_div.appendChild(job_title);
  bio_div.appendChild(member_bio);

  //8. Append the Image and the Text div to the new section you created in step 1
  member_section.appendChild(img_tag);
  member_section.appendChild(bio_div);

  //Return the new section element created.
  /*
  return as: 
  <section class="team-member" id="id_text">
    <img src="" alt=""/>
    <div>
      <h2> ... </h2>
      <h3> ... </h3>
      <p> ... </p>
    </div>
  */
  return member_section; 
}

/* 💎 for my testing purpose
// generateCard(team[0].id, team[0].fullName, team[0].jobTitle, team[0].bio, team[0].avatar);
// generateCard(team[1].id, team[1].fullName, team[1].jobTitle, team[1].bio, team[1].avatar);
// generateCard(team[2].id, team[2].fullName, team[2].jobTitle, team[2].bio, team[2].avatar);
*/


/**
 * Generates and returns an array of HTML elements
 * @param {Array} data Team data array
*/

/*  In this function you need to do following things: ⚡Got this help from Technical expert (Aditya)
1- Create an empty array.
2- Iterate over the teams data, then call the generateCard function by passing proper data.
3- Push the result of the generateCard to the empty array you declared.
4- return that array  */

function generateCardArray(data) {
  const cards = [];
  //Add logic to populate `cards` array below
  for(let i = 0; i < data.length; i++) {
    cards.push(generateCard(data[i].id, data[i].fullName, data[i].jobTitle, data[i].bio, data[i].avatar));
  }
   
  //Return cards array
  return cards;
}

const cardsArray = generateCardArray(team);

//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
  content.append(card);
}

console.log(content);
