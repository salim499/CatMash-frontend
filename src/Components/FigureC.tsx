// Import style
import {
  FigureCatS,
  ImageCatS,
  FigcaptionCatS,
  FigurePodiumSpanCatS,
  FigcaptionFirstSpanCatS,
  FigcaptionSecondSpanCatS,
  FigureSpanCatS,
} from "../Styles/FigureC.style";

// Import types
import { FigureT } from "../Types/FigureT";

// Figure component used to display a cat's image, name, score, and optionally a ranking badge
const Figure = (props: FigureT) => {
  return (
    <>
      <FigureCatS
        // Optional click handler for voting
        onClick={props.handleVoteCat}
        // Determines visual order for styling based on screen size and index
        order={
          !props.isScreenWidthLessOrEqual &&
          props.index === 0 &&
          props.page === 1
            ? 2
            : !props.isScreenWidthLessOrEqual &&
              props.index === 1 &&
              props.page === 1
            ? 1
            : !props.isScreenWidthLessOrEqual &&
              props.index === 2 &&
              props.page === 1
            ? 3
            : props.index
            ? props.index + 1
            : 0
        }
        index={props.index}
        page={props.page}
        rotateDirection={props.rotateDirection}
      >
        {/* Display podium labels for top 3 cats */}
        {props.page === 1 && props.index === 0 ? (
          <FigurePodiumSpanCatS>👑 Le Roi du CatMash 🏆</FigurePodiumSpanCatS>
        ) : props.page === 1 && props.index === 1 ? (
          <FigurePodiumSpanCatS>🥈 Vice-Champion</FigurePodiumSpanCatS>
        ) : props.page === 1 && props.index === 2 ? (
          <FigurePodiumSpanCatS>🥉 Médaillé de Bronze</FigurePodiumSpanCatS>
        ) : props.page && (props.index || props.index === 0) ? (
          <FigureSpanCatS>
            {(props.page - 1) * 9 + props.index + 1}
          </FigureSpanCatS>
        ) : null}

        {/* Cat image with responsive sizing for top 2 positions on larger screens */}
        <ImageCatS
          src={props.cat.url}
          alt="Cat"
          width={
            !props.isScreenWidthLessOrEqual &&
            props.page === 1 &&
            props.index === 0
              ? "375px"
              : !props.isScreenWidthLessOrEqual &&
                props.page === 1 &&
                props.index === 1
              ? "350px"
              : ""
          }
          height={
            !props.isScreenWidthLessOrEqual &&
            props.page === 1 &&
            props.index === 0
              ? "375px"
              : !props.isScreenWidthLessOrEqual &&
                props.page === 1 &&
                props.index === 1
              ? "350px"
              : ""
          }
        />

        {/* Caption below the image showing the cat's name and score */}
        <FigcaptionCatS>
          <FigcaptionFirstSpanCatS>{props.cat.name}</FigcaptionFirstSpanCatS>
          <FigcaptionSecondSpanCatS>
            Score: {props.cat.score}
          </FigcaptionSecondSpanCatS>
        </FigcaptionCatS>
      </FigureCatS>
    </>
  );
};

export default Figure;
