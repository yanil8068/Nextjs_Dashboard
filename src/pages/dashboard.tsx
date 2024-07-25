import React, { useState, useEffect } from "react";
import Chart from "@/components/Chart";
import DataTable from "@/components/DataTable";
import Statistics from "@/components/Statistics";
import styles from "@/styles/dashboard.module.css";
import Link from "next/link";

const Dashboard: React.FC = () => {
  const [showName, setShowName] = useState<boolean>(true);
  const [person, setPerson] = useState<{ name: string }>({
    name: "Best Dashboard",
  });

  useEffect(() => {
    const showNameSetting = localStorage.getItem("showName");
    if (showNameSetting !== null) {
      setShowName(JSON.parse(showNameSetting));
    }
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>
      <h5 className={styles.subtitle}>
        {showName ? `Name of the app: ${person.name}` : ``}
      </h5>

      <div className={styles.widgets}>
        <div className={styles.widget}>
          <Chart />
        </div>
        <div className={styles.widget}>
          <DataTable />
        </div>
        <div className={styles.widget}>
          <Statistics />
        </div>
      </div>
      <h4>
        <Link href="/">Go to Home</Link>
      </h4>
    </div>
  );
};

export default Dashboard;
