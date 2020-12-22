// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')
const abi = require('../artifacts/contracts/Licence.sol/Licence.json')
const decode = require('../libs/arrayToJson')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  await hre.run('compile')

  // We get the contract to deploy
  const Licence = await hre.ethers.getContractFactory('Licence')
  const licence = await Licence.deploy()
  await licence.deployed()
  console.log(licence)
  await licence.insertCatalogInfo({
    catalogName: '烟草专卖零售许可证',
    matterCode: '',
    catalogInfoId: 'ff8080816e1a4bae016e879c6a9601c2',
    licenseType: '烟草专卖零售许可证',
    catalogType: '10',
    orgCode: '省烟草专卖局',
    modeCode: '手工',
    customCatalogInfos: [
      {
        licAttrSource: '申请人填报',
        licAttrDesc: '只能中文字母数字组合且最大长度为100',
        isDictionaries: '',
        isFace: '是',
        name: '许可证号',
        isRequire: '是',
        licAttrStyle: '最大长度为d的中文字母数字组合',
        sensitiveRule: '',
        CustomCatalogInfoID: 'ff8080816e1a4bae016e879c6ab401c3',
        licAttrFormat: 'c..100',
      },
    ],
    orgLevel: '省部级',
    catalogDescribe: '',
    matterName: '',
  })
  const object = await licence.getCatalogInfoByUUID('ff8080816e1a4bae016e879c6a9601c2')

  //arr转json
   console.log(decode.arrToObject(object, abi.abi, 'getCatalogInfoByUUID'))
  
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
