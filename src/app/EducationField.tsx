'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Home.module.css';

export default function EducationField() {
  const [selectedBranch, setSelectedBranch] = useState('');
  const router = useRouter();

  const handleBranchClick = (branch: string) => {
    setSelectedBranch(branch);
  };

  const handleCircleClick = () => {
    router.push('/semester');
  };

  return (
    <div className={styles.container}>
      <div className={styles.educationFieldTitle}>Enter Your Current Education Field</div>
      <div className={styles.branchTitle}>Enter Your Branch</div>
      <div className={styles.inputLine}></div>
      <div className={styles.circleIcon} onClick={handleCircleClick}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#D9D9D9"/>
        </svg>
      </div>

      <div className={styles.civilEngineering}>
        <div
          className={`${styles.branchOption} ${selectedBranch === 'Civil Engineering' ? styles.selected : ''}`}
          onClick={() => handleBranchClick('Civil Engineering')}
        >
          Civil Engineering
        </div>
      </div>
      <div className={styles.electricalEngineering}>
        <div
          className={`${styles.branchOption} ${selectedBranch === 'Electrical Engineering' ? styles.selected : ''}`}
          onClick={() => handleBranchClick('Electrical Engineering')}
        >
          Electrical Engineering
        </div>
      </div>
      <div className={styles.computerScience}>
        <div
          className={`${styles.branchOption} ${selectedBranch === 'Computer Science and Engineering' ? styles.selected : ''}`}
          onClick={() => handleBranchClick('Computer Science and Engineering')}
        >
          Computer Science and Engineering
        </div>
      </div>
      <div className={styles.mechanicalEngineering}>
        <div
          className={`${styles.branchOption} ${selectedBranch === 'Mechanical Engineering' ? styles.selected : ''}`}
          onClick={() => handleBranchClick('Mechanical Engineering')}
        >
          Mechanical Engineering
        </div>
      </div>

      {selectedBranch && (
        <div className={styles.selectedBranchDisplay}>
          Selected Branch: {selectedBranch}
        </div>
      )}
    </div>
  );
}
