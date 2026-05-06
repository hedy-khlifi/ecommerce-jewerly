'use client'

import { useReportWebVitals } from "next/web-vitals";
const LOGwebVitals = (meteric) => {
  console.log(meteric);
};
export function WebVitals() {
    useReportWebVitals(LOGwebVitals)
    return null;
}