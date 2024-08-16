import React from 'react';
import './TopCards.css';

function TopCards({ followers }) {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {followers.map((card) => (
            <article className={`card ${card.platform}`} key={card.id}>
              <p className="card-title">
                <img src={card.icon} alt="" />
                {card.username}
              </p>
              <p className="card-followers">
                <span className="card-followers-number">{card.followers}</span>
                <span className="card-followers-title">Followers</span>
              </p>
              <p className="card-today">
                <img src="images/icon-up.svg" alt="" />
                {card.change}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCards;
