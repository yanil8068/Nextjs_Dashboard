import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/settings.module.css";
import Link from "next/link";

const Settings: React.FC = () => {
  const [showName, setShowName] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const showNameSetting = localStorage.getItem("showName");
    if (showNameSetting !== null) {
      setShowName(JSON.parse(showNameSetting));
    }
  }, []);

  const handleToggle = () => {
    const newShowName = !showName;
    setShowName(newShowName);
    localStorage.setItem("showName", JSON.stringify(newShowName));
  };

  return (
    <div className={styles.settingsContainer}>
      <h1 className={styles.settingsTitle}>Settings</h1>
      <label className={styles.settingsLabel}>
        Show Name
        <input
          type="checkbox"
          className={styles.settingsCheckbox}
          checked={showName}
          onChange={handleToggle}
        />
      </label>
      <button
        className={styles.settingsButton}
        onClick={() => router.push("/dashboard")}
      >
        Go to Dashboard
      </button>
      <h5>
        <Link href="/">Go to Home</Link>
      </h5>
    </div>
  );
};

export default Settings;
