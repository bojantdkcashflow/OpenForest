const SwapFactory = artifacts.require("SwapFactory");

const adminAddress = "0x59b8bCEF8da304b934E2671d0e65b69bfA5c741B";
const feeCollectingAddress = "0x59b8bCEF8da304b934E2671d0e65b69bfA5c741B";

module.exports = async (deployer) => {
  await deployer.deploy(SwapFactory, adminAddress);

  const contract = await SwapFactory.deployed();

  await contract.setFeeTo(feeCollectingAddress);
};
