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
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[400px] h-[400px] shadow-lg p-2 border rounded-lg">
        <form
          className="w-full h-full flex flex-col items-center justify-between"
          onSubmit={handleLogin}>
          <h1 className="text-center text-3xl font-bold border-b border-green-400 w-full py-2">
            Login
          </h1>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="p-2 border rounded"
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
              className="p-2 border rounded"
              placeholder="Masukkan Password!"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isPending ? (
            <Button className="w-full" disabled>
              Login
            </Button>
          ) : (
            <Button className="w-full" type="submit">
              Login
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
