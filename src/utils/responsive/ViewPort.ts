import { useMediaQuery } from "@mui/material";
export const viewPort = {
    mobile:479,
    tablet:767,
    laptop:1281,
    maxMobile:600
}
export function maxWidth(width:number) {
    return useMediaQuery(`(max-width:${width}px)`)
}

export function minWidth(width:number) {
    return useMediaQuery(`(min-width:${width}px)`)
}
