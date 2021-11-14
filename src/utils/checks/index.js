
const queryPostcodeMatchesSuburb = (apiDataArray, inputPostcode, inputSuburb) => {
    let match = Boolean(false)
    while (match === Boolean(false)) {
        let inputSuburbUC = inputSuburb.toUpperCase()
        for (let i = 0; i <apiDataArray.length; i++) {
            if (inputPostcode == apiDataArray[i].postcode) {
                const apiSuburb = apiDataArray[i].suburb
                if (JSON.stringify(apiSuburb) == JSON.stringify(inputSuburbUC)) {
                    match = Boolean(true)
                }
            }
        }
        break
    }
    return match
}

// Assumption: that we are trying to match postcode, suburb, state in one API call based on q=postcode
// and we are NOT checking 'gotchas' up-front e.g. RICHMOND, VIC & RICHMOND, NSW
// i.e. ONLY if postcode matches suburb will we then check if suburb matches state
const querySuburbMatchesState = (apiDataArray, inputState) => {
    // Therefore, if postcode has already been show to match suburb,
    // we only need to check the state on the first object in the apiDataArray
    // as postcodes only exist in one state.
    // We can also assume that apiDataArray.length !== 0.
    let match = Boolean(false)
    if (JSON.stringify(apiDataArray[0].state) == JSON.stringify(inputState)) {
        match = Boolean(true)
    }
    return match
}

export { queryPostcodeMatchesSuburb, querySuburbMatchesState }