import { ImageResponse } from "next/og";

export const alt = "Yash Sharma, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0E1A2B",
          color: "#ffffff",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 92, fontWeight: 800 }}>Yashraj Dhungana</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#9FB3FF" }}>
          Full-Stack Developer
        </div>
        <div style={{ fontSize: 28, marginTop: 36, color: "#B8C2D3" }}>
          Next.js, TypeScript, Node.js, PostgreSQL
        </div>
      </div>
    ),
    size
  );
}
