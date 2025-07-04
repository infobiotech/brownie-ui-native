export enum BIcons {
  Back = "arrow-left",
  Check = "check",
  CircleStop = "circle-stop",
  Close = "xmark",
  Forward = "arrow-right",
  Gear = "gear",
  History = "clock-rotate-left",
  Home = "house",
  Info = "circle-info",
  Lens = "magnifying-glass",
  Pen = "pen",
  Plus = "plus",
  Reload = "rotate",
  Spinner = "spinner",
  Stop = "stop",
  Warning = "triangle-exclamation",
  Zoom = "magnifying-glass-minus",
}

export function isObjectKey<T extends object>(
  obj: T,
  key: PropertyKey
): key is keyof T {
  return Object.keys(obj).includes(key as string);
}

export function isObjectValue<T extends object>(
  obj: T,
  value: unknown
): value is T[keyof T] {
  return Object.values(obj).includes(value as T[keyof T]);
}
