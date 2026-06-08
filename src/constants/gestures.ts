import { imageAssets } from "@/constants/assets";

export const gestures = [
  {
    motion: "走ってくる",
    label: "帰るよ",
    description: "走ってくるしぐさに、帰宅や到着の意味を込められます。",
    icon: "🐕",
    image: imageAssets.dogRunning,
    tone: "bg-[#fff0e6] text-[#8a4c2c]",
  },
  {
    motion: "しっぽを振る",
    label: "大丈夫",
    description: "安心していることや元気な気持ちを、しっぽの動きで伝えます。",
    icon: "🐶",
    image: imageAssets.dogWagTail,
    tone: "bg-[#e9f6ef] text-[#315f52]",
  },
  {
    motion: "前足でちょんちょん",
    label: "見て",
    description: "ちょっと見てほしい、気づいてほしい気持ちに使えます。",
    icon: "🐾",
    image: imageAssets.dogTapPaw,
    tone: "bg-[#fff6d8] text-[#7a5a16]",
  },
  {
    motion: "首をかしげる",
    label: "大丈夫？",
    description: "相手を気にかける確認を、強すぎないしぐさで届けます。",
    icon: "？",
    image: imageAssets.dogTiltHead,
    tone: "bg-[#edf2ff] text-[#42598a]",
  },
  {
    motion: "ハートをくわえる",
    label: "思い出した",
    description: "ふと思い出した気持ちや小さな愛情を、言葉にしすぎず届けます。",
    icon: "💗",
    image: imageAssets.dogCarryingHeart,
    tone: "bg-[#ffeaf0] text-[#9b4d66]",
  },
  {
    motion: "丸まって休む",
    label: "今日は疲れた",
    description: "疲れた日や静かにしていたい気持ちを、そっと共有できます。",
    icon: "☁️",
    image: imageAssets.dogSleeping,
    tone: "bg-[#f1eee9] text-[#6c5d53]",
  },
] as const;
