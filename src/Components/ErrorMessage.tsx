// Import style
import { ErrorWrapperS, EmojiS, MessageS } from "../Styles/ErrorMessageC.style";

// Import types
import { PropsErrorMessage } from "../Types/ErrorMessageT";

// ErrorMessage component
const ErrorMessage = (props: PropsErrorMessage) => {
  return (
    <ErrorWrapperS>
      <EmojiS>😢</EmojiS>

      {/* Error message text — shows custom message if provided, otherwise default message */}
      <MessageS>
        {props.message ? props.message : "An error occurred. Please try again."}
      </MessageS>
    </ErrorWrapperS>
  );
};

export default ErrorMessage;
