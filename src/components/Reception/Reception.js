import React, { useState, useEffect } from 'react';
import './Reception.css';
import { database } from '../../firebase/firebaseConfig';
import Table from '../Table/Table';

const Reception = () => {
    const [tables, setTables] = useState({});

    useEffect(() => {
        const tablesRef = database.ref('tables');
        tablesRef.on('value', (snapshot) => {
            setTables(snapshot.val());
        });
    }, []);

    return (
        <div className="reception">
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

export default Reception;
