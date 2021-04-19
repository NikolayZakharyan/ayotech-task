import React, { useState } from 'react';

function Squere({ data: { col, row }, handleHistory }) {
  const [active, setActive] = useState(false);
  const path = `Col: ${col} | Row: ${row}`;
  return (
    <>
      <div
        key={`Col: ${col} | Row: ${row}`}
        onMouseEnter={() => {
          handleHistory({ path, status: !active });
          setActive(!active);
        }}
        className={`squere ${active && 'active'}`}
      >
        {/* {`col: ${col} | row: ${row}`} */}
      </div>
    </>
  );
}

export default Squere;
