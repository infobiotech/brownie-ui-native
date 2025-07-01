// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildStyleAuto<T extends Record<string, any>>(
  props: T
): React.CSSProperties {
  return Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(props).filter(([_, v]) => v !== undefined)
  ) as React.CSSProperties;
}
