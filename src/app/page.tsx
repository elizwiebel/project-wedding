import styles from "./page.module.scss";
import TableChecker from "@/components/app/home/TableChecker/TableChecker";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <TableChecker />
            </main>
        </div>
    );
}
