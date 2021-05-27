import { Link } from 'react-router-dom';
 
const HomePage = () => (
  <main>
    <h2>Check out the latest posts!</h2>

    <section class="post-card-container">
      <div class="post-card">
        <Link to="/">
          <h3>All About the PERN Stack</h3>
          <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to...</p>
          <div class="post-details">
            <p>By: Justinhoch</p>
            <p>Created on: 05/27/2021</p>
            <p>Comments: 4</p>
          </div>
        </Link>
      </div>

      <div class="post-card">
        <Link to="/">
          <h3>How to Setup a PostgreSQL Database</h3>
          <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to...</p>
          <div class="post-details">
            <p>By: Justinhoch</p>
            <p>Created on: 05/24/2021</p>
            <p>Comments: 2</p>
          </div>
        </Link>
      </div>

      <div class="post-card">
        <Link to="/">
          <h3>How to create a React App</h3>
          <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to...</p>
          <div class="post-card-details">
            <p>By: Justinhoch</p>
            <p>Created on: 05/22/2021</p>
            <p>Comments: 6</p>
          </div>
        </Link>
      </div>

      <div class="post-card">
        <Link to="/">
          <h3>All About the PERN Stack</h3>
          <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to...</p>
          <div class="post-details">
            <p>By: Justinhoch</p>
            <p>Created on: 05/27/2021</p>
            <p>Comments: 4</p>
          </div>
        </Link>
      </div>

      <div class="post-card">
        <Link to="/">
          <h3>How to Setup a PostgreSQL Database</h3>
          <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to...</p>
          <div class="post-details">
            <p>By: Justinhoch</p>
            <p>Created on: 05/24/2021</p>
            <p>Comments: 2</p>
          </div>
        </Link>
      </div>

      <div class="post-card">
        <Link to="/">
          <h3>How to create a React App</h3>
          <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to...</p>
          <div class="post-card-details">
            <p>By: Justinhoch</p>
            <p>Created on: 05/22/2021</p>
            <p>Comments: 6</p>
          </div>
        </Link>
      </div>
    </section>
  </main>
);

export default HomePage;