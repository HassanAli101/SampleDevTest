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

export const VehicleViewImagePopupModal = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const VehicleViewImagePopupBox = {
  position: "relative",
  width: "50%",
  height: "50%",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: 24,
  padding: 3,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const VehicleViewImageGridBox = {
  display: "flex",
  flexWrap: "wrap",
  gap: 2,
  justifyContent: "center",
  alignItems: "center",
};

export const VehicleViewImageGridBox2 = (isMobile: boolean) => ({
  width: isMobile ? 150 : 300,
  height: isMobile ? 150 : 300,
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
});

export const VehicleViewImageGridCloseButton = {
  position: "absolute",
  top: 8,
  right: 8,
  color: "grey.600",
};

export const VehicleViewImagesSectionBox = (
  bgcolor: string,
  mgBottom: number
) => ({
  display: "flex",
  position: "relative",
  width: 150,
  height: 150,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: bgcolor,
  borderRadius: "8px",
  marginBottom: mgBottom,
});

export const VehicleViewImagesSectionBox2 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "14px",
  zIndex: 10,
  opacity: 0,
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 1,
    cursor: "pointer",
  },
};

export const VehicleViewImagesSectionBox3 = (index: number) => ({
  width: 100,
  height: 100,
  objectFit: "cover",
  borderRadius: "8px",
  position: "absolute",
  top: `${index * 10}px`,
  left: `${index * 10}px`,
  transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
  zIndex: 4 - index,
  transition: "all 0.3s ease",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
});
