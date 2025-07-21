import { findTableByName } from "@/components/app/home/TableChecker/find-table-by-name";

export function generateResponseText(name: string): string {
    const searchTerm = name.toLowerCase().trim();
    const tableId = findTableByName(searchTerm);

    if (searchTerm === "") {
        return "Please enter your name";
    }

    if (searchTerm === "steve kravitsky" || searchTerm === "steven kravitsky") {
        return "You would search for your own name";
    }

    if (searchTerm == "eli zwiebel" || searchTerm == "elijah zwiebel") {
        return "I am the greetest";
    }

    if (searchTerm.startsWith("as") || searchTerm.startsWith("fd")) {
        return "Spamming eh?";
    }

    if (tableId) {
        return `Your table number is: ${tableId}`;
    }

    return "Guest not found";
}
