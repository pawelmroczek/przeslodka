import { StyledTitle } from "./styled";

const MiniGallery = ({ title, text, content }) => (
  <section>
    <StyledTitle>{title}</StyledTitle>
    <p>
      {text}
    </p>
  </section>
);

export default MiniGallery;
