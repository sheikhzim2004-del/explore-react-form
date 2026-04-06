
import Cousins from './Cousins';


const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousins asset={asset} name='Shagor'></Cousins>
                <Cousins name='Tinni'></Cousins>
            </section>
        </div>
    );
};

export default Uncle;