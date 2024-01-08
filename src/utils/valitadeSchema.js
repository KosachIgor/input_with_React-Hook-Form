import * as yup from "yup";

export const validateSchema = yup.object().shape({
    email: yup.string().required("Введите email").email("Email введен неверно"),
    password: yup
        .string()
        .required("Введите пароль")
        .min(6, "Минимальное количество символов 6")
        .matches(/^\S+$/, "Пароль содержит недопустимые символы")
        .matches(/[a-zA-Z]+/, "Пароль содержит недопустимые символы")
        .matches(/[0-9]+/, "Пароль содержит недопустимые символы")
        .matches(/\W+/, "Пароль содержит недопустимые символы"),
    passwordCheck: yup
        .string()
        .required("Повторите пароль")
        .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});
