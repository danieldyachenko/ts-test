interface Obj {
  [key: string]: number
}

export const getPossibleSets = (obj: Obj) => {
  for (const key in obj) {
    for (const key2 in obj) {
      const newObj = {
        [key]: key,
        [key2]: key2,
      }
      console.log(newObj)
    }
  }
}
