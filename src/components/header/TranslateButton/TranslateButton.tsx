import React from 'react'
import styles from './TranslateButton.module.css'
import globeIcon from '../../../../public/Vector.svg'

type TranslateButtonProps = {
  onClick?: () => void
}

const TranslateButton: React.FC<TranslateButtonProps> = ({ onClick }) => {
  return (
    <button 
      className={styles.translateBtn} 
      type="button" 
      aria-label="Змінити мову" 
      onClick={onClick}
    >
      <img src={globeIcon} alt="" aria-hidden="true" />
    </button>
  )
}

export default TranslateButton
