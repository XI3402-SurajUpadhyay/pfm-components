import "./index.css";

import { RenderSunburstChart } from '../../../Library/SunburstChart'

const defaultConfig = {
  data: null,
  width: 600,
  targetId: "sunburst-chart",
};

const Sunburst = (config = defaultConfig) => {
  if (
    !config ||
    typeof config !== "object" ||
    !config.data ||
    !config.data.length ||
    !config.width ||
    !config.targetId
  ) {
    const e ="config structure is not as defined: " + JSON.stringify(defaultConfig)
    console.log(e);
    throw new Error(e);
    return;
  }
  
  console.log("Sunburst");
  const chart = new RenderSunburstChart(config)
  chart.renderChart()
};

export default Sunburst;
