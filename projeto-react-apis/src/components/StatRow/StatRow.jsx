import { DivStats, StatsName, Number, ButtonStats } from './StatRowStyle'

export const StatRow = ({ statName, statValue }) => {

  const colorStats = (value) => {
    if (value > 0 && value <= 20) {
      return '#ff0000'
    } else if (value > 20 && value <= 50) {
      return '#ff4800'
    } else if (value > 50 && value <= 80) {
      return '#ffd000'
    } else if (value > 80) {
      return '#2ca50e'
    } else {
      return ""
    }
  }

  const widthStats = (value) => {
    if (value > 100) {
      return value = 100
    } else {
      return value
    }
  }

  return (
    <DivStats>
      <StatsName>{statName}</StatsName>
      <Number>{statValue}</Number>
      <ButtonStats
        color={colorStats(statValue)}
        width={widthStats(statValue)} />
    </DivStats>
  );
};