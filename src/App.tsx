export default function MaintenancePage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        color: "#333",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "40px", marginBottom: "15px" }}>
          🛠️ المتجر تحت الصيانة
        </h1>

        <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.8" }}>
          نعتذر عن الإزعاج، المتجر غير متاح حاليًا بسبب أعمال الصيانة والتطوير.
          <br />
          سنعود للعمل في أقرب وقت ممكن.
        </p>

        <p style={{ marginTop: "25px", color: "#999", fontSize: "15px" }}>
          شكرًا لتفهمكم وصبركم ❤️
        </p>
      </div>
    </div>
  );
}
