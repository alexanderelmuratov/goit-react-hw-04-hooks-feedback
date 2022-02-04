import PropTypes from 'prop-types';
import {
  StatisticsTitle,
  StatisticsData,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  getPositiveFeedback,
}) => {
  return (
    <div>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <ul>
        <li>
          <StatisticsData>Good: {good}</StatisticsData>
        </li>
        <li>
          <StatisticsData>Neutral: {neutral}</StatisticsData>
        </li>
        <li>
          <StatisticsData>Bad: {bad}</StatisticsData>
        </li>
        <li>
          <StatisticsData>Total: {total}</StatisticsData>
        </li>
        <li>
          <StatisticsData>
            Positive feedback: {getPositiveFeedback()}%
          </StatisticsData>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  getPositiveFeedback: PropTypes.func.isRequired,
};
