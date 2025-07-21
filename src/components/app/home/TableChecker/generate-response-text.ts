import { findTableByName } from "@/components/app/home/TableChecker/find-table-by-name";

export function generateResponseText(name: string): string {
    const tableId = findTableByName(name);

    if (name === "Steve Kravitsky" || name === "Steven Kravitsky") {
        return "You would search for your own name";
    }

    if (name === "Eli Zwiebel" || name === "Elijah Zwiebel") {
        return "I am the greetest";
    }

    if (name.startsWith("as") || name.startsWith("fd")) {
        return "Spamming eh?";
    }

    if (tableId) {
        return `Your table number is: ${tableId}`;
    }

    return "Guest not found";
}
