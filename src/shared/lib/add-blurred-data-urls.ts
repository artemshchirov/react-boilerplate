export const addBlurToImageKitUrl = (url: string, blurLevel = 10): string => {
  const urlObject = new URL(url);
  const hasTr = urlObject.searchParams.has("tr");
  if (hasTr) {
    let trParams = urlObject.searchParams.get("tr") || "";
    trParams += `,bl-${blurLevel}`;
    urlObject.searchParams.set("tr", trParams);
  } else {
    urlObject.searchParams.set("tr", `bl-${blurLevel}`);
  }
  return urlObject.toString();
};
