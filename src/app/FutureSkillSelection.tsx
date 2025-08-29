'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Home.module.css';

export default function FutureSkillSelection() {
  const [selectedFutureSkill, setSelectedFutureSkill] = useState('');
  const router = useRouter();

  const handleFutureSkillClick = (skill: string) => {
    setSelectedFutureSkill(skill);
  };

  const handleCircleClick = () => {
    router.push('/summary');
  };

  return (
    <div className={styles.container}>
      <div className={styles.educationFieldTitle}>Skills interested to learn in future?</div>
      <div className={styles.branchTitle}>Enter skills</div>
      <div className={styles.inputLine}></div>
      <div className={styles.circleIcon} onClick={handleCircleClick}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#D9D9D9"/>
        </svg>
      </div>

      <div className={styles.civilEngineering}> {/* Reusing civilEngineering style for SQL */}
        <div
          className={`${styles.branchOption} ${selectedFutureSkill === 'SQL' ? styles.selected : ''}`}
          onClick={() => handleFutureSkillClick('SQL')}
        >
          SQL
        </div>
      </div>
      <div className={styles.electricalEngineering}> {/* Reusing electricalEngineering style for Django */}
        <div
          className={`${styles.branchOption} ${selectedFutureSkill === 'Django' ? styles.selected : ''}`}
          onClick={() => handleFutureSkillClick('Django')}
        >
          Django
        </div>
      </div>
      <div className={styles.computerScience}> {/* Reusing computerScience style for Nodejs */}
        <div
          className={`${styles.branchOption} ${selectedFutureSkill === 'Nodejs' ? styles.selected : ''}`}
          onClick={() => handleFutureSkillClick('Nodejs')}
        >
          Nodejs
        </div>
      </div>
      <div className={styles.mechanicalEngineering}> {/* Reusing mechanicalEngineering style for HTML, CSS, JavaScript */}
        <div
          className={`${styles.branchOption} ${selectedFutureSkill === 'HTML, CSS, JavaScript' ? styles.selected : ''}`}
          onClick={() => handleFutureSkillClick('HTML, CSS, JavaScript')}
        >
          HTML, CSS, JavaScript
        </div>
      </div>

      {selectedFutureSkill && (
        <div className={styles.selectedBranchDisplay}>
          Selected Future Skill: {selectedFutureSkill}
        </div>
      )}
    </div>
  );
}
