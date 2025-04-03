// src/list.tsx
import "./list.css";

export function List1() {
  return (
    <div className="list-container">
      Some of my Favorite Space Discoveries:
      <ul className="super-list moon-bullets">
        <li>Pillars of Creation</li>
        <li>First photo of a Black Hole</li>
        <li>Discovery of a Quasar</li>
        <li>Process of a Supernova</li>
        <li>Europa the Ocean Moon</li>
      </ul>
    </div>
  );
}

export function List2() {
  return (
    <div className="list-container">
      <h2>Some steps / processes to build a PC:</h2>
      <ul className="super-list plug-bullets">
        <li>Selecting the right CPU</li>
        <li>Choosing a compatible motherboard</li>
        <li>Picking the perfect graphics card</li>
        <li>Ensuring good airflow</li>
        <li>Making the cable management neat</li>
      </ul>
    </div>
  );
}
