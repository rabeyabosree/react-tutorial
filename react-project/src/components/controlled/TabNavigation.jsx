import React, { useState } from 'react'

function TabNavigation() {
    const [activeTab, setActiveTab] = useState("tab 1")

    // controlled inputs
    const [tab1Input, setTab1Input] = useState("")
    const [tab2Input, setTab2Input] = useState("")
    const [tab3Input, setTab3Input] = useState("")

    const tabBtn = ["tab 1", "tab2", "tab3"]

    return (
        <>
            {/* Tab Buttons */}
            <div className="space-x-2">
                {tabBtn.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`p-4 border border-gray-400 rounded 
                            ${activeTab === tab ? "bg-gray-300" : "bg-white"}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                <input
                    type="text"
                    value={
                        activeTab === "tab 1"
                            ? tab1Input
                            : activeTab === "tab2"
                            ? tab2Input
                            : tab3Input
                    }
                    placeholder="Type here"
                    onChange={(e) => {
                        if (activeTab === "tab 1") {
                            setTab1Input(e.target.value)
                        } else if (activeTab === "tab2") {
                            setTab2Input(e.target.value)
                        } else if (activeTab === "tab3") {
                            setTab3Input(e.target.value)
                        }
                    }}
                    className="border p-2 rounded w-full"
                />

                {/* Typed value preview */}
                <p className="mt-2 text-gray-700">
                    Typed Value:{" "}
                    <span className="font-semibold">
                        {activeTab === "tab 1"
                            ? tab1Input
                            : activeTab === "tab2"
                            ? tab2Input
                            : tab3Input}
                    </span>
                </p>
            </div>
        </>
    )
}

export default TabNavigation
