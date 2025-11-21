import '@fontsource/cormorant-garamond/700.css';
import React, { useState } from 'react'; //HERE
import styled from 'styled-components';
import { Seo, Filters, TourList, Sort, PageHero } from '../components';

//TourPage responsible for displaying the components
const ToursPage = () => {
  const [showFilters, setShowFilters] = useState(false); //HERE

  const openFilters = () => setShowFilters(true); //HERE
  const closeFilters = () => setShowFilters(false); //HERE

  return (
    <main>
      <Seo
        title="Kentucky Bourbon Tours & Transportation"
        content="Kentucky Bourbon Tours. Such as Buffalo Trace, Woodford Reserve, Maker's Mark, Bulleit, Four Roses, Wild Turkey, Angel's Envy, and much more."
        robots="index"
        href="/tours"
      />
      <PageHero title="tours" />
      <Wrapper className="page">
        <div className="section-center tours">
          {/* Mobile filter button – ONLY when panel is closed */} {/*HERE*/}
          {!showFilters && (
            <button
              type="button"
              className="btn filters-toggle-btn"
              onClick={openFilters}
            >
              Filter
            </button>
          )}

          <section
            id="filters-section"
            className={`filters-panel ${showFilters ? 'is-open' : ''}`} //HERE
          >
            <Filters closeFilters={closeFilters} /> {/*HERE*/}
          </section>

          <div>
            <section id="tours-list">
              <Sort />
              <TourList />
            </section>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .tours {
    display: grid;
    gap: 0rem 1.5rem;
    margin: 1.5rem auto;
  }
  .filters-toggle-btn {
    display: block;
    width: 100%;
    max-width: 200px;
    margin: 0 auto 1rem;
  }
  .filters-panel {
    display: none;
  }
  .filters-panel.is-open {
    display: block;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    .tours {
      grid-template-columns: 200px 1fr;
      align-items: flex-start;
    }
    .filters-toggle-btn {
      display: none; /* no filter button on desktop */
    }
    .filters-panel {
      display: block !important; /* always visible sidebar on desktop */
      margin-bottom: 0;
    }
  }
`;

export default ToursPage;
