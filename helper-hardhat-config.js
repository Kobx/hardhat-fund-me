const networkConfig = {
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  137: {
    name: "matic",
    ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
  },
};
const developmentChains = ["hardhat", "localhost"];
const decimals = 8;
const initialAnswer = 130000000000;

module.exports = { networkConfig, developmentChains, decimals, initialAnswer };
