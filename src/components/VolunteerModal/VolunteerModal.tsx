import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import type { ChangeEvent, FormEvent } from "react";

import styles from './VolunteerModal.module.css';
import RegionInput from './RegionInput/RegionInput';
import CityInput from "./CityInput/CityInput";
import PhoneInput from "./PhoneInput/PhoneInput";
import emailjs from '@emailjs/browser';
import translations from '../../translations/volunteerForm.json';

type Props = { 
  onClose: () => void; 
  onSuccess: () => void; 
  lang: 'UA' | 'EN'; 
};

type FormData = {
  type: string;
  fullName: string;
  birthDate: string;
  region: string;
  city: string;
  phone: string;
  email: string;
  workplace: string;
  languages: string;
  transport: string;
  experience: string;
  publicSpeaking: string;
  seminarExperience: string;
  interestAreas: string[];
  interestComment: string;
  monthlyHours: string;
  availableDays: string;
  principlesAgreement: string;
  comments: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormData, boolean>>;

const REQUIRED_FIELDS: (keyof FormData)[] = [
  'type',
  'fullName',
  'birthDate',
  'region',
  'city',
  'phone',
  'email',
  'workplace',
  'languages',
  'transport',
  'experience',
  'publicSpeaking',
  'seminarExperience',
  'interestComment',
  'monthlyHours',
  'availableDays',
  'principlesAgreement',
  'consent',
];

const bannedEmailDomains = [
  "mail.ru", "bk.ru", "list.ru", "inbox.ru", "yandex.ru", "ya.ru",
  "rambler.ru", "ro.ru", "pochta.ru", "myrambler.ru", "internet.ru",
  "hotmail.ru", "outlook.ru", "live.ru"
];

const VolunteerModal: React.FC<Props> = ({ onClose, onSuccess, lang }) => {
console.log("LANG:", lang);
console.log("TRANSLATIONS:", translations);
console.log("t:", translations[lang]);

  // 🔥 Переклад — правильне місце
  const t = translations[lang];
console.log("LANG:", lang);
console.log("LANG UPPER:", lang?.toUpperCase());
console.log("TRANSLATIONS:", translations);
console.log("t:", t);

  const [formData, setFormData] = useState<FormData>({
    type: '',
    fullName: '',
    birthDate: '',
    region: '',
    city: '',
    phone: '',
    email: '',
    workplace: '',
    languages: '',
    transport: '',
    experience: '',
    publicSpeaking: '',
    seminarExperience: '',
    interestAreas: [],
    interestComment: '',
    monthlyHours: '',
    availableDays: '',
    principlesAgreement: '',
    comments: '',
    consent: false,
  });


  const [errors, setErrors] = useState<FormErrors>({});

  // Strict refs
  const typeRef = useRef<HTMLSelectElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const regionRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const workplaceRef = useRef<HTMLInputElement>(null);
  const languagesRef = useRef<HTMLInputElement>(null);
  const transportRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLInputElement>(null);
  const publicSpeakingRef = useRef<HTMLInputElement>(null);
  const seminarRef = useRef<HTMLInputElement>(null);
  const interestCommentRef = useRef<HTMLInputElement>(null);
  const monthlyHoursRef = useRef<HTMLInputElement>(null);
  const availableDaysRef = useRef<HTMLInputElement>(null);
  const principlesRef = useRef<HTMLInputElement>(null);
  const commentsRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const getRefByField = (field: keyof FormData) => {
    switch (field) {
      case 'type': return typeRef;
      case 'fullName': return fullNameRef;
      case 'birthDate': return birthDateRef;
      case 'region': return regionRef;
      case 'city': return cityRef;
      case 'phone': return phoneRef;
      case 'email': return emailRef;
      case 'workplace': return workplaceRef;
      case 'languages': return languagesRef;
      case 'transport': return transportRef;
      case 'experience': return experienceRef;
      case 'publicSpeaking': return publicSpeakingRef;
      case 'seminarExperience': return seminarRef;
      case 'interestComment': return interestCommentRef;
      case 'monthlyHours': return monthlyHoursRef;
      case 'availableDays': return availableDaysRef;
      case 'principlesAgreement': return principlesRef;
      case 'comments': return commentsRef;
      case 'consent': return consentRef;
      default: return null;
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2) value = value.slice(0, 2) + "." + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "." + value.slice(5);
    if (value.length > 10) value = value.slice(0, 10);

    setFormData(prev => ({ ...prev, birthDate: value }));
    setErrors(prev => ({ ...prev, birthDate: false }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let valid = true;

    REQUIRED_FIELDS.forEach(field => {
      if (!formData[field].toString().trim()) {
        newErrors[field] = true;
        valid = false;
      }
    });

    const email = formData.email.trim();
    const domain = email.split("@")[1]?.toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = true;
      valid = false;
    }

    if (domain && bannedEmailDomains.includes(domain)) {
      newErrors.email = true;
      valid = false;
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = true;
      valid = false;
    }

    const birthDateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!birthDateRegex.test(formData.birthDate)) {
      newErrors.birthDate = true;
      valid = false;
    }

    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0] as keyof FormData | undefined;

    if (firstError) {
      const ref = getRefByField(firstError);
      ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      ref?.current?.focus();
      return false;
    }

    return valid;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    emailjs.send(
      'service_u7frcyg',
      'template_a0erbo2',
      {
        ...formData,
        interestAreas: formData.interestAreas.join(', '),
        consent: formData.consent ? 'Yes' : 'No'
      },
      'KGeilC1yaVW-Z__2Y'
    );

    onClose();

    setTimeout(() => {
      onSuccess();
    }, 300);

    setFormData({
      type: '',
      fullName: '',
      birthDate: '',
      region: '',
      city: '',
      phone: '',
      email: '',
      workplace: '',
      languages: '',
      transport: '',
      experience: '',
      publicSpeaking: '',
      seminarExperience: '',
      interestAreas: [],
      interestComment: '',
      monthlyHours: '',
      availableDays: '',
      principlesAgreement: '',
      comments: '',
      consent: false,
    });

    setErrors({});
  };

  const handleClear = () => {
    setFormData({
      type: '',
      fullName: '',
      birthDate: '',
      region: '',
      city: '',
      phone: '',
      email: '',
      workplace: '',
      languages: '',
      transport: '',
      experience: '',
      publicSpeaking: '',
      seminarExperience: '',
      interestAreas: [],
      interestComment: '',
      monthlyHours: '',
      availableDays: '',
      principlesAgreement: '',
      comments: '',
      consent: false,
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
  <div className={styles.overlay} onClick={onClose}>
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

<div className={styles.header}>
  <button className={styles.close} onClick={onClose}>×</button>

  <h2 className={styles.title}>{t.title}</h2>

  <p className={styles.description}>
    {t.description}<br />
    <span className={styles.requiredNote}>
      {t.requiredNote}
    </span>
  </p>
</div>


      <form
        className={styles.form}
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >

        {/* 1 */}
       <label className={styles.label}>
  <span className={styles.labelText}>
    {t.typeLabel} <span className={styles.asterisk}>*</span>
  </span>

  <select
    ref={typeRef}
    name="type"
    value={formData.type}
    onChange={handleChange}
    className={errors.type ? styles.errorInput : styles.input}
  >
    <option value="">{t.typePlaceholder}</option>
    <option value={t.typePermanent}>{t.typePermanent}</option>
    <option value={t.typeReserve}>{t.typeReserve}</option>
  </select>
</label>


        {/* 2 */}
      <label className={styles.label}>
  <span className={styles.labelText}>
    {t.fullName} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={fullNameRef}
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    className={errors.fullName ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>

        {/* 3 */}
       <label className={styles.label}>
  <span className={styles.labelText}>
    {t.birthDate} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={birthDateRef}
    name="birthDate"
    value={formData.birthDate}
    onChange={handleBirthDateChange}
    className={errors.birthDate ? styles.errorInput : styles.input}
    placeholder={t.birthPlaceholder}
  />
</label>


        {/* 4 */}
       <label className={styles.label}>
  <span className={styles.labelText}>
    {t.region} <span className={styles.asterisk}>*</span>
  </span>

  <RegionInput
    value={formData.region}
    onChange={(value) =>
      setFormData(prev => ({ ...prev, region: value }))
    }
    error={errors.region}
  />
</label>


        {/* 5 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.city} <span className={styles.asterisk}>*</span>
  </span>

  <CityInput
    value={formData.city}
    onChange={(value: string) =>
      setFormData(prev => ({ ...prev, city: value }))
    }
    error={errors.city}
  />
</label>


        {/* 6 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.phone} <span className={styles.asterisk}>*</span>
  </span>

  <PhoneInput
    value={formData.phone}
    onChange={(value) =>
      setFormData(prev => ({ ...prev, phone: value }))
    }
    error={errors.phone}
  />
</label>



        {/* 7 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.email} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={emailRef}
    name="email"
    value={formData.email}
    onChange={handleChange}
    className={errors.email ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 8 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.workplace} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={workplaceRef}
    name="workplace"
    value={formData.workplace}
    onChange={handleChange}
    className={errors.workplace ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 9 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.languages} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={languagesRef}
    name="languages"
    value={formData.languages}
    onChange={handleChange}
    className={errors.languages ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 10 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.transport} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={transportRef}
    name="transport"
    value={formData.transport}
    onChange={handleChange}
    className={errors.transport ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 11 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.experience} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={experienceRef}
    name="experience"
    value={formData.experience}
    onChange={handleChange}
    className={errors.experience ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 12 */}
      <label className={styles.label}>
  <span className={styles.labelText}>
    {t.publicSpeaking} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={publicSpeakingRef}
    name="publicSpeaking"
    value={formData.publicSpeaking}
    onChange={handleChange}
    className={errors.publicSpeaking ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 13 */}
       <label className={styles.label}>
  <span className={styles.labelText}>
    {t.seminarExperience} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={seminarRef}
    name="seminarExperience"
    value={formData.seminarExperience}
    onChange={handleChange}
    className={errors.seminarExperience ? styles.errorInput : styles.input}
    placeholder={t.seminarPlaceholder}
  />
</label>


        {/* Interest Areas */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.interestAreas}
  </span>

  <div className={styles.checkboxGroup}>
    {t.interestList.map((label) => (
      <label key={label}>
        <input
          type="checkbox"
          value={label}
          checked={formData.interestAreas.includes(label)}
          onChange={(e) => {
            const value = e.target.value;
            setFormData((prev) => ({
              ...prev,
              interestAreas: prev.interestAreas.includes(value)
                ? prev.interestAreas.filter((v) => v !== value)
                : [...prev.interestAreas, value],
            }));
          }}
        />
        {label}
      </label>
    ))}
  </div>
</label>


        {/* 15 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.monthlyHours} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={monthlyHoursRef}
    name="monthlyHours"
    value={formData.monthlyHours}
    onChange={handleChange}
    className={errors.monthlyHours ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 16 */}
       <label className={styles.label}>
  <span className={styles.labelText}>
    {t.availableDays} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={availableDaysRef}
    name="availableDays"
    value={formData.availableDays}
    onChange={handleChange}
    className={errors.availableDays ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 17 */}
       <label className={styles.label}>
  <span className={styles.labelText}>
    {t.principlesAgreement} <span className={styles.asterisk}>*</span>
  </span>

  <div className={styles.checkboxGroup}>
    {t.principlesOptions.map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="principlesAgreement"
          value={option}
          checked={formData.principlesAgreement === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
</label>


        {/* 18 */}
<label className={styles.label}>
  <span className={styles.labelText}>
    {t.comments}
  </span>

  <input
    ref={commentsRef}
    name="comments"
    value={formData.comments}
    onChange={handleChange}
    className={styles.input}
    placeholder={t.placeholder}
  />
</label>


        {/* 19 */}
       <label className={styles.label}>
  <span className={styles.labelText}>
    {t.consent} <span className={styles.asterisk}>*</span>
  </span>

  <div className={styles.checkboxGroup}>
    <label>
      <input
        type="checkbox"
        name="consent"
        checked={formData.consent}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, consent: e.target.checked }))
        }
      />
      {t.consentText}
    </label>
  </div>

  {errors.consent && (
    <div className={styles.errorInput}>{t.consentError}</div>
  )}
</label>

        {/* Interest comment */}
      <label className={styles.label}>
  <span className={styles.labelText}>
    {t.interestComment} <span className={styles.asterisk}>*</span>
  </span>

  <input
    ref={interestCommentRef}
    name="interestComment"
    value={formData.interestComment}
    onChange={handleChange}
    className={errors.interestComment ? styles.errorInput : styles.input}
    placeholder={t.placeholder}
  />
</label>


        <div className={styles.buttons}>
  <button
    type="button"
    className={styles.submit}
    onClick={handleSubmit}
  >
    {t.submit}
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

export default VolunteerModal;

