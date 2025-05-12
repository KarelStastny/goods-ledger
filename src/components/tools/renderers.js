export const renderers = {
  tooltip: (value, maxLength = 5) => {
    if (typeof value !== "string") return null;

    const isTooLong = value.length > maxLength;
    const displayText = isTooLong ? value.slice(0, maxLength) + "…" : value;

    return <span title={value}>{displayText}</span>;
  }
};
