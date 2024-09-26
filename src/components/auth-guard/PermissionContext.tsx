import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getMyPermissions } from '../../services/ServiceService';


// Create the context with an initial value of undefined
const PermissionsContext = createContext<Permissions | undefined>(undefined);

// Define the type for the provider props
interface PermissionsProviderProps {
    children: ReactNode;
}

export const PermissionsProvider: React.FC<PermissionsProviderProps> = ({ children }) => {
    const [permissions, setPermissions] = useState<any>([]);

    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                const response = await getMyPermissions();
                setPermissions(response.data);
            } catch (error) {
                console.error('Error fetching permissions:', error);
            }
        };

        fetchPermissions();
    }, []);

    return (
        <PermissionsContext.Provider value={permissions}>
            {children}
        </PermissionsContext.Provider>
    );
};

export const usePermissions = (): any => {
    const context = useContext(PermissionsContext);
    if (!context) {
        throw new Error('usePermissions must be used within a PermissionsProvider');
    }
    return context;
};
