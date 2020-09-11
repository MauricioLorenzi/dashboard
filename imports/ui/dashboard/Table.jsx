import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import Griddle, { plugins } from 'griddle-react';
import { LinksCollection } from '../../api/links';

export const Table = () => {
    var data = useTracker(() => {
      return LinksCollection.find().fetch();
    });

    console.log(data);

      const styleConfig = {
        icons: {
          TableHeadingCell: {
            sortDescendingIcon: <small>(desc)</small>,
            sortAscendingIcon: <small>(asc)</small>,
          },
        },
        classNames: {
            Cell: 'griddle-cell',
            Row: 'griddle-row',
        },
        styles: {
          Filter: { fontSize: 18 },
          Table: { border: "2px solid #555 "},
        }
      }
  
    return (
        <Griddle
        data={data}
        plugins={[plugins.LocalPlugin]}
        styleConfig={styleConfig}
      />
    );
  };