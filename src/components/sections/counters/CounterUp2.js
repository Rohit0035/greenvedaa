"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaUsers, FaGift, FaGlobe, FaSeedling } from "react-icons/fa";

// ✅ Child component with its own counter hook
const CounterItem = ({ title, num, sym, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / 2000, 1);
            setCount(Math.floor(progress * num));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, started]);

  return (
    <div
      ref={ref}
      className="col-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
    >
      <div className="text-white rounded-4 p-4 text-center shadow-sm hover-animate">
        <div className="counter-icon mb-3 text-success">{icon}</div>
        <h1 className="fw-bold fs-1 mb-1">
          {count}
          <span className="text-white ms-1">{sym}</span>
        </h1>
        <p className="mb-0 text-light fw-semibold">{title}</p>
      </div>
    </div>
  );
};

const CounterUp2 = () => {
  const items = [
    {
      title: "Active Clients",
      num: 733,
      icon: <FaUsers size={45}  className="text-white"/>,
      sym: "+",
    },
    {
      title: "Get Rewards",
      num: 100,
      icon: <FaGift  size={45}  className="text-white" />,
      sym: "+",
    },
    {
      title: "Cities Covered",
      num: 21,
      icon: <FaGlobe  size={45}  className="text-white" />,
      sym: "+",
    },
    {
      title: "Farmer Partnerships",
      num: 52,
      icon: <FaSeedling  size={45}  className="text-white" />,
      sym: " ",
    },
  ];

  return (
    <section className="ltn__counterup-area bg-image bg-overlay-theme-black-80 py-5" data-bs-bg="/img/bg/5.jpg">
      <div className="container">
        <div className="row text-center justify-content-center">
          {items.map((item, idx) => (
            <CounterItem key={idx} {...item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-animate {
          transition: all 0.4s ease;
        }
        .hover-animate:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 18px rgba(0, 128, 0, 0.25);
        }
        .counter-icon {
          font-size: 3rem;
        }
      `}</style>
    </section>
  );
};

export default CounterUp2;
