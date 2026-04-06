import React from 'react';
import Spacial from './Spacial';
import Friend from './Friend';

const Cousins = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Shagor' && <Spacial asset={asset}></Spacial>
            },
            {
                name === 'Shumon' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousins;