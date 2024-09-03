import React from 'react';
import { GlobalStateProvider } from './context/GlobalState';
import WaiterView from './pages/WaiterView';
// import ReceptionView from './pages/ReceptionView';

function App() {
    return (
        <GlobalStateProvider>
            <div className="App">
                {/* Choose which view to display */}
                <WaiterView />
                {/* <ReceptionView /> */}
            </div>
        </GlobalStateProvider>
    );
}

export default App;
