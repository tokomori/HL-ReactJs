import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/userSlice';

const schema = Yup.object().shape({
  name: Yup.string().required('Bắt buộc'),
  email: Yup.string().email('Email không hợp lệ').required('Bắt buộc'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Form đăng ký</h2>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addUser({ ...values, id: Date.now() }));
          resetForm();
        }}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <label>Tên</label>
              <Field name="name" className="border p-2 w-full rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" className="border p-2 w-full rounded" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
              Thêm người dùng
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
