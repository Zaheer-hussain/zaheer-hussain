create or replace function public.submit_contact_message(
  p_name text,
  p_email text,
  p_message text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if char_length(coalesce(p_name, '')) < 1 or char_length(p_name) > 100 then
    raise exception 'Invalid name length';
  end if;
  if char_length(coalesce(p_email, '')) < 3 or char_length(p_email) > 255 then
    raise exception 'Invalid email length';
  end if;
  if char_length(coalesce(p_message, '')) < 1 or char_length(p_message) > 2000 then
    raise exception 'Invalid message length';
  end if;

  insert into public.contact_messages (name, email, message)
  values (p_name, p_email, p_message);
end;
$$;

grant execute on function public.submit_contact_message(text, text, text) to anon, authenticated;