import { utils } from 'web3';

export function from6WeiNumber(number) {
  const bigNumber = new utils.BN(number);
  return Number(utils.fromWei(bigNumber,"mwei").match(/^\d+(?:\.\d{0,6})?/));
}

export function from8WeiNumber(number) {
  const bigNumber = new utils.BN(number*10);
  return Number(utils.fromWei(bigNumber,"gwei").match(/^\d+(?:\.\d{0,4})?/));
}

export function fromWeiNumber(number) {
  const bigNumber = new utils.BN(number);
  return Number(utils.fromWei(bigNumber).match(/^\d+(?:\.\d{0,4})?/));
}

export function from18WeiNumber(number) {
  const bigNumber = new utils.BN(number);
  return Number(utils.fromWei(bigNumber));
}

export function to6WeiNumber(number) {
  const bigNumber = new utils.BN(number, "mwei");
  return utils.toWei(bigNumber);
}

export function to8WeiNumber(number) {
  const bigNumber = new utils.BN(number*10);
  return utils.toWei(bigNumber, "gwei");
}

export function toWeiNumber(number) {
  const bigNumber = new utils.BN(number);
  return utils.toWei(bigNumber);
}

