import { apiAuth } from "~/api/auth-api";
import { useMutation } from "@tanstack/react-query";
import { FormData } from "~/types/auth";

function loginFn(formData: FormData) {
  return apiAuth.post("login", formData);
}

export function useAuth() {
  const mutation = useMutation({
    mutationFn: loginFn,
  });

  return mutation;
}
