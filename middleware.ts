import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // middleware-hybridルートでのみ実行
  if (pathname.startsWith("/middleware-hybrid")) {
    // 既に並列ルートのパスにアクセスしている場合は何もしない
    if (pathname.includes("/@desktop") || pathname.includes("/@mobile")) {
      return NextResponse.next();
    }

    const userAgent = request.headers.get("user-agent") || "";

    // モバイルデバイスの判定
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );

    // デバイスタイプの決定
    const deviceType = isMobile ? "mobile" : "desktop";

    // 適切な並列ルートにリライト
    const url = request.nextUrl.clone();

    // /middleware-hybrid の部分を /middleware-hybrid/@deviceType に置き換え
    if (pathname === "/middleware-hybrid" || pathname === "/middleware-hybrid/") {
      url.pathname = `/middleware-hybrid/@${deviceType}`;
    } else {
      url.pathname = `/middleware-hybrid/@${deviceType}${pathname.replace("/middleware-hybrid", "")}`;
    }

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // middleware-hybridルートのみに適用
    "/middleware-hybrid/:path*",
  ],
};
