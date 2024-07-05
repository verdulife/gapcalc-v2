
import { writable } from "svelte/store";
import { papers, prints, plotters } from "@/lib/consts";

export const Papers = writable(papers);
export const Prints = writable(prints);
export const Plotters = writable(plotters);

