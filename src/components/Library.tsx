import React, { useState } from 'react';
import { answers } from './../data/ansvers';

function Library() {
    const [searchnode, setSearchnode] = useState('');

    const Em: React.FC<{
        em: {
            q: string;
            a: string;
        };
    }> = ({ em }) => {
        if(searchnode === ""){
            return (
                <div className="flex flex-col items-start justify-center w-full border-b-2 min-h-20 px-4 py-2">
                    <h4>{em.q}</h4>
                    <p>{em.a}</p>
                </div>
            );
        }

        if(em.q.toLocaleLowerCase().includes(searchnode.toLocaleLowerCase())){
            return (
                <div className="flex flex-col items-start justify-center w-full border-b-2 min-h-20 px-4 py-2">
                    <h4>{em.q}</h4>
                    <p>{em.a}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="flex flex-col items-center relative mt-4 z-10 w-full">
            <div className="h-12 w-full px-4">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='Search'
                    className="w-full h-full px-2 border-2"
                    value={searchnode}
                    onChange={(e) => setSearchnode(e.target.value)}
                />
            </div>

            {answers.map((em, i) => {
                return <Em em={em} key={i} />;
            })}
        </div>
    );
}

export default Library;
