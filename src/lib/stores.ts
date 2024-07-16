
import { writable } from "svelte/store";
import { papers, prints, plotters, tshirts } from "@/lib/consts";

export const Papers = writable(papers);
export const Prints = writable(prints);
export const Plotters = writable(plotters);
export const Tshirts = writable(tshirts);

