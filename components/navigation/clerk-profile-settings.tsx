'use client'

import React from 'react';
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";

const ClerkProfileSettings = () => {
    const openProfileModal = () => {
        window.Clerk.openUserProfile();
    }

    return (
        <div>
            <DropdownMenuItem onClick={openProfileModal}>
                Settings
            </DropdownMenuItem>
        </div>
    );
};

export default ClerkProfileSettings;