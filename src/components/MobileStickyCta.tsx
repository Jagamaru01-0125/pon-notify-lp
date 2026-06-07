import { BellRing } from "lucide-react";

import { FORM_LINK_PROPS } from "@/constants/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e8cdbb] bg-[#fff9f0]/96 px-4 py-3 shadow-[0_-10px_30px_rgba(109,63,37,0.12)] backdrop-blur sm:hidden">
      <a
        {...FORM_LINK_PROPS}
        className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#6d3f25] px-4 py-3 text-sm font-bold text-white"
      >
        <BellRing className="h-5 w-5" aria-hidden="true" />
        開発通知を受け取る
      </a>
    </div>
  );
}
