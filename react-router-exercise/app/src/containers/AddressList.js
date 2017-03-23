import React, { Component } from 'react';
import '../styles/AddressList.css';

const AddressList = props => {
  let allAddresses = props.list.map(address => {
    let values = Object.values(address);

    let keys = Object.keys(address);
    keys = keys.map(key => {
      let arr = key.split('-');
      arr = arr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return arr.join(' ');
    });
    let oneAddress = keys.map((key,index) => {
      return (
        <div className="address">
          {key}: {values[index]}
        </div>
      )
    })
    return (
      oneAddress
    )

  })

  return (
    <div>{allAddresses}
    </div>
  )
}



export default AddressList;
