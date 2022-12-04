import React from 'react';

export default function Home() {
  return (
    <div>
    <section id="PersonImage">
      <img src='src\assets\IMG_0540.JPG' alt="picture of Cody Berry"></img>
    </section>


  {/* About Me section, first use of hover-2for heading 2 styles.  Span added for linkedin link */}
    <section id="aboutMe">
      <h1 class="hover-2">About Me</h1>

      <p>My name is Cody Berry.  I am currently attending a coding Bootcamp at UT Austin and I will be graduating this December.  I have 15 years of experience in a CNC manufacturing startup where I’ve worn many different hats ranging from Purchasing and Inventory Control Manager, to Salesman, Office Manager, and even Shop Floor Supervisor.  While not all of those skills transfered over to my new career path; the ability to talk with and manage others through projects will no doubt help me moving forwards.
      </p>
    </section>
    </div>
  );
}