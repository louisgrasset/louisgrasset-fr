import * as React from 'react';
import studies from '../../data/studies';

const Studies = () => {
    return (
        <div className="grid gap-12 mt-10 md:grid-cols-2">
            {
                studies.map((diploma, key) => (
                    <div key={key} className="grid items-center gap-12 gap-y-4" style={{ gridTemplateColumns: '8rem 1fr' }}>
                        <img src={require(`../../images/studies/${diploma.institution.slug}.svg`)} className="w-36" />
                        <div>
                            <h3 className="text-xl font-bold">{diploma.label}</h3>
                            <p>{diploma.institution.name}</p>
                            <p className="text-gray-500">{diploma.dateRange.from} - {diploma.dateRange.to}</p>
                        </div>
                    </div>
                ))
            }
        </div>);
};

export default Studies;