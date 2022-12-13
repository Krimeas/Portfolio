import React from 'react';

export default function Portfolio() {
  return (
    <div>
      {/* Portfolio 1 section, largest image and linked site.  Broken from Portfolio 2 to correct style issues related to flexbox and shrink/enlarge placement issues. Class and ID for portfolio 1 broken apart to correct styling issues.  Image put in div to fix issue with h2 element. */}
      <section id="portfolio">
        <h2 class="hover-2">Portfolio</h2>
        <div class="portfolio">
          <a id="portfolio1" href="https://sarahthoorens.github.io/movies-and-more/" target="_blank" >
          <img src="src/assets/landing1.jpeg" alt="image of Movies Website"></img>
          </a>
        </div>
      </section>



      {/* Portfolio 2 section, multiple portfolios, three real two fake for demonstration purposes.  Image source links in READme.  Class and ID for portfolio 2 broken apart to correct styling issues.  Different from 'Portfolio' for style issues related to size. */}
      <section class="portfolio2">
        <a id="portfolio2" href="https://krimeas.github.io/01---Challenge/" target="_blank" >
          <img src="src/assets/chal1.JPG" alt="image of challenge 01 website"></img>
        </a>

        <a id="portfolio2" href="https://krimeas.github.io/First-Portfolio/" target="_blank">
          <img src="src/assets/chal2.JPG" alt="image of challenge 02 website"></img>
        </a>

        <a id="portfolio2" href="https://krimeas.github.io/prework-study-guide/" target="_blank" >
          <img src="src/assets/PreworkSG.JPG" alt="image of prework studyguide website"></img>
        </a>

        <a id="portfolio2" href="https://myworkspaceutap3.herokuapp.com" target="_blank">
          <img src="src/assets/Project3.JPG" alt="Filler image myworkspace App"></img>
        </a>

      </section>
    </div>
  );
}





// // Portfolio 1 section, largest image and linked site.  Broken from Portfolio 2 to correct style issues related to flexbox and shrink/enlarge placement issues. Class and ID for portfolio 1 broken apart to correct styling issues.  Image put in div to fix issue with h2 element.
// <section id="portfolio">
//   <h2 class="hover-2">Portfolio</h2>
//   <div class="portfolio">
//     <a id="portfolio1" href="https://sarahthoorens.github.io/movies-and-more/" target="_blank" >
//     <img src="assets/landing1.jpeg" alt="image of prework studyguide website"></img>
//     </a>
//   </div>
// </section>



// {/* Portfolio 2 section, multiple portfolios, three real two fake for demonstration purposes.  Image source links in READme.  Class and ID for portfolio 2 broken apart to correct styling issues.  Different from 'Portfolio' for style issues related to size. */}
// <section class="portfolio2">
//   <a id="portfolio2" href="https://krimeas.github.io/01---Challenge/" target="_blank" >
//     <img src="assets/chal1.JPG" alt="image of challenge 01 website"></img>
//   </a>

//   <a id="portfolio2" href="https://krimeas.github.io/First-Portfolio/" target="_blank">
//     <img src="assets/chal2.JPG" alt="image of challenge 02 website"></img>
//   </a>

//   <a id="portfolio2" href="https://krimeas.github.io/prework-study-guide/" target="_blank" >
//     <img src="assets/PreworkSG.JPG" alt="image of prework studyguide website"></img>
//   </a>

//   <a id="portfolio2" href="https://github.com/Krimeas" target="_blank">
//     <img src="assets/mario-gogh-VBLHICVh-lI-unsplash.jpg" alt="Filler image for fake Portfolio4"></img>
//   </a>

// </section>