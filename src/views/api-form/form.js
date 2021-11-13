import React, { Component } from 'react'
import { fetchPostData } from '../../utils/api-calls'
import { convertFormInputToObject, simplifyAusPostData } from '../../utils/helpers'

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
        const form = convertFormInputToObject(event.target)
        fetchPostData(form.postcode, form.state)
            .then(data => {
                simplifyAusPostData(data)
            })
    }

    render () {
        const { postcode, suburb } = this.state

        return (
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
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Form
