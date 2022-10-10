import React from "react";
import Image from "next/image";
import {Sub} from "types/types"

interface Props {
  // children: React.ReactNode Para aceptar childrens: por ejemplo los context, layout, queryset, etc.
  subs: Array<Sub>
}

const List: React.FunctionComponent<Props> = ({subs}) => {
  return (
    <ul>
      {subs.map((sub, idx) => {
        return (
          <li key={idx}>
            <img
              src={sub.avatar}
              alt={`Avatar for ${sub.nick}`}
              
            />
            <h4>
              {sub.nick} (<small>{sub.subMonths}</small>)
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
