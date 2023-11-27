import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { useAuth } from "~/api/auth/use-auth";
import { FormData } from "~/types/auth";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isPending, mutate } = useAuth();

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData: FormData = { email, password };

    mutate(formData, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.data.token);
        navigate("/admin/dashboard");
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center px-2">
      <div className="w-full md:w-[700px] h-[400px] flex bg-gray-100 shadow-2xl rounded-3xl">
        <section className="form w-full md:w-[350px] h-full p-4">
          <form
            className="w-full h-full flex flex-col items-center justify-between"
            onSubmit={handleLogin}
          >
            <h1 className="text-center text-3xl font-bold w-full py-2">
              Login
            </h1>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email" className="text-xl font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="p-2 bg-gray-300 border rounded"
                placeholder="Masukkan email anda!"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email" className="text-xl font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="p-2 bg-gray-300 border rounded"
                placeholder="Masukkan Password!"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p>Forgot Your Password?</p>
            {isPending ? (
              <Button className="px-4" disabled>
                LOGIN
              </Button>
            ) : (
              <Button className="px-4" type="submit">
                LOGIN
              </Button>
            )}
          </form>
        </section>
        <section className="hero-login hidden md:inline w-[350px] h-full">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-primary text-white rounded-l-[150px] rounded-r-3xl">
            <h2 className="text-center text-4xl font-bold">Hi, Admin!</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              corporis!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
