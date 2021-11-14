import { toast } from 'react-toastify'

const queryPostcodeMatchesSuburb = (apiDataArray, inputPostcode, inputSuburb) => {
    let match = Boolean(false)
    while (match === Boolean(false)) {
        let inputSuburbUC = inputSuburb.toUpperCase()
        for (let i = 0; i <apiDataArray.length; i++) {
            if (inputPostcode == apiDataArray[i].postcode) {
                const apiSuburb = apiDataArray[i].suburb
                if (JSON.stringify(apiSuburb) == JSON.stringify(inputSuburbUC)) {
                    console.log('IT IS A MATCH!')
                    toast.success('It\'s a match!')
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

// Assumption: that we are trying to match postcode, suburb, state in one API call based on q=postcode
// and we are NOT checking 'gotchas' e.g. RICHMOND, VIC & RICHMOND, NSW
// i.e. ONLY if postcode matches suburb will we then check if suburb matches state
const querySuburbMatchesState = (apiDataArray, inputState) => {
// Therefore, if postcode has already been show to match state,
// we only need to check the state on the first object in the apiDataArray.
// We can also assume that apiDataArray.length !== 0.
let match = Boolean(false)
if (JSON.stringify(apiDataArray[0].state) == JSON.stringify(inputState)) {
    console.log('IT IS A MATCH! 2')
    match = Boolean(true)
} else {
    console.log('THE SUBURB X DOES NOT EXIST IN THE STATE Y')
}
return match
}

export { queryPostcodeMatchesSuburb, querySuburbMatchesState }