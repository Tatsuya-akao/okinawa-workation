export const formatTemp = temp => {
  const tempNum = String(Math.ceil(temp * 10) / 10)
  if (tempNum.length === 2) {
    return `${tempNum}.0`
  } else {
    return tempNum
  }
}

export const averageTemp = (min, max) => {
  const totalTemp = Math.ceil((min + max) * 10) / 20;
  const tempNum = String(Math.ceil((totalTemp * 10)) / 10)
  if (tempNum.length === 2) {
    return `${tempNum}.0`
  } else {
    return tempNum
  }
}
