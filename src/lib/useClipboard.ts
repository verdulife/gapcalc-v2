import { textToClipboard } from "@/lib/utils";

export function createClipboard() {
  let timer: ReturnType<typeof setTimeout> | null = null;

  async function copy(price: string): Promise<boolean> {
    if (timer) clearTimeout(timer);
    const cleanValue = price.replace("€", "").trim();
    const success = await textToClipboard(cleanValue);
    return success;
  }

  function copyAndFlash(price: string, setCopied: (v: boolean) => void, duration = 500) {
    if (timer) clearTimeout(timer);
    copy(price).then((success) => {
      setCopied(success);
      timer = setTimeout(() => setCopied(false), duration);
    });
  }

  return { copy, copyAndFlash };
}