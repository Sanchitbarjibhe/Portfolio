export const expression =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

export const fileExtesionRegex =
      /([a-zA-Z0-9\s_\\.\-\(\):])+(.jpeg|.jpg|.png|.svg)$/;

export const alphabets = /^[A-Za-z\s]+$/;

export const numeric = /^[0-9]*$/;

export const bothNumericAlphabets = /^[a-z0-9\s]+$/i;

export const allowedFileExtensions = ".pdf,.xlsx,.xls,.doc,.docx,.txt,image/*";
