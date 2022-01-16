import PropTypes from "prop-types";
import {
  StatisticList,
  StatisticItem,
  StatisticText,
  StatisticData,
} from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticList>
      <StatisticItem>
        <StatisticText>
          Good:
          <StatisticData>{good}</StatisticData>
        </StatisticText>
      </StatisticItem>

      <StatisticItem>
        <StatisticText>
          Neutral:
          <StatisticData>{neutral}</StatisticData>
        </StatisticText>
      </StatisticItem>

      <StatisticItem>
        <StatisticText>
          Bad:
          <StatisticData>{bad}</StatisticData>
        </StatisticText>
      </StatisticItem>

      <StatisticItem>
        <StatisticText>
          Total:
          <StatisticData>{total}</StatisticData>
        </StatisticText>
      </StatisticItem>

      <StatisticItem>
        <StatisticText>
          Positive feedback:
          <StatisticData>{positivePercentage}%</StatisticData>
        </StatisticText>
      </StatisticItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
