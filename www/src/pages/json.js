import React from 'react';

export default props => {
  const query = new URLSearchParams(props.location.search);
  const colors = JSON.parse(query.get('colors') || 'null');

  if (!colors) return 'todo: redirect';

  const json = JSON.stringify(colors, null, 2);

  return (
    <pre>
      {json}
    </pre>
  );
};