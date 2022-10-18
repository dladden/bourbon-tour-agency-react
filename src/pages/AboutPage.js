import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about_cover.jpeg";
import aboutImg2 from "../assets/about_cover2.jpeg";
import aboutImg3 from "../assets/about_cover4.png";

const AboutPage = () => (
  <main>
    <PageHero title="about" />
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
              <span className="first-character sc">S</span>Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Sapiente neque architecto
              dolorem unde provident culpa vel natus repudiandae autem
              doloribus. Dolor, nesciunt. Dolore velit consectetur qui
              reprehenderit vel atque explicabo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellat excepturi fuga accusantium.
              At minus quam deleniti excepturi ut maiores necessitatibus,
              perspiciatis magni tenetur doloremque, accusamus aut ipsa commodi
              eveniet est.
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
              <span className="first-character ny">B</span>Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Laborum voluptas earum at ad
              dolores est animi voluptatibus, tempore minima, illum odio cum
              blanditiis praesentium numquam doloribus fugiat fuga tenetur
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
              dolor sit amet consectetur adipisicing elit. Alias illo voluptate
              repudiandae dolor repellat unde nulla sunt nam quae, nihil
              quibusdam ab, quidem, ratione id tenetur optio delectus cumque
              harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem voluptates expedita assumenda, natus alias
              excepturi, reiciendis provident facilis doloremque ad facere sit
              rerum maxime maiores quae sequi animi. Ad!
            </p>
          </div>
        </section>
      </div>
    </Wrapper>
  </main>
);

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  
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
  #parallax-world-of-ugg h2 {
    font-family: "Oswald", sans-serif;
    font-size: 70px;
    letter-spacing: 10px;
    text-align: center;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 10;
    opacity: 0.9;
  }
  #parallax-world-of-ugg h3 {
    font-family: "Oswald", sans-serif;
    font-size: 14px;
    line-height: 0;
    font-weight: 400;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: black;
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
    font-family: "Source Sans Pro", sans-serif;
  }


  /* Section - Title */
  /**************************/
  #parallax-world-of-ugg .title {
    background: white;
    padding: 60px;
    margin: 0 auto;
    text-align: center;
  }
  #parallax-world-of-ugg .title h1 {
    font-size: 35px;
    letter-spacing: 8px;
  }

  /* Section - Block */
  /**************************/
  #parallax-world-of-ugg .block {
    background: white;
    padding: 30px;
    width: 1000px;
    margin: 0 auto;
    text-align: justify;
  }
  #parallax-world-of-ugg .block-gray {
    background: #f2f2f2;
    padding: 60px;
  }
  #parallax-world-of-ugg .section-overlay-mask {
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
  #parallax-world-of-ugg .parallax-one {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--radius);
    background-image: url(${aboutImg});
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }
  #parallax-world-of-ugg .parallax-two {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-image: url(${aboutImg2});
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  #parallax-world-of-ugg .parallax-three {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-image: url(${aboutImg3});
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  /* Extras */
  /**************************/
  #parallax-world-of-ugg .line-break {
    border-bottom: 1px solid black;
    width: 30rem;
    margin: 0 auto;
  }

  /* Media Queries */
  /**************************/
  @media screen and (max-width: 959px) and (min-width: 768px) {
    #parallax-world-of-ugg .block {
      padding: 40px;
      width: 620px;
    }
  }
  @media screen and (max-width: 767px) {
    #parallax-world-of-ugg .block {
      padding: 30px;
      width: 420px;
    }
    #parallax-world-of-ugg h2 {
      font-size: 30px;
    }
    #parallax-world-of-ugg .block {
      padding: 30px;
    }
    #parallax-world-of-ugg .parallax-one,
    #parallax-world-of-ugg .parallax-two,
    #parallax-world-of-ugg .parallax-three {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }
  @media screen and (max-width: 479px) {
    #parallax-world-of-ugg .block {
      padding: 30px 15px;
      width: 290px;
    }
  }
`;
export default AboutPage;
