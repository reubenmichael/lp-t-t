import React, { Component } from 'react'
import { fetchPostData } from '../../utils/api-calls'
import { convertFormInputToObject, simplifyAusPostData } from '../../utils/helpers'
import { queryPostcodeMatchesSuburb, querySuburbMatchesState } from '../../utils/checks'
import { toast } from 'react-toastify'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            postcode: Number(2010),
            suburb: 'Surry Hills',
        }

        this.state = this.initialState
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        toast.info(`Working on it!`)
        const form = convertFormInputToObject(event.target)
        fetchPostData(form.postcode)
            .then(data => simplifyAusPostData(data))
            .then(apiDataArray => {
                queryPostcodeMatchesSuburb(apiDataArray, form.postcode, form.suburb)
                    ? querySuburbMatchesState(apiDataArray, form.state)
                        ? toast.success(`The postcode, suburb, and state entered are valid.`)
                        : toast.warning(`The suburb ${form.suburb} does not exist in the state of ${form.state}.`)
                    : toast.warning(`The postcode ${form.postcode} does not match the suburb ${form.suburb}.`)
            })
            .catch(error => toast.error(`Something went wrong: ${error}`))
    }

    render () {
        const { postcode, suburb } = this.state

        return (
            <div className="small-container">
                <h2 className="vertical-center">Address checker</h2>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="postcode">Postcode</label>
                    <input type="number" name="postcode" id="field-1" required placeholder="Your postcode" defaultValue={postcode}/>
                    <label htmlFor="suburb">Suburb</label>
                    <input type="text" name="suburb" id="field-2" required placeholder="Your suburb" defaultValue={suburb}/>
                    <label htmlFor="state">State</label>
                    <select name="state" id="field-3" defaultValue="NSW">
                        <option value="ACT">ACT</option>
                        <option value="NSW">NSW</option>
                        <option value="NT">NT</option>
                        <option value="QLD">QLD</option>
                        <option value="SA">SA</option>
                        <option value="TAS">TAS</option>
                        <option value="VIC">VIC</option>
                        <option value="WA">WA</option>
                    </select>
                    <input className="full-button" type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Form
