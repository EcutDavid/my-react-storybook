import React from 'react';
import TreeControl from 'react-tree-control';

const nodes = {
    label: 'root', level: 0, id: 1, children: [
        { label: 'layer2_A', level: 1, id: 2, children: [
          { label: 'layer3_A', level: 2, id: 4 },
          { label: 'layer3_B', level: 2, id: 5 }
        ]},
        { label: 'layer2_B', level: 1, id: 3 }
    ]
};

export default () => (
  <TreeControl nodes={nodes} />
);
