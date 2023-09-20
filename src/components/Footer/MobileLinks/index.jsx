import { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import arrow from "@assets/icons/arrow.svg";

import { LinksContainer, LinksAccordion, Title, Image } from "./styled";

const MobileLinks = ({ title, links }) => {
  const imageRef = useRef(null);

  const handleAccordionButtonClick = (event) => {
    const linksContainer = event.currentTarget.nextSibling;
    const isOpen = linksContainer.style.display === "flex";

    linksContainer.style.display = isOpen ? "none" : "flex";
    imageRef.current.style.transform = isOpen
      ? "rotate(0deg)"
      : "rotate(180deg)";
  };

  return (
    <>
      <LinksAccordion onClick={handleAccordionButtonClick}>
        <Title>{title}</Title>
        <Image
          alt="Accordion arrow icon"
          ref={imageRef}
          src={arrow}
          width="20px"
        />
      </LinksAccordion>
      <LinksContainer>
        {links.map((link) => (
          <Link key={link}>{link}</Link>
        ))}
      </LinksContainer>
    </>
  );
};

MobileLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

export default MobileLinks;
