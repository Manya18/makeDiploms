import React, { useRef } from 'react';
import PreviewPage from './pages/PreviewPage';
import FunctionalPage from './pages/FunctionalPage';
import useStore from './useStore';
import '@progress/kendo-theme-default';
import { Button } from '@progress/kendo-react-buttons';
import { exportComponentAsPNG } from 'react-component-export-image';

function App() {
  const pdfExportComponent = useRef(null);
  const { setIndex, index, parseValuesArray } = useStore();
  const currentValues = parseValuesArray[index];

  const handleExportWithComponent = () => {
    if (index < parseValuesArray.length) {
      setIndex(index + 1);
      const currentValues = parseValuesArray[index];
      exportComponentAsPNG(pdfExportComponent, { fileName: `${currentValues.Team}.png` });    
    }
  };

  return (
    <div className="App">
      <div ref={pdfExportComponent}>
        <PreviewPage />
      </div>
      <div className="rightPanel">
        <FunctionalPage />
        <Button onClick={handleExportWithComponent}>Экспортировать PNG</Button>
        {/* <Button onClick={() => exportComponentAsPNG(pdfExportComponent, { fileName: `${currentValues.Team}.png` })}>Экспортировать PNG</Button> */}
      </div>
    </div>
  );
}

export default App;
