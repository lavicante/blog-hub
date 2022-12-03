import { Profile, ValidationErrors } from '../../types/profile';

export const validationFormData = (formData?: Profile): ValidationErrors[] => {
  const errors: ValidationErrors[] = [];
  if (!formData) {
    errors.push(ValidationErrors.SERVER_ERROR);
    return errors;
  }

  const { username, age, city, firstname, lastname } = formData;

  if (!firstname?.trim() || !lastname?.trim()) {
    errors.push(ValidationErrors.INCORECT_USER_DATA);
  }

  if (!username?.trim()) {
    errors.push(ValidationErrors.INCORECT_USER_NAME);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidationErrors.INCORECT_AGE);
  }

  if (!city?.trim() || city?.trim().length < 3) {
    errors.push(ValidationErrors.INCORECT_CITY);
  }

  return errors;
};
