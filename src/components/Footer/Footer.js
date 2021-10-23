import React from "react";
import styled from "styled-components";
import footer from '../../Assets/footer.svg'

const FooterSection = styled.div`
  background-image: url(${footer});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          - Adit Asyhari
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
