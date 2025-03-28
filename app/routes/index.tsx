import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function Index() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/users");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return null;
}
