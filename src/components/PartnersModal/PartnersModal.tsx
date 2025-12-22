
import styles from './PartnersModal.module.css';
import emailjs from '@emailjs/browser';
import React, { useState, useRef, useEffect } from 'react';

type Props = {
  onClose: () => void;
};

type FormData = {
  fullName: string;
  company: string;
  email: string;
  cooperationType: string;
  fundDirection: string;
  proposal: string;
};

type FormErrors = Partial<Record<keyof FormData, boolean>>;

const REQUIRED_FIELDS: (keyof FormData)[] = [
  'fullName',
  'email',
  'cooperationType',
];

const PartnersModal: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    cooperationType: '',
    fundDirection: '',
    proposal: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Рефи для input
  const inputRefs = {
    fullName: useRef<HTMLInputElement>(null),
    company: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    cooperationType: useRef<HTMLInputElement>(null),
    fundDirection: useRef<HTMLInputElement>(null),
  };

  // Реф для textarea
  const proposalRef = useRef<HTMLTextAreaElement>(null);

  const getRefByField = (field: keyof FormData) => {
    if (field === 'proposal') return proposalRef;
    return inputRefs[field as keyof typeof inputRefs];
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    REQUIRED_FIELDS.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0] as keyof FormData | undefined;

    if (firstError) {
      const ref = getRefByField(firstError);
      ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      ref?.current?.focus();
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSending(true);

    try {
      await emailjs.send(
        'service_vh68qm5', // ← твій service_id
        'template_cqhiyc4', // ← твій template_id
        {
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          cooperationType: formData.cooperationType,
          fundDirection: formData.fundDirection,
          proposal: formData.proposal,
        },
        'KGeilC1yaVW-Z__2Y' // ← твій public_key
      );

      setSuccessMessage('Форму успішно надіслано! Ми зв’яжемося з вами найближчим часом.');

      setFormData({
        fullName: '',
        company: '',
        email: '',
        cooperationType: '',
        fundDirection: '',
        proposal: '',
      });

      setErrors({});
    } catch (error) {
      alert('Помилка при надсиланні форми.');
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleClear = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      cooperationType: '',
      fundDirection: '',
      proposal: '',
    });
    setErrors({});
    };
    
    useEffect(() => {
  document.body.classList.add('modal-open');
  return () => {
    document.body.classList.remove('modal-open');
  };
}, []);


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
            <button className={styles.close} onClick={onClose}>×</button>
    
            <h2 className={styles.title}>Запропонувати співпрацю</h2>
            <p className={styles.description}>
              Щоб запропонувати партнерство, будь ласка, заповніть форму нижче.<br />
              Ми сконтактуємо протягом кількох робочих днів.
            </p>
        </div>

        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}

        <form className={styles.form} onSubmit={e => e.preventDefault()}>
          <label className={styles.label}>
            Прізвище та ім’я *
            <input
              ref={inputRefs.fullName}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? styles.errorInput : styles.input}
              placeholder="Ваша відповідь"
            />
          </label>

          <label className={styles.label}>
            Найменування юридичної особи (компанії)
            <input
              ref={inputRefs.company}
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ваша відповідь"
            />
          </label>

          <label className={styles.label}>
            Електронна пошта *
            <input
              ref={inputRefs.email}
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : styles.input}
              placeholder="Ваша відповідь"
            />
          </label>

          <label className={styles.label}>
            Вид співпраці *
            <input
              ref={inputRefs.cooperationType}
              name="cooperationType"
              value={formData.cooperationType}
              onChange={handleChange}
              className={errors.cooperationType ? styles.errorInput : styles.input}
              placeholder="Ваша відповідь"
            />
          </label>

          <label className={styles.label}>
            Напрям фонду
            <input
              ref={inputRefs.fundDirection}
              name="fundDirection"
              value={formData.fundDirection}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ваша відповідь"
            />
          </label>

          <label className={styles.label}>
            Пропозиція
            <textarea
              ref={proposalRef}
              name="proposal"
              value={formData.proposal}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Ваша відповідь"
            />
          </label>

          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.submit}
              onClick={handleSubmit}
              disabled={isSending}
            >
              {isSending ? 'Надсилання...' : 'НАДІСЛАТИ'}
            </button>

            <button
              type="button"
              className={styles.clear}
              onClick={handleClear}
            >
              ОЧИСТИТИ ФОРМУ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnersModal;
