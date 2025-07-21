import seatingData from "@/data/json/seating-arrangement.json";

export function findTableByName(searchTerm: string) {
    if (!searchTerm) {
        return null;
    }

    for (const table of seatingData.tables) {
        const guest = table.guests.find((g) => g.name.toLowerCase().trim().includes(searchTerm));

        if (guest) {
            return table.id;
        }
    }
    return null;
}
