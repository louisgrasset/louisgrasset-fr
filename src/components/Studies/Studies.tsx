import React from 'react';

import studies from "../../data/studies";
import {Translation} from "../../data/translations";

interface StudiesProps {
  /** Language string to get translations */
  lang: Translation
}
export const Studies = ({ lang }: StudiesProps) => {
  return (
    <div className="grid gap-12 mt-10 md:grid-cols-2">
      {studies.map((diploma, key) => (
        <div
          key={key}
          className="flex flex-col items-start gap-12 lg:items-center lg:flex-row gap-y-4"
        >
          <img
            src={
              require(`../../images/studies/${diploma.institution.slug}.svg`)
                .default
            }
            alt={lang[`studies_${diploma.slug}_institution_name`]}
            width="100"
            height="50"
            className="w-24 h-12 lg:w-30 dark:filter-companies"
          />
          <div className="dark:text-white">
            <h3 className="text-xl font-bold">
              {lang[`studies_${diploma.slug}_label`]}
            </h3>
            <p>{lang[`studies_${diploma.slug}_institution_name`]}</p>
            <p className="text-gray-500">
              {diploma.dateRange.from} - {diploma.dateRange.to}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
