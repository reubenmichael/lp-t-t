import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            // postcode: this.props.postcode,
            // suburb: this.props.suburb,
            // state: this.props.state,
            postcode: Number(2010),
            suburb: 'Surry Hills',
            state: '',
        }

        // console.log('Here2: ' + this.props.postcode + this.props.suburb)

        this.state = this.initialState
    }

    // handleChange = event => {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted')
        // this.props.handleSubmit(this.state)
    }

    // onFormSubmit = (event) => {
    //     event.preventDefault();
        
    //     this.props.handleSubmit(this.state);
    //     this.setState(this.initialState);
    // }

    render () {
        const { postcode, suburb } = this.state

        console.log(postcode + suburb)
        // onChange={this.handleChange}

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="postcode">Postcode</label>
                <input type="number" name="postcode" id="field-1" required placeholder="Your postcode" defaultValue={postcode}/>
                <label htmlFor="suburb">Suburb</label>
                <input type="text" name="suburb" id="field-2" required placeholder="Your suburb" defaultValue={suburb}/>
                <label htmlFor="state">State</label>
                <select name="state" id="field-3" defaultValue="NSW">
                    {/* <option disabled >Please select</option> */}
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
