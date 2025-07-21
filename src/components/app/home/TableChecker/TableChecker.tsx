"use client";
import { useState } from "react";
import { generateResponseText } from "@/components/app/home/TableChecker/generate-response-text";
import styles from "@/components/app/home/TableChecker/TableChecker.module.scss";

export const TableChecker = () => {
    const [searchName, setSearchName] = useState("");
    const [searchResult, setSearchResult] = useState<string | null>(null);

    function setResponseText() {
        const responseText = generateResponseText(searchName);
        setSearchResult(responseText);
    }

    return (
        <div className={styles.tableChecker}>
            <h2>Find Your Table</h2>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    placeholder="Enter your name"
                />
                <button onClick={setResponseText}>Find Table</button>
            </div>
            {searchResult && <div className={styles.result}>{searchResult}</div>}
        </div>
    );
};

export default TableChecker;
