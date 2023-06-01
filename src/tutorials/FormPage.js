import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const FormPage = () => {
  
  const schema = yup.object().shape({
    name: yup.string().required("Name required Nigga"),
    email: yup.string().email().required("Guy put your correct Email Nah"),
    age: yup.number().positive().min(18).required("How Far Show, Put your Age"),
    password: yup.string().min(6).max(20).required("Put a good Password Between 6 to 20 character"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("Guy the one no be the same tin with the above password")
  })
  
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });



  const submitData = (data) => {
    alert(data.name)
  }

  return (
    <div className=" form ">
      <form onSubmit={handleSubmit(submitData)}>

        <input
          className="col-auto m-2"
          type="text"
          placeholder="Name.."
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <input
          className="col-3 m-2"
          type="email"
          placeholder="email..."
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <input
          className="col-3 m-2"
          type="number"
          placeholder="Age..."
          {...register("age")}
        />
        <p>{errors.age?.message}</p>


        <input
          className="col-3 m-2"
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <input
          className="col-3 m-2"
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        <input className="btn btn-primary m-2" type="submit" />
      </form>
    </div>
  );
};

export default FormPage;
