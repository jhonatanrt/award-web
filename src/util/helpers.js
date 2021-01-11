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

const generateArrayOfYears = () => {
  var max = new Date().getFullYear()
  var min = max + 10
  var years = []

  for (var i = max - 5; i <= min; i++) {
    years.push(i)
  }

  return years.map(item => ({
    name: item,
    active: item === max
  }))
}

const generateMonths = () => {
  const monthList = [{ id: 1, name: "Enero" }, { id: 2, name: "Febrero" }, { id: 3, name: "Marzo" }, { id: 4, name: "Abril" }, { id: 5, name: "Mayo" }, { id: 6, name: "Junio" }, { id: 7, name: "Julio" }, { id: 8, name: "Agosto" }, { id: 9, name: "Setiembre" }, { id: 10, name: "Octubre" }, { id: 11, name: "Noviembre" }, { id: 12, name: "Diciembre" }]
  const date = new Date();
  const currencyId = date.getMonth() + 1;

  return monthList.map(item => ({ ...item, active: item.id === currencyId }));
}


export default {
  arrayGroupBy,
  generateArrayOfYears,
  generateMonths
}