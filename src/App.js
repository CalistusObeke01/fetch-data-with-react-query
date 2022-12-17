import { QueryClient, QueryClientProvider } from "react-query";
import Comments from "./Comment";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Comments />
    </QueryClientProvider>
  );
}
