import { Route } from "react-router-dom";
import Index from "@/pages/Index";

const PublicRoutes = (
  <>
    <Route path="/" element={<Index />} />
  </>
);

export default PublicRoutes;
