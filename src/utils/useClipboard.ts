import { useState, useCallback } from 'react';

export function useClipboard(timeoutMs = 2000) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = useCallback(
    (text: string, key: string) => {
      if (!navigator?.clipboard) {
        return;
      }
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedKey(key);
          setTimeout(() => {
            setCopiedKey((curr) => (curr === key ? null : curr));
          }, timeoutMs);
        })
        .catch(() => {
          // Gracefully suppress rejection when clipboard permission is denied
        });
    },
    [timeoutMs]
  );

  return { copiedKey, copy };
}
