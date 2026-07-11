import { ImageResponse } from "next/og";

export const alt =
  "Salman Sadik Siddiquee, Full-Stack Product Engineer: AI products in production";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const metrics = [
  ["1M+", "articles generated"],
  ["100k+", "users"],
  ["~$390K", "processed"],
  ["1,000+", "students served"],
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#101114",
          color: "#ededeb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 4,
            color: "#8b8d93",
          }}
        >
          <span>SALMAN SADIK SIDDIQUEE</span>
          <span>DHAKA · UTC+6</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.1,
            }}
          >
            Full-stack product engineer
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.1,
              color: "#8b8d93",
            }}
          >
            AI products in production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #33353a",
            paddingTop: 36,
            gap: 56,
          }}
        >
          {metrics.map(([value, label]) => (
            <div
              key={label}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <span style={{ fontSize: 40, fontWeight: 700, color: "#5eead4" }}>
                {value}
              </span>
              <span style={{ fontSize: 20, color: "#8b8d93" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
