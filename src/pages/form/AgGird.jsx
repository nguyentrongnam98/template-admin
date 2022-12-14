import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const GridExample = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: '운동선수' },
    { field: '나이' },
    { field: '국가' },
    { field: '년도' },
    { field: '데이트' },
    { field: '스포츠' },
    { field: '금' },
    { field: '은' },
    { field: '청동' },
    { field: '총' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        const newData = data?.map((data) => {
          return {
            운동선수: data.athlete,
            나이: data.age,
            국가: data.country,
            년도: data.year,
            데이트: data.date,
            스포츠: data.sport,
            금: data.gold,
            은: data.silver,
            청동: data.bronze,
            총: data.total
          }
        })
        setRowData(newData)
      });
  }, []);
  console.log(rowData,123);
  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination
        ></AgGridReact>
      </div>
    </div>
  );
};
