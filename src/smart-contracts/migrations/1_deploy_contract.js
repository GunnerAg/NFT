/* eslint-disable no-undef */
const Test2 = artifacts.require('../contracts/Test2.sol');

module.exports = async function (deployer) {
  await deployer.deploy(Test2);
};
