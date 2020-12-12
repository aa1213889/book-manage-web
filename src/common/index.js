const commonFunc = {
  /** 给table数据添加key */
  setTableKey (arr, attr) {
    arr.map((item) => {
      return item.key = item[attr]
    })
    return arr
  }
}
export default commonFunc