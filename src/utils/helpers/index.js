const convertFormInputToObject = function (form) {
    const obj = {}
    const formData = new FormData(form)
    for (const key of formData.keys()) {
      obj[key] = formData.get(key)
    }
    return obj
  }

const simplifyAusPostData = (data) => {
  let arr = []
  if (data["localities"] !== undefined && data["localities"] !== '') {
    const locationsArray = data["localities"]["locality"]
    for (let i = 0; i < locationsArray.length; i++) {
      const singleLocation = {
        postcode: locationsArray[i].postcode,
        suburb: locationsArray[i].location,
        state: locationsArray[i].state
      }
      arr.push(singleLocation)
    }
  }
  return arr
}

export { convertFormInputToObject, simplifyAusPostData }