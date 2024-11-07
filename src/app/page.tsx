import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const out: Record<string, string> = {};

  cookieStore.getAll().forEach((item) => {
    out[item.name] = item.value;

    if (
      item.name.startsWith("access") ||
      item.name.startsWith("refresh") ||
      item.name.startsWith("user")
    ) {
      cookieStore.delete(item.name);
    }
  });

  console.log("[" + new Date().toISOString() + "]", JSON.stringify(out));
  return redirect("https://deliverio.cz");
}
