import React from 'react';
import './OverView.css';

function Overview({ overview }) {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {overview.map((card) => (
            <div className="card-small" key={card.id}>
              <p className="card-small-views">{card.title}</p>
              <p className="card-small-icon">
                <img src={`images/icon-${card.platform}.svg`} alt="" />
              </p>
              <p className="card-small-number">{card.views}</p>
              <p className={`card-small-percentage ${card.direction === 'down' ? 'is-danger' : ''}`}>
                <span>
                  <img src={`images/icon-${card.direction}.svg`} alt="" />
                  {card.change}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;

