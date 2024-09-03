import React, { useState, useEffect } from 'react';
import './Table.css';
import { ref, set, onValue } from 'firebase/database';
import { database } from '../../firebase/firebaseConfig';

const Table = ({ tableId }) => {
    const [status, setStatus] = useState('available'); // Default status is 'available'

    // Fetch the current status from the database when the component mounts
    useEffect(() => {
        const tableRef = ref(database, `tables/${tableId}`);
        
        // Use onValue to listen for real-time updates
        const unsubscribe = onValue(tableRef, (snapshot) => {
            if (snapshot.exists()) {
                setStatus(snapshot.val().status);
            }
        });

        // Cleanup the subscription on unmount
        return () => unsubscribe();
    }, [tableId]);

    const handleClick = () => {
        const newStatus = status === 'available' ? 'occupied' : 'available';
        
        // Update the status in the database
        const tableRef = ref(database, `tables/${tableId}`);
        set(tableRef, { status: newStatus });
    };

    return (
        <div style={{ padding: '40px' }}
            className={`table ${status}`} 
            onClick={handleClick}
        >
            {tableId} : {status}
        </div>
    );
};

export default Table;
