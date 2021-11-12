const queryPostcodeMatchesSuburb = () => {
    // get API data 
    // check how many objects on object
        // if one
            // check for match on one
                // compare "location" to suburb
                    // use UpperCase
        // if many
            // check for match on all
    
    // if match continue
    // if no match, give response

}

const querySuburbMatchesState = () => {
    // check how may object on object
        // loop thru
            // check for match between "location" and suburb
                // on that object, check for match between "state" and state

    // if suburb is found in state once, continue
    // if suburb is NOT found in state once, give a NOT EXIST message       
}

// if both checks are okay, give a ALL VALID response

export { queryPostcodeMatchesSuburb, querySuburbMatchesState }