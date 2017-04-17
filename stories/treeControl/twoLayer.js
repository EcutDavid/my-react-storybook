import React from 'react';
import TreeControl from 'react-tree-control';

const nodes = {
    label: 'root', level: 0, id: 1, children: [
        { label: 'layer2_A', level: 1, id: 2 },
        { label: 'layer2_B', level: 1, id: 3 }
    ]
};

export default () => (
  <TreeControl defaultExpand nodes={nodes} />
);
