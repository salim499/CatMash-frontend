// Import style
import { ButtonContainerS, ButtonContentS } from "../Styles/ButtonC.style";

// Import types
import { ButtonT } from "../Types/ButtonT";

const Button = (props: ButtonT) => {
  return (
    // Outer container for button styling
    <ButtonContainerS>
      {/* Content inside the button (passed via children prop) */}
      <ButtonContentS>{props.children}</ButtonContentS>
    </ButtonContainerS>
  );
};

export default Button;
