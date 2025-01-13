export const PageBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(to right, #c8b6ff, #3b82f6, #1e40af)",
  padding: 2,
};

export const FormBoxStyle = (maxWidth: number) => ({
  backgroundColor: "white",
  borderRadius: 2,
  padding: 4,
  boxShadow: 3,
  width: "100%",
  maxWidth: maxWidth,
  textAlign: "center",
});

export const FormSubmitButtonStyle = {
  padding: "8px",
  width: "80%",
  display: "block",
  margin: "0 auto",
};

export const FormTitleStyle = { marginBottom: 1, color: "#1e40af" };

export const SecondaryTextColor = "#9c27b0";