import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    ''}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ''}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || ''}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      href="https://cvws.icloud-content.com/B/AY_LXY02mnUBo8cMcGsPXlsCnF6SAa_kRmPlykXktnTIlTncslapXdR3/SwagatKoiralaResume.pdf?o=AmwkRC8Yxkv0eRxMOc5KRmb56mxaYgxbIV7YbwDKB08V&v=1&x=3&a=CAogwiz4zSiRWiMMS4_xftb5u9uSaCVU0dIezybOaDhgrvkSbxCExqeGwTIYhKODiMEyIgEAUgQCnF6SWgSpXdR3aiccv2WVcQ7Kw0-ZOKc1aPmJ3k2g5IXeXrkGkBYAwFeehhflrazU589yJ4b_pRT1D1XnvErnO7zpVThUXeuT0gm16cbZ2UP7MujyXGbxPioJ-g&e=1735452053&fl=&r=4b88ade4-7060-4968-812e-2faabdef399a-1&k=sTH7GJpSVXEfNQWopueb7g&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=71&s=jv7Z03EMDylyIXlBThLZtFU6kcc&cd=i"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume">
                      View Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
