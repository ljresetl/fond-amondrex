import styles from './PartnersModal.module.css';
import emailjs from '@emailjs/browser';
import React, { useState, useRef, useEffect } from 'react';

import translations from '../../translations/partnersForm.json';

type Props = {
  onClose: () => void;
  onSuccess: () => void;
  lang: 'UA' | 'EN';
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

const PartnersModal: React.FC<Props> = ({ onClose, onSuccess, lang }) => {
  const t = translations[lang];

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

  const fullNameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cooperationTypeRef = useRef<HTMLInputElement>(null);
  const fundDirectionRef = useRef<HTMLInputElement>(null);
  const proposalRef = useRef<HTMLTextAreaElement>(null);

  const getRefByField = (field: keyof FormData) => {
    switch (field) {
      case 'fullName': return fullNameRef;
      case 'company': return companyRef;
      case 'email': return emailRef;
      case 'cooperationType': return cooperationTypeRef;
      case 'fundDirection': return fundDirectionRef;
      case 'proposal': return proposalRef;
      default: return null;
    }
  };

  const autoResize = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));

    if (name === 'proposal') {
      autoResize(e.target as HTMLTextAreaElement);
    }
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

  const handleSubmit = () => {
    if (!validate()) return;

    setIsSending(true);

    emailjs.send(
      'service_vh68qm5',
      'template_cqhiyc4',
      {
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        cooperationType: formData.cooperationType,
        fundDirection: formData.fundDirection,
        proposal: formData.proposal,
      },
      'KGeilC1yaVW-Z__2Y'
    )
    .then(() => {
      onClose();
      onSuccess();

      setFormData({
        fullName: '',
        company: '',
        email: '',
        cooperationType: '',
        fundDirection: '',
        proposal: '',
      });

      setErrors({});
    })
    .catch((error) => {
      alert(t.errorSend);
      console.error('Email sending error:', error);
    })
    .finally(() => {
      setIsSending(false);
    });
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
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.close} onClick={onClose}>×</button>

          <h2 className={styles.title}>{t.title}</h2>

          <p className={styles.description}>
            {t.description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.label}>
            {t.fullName}
            <input
              ref={fullNameRef}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? styles.errorInput : styles.input}
              placeholder={t.placeholder}
            />
          </label>

          <label className={styles.label}>
            {t.company}
            <input
              ref={companyRef}
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={styles.input}
              placeholder={t.placeholder}
            />
          </label>

          <label className={styles.label}>
            {t.email}
            <input
              ref={emailRef}
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : styles.input}
              placeholder={t.placeholder}
            />
          </label>

          <label className={styles.label}>
            {t.cooperationType}
            <input
              ref={cooperationTypeRef}
              name="cooperationType"
              value={formData.cooperationType}
              onChange={handleChange}
              className={errors.cooperationType ? styles.errorInput : styles.input}
              placeholder={t.placeholder}
            />
          </label>

          <label className={styles.label}>
            {t.fundDirection}
            <input
              ref={fundDirectionRef}
              name="fundition"
              value={formData.fundDirection}
              onChange={handleChange}
              className={styles.input}
              placeholder={t.placeholder}
            />
          </label>

          <label className={styles.label}>
            {t.proposal}
            <textarea
              ref={proposalRef}
              name="proposal"
              value={formData.proposal}
              onChange={handleChange}
              className={styles.textarea}
              placeholder={t.placeholder}
            />
          </label>

          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.submit}
              onClick={handleSubmit}
              disabled={isSending}
            >
              {isSending ? t.sending : t.submit}
            </button>

            <button
              type="button"
              className={styles.clear}
              onClick={handleClear}
            >
              {t.clear}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnersModal;
