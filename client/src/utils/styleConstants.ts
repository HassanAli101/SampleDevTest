import { CSSProperties } from "react";

//colors:
export const AppBackground =
  "linear-gradient(to right, #c8b6ff, #3b82f6, #1e40af)";

export const FormTitleStyle = { marginBottom: 1, color: "#1e40af" };

export const SecondaryTextColor = "#9c27b0";

export const DeleteIconColor = "#ef476f";

//component styles:
export const PageBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: AppBackground,
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

export const AddImagesButtonStyle = (width: string) => ({
  marginTop: "16px",
  padding: "8px 16px",
  fontSize: "16px",
  width: `clamp(150px, ${width}, 400px)`,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const ImagePreviewBoxStyle = (isSmallScreen: boolean) => ({
  display: "grid",
  gridTemplateColumns: isSmallScreen
    ? "1fr"
    : "repeat(auto-fill, minmax(120px, 1fr))",
  gap: 2,
  justifyContent: "center",
});

export const ImageDeleteIconStyle: CSSProperties = {
  position: "absolute",
  top: "0",
  right: "0",
  padding: "2px",
  borderRadius: "20px",
  backgroundColor: DeleteIconColor,
};

export const ImagePreviewStyle: CSSProperties = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  margin: "4px",
  transition: "transform 0.3s ease",
};
