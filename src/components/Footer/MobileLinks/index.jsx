import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { IMAGE_CONFIG } from "./config";

import { LinksContainer, LinksAccordion, Title, Image } from "./styled";

const MobileLinks = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageRef = useRef(null);

  const handleAccordionButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <LinksAccordion onClick={handleAccordionButtonClick}>
        <Title>{title}</Title>
        <Image $isOpen={isOpen} ref={imageRef} {...IMAGE_CONFIG} />
      </LinksAccordion>
      <LinksContainer $isOpen={isOpen}>
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
