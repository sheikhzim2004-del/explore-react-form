import React, { use } from 'react';
import Cousins from './Cousins';
import { MoneyContext } from './FamilyTree';

const Aunt = () => {

    const [money, setMoney] = use(MoneyContext);


    const handleAddMoney = () => {
        setMoney(money + 500)
    }

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousins name='Shumon'></Cousins>
                <Cousins name='Shumi'></Cousins>
            </section>
                <button onClick={handleAddMoney}>Add Money: 500</button>
        </div>
    );
};

export default Aunt;