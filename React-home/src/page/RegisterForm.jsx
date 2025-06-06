import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice'; // đường dẫn slice
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(4).max(20).required('Bắt buộc'),
  email: Yup.string().email().required('Bắt buộc'),
  password: Yup.string().min(6).required('Bắt buộc'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
    .required('Bắt buộc'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Đăng ký tài khoản</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          dispatch(registerUser({ username: values.username, email: values.email }));
          alert('Đăng ký thành công!');
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Tên người dùng</label>
              <Field name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Mật khẩu</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label>Nhập lại mật khẩu</label>
              <Field name="confirmPassword" type="password" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit">Đăng ký</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
