drop policy if exists "Anyone can submit a contact message" on public.contact_messages;

create policy "Public can submit contact messages"
  on public.contact_messages
  as permissive
  for insert
  to public
  with check (
    char_length(name) between 1 and 100
    and char_length(email) between 3 and 255
    and char_length(message) between 1 and 2000
  );

grant insert on public.contact_messages to anon, authenticated;