import React, { Component } from 'react'

class Form extends Component {

    render () {
        return (
            <form>
                <label for="postcode">Postcode</label>
                <input type="number" name="postcode" id="field-1" minlength="4" maxlength="4" required placeholder="Your postcode" />
                 <label for="suburb">Suburb</label>
                <input type="text" name="suburb" id="field-2" minlength="1" required placeholder="Your suburb" />
                <label for="state">State</label>
                <select name="state" id="field-3" >
                    <option disabled selected>Please select</option>
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
