'use strict'
import React from 'react';
const Sum = ({val1, val2}) => {
    alert('Sum is: ' + val1 + val2);
} 

Sum.propTypes = {
    val1: React.propTypes.number.isRequired,
    val2: React.propTypes.number.isRequired,
}

export default Sum;