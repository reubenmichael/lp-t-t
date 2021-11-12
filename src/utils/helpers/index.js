const convertFormInputToObject = function (form) {
    const obj = {}
    const formData = new FormData(form)
    for (const key of formData.keys()) {
      obj[key] = formData.get(key)
    }
    // const arr = Object.values(obj)
    // return arr
    return obj
  }

export { convertFormInputToObject }