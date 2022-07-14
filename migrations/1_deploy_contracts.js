require('dotenv').config();
const SwapFactory = artifacts.require("SwapFactory");

module.exports = async (deployer) => {
  await deployer.deploy(SwapFactory, process.env.ADMIN_ADDRESS, {from: process.env.ADMIN_ADDRESS});

  const contract = await SwapFactory.deployed();

  await contract.setFeeTo(process.env.FEE_TO_ADDRESS, {from: process.env.ADMIN_ADDRESS});
};
