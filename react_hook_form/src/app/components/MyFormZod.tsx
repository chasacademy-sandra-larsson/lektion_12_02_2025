"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

//https://react-hook-form.com/get-started#Registerfields
// https://zod.dev/?id=basic-usage

function MyForm() {

  const formSchema = z.object({
    name: z.string().min(2).max(15),
    email: z.string().email(),
    password: z.string().min(8).max(15)
})

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
} = useForm<FormData>({
    resolver: zodResolver(formSchema)
});

// type FormInputTypes = {
//     firstName: string;
//     gender: string;
//     email: string;
//     street: string;
// }

type FormData = z.infer<typeof formSchema>;

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
} 

return (
    <form className="flex flex-col gap-4 border-gray-400 border-2 rounded-md p-12" onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input className="border-2 border-black rounded-md p-2" {...register("name")} />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      <label>Email</label>
      <input className="border-2 border-black rounded-md p-2" {...register("email")} />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      <label>Password</label>
      <input className="border-2 border-black rounded-md p-2" {...register("password")} />
      {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      <input type="submit" />
    </form>
)

}

export default MyForm;

