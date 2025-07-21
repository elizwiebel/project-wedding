"use client";
import { useState } from "react";
import { findTableByName } from "@/components/app/home/TableChecker/find-table-by-name";
import styles from "@/components/app/home/TableChecker/TableChecker.module.scss";

export const TableChecker = () => {
    const [searchName, setSearchName] = useState("");
    const [result, setResult] = useState<string | null>(null);

    function handleSearch() {
        const tableId = findTableByName(searchName);
        setResult(tableId ? `Your table number is: ${tableId}` : "Guest not found");
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
                <button onClick={handleSearch}>Find Table</button>
            </div>
            {result && <div className={styles.result}>{result}</div>}
        </div>
    );
};

export default TableChecker;
