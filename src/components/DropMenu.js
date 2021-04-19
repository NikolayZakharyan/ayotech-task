import React, { useState } from 'react';
import Start from './Start';

function DropMenu(data) {
  const [mode, setMode] = useState(0);
  const [start, setStart] = useState(false);

  return (
    <>
      <div className="mode-select-wrapper">
        <label htmlFor="mode">Choose a mode: </label>
        <select
          name="mode"
          id="mode"
          onChange={(e) => {
            setMode(e.target.value);
          }}
        >
          <option value={0} key={'select'}>
            Select Mode
          </option>
          {Object.keys(data).map((mode, i) => {
            return (
              <option key={i} value={data[mode].field}>
                {mode}
              </option>
            );
          })}
        </select>
        <button
          disabled={parseInt(mode) === 0}
          onClick={async () => {
            await setStart(0);
            setStart(mode);
          }}
        >
          START
        </button>
      </div>
      {start && <Start start={start} />}
    </>
  );
}

export default DropMenu;
