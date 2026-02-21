import { useState, useRef } from "react";

export type FormData = {
  helpType: string;
  fullName: string;
  birthDate: string;
  phone: string;
  email: string;
  region: string;
  city: string;
  address: string;
  category: string;
  situation: string;
  neededHelp: string;
};

export type FormErrors = Partial<Record<keyof FormData, boolean>>;

const REQUIRED_FIELDS: (keyof FormData)[] = [
  "helpType",
  "fullName",
  "birthDate",
  "phone",
  "region",
  "city",
  "category",
  "situation",
  "neededHelp",
];

export const useHelpForm = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const [errors, setErrors] = useState<FormErrors>({});

  // refs
  const helpTypeRef = useRef<HTMLSelectElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const regionRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const situationRef = useRef<HTMLTextAreaElement>(null);
  const neededHelpRef = useRef<HTMLTextAreaElement>(null);

  const getRefByField = (field: keyof FormData) => {
    switch (field) {
      case "helpType": return helpTypeRef;
      case "fullName": return fullNameRef;
      case "birthDate": return birthDateRef;
      case "phone": return phoneRef;
      case "email": return emailRef;
      case "region": return regionRef;
      case "city": return cityRef;
      case "address": return addressRef;
      case "category": return categoryRef;
      case "situation": return situationRef;
      case "neededHelp": return neededHelpRef;
      default: return null;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: false }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    let valid = true;

    REQUIRED_FIELDS.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
        valid = false;
      }
    });

    // const phoneRegex = /^\+380\d{9}$/;
    // if (!phoneRegex.test(formData.phone)) {
    //   newErrors.phone = true;
    //   valid = false;
    // }

    setErrors(newErrors);

    const firstError = Object.keys(newErrors)[0] as keyof FormData | undefined;
    if (firstError) {
      const ref = getRefByField(firstError);
      ref?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      ref?.current?.focus();
    }

    return valid;
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    validate,

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
  };
};
