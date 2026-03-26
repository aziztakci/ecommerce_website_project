import { useContext } from "react";
import { getLayoutData } from '../services/layoutService';
import { GlobalContext } from "../contexts/GlobalContext";
import { useQuery } from "@tanstack/react-query";

export const useLayoutData = () => {
  const { lang } = useContext(GlobalContext);
  return useQuery({
    queryKey: ['layout', lang],
    queryFn: getLayoutData,
    select: (data) => data[lang],
  });
};