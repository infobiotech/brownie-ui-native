export declare enum BIcons {
    Home = "house",
    Gear = "gear",
    Pen = "pen",
    History = "clock-rotate-left",
    Plus = "plus",
    Back = "arrow-left",
    Forward = "arrow-right",
    Warning = "triangle-exclamation",
    Check = "check",
    Close = "xmark",
    Info = "circle-info",
    CircleStop = "circle-stop",
    Stop = "stop",
    Reload = "rotate",
    Spinner = "spinner",
    Zoom = "magnifying-glass-minus"
}
export declare function isObjectKey<T extends object>(obj: T, key: PropertyKey): key is keyof T;
export declare function isObjectValue<T extends object>(obj: T, value: unknown): value is T[keyof T];
