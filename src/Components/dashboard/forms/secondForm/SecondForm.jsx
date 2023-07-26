import React from 'react';
import SubFormOne from './SubFormOne';
import SubFormTwo from './SubFormTwo';

const SecondForm = () => {
    return (
        <div className='p-8 w-full mb-6 lg:flex items-center justify-between gap-3'>
              <div>
                <SubFormOne></SubFormOne>
              </div>
              <div>
                <SubFormTwo></SubFormTwo>
              </div>
        </div>
    );
};

export default SecondForm;