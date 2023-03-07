import { useFormik } from "formik";
import React from "react";
import { addUserValidation } from "../validation";
const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = ({ visible, onClose }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: addUserValidation,
      onSubmit: (values , action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 z-10  backdrop-blur-sm flex justify-center items-start">
        <div className="bg-white mt-40 p-2 w-1/2 rounded">
          <div
            onClick={onClose}
            className="float-right clear-both cursor-pointer "
          >
            X
          </div>
          <div className="text-center text-xl">Add User</div>

          <form onSubmit={handleSubmit}>
            <div className=" grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="mr-2">
                  Name
                </label>
                <input
                  className=" px-2 border border-black rounded"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="username" className="mr-2">
                  User Name
                </label>
                <input
                  className=" px-2 border border-black rounded"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="User Name"
                  autoComplete="off"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username ? (
                  <p className="text-red-500">{errors.username}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="mr-2">
                  Email
                </label>
                <input
                  className=" px-2 border border-black rounded"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone" className="mr-2">
                  Phone Number
                </label>
                <input
                  className=" px-2 border border-black rounded"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  autoComplete="off"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone ? (
                  <p className="text-red-500">{errors.phone}</p>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="bg-black  text-white w-full py-1 my-5"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
