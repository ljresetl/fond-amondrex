import emailjs from 'emailjs-com';
import type { VolunteerFormData } from './types';

const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const sendVolunteerForm = async (data: VolunteerFormData) => {
  const templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    city: data.city || '-',
    motivation: data.motivation || '-',
    experience: data.experience || '-',
  };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
