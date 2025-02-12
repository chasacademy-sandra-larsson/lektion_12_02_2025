"use client"

import { useForm, SubmitHandler } from "react-hook-form"

//https://react-hook-form.com/get-started#Registerfields


function MyForm() {

const { register, handleSubmit } = useForm<FormInputTypes>();

type FormInputTypes = {
    firstName: string;
    gender: string;
    email: string;
    street: string;
}

const onSubmit: SubmitHandler<FormInputTypes> = (data) => {
    console.log(data);
} 

return (
    <form className="flex flex-col gap-4 border-gray-400 border-2 rounded-md p-12" onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input className="border-2 border-black rounded-md p-2" {...register("firstName")} />
      <label>Gender Selection</label>
      <select  {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <label>Email</label>
      <input className="border-2 border-black rounded-md p-2" {...register("email")} />
      <label>Street</label>
      <input className="border-2 border-black rounded-md p-2" {...register("street")} />
      <input type="submit" />
    </form>
)

}

export default MyForm;

