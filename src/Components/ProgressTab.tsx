
import React from "react";

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