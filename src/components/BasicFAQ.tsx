"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Chat component that appears when the accordion is open.
const ChatComponent = () => {
    return (
        <div className="flex flex-col h-full p-4 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">AI Chat</h2>
            <div className="flex-1 overflow-y-auto bg-gray-100 p-4 rounded">
                {/* Replace this placeholder with your actual chat conversation */}
                <p className="text-gray-700">Chat conversation will appear here...</p>
            </div>
            <input
                type="text"
                placeholder="Type your message..."
                className="mt-4 w-full border rounded p-2"
            />
        </div>
    );
};

// Wallet info component that appears when the accordion is closed.
const WalletInfo = () => {
    return (
        <div className="flex flex-col h-full p-4 bg-white shadow-md rounded">
            <div className="mb-4">
                <h2 className="text-xl font-bold">Balance</h2>
                <p className="text-2xl">$10,000</p>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2">Transactions</h2>
                <ul className="list-disc pl-5">
                    <li>Transaction 1</li>
                    <li>Transaction 2</li>
                    <li>Transaction 3</li>
                </ul>
            </div>
        </div>
    );
};

const BasicFAQ = () => {
    // 'open' determines whether the chat view is visible (true) or the wallet info (false)
    const [open, setOpen] = useState(false);

    return (
        // This container takes up the entire viewport.
        <div className="w-screen h-screen flex flex-col bg-gray-50">
            {/* Header: always visible */}
            <header className="p-4">
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full"
                >
                    <span className="text-xl font-bold text-black">
                        {'<HAIN>'}
                    </span>
                    <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl text-gray-800"
                    >
                        <FiChevronDown />
                    </motion.span>
                </button>
            </header>

            {/* Main content area that takes up the remaining space */}
            <main className="flex-1 p-4 overflow-hidden">
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <ChatComponent />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="wallet"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <WalletInfo />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default BasicFAQ;