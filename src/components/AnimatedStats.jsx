import React, { useEffect, useRef, useState } from 'react';
import './AnimatedStats.css';

const stats = [
  {
    number: 1200,
    suffix: '+ sq ft',
    title: 'Project Area',
    description: 'Total space we’ve helped design and build.',
  },
  {
    number: 18,
    suffix: '+',
    title: 'Projects',
    description: 'Successful homes and buildings created.',
  },
  {
    number: 4,
    suffix: '+',
    title: 'Cities',
    description: 'Geographies we’ve transformed.',
  },
  {
    number: 1,
    suffix: '',
    title: 'Architect',
    description: 'Your dedicated design partner.',
  },
];

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

const AnimatedStats = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }),
      { threshold: 0.3 }
    );

    statRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="animated-stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div
            key={index}
            className="stat-card"
            ref={el => (statRefs.current[index] = el)}
          >
            <h3 className="stat-number">
              <AnimatedNumber value={item.number} />
              {item.suffix}
            </h3>
            <p className="stat-title">{item.title}</p>
            <p className="stat-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;
