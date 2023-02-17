import React from "react";
import styled from "styled-components";
import { PageHero, TourLogo, OwnerCard, DistilleriesList } from "../components";
import aboutImg0 from "../assets/about_cover0.jpeg";
import aboutImg1 from "../assets/about_cover1.jpeg";
import aboutImg2 from "../assets/about_cover2.png";
import { Helmet } from "react-helmet-async";
//Simple About page which multiple sections
const AboutPage = () => {
  return (
    <main>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Since 2020 Shelby Bourbon Tours has provided touring on a trail to all distillers around Kentucky. If you are curious about the distilling process as we are, contact us."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <PageHero title="about" />
      <section id="about-shelby-bourbon-tours"></section>
      <TourLogo style={{ height: 250, width: 250 }} />
      <Wrapper className="page section section-center">
        <div id="parallax-world-of-ugg">
          <section>
            <div className="parallax-one">
              <h2>SHELBY</h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character sc">S</span>Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Sapiente neque
                architecto dolorem unde provident culpa vel natus repudiandae
                autem doloribus. Dolor, nesciunt. Dolore velit consectetur qui
                reprehenderit vel atque explicabo. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellat excepturi fuga
                accusantium. At minus quam deleniti excepturi ut maiores
                necessitatibus, perspiciatis magni tenetur doloremque, accusamus
                aut ipsa commodi eveniet est.
              </p>
            </div>
          </section>

          <section>
            <div className="parallax-two">
              <h2>BOURBON</h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character ny">B</span>Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Laborum voluptas earum at
                ad dolores est animi voluptatibus, tempore minima, illum odio
                cum blanditiis praesentium numquam doloribus fugiat fuga tenetur
                velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur itaque quibusdam esse adipisci amet nesciunt
                voluptate temporibus eaque vel magni. Fugit dolores iste maxime
                minima praesentium cumque voluptas tempora eum.
              </p>
            </div>
          </section>

          <section>
            <div className="parallax-three">
              <h2>TOURS</h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character atw">T</span>ours Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Alias illo
                voluptate repudiandae dolor repellat unde nulla sunt nam quae,
                nihil quibusdam ab, quidem, ratione id tenetur optio delectus
                cumque harum. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus dolorem voluptates expedita
                assumenda, natus alias excepturi, reiciendis provident facilis
                doloremque ad facere sit rerum maxime maiores quae sequi animi.
                Ad!
              </p>

              <section id="distilleries">
                <div>
                  <h5> The Distilleries:</h5>

                  <DistilleriesList />
                </div>
              </section>
              {/* dist */}
            </div>
          </section>
        </div>
        <OwnerCard />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  // display: grid;
  // gap: 4rem;
  // img {
  //   width: 100%;
  //   display: block;
  //   border-radius: var(--radius);
  //   height: 500px;
  //   object-fit: cover;
  // }
  
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  //two columns layout
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }

  /* Override UGG site */
  #main {
    width: 100%;
    padding: 0;
  }
  .content-asset p {
    margin: 0 auto;
  }
  .breadcrumb {
    display: none;
  }

  /* Helpers */
  /**************************/
  .margin-top-10 {
    padding-top: 10px;
  }
  .margin-bot-10 {
    padding-bottom: 10px;
  }

  /* Typography */
  /**************************/
  
  }
  h2 {

    font-size: 70px;
    letter-spacing: 10px;
    text-align: center;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 10;
    opacity: 0.9;
  }
  
 
  }
  .first-character {
    font-weight: 400;
    float: left;
    font-size: 84px;
    line-height: 64px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
  }


  /* Section - Title */
  /**************************/
  .title {
    background: white;
    padding: 60px;
    margin: 0 auto;
    text-align: center;
  }
  .title h1 {
    font-size: 35px;
    letter-spacing: 8px;
  }

  /* Section - Block */
  /**************************/
  .block {
    background: white;
    padding: 30px;
    width: 1000px;
    margin: 0 auto;
    text-align: justify;
  }
  .block-gray {
    background: #f2f2f2;
    padding: 60px;
  }
  .section-overlay-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }

  /* Section - Parallax */
  /**************************/
  .parallax-one {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-image: url(${aboutImg0});
    background-position: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }
  @media (min-width: 767px) {
    .parallax-one {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    }
  }

  .parallax-two {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-image: url(${aboutImg1});
    background-position: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (min-width: 767px) {
    .parallax-two {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    }
  }
  .parallax-three {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-image: url(${aboutImg2});
    background-position: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (min-width: 767px) {
    .parallax-three {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--images-radius);
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    }
  }

  /* Extras */
  /**************************/
.line-break {
    border-bottom: 1px solid black;
    width: 30rem;
    margin: 0 auto;
  }

  /* Media Queries */
  /**************************/
  @media screen and (max-width: 959px) and (min-width: 768px) {
    .block {
      padding: 40px;
      width: 620px;
    }
  }
  @media screen and (max-width: 767px) {
    .block {
      padding: 30px;
      width: 420px;
    }
    h2 {
      font-size: 30px;
    }
    .block {
      padding: 30px;
    }
    .parallax-one,
    .parallax-two,
    .parallax-three {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }
  @media screen and (max-width: 479px) {
    .block {
      padding: 30px 15px;
      width: 290px;
    }
  }

`;
export default AboutPage;
