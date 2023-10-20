import React, { useState } from 'react';
import { Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';

const ExpandableButton = () => {
  const [expanded, setExpanded] = useState(false);
  const handlePanelChange = () => {
    setExpanded(!expanded);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out!');
    // Redirect to logout page or perform other logout actions
  };

  

  return (
    <div style={{ padding: '0px' }}>
      <Accordion expanded={expanded} onChange={handlePanelChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Button color="primary"></Button>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout <LogoutIcon style={{ marginLeft: '1px' }} />
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ExpandableButton;