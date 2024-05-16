import { useState } from 'react';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // Effect to handle form submission
  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        // Perform actual form submission logic here (e.g., API call)
        // For demo purpose, just set submitSuccess to true after 1 second
        setTimeout(() => {
          setSubmitSuccess(true);
          setIsSubmitting(false);
        }, 1000);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting]);

  // Reset form values and state
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
    setSubmitSuccess(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
    resetForm
  };
};

export default useForm;
