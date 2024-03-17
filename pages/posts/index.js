import Link from "next/link";

import Layout from "../../components/main-layout.js";

import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

// Main Component
export default function Home() {
    return (
        <Layout pageID={"welcome"}>

            <p> blogs go here </p>

        </Layout>
    );
}
