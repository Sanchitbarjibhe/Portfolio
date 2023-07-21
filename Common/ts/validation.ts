// React Hook Form Validation
// for reffrence  -> https://react-hook-form.com/get-started

import { alphabets, bothNumericAlphabets, numeric } from '@/Common/utils/Const';



export const useValidation = () => ({
  nullValidation: {
    required: "This field is required",
  },
  emailValidation: {
    required: "This field is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    },
  },
  phoneNumberValidation: {
    required: "This field is required",
    pattern: {
      value: /^[0-9\b]+$/,
      message: "Only numeric values allowed",
    },
    minLength: {
      value: 10,
      message: "Minimum 10 characters required",
    },
    maxLength: {
      value: 10,
      message: "Maximum 10 characters are allowed",
    },
  },
  numberValidation: {
    required: "This field is required",
    pattern: {
      value: /^[0-9]*$/,
      message: "This field accept number only",
    },
  },
  passwordValidation: {
    required: "This field is required",
    minLength: {
      value: 8,
      message: "Minimum 8 characters required",
    },
    pattern: {
      value: /(?=.*[A-Z]).{8,15}/,
      message: "Password must contain at least 1 uppercase letter",
    },
    // commented for future use

    // maxLength: {
    //     value: 15,
    //     message: "Maximum 15 characters are allowed"
    // },
    // pattern: {
    //     value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}/,
    //     message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special characters and 1 number"
    // }
  },
  onlyAlphabetsValidation: {
    required: "This field is required",
    pattern: {
      value: alphabets,
      message: "numeric & Special Character Not Allowed",
    },
  },
  onlyNumericValidation: {
    required: "This field is required",
    pattern: {
      value: numeric,
      message: "special Character Not Allowed",
    },
  },
  onlyAlphabetsNumericValidation: {
    required: "This field is required",
    pattern: {
      value: bothNumericAlphabets,
      message: "special Character Not Allowed",
    },
  },

  textAreaInputValidation: (length: number) => {
    return {
      required: "This field is required",
      minLength: {
        value: length || 100,
        message: `Minimum ${length || 100} characters required`,
      },
    };
  },
});
