const queryPostcodeMatchesSuburb = (apiDataArray, inputPostcode, inputSuburb) => {
    let match = Boolean(false)
    while (match === Boolean(false)) {
        let inputSuburbUC = inputSuburb.toUpperCase()
        for (let i = 0; i <apiDataArray.length; i++) {
            if (inputPostcode == apiDataArray[i].postcode) {
                const apiSuburb = apiDataArray[i].suburb
                if (JSON.stringify(apiSuburb) == JSON.stringify(inputSuburbUC)) {
                    console.log('IT IS A MATCH!')
                    match = Boolean(true)
                }
            }
        }
        break
    }
    if (match === Boolean(false)) {
        console.log('INSERT MESSAGE HERE: THE POSTCODE X DOES NOT MATCH THE SUBURB Y')
    }
    return match
}

const querySuburbMatchesState = (apiDataArray, state) => {
    // check how may object on object
        // loop thru
            // check for match between "location" and suburb
                // on that object, check for match between "state" and state

    // if suburb is found in state once, continue
    // if suburb is NOT found in state once, give a NOT EXIST message       
}

// if both checks are okay, give a ALL VALID response

export { queryPostcodeMatchesSuburb, querySuburbMatchesState }