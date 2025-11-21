import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import heroSBT from '../assets/sbt_cover.webp';
import heroSBT2 from '../assets/sbt_cover2.webp';

const HeroMobile = () => {
  const [scrollProgress, setScrollProgress] = useState(0); // 0 → left, 1 → right
  const [maxOffsetPx, setMaxOffsetPx] = useState(0); // how far we can travel right
  const tickingRef = useRef(false);
  const stackRef = useRef(null);
  const accentRef = useRef(null);

  // measure how far the accent image CAN move inside the main image container
  useEffect(() => {
    const measure = () => {
      if (!stackRef.current || !accentRef.current) return;

      const stackRect = stackRef.current.getBoundingClientRect();
      const accentRect = accentRef.current.getBoundingClientRect();

      // leave a tiny padding on right so it doesn't hang off
      const paddingRight = 8; 
      const max = stackRect.width - accentRect.width - paddingRight;
      setMaxOffsetPx(max > 0 ? max : 0);
    };

    measure(); // initial
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // scroll → progress 0..1
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const y = window.scrollY || 0;
      const maxScroll = 300; // px of scroll to go from left to right
      let p = y / maxScroll;
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(() => {
          setScrollProgress(p);
          tickingRef.current = false;
        });
      }
    };

    handleScroll(); // initial
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accentOffset = scrollProgress * maxOffsetPx; // 0 → full travel inside main img

  return (
    <Wrapper>
      <article className="content">
        <h1>
          Find the Best
          <br />
          Kentucky Bourbon Tours
        </h1>
        <p className="hero-text">
          Private Kentucky bourbon trail transportation to major distilleries
          across Kentucky. Enjoy your tastings and leave the driving to us.
        </p>

        <div className="hero-buttons">
          <Link smooth to="/tours#tours-list" className="btn hero-btn">
            Find A Tour
          </Link>
          <Link smooth to="/contact#custom-tour" className="btn hero-btn">
            Create A Tour
          </Link>
          <Link smooth to="/contact#owner-card" className="btn hero-btn call-btn">
            Call
          </Link>
        </div>
      </article>

      <article className="img-container">
        <div className="img-stack" ref={stackRef}>
          <img
            ref={accentRef}
            src={heroSBT2}
            title="Blanton's Single Barrel Bourbon, Buffalo Trace"
            alt="Blanton's Single Barrel Bourbon, Buffalo Trace"
            className="accent-img"
            style={{ transform: `translateX(${accentOffset}px)` }}
          />
          <img
            src={heroSBT}
            title="Kentucky Bourbon Tours"
            alt="Bourbon glass with Kentucky Bourbon Tours logo"
            className="main-img"
          />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem 3.5rem;
  text-align: center;
  min-height: 50vh;

  .content {
    width: 100%;
    max-width: 32rem;
  }

  .hero-text {
    margin-top: 1rem;
    line-height: 1.8;
    color: var(--clr-grey-5);
    font-size: 1.1rem;
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .hero-btn {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }

  .call-btn {
    margin-top: 0.25rem;
  }

  .img-container {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .img-stack {
    position: relative;
    max-width: 520px;
    width: 100%;
  }

  .main-img {
    width: 100%;
    border-radius: var(--images-radius);
    display: block;
    object-fit: cover;
  }

  .accent-img {
    position: absolute;
    top: 11rem;
    left: 0; /* anchor at left edge of stack */
    width: 40%;
    max-width: 220px;
    border-radius: var(--radius);
    will-change: transform;
    transition: transform 0.6s ease-out;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default HeroMobile;
