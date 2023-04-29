import { NextResponse } from "next/server";

import product from "@/products.json";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const productData = product.filter((p) =>
    p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
  );
    return NextResponse.json(productData);
}