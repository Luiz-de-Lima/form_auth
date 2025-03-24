import React from "react";
import { Input } from "../../components/Input";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import estilos from "./estilos.module.css";
import Title from "@/components/Title/Title";

export const LoginPage = () => {
  const router = useRouter();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email inválido")
      .required("O campo email é obrigatório"),
    password: Yup.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("O campo senha é obrigatória"),
  });
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    values ? console.log(values) : console.log("ruim");
    if (values.email === "teste@teste.com" && values.password === "teste123") {
      localStorage.setItem("autenticado", "true");
      router.push("/dashboard");
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form className={estilos.form}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={estilos.input}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={estilos.error}
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={estilos.input}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={estilos.error}
            />
            <button type="submit" className={estilos.button}>
              {isSubmitting ? "Enviando..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
