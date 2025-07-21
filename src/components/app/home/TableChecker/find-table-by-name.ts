import seatingData from "@/data/json/seating-arrangement.json";

export function findTableByName(name: string) {
    const searchTerm = name.toLowerCase().trim();

    for (const table of seatingData.tables) {
        const guest = table.guests.find((g) => g.name.toLowerCase().includes(searchTerm));
        if (guest) {
            return table.id;
        }
    }
    return null;
}
