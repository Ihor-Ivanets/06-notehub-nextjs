import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

import { fetchNotes } from "../../lib/api";

import NotesClient from "./Notes.client";

async function NotesPage() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["notes", "", 1],
    queryFn: () => fetchNotes("", 1),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}

export default NotesPage;
