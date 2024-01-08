import { useEffect, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validateSchema } from "./utils/valitadeSchema";
import { Field } from "./components/field/field";
import "./App.css";

function App() {
    const {
        register,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            passwordCheck: "",
        },
        resolver: yupResolver(validateSchema),
        mode: "onTouched",
    });

    const submitButtonRef = useRef(null);

    useEffect(() => {
        if (isValid) {
            submitButtonRef.current.focus();
        }
    }, [isValid]);

    const onSubmit = ({ email, password, passwordCheck }) => {
        console.log({ email, password, passwordCheck });
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    type="text"
                    placeholder="email"
                    {...register("email")}
                    error={errors.email?.message}
                />
                <Field
                    type="text"
                    placeholder="Пароль"
                    {...register("password")}
                    error={errors.password?.message}
                />
                <Field
                    type="text"
                    placeholder="Повтор пароля"
                    {...register("passwordCheck")}
                    error={errors.passwordCheck?.message}
                />
                <button type="submit" disabled={!isValid} ref={submitButtonRef}>
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default App;
