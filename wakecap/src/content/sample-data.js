import React from 'react';
import Avatar, { AvatarItem } from '@atlaskit/avatar';
function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

const caption = 'List of Workers';

const createHead = (withWidth) => {
  return {
    cells: [
      {
        key: 'name',
        content: 'Name',
        isSortable: true,
        width: withWidth ? 25 : undefined,
      },
      {
        key: 'party',
        content: 'Party',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: 'term',
        content: 'Term',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'content',
        content: 'Comment',
        shouldTruncate: true,
      },
      {
        key: 'more',
        shouldTruncate: true,
      },
    ],
  };
};

const head = createHead(true);

const rows = (workers, selectLeftIndex) => {
  return (workers.map((worker, index) => ({
    key: `row-${index}-${worker.nm}`,
    cells: [
      {
        key: createKey(worker.nm),
        content: (
          <AvatarItem
            onClick={()=>selectLeftIndex(index)}
            avatar={<Avatar src={`https://api.adorable.io/avatars/24/${encodeURIComponent( worker.nm,)}.png`} />}
            primaryText={worker.nm}
            secondaryText={worker.designation} />
        ),
      },
      {
        key: createKey(worker.id_number),
        content: (<div className="font-14 clickable" onClick={()=>selectLeftIndex(index)}>{worker.id_number}</div>),
      },
    ],
  })));
};

export { rows, head, caption};

