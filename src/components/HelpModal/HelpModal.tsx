import React, { useEffect } from "react";
import styles from "./HelpModal.module.css";
import { useHelpForm } from "./useHelpForm";

import translations from "../../translations/helpModal.json";

type Props = {
  lang: "UA" | "EN";
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const HelpModal: React.FC<Props> = ({ lang, isOpen, onClose, onSuccess }) => {
  const t = translations[lang];

  const {
    formData,
    errors,
    handleChange,
    validate,
    setFormData,
    setErrors,

    helpTypeRef,
    fullNameRef,
    birthDateRef,
    phoneRef,
    emailRef,
    regionRef,
    cityRef,
    addressRef,
    categoryRef,
    situationRef,
    neededHelpRef,
  } = useHelpForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ❗ Якщо валідація не пройшла — НЕ відправляємо
    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/mjgevnkl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          formType: t.title,
          ...formData,
        }),
      });

      if (!response.ok) {
        console.error("Formspree error:", await response.text());
        return;
      }

      // Закриваємо модалку
      onClose();

      // Показуємо success-повідомлення
      setTimeout(() => onSuccess(), 300);

      // Очищаємо форму
      setFormData({
        helpType: "",
        fullName: "",
        birthDate: "",
        phone: "",
        email: "",
        region: "",
        city: "",
        address: "",
        category: "",
        situation: "",
        neededHelp: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>

          {/* Honeypot */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          {/* Тип допомоги */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.helpType} *</span>
            <select
              name="helpType"
              ref={helpTypeRef}
              className={`${styles.select} ${errors.helpType ? styles.errorInput : ""}`}
              value={formData.helpType}
              onChange={handleChange}
            >
              <option value="">{t.select}</option>
              <option>{t.helpTypes.humanitarian}</option>
              <option>{t.helpTypes.food}</option>
              <option>{t.helpTypes.clothes}</option>
              <option>{t.helpTypes.medicine}</option>
              <option>{t.helpTypes.military}</option>
              <option>{t.helpTypes.other}</option>
            </select>
          </label>

          {/* ПІБ */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.fullName} *</span>
            <input
              name="fullName"
              ref={fullNameRef}
              className={`${styles.input} ${errors.fullName ? styles.errorInput : ""}`}
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t.fullNamePlaceholder}
            />
          </label>

          {/* Дата народження */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.birthDate} *</span>
            <input
              name="birthDate"
              ref={birthDateRef}
              className={`${styles.input} ${errors.birthDate ? styles.errorInput : ""}`}
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </label>

          {/* Телефон */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.phone} *</span>
            <input
              name="phone"
              ref={phoneRef}
              className={`${styles.input} ${errors.phone ? styles.errorInput : ""}`}
              placeholder={t.phonePlaceholder}
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          {/* Email */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.email}</span>
            <input
              name="email"
              ref={emailRef}
              className={styles.input}
              placeholder={t.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          {/* Область */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.region} *</span>
            <input
              name="region"
              ref={regionRef}
              className={`${styles.input} ${errors.region ? styles.errorInput : ""}`}
              value={formData.region}
              onChange={handleChange}
            />
          </label>

          {/* Місто */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.city} *</span>
            <input
              name="city"
              ref={cityRef}
              className={`${styles.input} ${errors.city ? styles.errorInput : ""}`}
              value={formData.city}
              onChange={handleChange}
            />
          </label>

          {/* Адреса */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.address}</span>
            <input
              name="address"
              ref={addressRef}
              className={styles.input}
              value={formData.address}
              onChange={handleChange}
            />
          </label>

          {/* Категорія */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.category} *</span>
            <select
              name="category"
              ref={categoryRef}
              className={`${styles.select} ${errors.category ? styles.errorInput : ""}`}
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">{t.select}</option>
              <option>{t.categories.idp}</option>
              <option>{t.categories.lowIncome}</option>
              <option>{t.categories.largeFamily}</option>
              <option>{t.categories.disabled}</option>
              <option>{t.categories.military}</option>
              <option>{t.categories.other}</option>
            </select>
          </label>

          {/* Ситуація */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.situation} *</span>
            <textarea
              name="situation"
              ref={situationRef}
              className={`${styles.textarea} ${errors.situation ? styles.errorInput : ""}`}
              placeholder={t.situationPlaceholder}
              value={formData.situation}
              onChange={handleChange}
            />
          </label>

          {/* Яка допомога потрібна */}
          <label className={styles.label}>
            <span className={styles.labelText}>{t.neededHelp} *</span>
            <textarea
              name="neededHelp"
              ref={neededHelpRef}
              className={`${styles.textarea} ${errors.neededHelp ? styles.errorInput : ""}`}
              placeholder={t.neededHelpPlaceholder}
              value={formData.neededHelp}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className={styles.submitBtn}>
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpModal;
