import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './List.css';

class List extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
    };
    
    state ={
       filterText: '' 
    };

    onChangeFilterText = (e) => {
        console.log(e.target.value);
        this.setState({
            filterText: e.target.value
        });
    };

    render() {
        //filter
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        );
        return (
            <div className={"listArea"}>
                <input 
                    value = {this.state.filterText}
                    onChange = {this.onChangeFilterText}
                    name={"filter"} 
                    id={"filer"} 
                    placeholder={"Filter by name or Phone"}>
                </input>
                <ul className={"list"}>
                   {
                        filteredContacts.map(contact => 
                         
                            <li key={contact.phone}>
                                <span className={"name"}>{contact.name}</span>
                                <span className={"phone"}>{contact.phone}</span>
                                <span className={"clearfix"}></span>
                            </li>
            
                       )
                   }
                </ul>
            </div>
        );
    }
}

export default List;