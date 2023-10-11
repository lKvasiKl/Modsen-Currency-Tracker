import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import arrow from "@assets/icons/arrow.svg";
import { IMAGE_SIZE } from "@constants/styles/image";

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
        <Image
          $isOpen={isOpen}
          alt="Accordion arrow icon"
          ref={imageRef}
          src={arrow}
          {...IMAGE_SIZE.XS}
        />
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
