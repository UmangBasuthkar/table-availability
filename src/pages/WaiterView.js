import React, { useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import { database } from '../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

const WaiterView = () => {
    const [tables, setTables] = useState({});

    useEffect(() => {
        const tablesRef = ref(database, 'tables');
        
        // Set up a real-time listener
        const unsubscribe = onValue(tablesRef, (snapshot) => {
            if (snapshot.exists()) {
                setTables(snapshot.val());
            } else {
                setTables({});
            }
        });

        // Cleanup the listener on unmount
        return () => unsubscribe();
    }, []);

    return (
        <div className="waiter-view">
            {Object.keys(tables).map((tableId) => (
                <Table 
                    key={tableId} 
                    tableId={tableId} 
                    status={tables[tableId].status} 
                />
            ))}
        </div>
    );
};

export default WaiterView;
