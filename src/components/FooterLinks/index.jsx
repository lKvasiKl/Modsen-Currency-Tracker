import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { LinksContainer, LinksSection, Title } from "./styled";

const FooterLinks = ({ title, links }) => (
  <LinksSection>
    <Title>{title}</Title>
    <LinksContainer>
      {links.map((link) => (
        <Link key={link}>{link}</Link>
      ))}
    </LinksContainer>
  </LinksSection>
);

FooterLinks.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};

export default FooterLinks;
