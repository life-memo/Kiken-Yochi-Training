import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/lead
 *
 * リード情報を受け取るエンドポイント。
 * 現在は console.log のみ。将来的に以下に差し替え可能：
 *   - Resend / SendGrid でメール送信
 *   - Supabase / PlanetScale にDB保存
 *   - Stripe Customer 作成
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, facility, type } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "メールアドレスは必須です" }, { status: 400 });
    }

    // --- ここを差し替える ---
    // 例: await resend.emails.send({ ... })
    // 例: await db.insert(leads).values({ email, facility, type })
    console.log("[Lead]", { email, facility, type, createdAt: new Date().toISOString() });
    // --- 差し替えここまで ---

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "リクエストの処理に失敗しました" }, { status: 500 });
  }
}
