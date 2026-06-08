import { imageAssets } from "@/constants/assets";

export const gestures = [
  {
    motion: "走ってくる",
    label: "帰るよ",
    description: "帰る、着いた、向かっている。そんな合図に。",
    icon: "🐕",
    image: imageAssets.dogRunning,
    tone: "bg-[#fff0e6] text-[#8a4c2c]",
  },
  {
    motion: "しっぽを振る",
    label: "大丈夫",
    description: "元気だよ、安心してね、を軽く伝えるしぐさ。",
    icon: "🐶",
    image: imageAssets.dogWagTail,
    tone: "bg-[#e9f6ef] text-[#315f52]",
  },
  {
    motion: "前足でちょんちょん",
    label: "見て",
    description: "ちょっと見て、気づいて、をやさしく知らせる。",
    icon: "🐾",
    image: imageAssets.dogTapPaw,
    tone: "bg-[#fff6d8] text-[#7a5a16]",
  },
  {
    motion: "首をかしげる",
    label: "大丈夫？",
    description: "気にしているよ、を強すぎずに届ける。",
    icon: "？",
    image: imageAssets.dogTiltHead,
    tone: "bg-[#edf2ff] text-[#42598a]",
  },
  {
    motion: "ハートをくわえる",
    label: "思い出した",
    description: "ふと思い出した気持ちを、短くあたたかく。",
    icon: "💗",
    image: imageAssets.dogCarryingHeart,
    tone: "bg-[#ffeaf0] text-[#9b4d66]",
  },
  {
    motion: "丸まって休む",
    label: "今日は疲れた",
    description: "少し休みたい日も、言葉にしすぎず共有。",
    icon: "☁️",
    image: imageAssets.dogSleeping,
    tone: "bg-[#f1eee9] text-[#6c5d53]",
  },
] as const;
