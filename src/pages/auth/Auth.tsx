import { Tab, Tabs } from "@mui/material"
import React, { useState } from "react";

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Auth = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  return (
    <div>
       <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
    </div>
  )
}

export default Auth
