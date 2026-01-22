"use client";

import React, { createContext, useContext, useState } from "react";
import DemoModal from "@/components/modals/DemoModal";

interface ModalContextType {
    isDemoModalOpen: boolean;
    openDemoModal: () => void;
    closeDemoModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const openDemoModal = () => setIsDemoModalOpen(true);
    const closeDemoModal = () => setIsDemoModalOpen(false);

    return (
        <ModalContext.Provider value={{ isDemoModalOpen, openDemoModal, closeDemoModal }}>
            {children}
            <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
