import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import styles from './VolunteerModal.module.css';

type Props = {
  onClose: () => void;
};

type FormData = {
  type: 'Постійне волонтерство' | 'Резерв' | '';
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
    principlesAgreement: 'Так' | 'Ні' | 'Не знайомий(а)' | '';
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

const VolunteerModal: React.FC<Props> = ({ onClose }) => {
const [formData, setFormData] = useState<FormData>({ type: '', fullName: '', birthDate: '', region: '', city: '', phone: '', email: '', workplace: '', languages: '', transport: '', experience: '', publicSpeaking: '', seminarExperience: '', interestAreas: [], interestComment: '', monthlyHours: '', availableDays: '', principlesAgreement: '', comments: '', consent: false, });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

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
        default: return null;
        case 'principlesAgreement': return principlesRef;
        case 'monthlyHours': return monthlyHoursRef;
        case 'availableDays': return availableDaysRef;
        case 'comments': return commentsRef;
        case 'consent': return consentRef;
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    REQUIRED_FIELDS.forEach(field => {
      if (!formData[field].toString().trim()) {
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

    setSuccessMessage('Дякуємо! Ваша заявка волонтера надіслана.');

setFormData({ type: '', fullName: '', birthDate: '', region: '', city: '', phone: '', email: '', workplace: '', languages: '', transport: '', experience: '', publicSpeaking: '', seminarExperience: '', interestAreas: [], interestComment: '', monthlyHours: '', availableDays: '', principlesAgreement: '', comments: '', consent: false, });

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
        <h2 className={styles.title}>Анкета волонтера у Фонд "Амондрекс"</h2>

        <p className={styles.description}>
          Ваша участь — це один крок до перемоги.<br />
          <span className={styles.requiredNote}>
            Зірочка (*) вказує, що запитання обов'язкове.
          </span>
        </p>
      </div>

      {successMessage && (
        <div className={styles.successMessage}>{successMessage}</div>
      )}

      <form
        className={styles.form}
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >

        {/* 1 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            1. Формат участі <span className={styles.asterisk}>*</span>
          </span>

          <select
            ref={typeRef}
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={errors.type ? styles.errorInput : styles.input}
          >
            <option value="">Оберіть варіант</option>
            <option value="Постійне волонтерство">Постійне волонтерство</option>
            <option value="Резерв">Резерв</option>
          </select>
        </label>

        {/* 2 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            2. Прізвище та ім’я <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={fullNameRef}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 3 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            3. Дата народження <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={birthDateRef}
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className={errors.birthDate ? styles.errorInput : styles.input}
            placeholder="ДД.ММ.РРРР"
          />
        </label>

        {/* 4 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            4. Область <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={regionRef}
            name="region"
            value={formData.region}
            onChange={handleChange}
            className={errors.region ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 5 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            5. Місто <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={cityRef}
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={errors.city ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 6 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            6. Телефон <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={phoneRef}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? styles.errorInput : styles.input}
            placeholder="+380..."
          />
        </label>

        {/* 7 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            7. Електронна пошта <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={emailRef}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 8 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            8. Місце роботи/навчання <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={workplaceRef}
            name="workplace"
            value={formData.workplace}
            onChange={handleChange}
            className={errors.workplace ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 9 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            9. Володіння іноземними мовами <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={languagesRef}
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            className={errors.languages ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 10 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            10. Чи є у Вас автотранспорт та права? <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={transportRef}
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            className={errors.transport ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 11 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            11. Досвід волонтерської діяльності <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={experienceRef}
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={errors.experience ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 12 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            12. Досвід публічних виступів <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={publicSpeakingRef}
            name="publicSpeaking"
            value={formData.publicSpeaking}
            onChange={handleChange}
            className={errors.publicSpeaking ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 13 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            13. Досвід проведення семінарів/тренінгів <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={seminarRef}
            name="seminarExperience"
            value={formData.seminarExperience}
            onChange={handleChange}
            className={errors.seminarExperience ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь або 'Резерв'"
          />
        </label>

        {/* Interest Areas */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            Сфери Вашого інтересу (можна обрати декілька):
          </span>

          <div className={styles.checkboxGroup}>
            {[
              'Підготовка до надзвичайних ситуацій',
              'Перша допомога',
              'Здоровий спосіб життя',
              'Догляд за людьми похилого віку',
              'Робота з дітьми',
              'Психологічна підтримка',
              'Освітні програми для молоді',
              'Міжнародне гуманітарне право',
              'Екологічний напрямок',
              'Адміністративно-господарська робота',
              'Розподіл гуманітарної допомоги',
              'Фандрейзинг',
              'Онлайн-волонтерство',
              'Клуби Активного Довголіття',
              'Інше',
            ].map((label) => (
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
            15. Скільки годин на місяць Ви можете приділяти волонтерській діяльності? <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={monthlyHoursRef}
            name="monthlyHours"
            value={formData.monthlyHours}
            onChange={handleChange}
            className={errors.monthlyHours ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 16 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            16. Які дні найбільш зручні для Вашої волонтерської діяльності? <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={availableDaysRef}
            name="availableDays"
            value={formData.availableDays}
            onChange={handleChange}
            className={errors.availableDays ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 17 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            17. Чи готові Ви дотримуватися Основоположних принципів Міжнародного Руху? <span className={styles.asterisk}>*</span>
          </span>

          <div className={styles.checkboxGroup}>
            {['Так', 'Ні', 'Не знайомий(а)'].map((option) => (
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
            18. Ваші коментарі та побажання
          </span>

          <input
            ref={commentsRef}
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        {/* 19 */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            19. Згода на обробку персональних даних <span className={styles.asterisk}>*</span>
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
              Я даю згоду на обробку персональних даних
            </label>
          </div>

          {errors.consent && (
            <div className={styles.errorInput}>Потрібна згода</div>
          )}
        </label>

        {/* Interest comment */}
        <label className={styles.label}>
          <span className={styles.labelText}>
            Коментар до сфери інтересів <span className={styles.asterisk}>*</span>
          </span>

          <input
            ref={interestCommentRef}
            name="interestComment"
            value={formData.interestComment}
            onChange={handleChange}
            className={errors.interestComment ? styles.errorInput : styles.input}
            placeholder="Ваша відповідь"
          />
        </label>

        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.submit}
            onClick={handleSubmit}
          >
            НАДІСЛАТИ
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

export default VolunteerModal;