import React from 'react'
import styles from './SupportButton.module.css'

type SupportButtonProps = {
  text?: string
  onClick?: () => void
}

const SupportButton: React.FC<SupportButtonProps> = ({ 
  text = 'ПІДТРИМАТИ', 
  onClick 
}) => {
  return (
    <button 
      className={styles.supportBtn} 
      type="button" 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SupportButton
