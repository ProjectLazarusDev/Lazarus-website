
import React from "react";
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

interface Progress
{
    total: Number;
    current: Number;
}

export const ProgressTab: React.FC<Progress> =
    ({ total, current }: Progress) =>
    {
        
        return (
            <>
            <div>
            
            </div>
            </>
        );
    }

export default ProgressTab;