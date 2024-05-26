// components/AdminPanel.js
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@material-ui/core';
import IngredientPanel from "./Ingredient/IngredientPanel";
import UserPanel from "./Users/UserPanel";

const AdminPanel = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <Tabs value={tabIndex} onChange={handleChange}>
                <Tab label="Ingredients" />
                <Tab label="Users" />
            </Tabs>
            <Box hidden={tabIndex !== 0}>
                <IngredientPanel />
            </Box>
            <Box hidden={tabIndex !== 1}>
                <UserPanel />
            </Box>
        </div>
    );
};

export default AdminPanel;