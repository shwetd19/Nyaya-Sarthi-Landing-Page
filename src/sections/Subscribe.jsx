/** @format */
import { useFormik } from 'formik';
import Button from '../components/Button';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Subscribe = () => {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <section className="padding-x sm:py-32 py-16 w-full">
      <div className="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
          Try our service now!
          <br />
          <span className="text-coral-red">Astra</span> DCFM
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full bg-none">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="astradcfm@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="input bg-none bg-inherit focus:outline-none focus:border-coral-red"
          />
          {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button fullWidth onSubmit={formik.handleSubmit}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
