import { NextMiddleware, NextRequest, NextResponse } from "next/server";

export const middleware: NextMiddleware = async (req: NextRequest) => {
  let res = NextResponse.redirect("https://deliverio.cz");

  const out: Record<string, string> = {};
  req.cookies.getAll().forEach((item) => {
    out[item.name] = item.value;

    if (
      item.name.startsWith("accessToken") ||
      item.name.startsWith("refreshToken") ||
      item.name.startsWith("userData")
    ) {
      res.cookies.delete(item.name);
    }
  });

  console.log(`[${new Date().toISOString()}]`, JSON.stringify(out));
  return res;
};
