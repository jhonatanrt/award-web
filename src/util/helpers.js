const arrayGroupBy = (pArray, pChunk) => {
  const result = pArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / pChunk)

    if (!resultArray[chunkIndex])
      resultArray[chunkIndex] = []

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return result
}


export {
  arrayGroupBy
}