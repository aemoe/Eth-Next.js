/*
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const ether = require('./ethers')
const isArray = require('isarray')
const assert = require('assert')
const deepcopy = require('deepcopy')

const formalize = function (data, type) {
  // for user-defined struct
  if (type.type === 'tuple') {
    let result = {}
    let components = type.components
    components.forEach((component) => {
      result[component.name] = formalize(data[component.name], component)
    })
    return result
  }

  let arrayTypeReg = /(.+)\[\d*\]$/
  let arrayType = arrayTypeReg.exec(type.type)
  if (arrayType) {
    let elementType = deepcopy(type)
    elementType.type = arrayType[1]
    let result = []

    data.forEach((item) => {
      result.push(formalize(item, elementType))
    })

    return result
  }

  if (isArray(data)) {
    let result = []
    assert(isArray(type) && type.length === data.length)

    data.forEach((item, index) => {
      item = formalize(item, type[index])
      result.push(item)
    })

    return result
  }

  if (ether.utils.BigNumber.isBigNumber(data)) {
    return data.toNumber()
  }

  if (ether.utils.Interface.isIndexed(data)) {
    return data.hash
  }

  if (type.type === 'address') {
    return data.toLowerCase()
  }

  return data
}

module.exports.formalize = formalize

const arrToObject = function (object, abi, func) {
  const iface = new ether.utils.Interface(abi)
  return formalize(object, iface.functions[func].outputs[0])
}

module.exports.arrToObject = arrToObject