import React from 'react'
import styles from './SupportButton.module.css'

type SupportButtonProps = {
  text?: string
  onClick?: () => void
  className?: string   // ← додаємо
}

const SupportButton: React.FC<SupportButtonProps> = ({ 
  text = 'ПІДТРИМАТИ', 
  onClick,
  className
}) => {
  return (
    <button 
      className={`${styles.supportBtn} ${className || ''}`} 
      type="button" 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SupportButton
